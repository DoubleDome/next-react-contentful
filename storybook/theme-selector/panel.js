/* eslint-disable */
import React from 'react';

export default class Panel extends React.Component {
  state = {
    theme: null,
    themes: [],
    initialised: false,
  };

  componentDidMount() {
    this.props.channel.on('theme-selector:init', this.onInit);
  }

  componentWillUnmount() {
    this.props.channel.removeListener('theme-selector:init', this.onInit);
  }

  onInit = themes => {
    const queryTheme = this.props.api.getQueryParam('currentTheme');

    const theme = queryTheme
      ? queryTheme
      : this.state.theme
        ? this.state.theme
        : themes[0];

    this.setTheme(themes, theme);
  };

  updateTheme = e => {
    this.setTheme(this.state.themes, e.target.value);
  };

  setTheme = (themes, theme) => {
    this.setState({ themes, theme });
    this.props.channel.emit('theme-selector:update', theme);
    this.props.api.setQueryParams({ currentTheme: theme });
  };

  render() {
    const { theme, themes } = this.state;
    if (!theme) return <div>Theme selector addon is initializing...</div>;

    return (
      <div
        style={{
          width: '100%',
          padding: '15px',
          fontFamily:
            '-apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", "Lucida Grande", Arial, sans-serif',
          color: 'rgb(68, 68, 68)',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <label
            htmlFor="theme"
            style={{
              width: '80px',
              marginRight: '15px',
            }}
          >
            Theme
          </label>
          <select
            id="theme"
            value={this.state.theme}
            onChange={this.updateTheme}
            style={{
              color: 'rgb(85, 85, 85)',
              width: '100%',
              border: '1px solid rgb(247, 247, 247)',
              backgroundColor: 'rgb(247, 247, 247)',
              borderRadius: '3px',
              height: '30px',
            }}
          >
            {themes.map(theme => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
