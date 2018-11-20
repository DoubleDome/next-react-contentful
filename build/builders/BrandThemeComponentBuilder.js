/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const sass = require('node-sass');
const path = require('path');

const AbstractBuilder = require('../AbstractBuilder.js');

class BrandThemeComponentBuilder extends AbstractBuilder {
  getTargetDir() {
    return this.config.TARGET_BRAND_THEME_DIR;
  }

  static getComponentScssFile(component) {
    const componentDir = component.getDir();
    const componentName = component.getName();

    const scssFilePath = path.join(componentDir, `${componentName}.scss`);
    return fs.existsSync(scssFilePath) ? scssFilePath : null;
  }

  getComponentsScssFiles() {
    const files = [];

    this.components.forEach(component => {
      const scssFilePath = BrandThemeComponentBuilder.getComponentScssFile(
        component,
      );
      if (scssFilePath) {
        files.push(scssFilePath);
      }
    });

    return files;
  }

  createStylesTargetDir() {
    const stylesTargetDir = this.config.TARGET_STYLES_DIR;

    AbstractBuilder.createDir(stylesTargetDir);
  }

  createComponentFile() {
    let parsedContent = this.brandThemeComponent.getParsedContent({
      lineIgnoreRegExp: this.config.IGNORE_REG_EXP,
    });
    parsedContent = this.addComment('// ', '\n', parsedContent);
    const targetPath = path.join(
      this.getTargetDir(),
      `${this.config.BRAND_THEME_COMPONENT_NAME}.component.js`,
    );

    fs.writeFileSync(targetPath, parsedContent);
  }

  saveThemeCssFile(theme, themeCss) {
    const stylesTargetDir = this.config.TARGET_STYLES_DIR;
    const targetfullPath = path.join(stylesTargetDir, `${theme}.css`);

    fs.writeFileSync(targetfullPath, themeCss);
  }

  static renderThemeCss(scssData) {
    return sass.renderSync({
      data: scssData,
    });
  }

  buildBrandThemeComponent() {
    const targetDir = this.getTargetDir();
    AbstractBuilder.createDir(targetDir);

    this.createComponentFile();
  }

  buildStyles() {
    this.config.THEMES.forEach(theme => {
      this.buildThemeStyles(theme);
    });
  }

  build(brandThemeComponent, components) {
    this.brandThemeComponent = brandThemeComponent;
    this.components = components;

    this.buildBrandThemeComponent();
    this.buildStyles();
  }

  static buildThemeScssData(scssFiles) {
    return scssFiles.map(sassPath => `@import "${sassPath}";`).join('\n');
  }

  normalizeScssImportPaths(paths) {
    return paths.map(file => {
      if (path.sep === '\\') {
        return path.posix.basename(file).replace(/\\/g, '/');
      }

      return file;
    });
  }

  buildThemeStyles(theme) {
    const commonScssFiles = [
      path.join(
        this.config.SOURCE_SCSS_FILES_ROOT_DIR,
        `/themes/${theme}/_variables.scss`,
      ),
      path.join(this.config.SOURCE_SCSS_FILES_ROOT_DIR, '/base.dmp.scss'),
      path.join(this.config.SOURCE_SCSS_FILES_ROOT_DIR, '/shared/_mixins.scss'),
    ];

    const componentsScssFiles = this.getComponentsScssFiles();
    const scssFiles = commonScssFiles.concat(componentsScssFiles);

    const normalizedScssImportPaths = this.normalizeScssImportPaths(scssFiles);
    const scssData = BrandThemeComponentBuilder.buildThemeScssData(
      normalizedScssImportPaths,
    );
    const themeCss = BrandThemeComponentBuilder.renderThemeCss(scssData);

    this.createStylesTargetDir();
    this.saveThemeCssFile(theme, themeCss.css);
  }
}

module.exports = BrandThemeComponentBuilder;
