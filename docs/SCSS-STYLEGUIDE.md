# DMP Sass styleguide

# Introduction
This document defines rules to abide by when working with component-based architecture and scss. It aims at improving collaboration, code quality, and enabling supporting infrastructure.

# General rules
## Intro
- Keep your styles as readable as possible, dont optimize prematurely (this usually means dont optimize css at all, css is extremely fast on its own, and following this style guide will help you avoid performance issues)
- Keep your components small and simple
- Maintain a mixin library, so patterns can be easily reused
- Always prefix partials with an underscore
- All code should look like it was maintained by one person

## Formatting
### Indentation
- Use 2 spaces
- Use white space to improve readability (1 blank line is usually enough)
### Commenting
- Prefer line comments `// Comment` to block comments `/* Comment */`
- Place comments in a separate line whenever possible, avoid inline comments
- Write detailed comments for code that isn't self-documenting, i.e. when dealing with compatibility or browser-specific issues
- If youre splitting your component with comments like: `// Top section`, your component is most likely too big.
## Global styles
- Use normalize.css
- Your global stylesheet should be short, other than `<body>` and `<html>` or if you decide to normalize `h1, h2, h3, [...]` you shouldnt style tags at all. Example:

```sass=
* {
  box-sizing: border-box;
}

html {
  // ios opera momentum scrolling
  -webkit-overflow-scrolling: touch;
}

body {
  @include brand-body-font;

  min-height: 100vh;
  padding: 0;
  margin: 0;

  color: $brand-color-text-default;
  background-color: $brand-color-background-light;

  -moz-osx-font-smoothing: auto;

  // ios safari momentum scrolling
  -webkit-overflow-scrolling: touch;
}
```

## Specificity
- **Always** use classes for styling, **never** use `#`
- Avoid styling tags at all cost (there is almost never a reason to target tag over a class for styling, the only reason to style tags is when inside a contenteditable container)
- If you really feel like you have to use a tag selector, remember to nest it inside a class: `.FormField { input { color: red }}`
- If you strictly follow `Components` section rules, you won't encounter any specificity issues.
- Each node should aim to have max 1 class (besides modifier/s), for example:

Bad:
```jsx=
export default () => (
  <div
  className="ComponentName i-like-dealing-with-specificity-issues i-dont-care-if-this-will-be-easy-to-maintain btn btn-block">
    Hello!
  </div>
)
```
Good:
```jsx=
export default () => (
  <div
  className="ComponentName ComponentName--spacious">
    Hello!
  </div>
)
```
## Nesting
Dont do it.
## Components (short guide to BEM)

### Sample react component:
```jsx=
class ComponentName extends Component {
  render () {
    return (
      <div
      className="ComponentName ComponentName--modifier">
        <div
        className="ComponentName__element">
          <button
          autofocus="true"
          className="ComponentName__nested-element">
            Hello!
          </div>
        </div>
      </div>
    )
  }
}
```

### Sample component styles:

```sass=
.ComponentName {
  // include content mixins at the top (so you can easily
  //   override included styles inside your component)
  @include some-mixin;

  // start with properties describing display and shape,
  //   if element is a child of a parent with display: flex,
  //   consider starting with: align-self: flex-start; if thats
  //   a property you need
  display: flex;
  flex-direction: column;

  color: blue;

  &:hover {
    color: red
  }

  // As a rule of thumb use only min-media queries,
  //   max-media should only be used when targetting a highly specific case
  //   e.g. section displayed above fold has to look perfect on iphone 6
  @include screen-width-above($screen-sm-min) {
    flex-direction: row;
  }

  // put dynamic state modifiers above element declarations and static
  //   modifiers, only blocks/components should have dynamic state
  //   modifiers, examples: .is-focused, .has-children, .is-invalid
  &.is-active {
    border-bottom: 1px solid red;
  }

  // put static style modifiers above element declarations, only
  //   blocks/components should have static state modifiers,
  //   use them to change appearance, behavior, these modifiers
  //   should not be affected by local state, examples:
  //   .--light, --centered, --spacious, --condensed
  &--modifier {
    justify-content: center;
  }

  // put blank line before __element declarations
  &__element {
    color: red;
    text-align: center;

    @include screen-width-above($screen-screen-sm-min) {
      text-align: left;
    }
  }

  // keep the structure flat, dont nest elements within one another
  //   unless necessary, this helps dealing with specificity, also
  //   it makes it easier to copy/cut styles between components
  //   (for example when splitting component into couple smaller ones)
  &__nested-element {
    display: inline;
  }
}
```

