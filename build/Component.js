const fs = require('fs');
const path = require('path');

class Component {
  constructor(name, filePath, content) {
    this.path = filePath;
    this.name = name;
    this.content = content;
  }

  static fromPath(filePath) {
    const nameRegExp = /.*\/(.*)?\//g;
    const name = nameRegExp.exec(filePath)[1];
    const content = fs.readFileSync(filePath, { encoding: 'utf8' });

    return new this(name, filePath, content);
  }

  getDir() {
    return path.dirname(this.path);
  }

  getName() {
    return this.name;
  }

  getPath() {
    return this.path;
  }

  getParsedContent({ lineIgnoreRegExp }) {
    return this.content.replace(lineIgnoreRegExp, '');
  }
}

module.exports = Component;
