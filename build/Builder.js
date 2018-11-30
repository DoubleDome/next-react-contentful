/* eslint-disable import/no-extraneous-dependencies */
const glob = require('glob');
const rimraf = require('rimraf');
const fse = require('fs-extra');

const AbstractBuilder = require('./AbstractBuilder.js');
const Component = require('./Component.js');
const BrandThemeComponentBuilder = require('./builders/BrandThemeComponentBuilder.js');

const ComponentBuilder = require('./builders/ComponentBuilder.js');
const ComponentListBuilder = require('../next/build/ComponentListBuilder');

class Builder extends AbstractBuilder {
  constructor(config) {
    super(config);
    this.brandThemeComponent = null;
    this.brandThemeComponentBuilder = new BrandThemeComponentBuilder(config);
    this.componentBuilder = new ComponentBuilder(config);
    this.listBuilder = new ComponentListBuilder();
  }

  removeOldBuild() {
    rimraf.sync(this.config.GEN2_BUILD_DIR);
  }

  findComponents() {
    const files = this.findComponentFiles(
      this.config.SOURCE_COMPONENTS_ROOT_DIR,
    );

    files.forEach(file => {
      const component = Component.fromPath(file);

      if (component.getName() === 'BrandTheme') {
        this.brandThemeComponent = component;
      }

      this.components.push(component);
    });

    return this.components;
  }

  findG2Components() {
    const files = this.findComponentFiles(
      `${this.config.SOURCE_DMP_DEPENDENCIES_DIR}/components`,
    );
    const g2Components = [];

    files.forEach(file => {
      const component = Component.fromPath(file);
      g2Components.push(component);
    });

    return g2Components;
  }

  syncWithContentful() {
    const allComponents = [].concat(this.findG2Components(), this.components);
    const list = allComponents.map(component => component.getName());
    this.listBuilder.pull().then(() => {
      this.listBuilder.sync(list);
    });
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

  findComponentFiles(path) {
    return glob.sync(this.config.COMPONENTS_GLOB_PATTERN, {
      cwd: path,
      absolute: true,
    });
  }
}

module.exports = Builder;
