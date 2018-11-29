# MGM Storybook

## Introduction

For list of supported browsers, see `.babelrc` .

## Development environment

- Install project dependencies: `yarn`
- Run NextJs locally on port 3000: `npm run next`
- Run Storybook locally on port 3001: `npm run start`
- Run both locally: `npm run dev`

While it is possible to develop without eslint - editor integration, consider doing so:

- How to integrate eslint into your code editor: https://eslint.org/docs/user-guide/integrations
- Autoformatting on save: [eslint --fix](https://medium.com/@netczuk/even-faster-code-formatting-using-eslint-22b80d061461)

## Storybook Deployment

- Install [up](https://github.com/apex/up)

-  Add mgm-storybook credentials to the `~/.aws/credentials` file, for example:

```
[mgm-storybook]
aws_access_key_id = ********************
aws_secret_access_key = ****************************************
```

more info here: https://up.docs.apex.sh/#aws_credentials

- Deploy: `npm run storybook:deploy`.

### Styleguides

Scss styleguide is available [here](docs/SCSS-STYLEGUIDE.md)

Stylelint config/integration is not yet implemented.

### Eslint

We're using airbnb preset with some slight modifications. Transferring these rules into dmp is going to happen sooner or later, there's still some room for changes to `.eslintrc`, though current settings are close to what we want to work with.

#### How SSR works in DMP

short description on how ssr solution works in dmp is available [here](docs/DMP-SSR.md)

#### Theming

Current theming description is temporarily available [here](https://hackmd.io/V1fHqfTzRwuw6CZwk1j7Vg).

### Build process

Current build process description is available [here](docs/Build.md).

`storybook` -> `build` -> `dmp/fe-react` -> `build` -> `cms/mgm-experience` -> `mvn clean install` -> `deploy`

If you want to change build directory, you can create `.env` file in the project root directory and set `BUILD_DIR` as you need:

`BUILD_DIR=/absolute/path/to/your/build/directory`

As default it is set to `./dmp-dist`

### Useful links

- writing tests with enzyme: [Enzyme cheatsheet](https://devhints.io/enzyme)
