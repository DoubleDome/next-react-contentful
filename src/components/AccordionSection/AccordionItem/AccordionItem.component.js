import PropTypes from 'prop-types';
import React from 'react';
import uuidv4 from 'uuid/v4';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import './AccordionItem.scss'; // build-ignore-line

import IconDown from '../../../shared/Icons/ChevronDown';

const COLLAPSE_ANIMATION_TIME = 500;

class AccordionItem extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    textContent: PropTypes.string,
    listContents: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    textContent: undefined,
    listContents: [],
  };

  innerContentRef = React.createRef();

  uuid = uuidv4();

  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }));
  };

  render() {
    const { title, textContent, listContents } = this.props;
    const { collapsed } = this.state;

    return (
      <CSSTransition
        in={collapsed}
        timeout={COLLAPSE_ANIMATION_TIME}
        classNames="collapsing"
      >
        <div
          className={classNames('AccordionItem', {
            'is-collapsed': collapsed,
          })}
        >
          <div
            role="heading"
            aria-expanded={!collapsed}
            aria-controls={this.uuid}
          >
            <div
              className="AccordionItem__title"
              role="button"
              tabIndex="0"
              onClick={this.toggle}
              onKeyPress={e => e.key === 'Enter' && this.toggle()}
            >
              <div className="AccordionItem__name">{title}</div>
              <div className="AccordionItem__button">
                <IconDown size="100%" />
              </div>
            </div>
          </div>
          <div
            className="AccordionItem__content"
            role="region"
            id={this.uuid}
            style={{
              maxHeight: this.innerContentRef.current
                ? `${this.innerContentRef.current.offsetHeight || 10000}px`
                : 10000,
            }}
          >
            <div
              className="AccordionItem__content__inner"
              ref={this.innerContentRef}
            >
              {textContent}
              {listContents &&
                listContents.length > 0 && (
                  <ul className="AccordionItem__list">
                    {listContents.map((item, index) => (
                      <li key={index} className="AccordionItem__list__item">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }
}

export default AccordionItem;