### Including external libraries
Every external library should be wrapped in a component declaration, this ensures external `.css` wont cause side effects. This is also a place for you to override random-library default styles. Example:

```sass=
.RandomLibrary {
  @import 'random-library'

  .random-library {
    display: block;
    color: red;
  }

  .random-library-element {
    border-bottom: 1px solid red;
  }
}
```


## Variables and Mixins
### Variables
Prefer dash-cased variable names (e.g. $my-variable) over camelCased or snake_cased variable names but above all make casing consistent.

#### Colors
Bad:
```sass=
$primary-color:#066667; // more or less ok
$accent-primary: #72655F; // wrong word order
$brand-primary-dark: #72655F; // inconsistent

// inconsistent casing, wrong order, is this a global variable?
//   it feels like this should be scoped within nav component,
//   if you cant scope vars localy, create a separate section
//   or file for component specific vars
$nav_hover_state_bg_color:#024F80;

$lightGrey: #CCC; // inconsistent casing, wrong order, non descriptive name
$white: #fff; // white will always be white, this is not a variable
$gray-99: #999999; // there is no reason for creating this either

// this has some merit, it would be better to call this
//   variable mgmri-color-primary or superbrand-color-primary
$mgmri-gold: #c59e51;
```

Good:
```sass=
$superbrand-color-primary: #c59e51; // or $SUPERBRAND-COLOR-PRIMARY

$brand-color-primary: #066667;
$brand-color-primary-dark: #72655F;
$brand-color-primary-accent: #72655F;

$brand-color-success: #4A90E2;
$brand-color-danger: #e66161;

$brand-color-border: #fcfcfc;
$brand-color-link: #4A90E2;
```

Good:
```sass=
$screen-xl-min: 1440px;
$screen-lg-min: 1200px;
$screen-md-min: 992px;
$screen-sm-min: 768px;
$screen-xs-min: 560px;

$screen-lg-max: $screen-xl-min - 1px;
$screen-md-max: $screen-lg-min - 1px;
$screen-sm-max: $screen-md-min - 1px;
$screen-xs-max: $screen-sm-min - 1px;
```

#### Z-indexes
Create and maintain a separate file containing variables for all z-indexes used within the project:
```
 $z-primary-nav: 100;
 $z-primary-nav-dropdown: 200;
 $z-modal-container: 300;
```

### Extend
`@extend` **should never be used** it has unintuitive and potentially dangerous behavior, especially when used with nested selectors. Even extending top-level placeholder selectors can cause problems if the order of selectors ends up changing later (e.g. if they are in other files and the order the files are loaded shifts). Gzipping should handle most of the savings you would have gained by using `@extend`, and you can DRY up your stylesheets nicely with mixins.

### Mixins
Maintaining projects own mixin library is a good way to keep your code DRY. Below are some examples for you to follow when creating your own mixins.

#### Buttons
##### Reset
Base for every button, also helps when styling a button to look like a link.
```sass=
@mixin reset-default-button-styles {
  background: none;
  border: none;
  display: inline;
  font: inherit;
  margin: 0;
  padding: 0;
  outline: none;
  outline-offset: 0;
  cursor: pointer;

  &::-moz-focus-inner {
    border: none;
    padding: 0;
  }
}
```

##### Color Scheme

```sass=
@mixin button-colors($color, $background, $border) {
  color: $color;
  cursor: pointer;
  background-color: $background;
  border-color: $border;
  text-decoration: none;
  appearance: none;

  &:focus {
    color: $color;
    background-color: darken($background, 10%);
    border-color: darken($border, 25%);
  }

  &:hover {
    color: $color;
    background-color: darken($background, 10%);
    border-color: darken($border, 12%);
  }

  &:active {
    color: $color;
    background-color: darken($background, 10%);
    border-color: darken($border, 12%);

    &:hover,
    &:focus {
      color: $color;
      background-color: darken($background, 17%);
      border-color: darken($border, 25%);
    }
  }

  &:active {
    background-image: none;
  }

  &[disabled] {
    // to be defined by provided designs

    &:hover,
    &:focus {
      background-color: $background;
      border-color: $border;
    }
  }
}
```

