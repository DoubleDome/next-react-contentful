# Build process

## Why

> Describe why are we creating this intermediate step between development and fe-react build, whats improved compared to legacy solution etc.

## Build script

This document aims to explain how exactly our build script works.

The script is located in `./build` directory and contains:
  - `index.js` - script's entry point
  - `Builder.js` - the main class, responsible for running specific builders that creates and moves files. There are three builders right now:
      - BrandThemeComponentBuilder
      - ChunkBuilder
      - ComponentBuilder
  - `Component.js` - our component model, contains path, content, stateful or stateless and external or shared indicatiors.
  - `config.js` -  configuration for the script.

As our script contains multiple steps, let's split these according to rules defined in `index.js` file.

### Steps:

0. Initialize: `npm run dmp:build`
1. Remove old build
2. Look for components
3. Build components and copy chunks
4. Build styles


### 0. Initialize

To run or build these components you need `node 8+` installed. Check [here](https://nodejs.org/en/docs/) how to do this on your platform.

You also need to have all dependencies installed, so if you did not do it yet, install them by running following command in `mgm-storybook` root directory:

```
yarn
```

Then, you can start building by running our `dmp:build` script:

```
npm run dmp:build
```

This command will run script defined in `./build/index.js` file.

### 1. Removing old (previous) build

First of all, we are removing all files (marked by our comment) from the previous build. The build directory is defined in `./build/config.js` file and as default, it is set and exported as below:

```javascript=
...
const {
  BUILD_DIR = path.join(__dirname, "../../dmp-dist"),
} = process.env;
const COMMENT = "This file is maintained by storybook, not to be modified";

module.exports = {
  ...
  BUILD_DIR,
  COMMENT,
  ...
};
```

It points to the `dmp-dist` in the root directory, but can be changed also in `.env` file.

### 2. Look for components

The next step is to look for all components files. We use the `glob` library and a regular expression pattern to find all necessary files - it is defined in `./build/config.js` file as `COMPONENTS_GLOB_PATTERN` and it looks like this:

```javascript=
module.exports = {
  ...
  COMPONENTS_GLOB_PATTERN: "src/components/**/**.js",
  ...
};
```

Each component file is loaded by the **Builder** service and kept for further use during next steps.

### 3. Build components and copy chunks

This is the main step in our build process/script. The **Builder** iterates over every found component and goes through several steps:
  - It parses the content of a component and cuts off each line marked with `// build-ignore-line` comment. This way we eliminate imports from local `.scss` files, not used in production.
  - Then, it saves parsed content in a new component directory, defined in the `./build/config.js` file as `BUILD_DIR`. That new path respects if that component is stateful or stateless and if it is external or shared (to comply with current dmp repository conventions).
  - Next step handles `clientlib` and `ssr` chunks. They should be placed in components directory and should have correct filename including `.clientlib-chunk.js` or `.ssr-chunk.js` signature.

All component partials are treated the same way as standalone components.

### 4. Build styles

The last part of our build process is to generate `css` files from `scss` sources. This step starts with iteration over all themes defined in `./build/config.js` file as `THEMES` array. This is because we produce only one `css` file for a theme.
The script looks for the `global.scss` file (`styles/themes/[theme]/global.scss`) for each theme, as an `scss` entry point. Then all styles (`scss`) from all components are concatenated into a single content and filled with values specified for a given theme. As an output we have `[theme].css` file saved under the path defined as `TARGET_STYLES_DIR`.

### 5. Move build artifacts to dmp repository.

Each file managed by storybook repo will be marked with appropriate comment
```
    // This file is maintained by storybook, not to be modified.
```

As for .js files im assuming we will merge component directories (structure here and in dmp repo is exactly the same). As for .css files we will most likely create a separate react component `~BrandTheme?`, this will allow us to avoid conflicts with existing code. There actually should be a place we could hook into/use, i dont think its currently possible to create 'global' styles (i.e. <body>), until there is one we could/will use `BrandTheme`.
