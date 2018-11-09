/* eslint-disable import/no-extraneous-dependencies */
const mkdirp = require('mkdirp');

class AbstractBuilder {
  constructor(config) {
    this.config = config;
    this.components = [];
  }

  addComment(prefix, suffix, content) {
    const comment = this.config.COMMENT;

    return `${prefix}${comment}${suffix}${content}`;
  }

  static createDir(path) {
    mkdirp.sync(path);
  }
}

module.exports = AbstractBuilder;
