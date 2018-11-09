/* eslint-disable import/no-extraneous-dependencies */
const glob = require('glob');
const rimraf = require('rimraf');
const fse = require('fs-extra');

const AbstractBuilder = require('./AbstractBuilder.js');
const Component = require('./Component.js');
const BrandThemeComponentBuilder = require('./builders/BrandThemeComponentBuilder.js');

const ComponentBuilder = require('./builders/ComponentBuilder.js');

class Builder extends AbstractBuilder {
  constructor(config) {
    super(config);
    this.brandThemeComponent = null;
    this.brandThemeComponentBuilder = new BrandThemeComponentBuilder(config);
    this.componentBuilder = new ComponentBuilder(config);
  }

  removeOldBuild() {
    rimraf.sync(this.config.GEN2_BUILD_DIR);
  }

  findComponents() {
    const files = this.findComponentsFiles();

    files.forEach(file => {
      const component = Component.fromPath(file);

      if (component.getName() === 'BrandTheme') {
        this.brandThemeComponent = component;
      }

      this.components.push(component);
    });

    return this.components;
  }

  buildBrandThemeComponent() {
    this.brandThemeComponentBuilder.build(
      this.brandThemeComponent,
      this.components,
    );
  }

  buildComponents() {
    this.components.forEach(component => {
      this.componentBuilder.build(component);
    });
  }

  copySrc() {
    this.config.SRC_TO_COPY.forEach(({ SOURCE, TARGET }) => {
      fse.copySync(SOURCE, TARGET);
    });
  }

  moveDmpDependencies() {
    fse.copySync(
      this.config.SOURCE_DMP_DEPENDENCIES_DIR,
      this.config.TARGET_DMP_DEPENDENCIES_DIR,
    );
  }

  findComponentsFiles() {
    return glob.sync(this.config.COMPONENTS_GLOB_PATTERN, {
      cwd: this.config.SOURCE_COMPONENTS_ROOT_DIR,
      absolute: true,
    });
  }
}

module.exports = Builder;