##### Button size

```sass=
@mixin button-size(
  $size: 'md',
  $display: 'inline-block'
) {
  @if ($size == 'sm') {
    @include _button-size(9px, 18px, 12px, 14px, 3px);
  } @else if ($size == 'md') {
    @include _button-size(18px, 36px, 14px, 20px, 3px);
  } @else {
    @error "Unsupported button size";
  }

  display: $display;
}
```

##### Button size helper

```sass=
@mixin _button-size(
  $padding-vertical,
  $padding-horizontal,
  $font-size,
  $line-height,
  $border-radius
) {
  padding: $padding-vertical $padding-horizontal;
  font-size: $font-size;
  line-height: $line-height;
  border-radius: $border-radius;
}
```

#### Grid

##### Media query helpers
```sass=
@mixin max-media($bp) {
  @media only screen and (max-width: $bp) {
    @content;
  }
}

@mixin min-media($bp) {
  @media only screen and (min-width: $bp) {
    @content;
  }
}
```

##### Default container
```sass=
@mixin container {
  max-width: 90%;

  margin-left: auto;
  margin-right: auto;

  @include screen-width-above($screen-xs-min) {
    max-width: 80%;
  }

  @include screen-width-above($screen-sm-min) {
    max-width: 750px;
  }

  @include screen-width-above($screen-md-min) {
    max-width: 970px;
  }

  @include screen-width-above($screen-lg-min) {
    max-width: 1190px;
  }

  @include screen-width-above($screen-xl-min) {
    max-width: 1430px;
  }
}
```

#### Forms
Not implemented yet. Depends on how we decide to handle forms/inputs.

## Vendor prefixes
do not use browser specific property prefixes unless its a necessity or if a feature is only available in a specific browser, prefixing should be handled by postcss (autoprefixer) // TODO: Add examples for when it is ok to add a prefix (like font smoothing) and when its not (-webkit-appearance).

# Examples

## Sign in

class names, bem, maintainability

![](https://www.dropbox.com/s/h3d5t3optgxzu9n/Screenshot%202018-06-27%2001.07.14.png?raw=1)

```jsx=
export default () => (
  <div
  className="Hero">
    <div
    className="Hero__content">
      <img
      src=""
      className="Hero__logo"/>
      <div
      className="Hero__title">
        Example
      </div>
    </div>
  </div>
)
```

```sass=
.Hero {
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 24px;
  padding-bottom: 24px;

  &__content {
    padding: 12px;
    text-align: center
  }

  &__logo {
    margin-bottom: 24px;
  }

  &__title {
    font-weight: 900;
    font-size: 20px;
    color: #FFFFFF;
  }
}
```

![](https://www.dropbox.com/s/5uaymyl9qujf1ne/Screenshot%202018-06-27%2001.07.35.png?raw=1)

```jsx=
export default () => (
  <form
  className="SignInForm">
    <div
    className="SignInForm__row">
      <div
      className="SignInForm__field">
        <label
        for="email_c05867">
          Email
        </label>
        <input
        name="email"
        id="email_c05867"/>
      </div>
    </div>
    <div
    className="SignInForm__row">
      <div
      className="SignInForm__field">
        <label
        for="email_c05860">
          Password
        </label>
        <input
        name="email"
        id="email_c05860"/>
      </div>
    </div>
    <div
    className="SignInForm__actions">
      <button
      className="SignInForm__submit"
      type="submit"
      ></button>
    </div>
  </div>
)
```

```css=
.SignInForm {
  @include default-form;

  &__actions {
    display: flex;
    justify-content: center;

    @include screen-width-above($screen-sm-min) {
      justify-content: flex-end;
    }
  }

  &__submit {
    @include reset-default-button-styles;
    @include button-size($size: 'large', $display: 'block')
    @include button-color-scheme('light');
  }
}
```

