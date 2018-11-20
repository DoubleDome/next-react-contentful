const path = require('path');

// Patterns
const COMPONENTS_GLOB_PATTERN = './**/*.component.js';
const IGNORE_REG_EXP = /.*\/\/\s*build-ignore-line\s?/g;

// Directories - source
const SOURCE_COMPONENTS_ROOT_DIR = path.join(__dirname, '../src/components');
const SOURCE_SCSS_FILES_ROOT_DIR = path.join(__dirname, '../src/styles');
const SOURCE_DMP_DEPENDENCIES_DIR = path.join(__dirname, '../dmp');

// Directories - target
const { BUILD_DIR = path.join(__dirname, '../dmp-dist') } = process.env;
const GEN2_BUILD_DIR = path.join(BUILD_DIR, '/gen2/');

const TARGET_GEN2_SRC_BUILD_DIR = `${GEN2_BUILD_DIR}/src/`;
const TARGET_COMPONENTS_ROOT_DIR = `${TARGET_GEN2_SRC_BUILD_DIR}/components`;

const TARGET_GEN2_DMP_BUILD_DIR = `${GEN2_BUILD_DIR}/dmp/`;
const TARGET_DMP_DEPENDENCIES_DIR = `${TARGET_GEN2_DMP_BUILD_DIR}`;

// Brand Theme - generated component
const BRAND_THEME_COMPONENT_NAME = 'G2BrandTheme';
const TARGET_BRAND_THEME_DIR = `${TARGET_GEN2_DMP_BUILD_DIR}/components/${BRAND_THEME_COMPONENT_NAME}`;
const TARGET_STYLES_DIR = `${TARGET_BRAND_THEME_DIR}/themes`;

// Next.js - Files
const SOURCE_NEXT_DIR = path.join(__dirname, '../next');

// Directories and files to copy over

const SRC_TO_COPY = [
  {
    SOURCE: path.join(__dirname, '../src/config'),
    TARGET: `${TARGET_GEN2_SRC_BUILD_DIR}/config`,
  },
  {
    SOURCE: path.join(__dirname, '../src/initializers'),
    TARGET: `${TARGET_GEN2_SRC_BUILD_DIR}/initializers`,
  },
  {
    SOURCE: path.join(__dirname, '../src/shared'),
    TARGET: `${TARGET_GEN2_SRC_BUILD_DIR}/shared`,
  },
  {
    SOURCE: path.join(__dirname, '../src/stores'),
    TARGET: `${TARGET_GEN2_SRC_BUILD_DIR}/stores`,
  },
  {
    SOURCE: path.join(__dirname, '../src/services'),
    TARGET: `${TARGET_GEN2_SRC_BUILD_DIR}/services`,
  },
  {
    SOURCE: path.join(__dirname, '../src/utils'),
    TARGET: `${TARGET_GEN2_SRC_BUILD_DIR}/utils`,
  },
  {
    SOURCE: path.join(__dirname, '../src/init.js'),
    TARGET: `${TARGET_GEN2_SRC_BUILD_DIR}/init.js`,
  },
  {
    SOURCE: path.join(__dirname, '../src/polyfills.js'),
    TARGET: `${TARGET_GEN2_SRC_BUILD_DIR}/polyfills.js`,
  },
  {
    SOURCE: TARGET_STYLES_DIR,
    TARGET: `${TARGET_GEN2_SRC_BUILD_DIR}/themes`,
  },
  {
    SOURCE: SOURCE_NEXT_DIR,
    TARGET: TARGET_GEN2_SRC_BUILD_DIR,
  },
];

// Other

const COMMENT = 'This file is maintained by storybook, not to be modified';
const THEMES = [
  'aria',
  'beauRivage',
  'bellagio',
  'cabana',
  'cclv',
  'delano',
  'detroit',
  'excalibur',
  'goldStrike',
  'luxor',
  'mandalayBay',
  'mgmGrand',
  'mgmResorts',
  'mirage',
  'nationalHarbor',
  'nyny',
  'parkMgm',
  'signature',
  'springfield',
  'vdara',
];

module.exports = {
  BUILD_DIR,
  GEN2_BUILD_DIR,

  COMPONENTS_GLOB_PATTERN,
  IGNORE_REG_EXP,

  SOURCE_COMPONENTS_ROOT_DIR,
  SOURCE_SCSS_FILES_ROOT_DIR,
  SOURCE_DMP_DEPENDENCIES_DIR,

  TARGET_COMPONENTS_ROOT_DIR,

  TARGET_BRAND_THEME_DIR,
  TARGET_STYLES_DIR,
  TARGET_DMP_DEPENDENCIES_DIR,

  SRC_TO_COPY,
  SOURCE_NEXT_DIR,

  BRAND_THEME_COMPONENT_NAME,
  THEMES,
  COMMENT,
};
