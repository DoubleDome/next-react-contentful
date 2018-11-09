import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import './Section.scss'; // build-ignore-line

import Button from '../Button/Button.component';
import ResponsiveDiv from '../ResponsiveDiv.component';

class Section extends React.PureComponent {
  static displayName = 'Section';

  static propTypes = {
    title: PropTypes.string,
    /**
     * "Read more" button which is shown in the headline on desktop or below the section on the mobile.
     * With `mobileVariant` you can specify the style of the button on mobile, by default it's `'secondary'`.
     * */
    readMoreButton: PropTypes.shape({
      label: PropTypes.string.isRequired,
      /** Default: `'secondary'` */
      mobileVariant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
      url: PropTypes.string,
      onClick: PropTypes.func,
      onKeyPress: PropTypes.func,
    }),
    className: PropTypes.string,
    padding: PropTypes.bool,
    contentPadding: PropTypes.bool,
    children: PropTypes.node,
  };

  static defaultProps = {
    title: undefined,
    readMoreButton: undefined,
    className: undefined,
    padding: true,
    contentPadding: false,
    children: undefined,
  };

  render() {
    const {
      title,
      readMoreButton,
      className,
      padding,
      contentPadding,
      children,
    } = this.props;
    return (
      <div
        className={classNames('Section', className, {
          'Section--padding': padding,
          'Section--contentPadding': contentPadding,
        })}
        role="region"
        aria-label={title}
      >
        {(title || readMoreButton) && (
          <div className="Section__headline">
            <div className="Section__headline__inner">
              {title && <h2 className="Section__headline__title">{title}</h2>}
              {readMoreButton && (
                <ResponsiveDiv screen="min-md">
                  <div className="Section__headline__button">
                    <Button
                      as={readMoreButton.url ? 'a' : 'button'}
                      variant="tertiary"
                      size="inline"
                      href={readMoreButton.url}
                      label={readMoreButton.label}
                      onClick={readMoreButton.onClick}
                      onKeyPress={readMoreButton.onKeyPress}
                      iconRight="Right"
                    />
                  </div>
                </ResponsiveDiv>
              )}
            </div>
          </div>
        )}

        <div className="Section__content">{children}</div>

        {readMoreButton && (
          <ResponsiveDiv screen="max-sm">
            <div className="Section__footer">
              <Button
                as="a"
                variant={readMoreButton.mobileVariant || 'secondary'}
                fluid
                href={readMoreButton.url}
                label={readMoreButton.label}
                iconRight={
                  readMoreButton.mobileVariant === 'tertiary'
                    ? 'Right'
                    : undefined
                }
                onClick={readMoreButton.onClick}
                onKeyPress={readMoreButton.onKeyPress}
              />
            </div>
          </ResponsiveDiv>
        )}
      </div>
    );
  }
}

export default Section;
