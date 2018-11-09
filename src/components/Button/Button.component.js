import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.scss'; // build-ignore-line

import Up from '../../shared/Icons/Up';
import Right from '../../shared/Icons/Right';
import VR from '../../shared/Icons/VR';
import VRCircled from '../../shared/Icons/VRCircled';
import Close from '../../shared/Icons/Close';

const icons = {
  Up,
  Right,
  VR,
  VRCircled,
  Close,
};

function renderIcon(icon, { align }) {
  const Icon = icons[icon];
  return (
    <span className={`Button__icon Button__icon--${align}`}>
      {Icon ? <Icon /> : icon}
    </span>
  );
}

class Button extends React.PureComponent {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

    variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),

    size: PropTypes.oneOf([
      'inline',
      'small',
      'medium',
      'medium-padded',
      'large',
    ]),

    /** If true, the button will be formatted to appear on dark backgrounds. */
    inverted: PropTypes.bool,

    /** If true, the button will take the full width of its container. */
    fluid: PropTypes.bool,

    disabled: PropTypes.bool,

    className: PropTypes.string,
    href: PropTypes.string,
    /** The role of the HTML element. */
    role: PropTypes.string,
    target: PropTypes.string,
    title: PropTypes.string,
    tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    iconLeft: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.oneOf(['Up', 'Right']),
    ]),
    iconRight: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.oneOf(['Up', 'Right']),
    ]),
    /** Button's label (used only when `children` prop is absent) */
    label: PropTypes.string,
    children: PropTypes.node,

    onClick: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseMove: PropTypes.func,
    onMouseOut: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseUp: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyPress: PropTypes.func,
    onKeyUp: PropTypes.func,
  };

  static defaultProps = {
    as: 'button',

    variant: 'secondary',
    size: 'medium',
    inverted: false,
    fluid: false,
    disabled: undefined,

    className: undefined,
    href: undefined,
    role: undefined,
    target: undefined,
    title: undefined,
    tabIndex: undefined,

    iconLeft: undefined,
    iconRight: undefined,
    label: undefined,
    children: undefined,

    onClick: undefined,
    onMouseDown: undefined,
    onMouseEnter: undefined,
    onMouseLeave: undefined,
    onMouseMove: undefined,
    onMouseOut: undefined,
    onMouseOver: undefined,
    onMouseUp: undefined,
    onKeyDown: undefined,
    onKeyPress: undefined,
    onKeyUp: undefined,
  };

  render() {
    const {
      as,

      variant,
      size,
      inverted,
      fluid,
      disabled,

      className,
      href,
      role,
      target,
      title,
      tabIndex,

      iconLeft,
      iconRight,
      label,
      children,

      onClick,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
      onMouseOut,
      onMouseOver,
      onMouseUp,
      onKeyDown,
      onKeyPress,
      onKeyUp,
    } = this.props;

    const buttonProps = {
      disabled,
      href,
      role,
      target,
      title,
      tabIndex,
      className: classNames('Button', className, {
        [`Button--variant--${variant}`]: true,
        [`Button--size--${size}`]: true,
        [`Button--inverted`]: inverted,
        [`Button--fluid`]: fluid,
      }),
      onClick,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
      onMouseOut,
      onMouseOver,
      onMouseUp,
      onKeyDown,
      onKeyPress,
      onKeyUp,
    };

    const buttonChildren = children || (
      <React.Fragment>
        {renderIcon(iconLeft, { align: 'left' })}
        {label && <span className="Button__label">{label}</span>}
        {renderIcon(iconRight, { align: 'right' })}
      </React.Fragment>
    );

    return React.createElement(as, buttonProps, buttonChildren);
  }
}

export default Button;
