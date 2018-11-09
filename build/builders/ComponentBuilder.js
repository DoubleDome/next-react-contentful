/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const path = require('path');

const AbstractBuilder = require('../AbstractBuilder.js');

class ComponentBuilder extends AbstractBuilder {
  getComponentTargetPath(component) {
    return component
      .getPath()
      .replace(
        this.config.SOURCE_COMPONENTS_ROOT_DIR,
        this.config.TARGET_COMPONENTS_ROOT_DIR,
      );
  }

  getComponentTargetDir(component) {
    const targetPath = this.getComponentTargetPath(component);

    return path.dirname(targetPath);
  }

  createComponentFile(component) {
    let parsedContent = component.getParsedContent({
      lineIgnoreRegExp: this.config.IGNORE_REG_EXP,
    });
    parsedContent = this.addComment('// ', '\n', parsedContent);
    const targetPath = this.getComponentTargetPath(component);

    fs.writeFileSync(targetPath, parsedContent);
  }

  build(component) {
    const targetDir = this.getComponentTargetDir(component);
    AbstractBuilder.createDir(targetDir);

    this.createComponentFile(component);
  }
}

module.exports = ComponentBuilder;
