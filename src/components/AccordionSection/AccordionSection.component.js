import PropTypes from 'prop-types';
import React from 'react';

import AccordionItem from './AccordionItem/AccordionItem.component';
import Section from '../Section/Section.component';

/**
 * [Documentation](https://mgmdigitalventures.atlassian.net/wiki/spaces/KB/pages/19791903/Text+Accordion)
 */
class AccordionSection extends React.PureComponent {
  static displayName = 'AccordionSection';

  static propTypes = {
    title: PropTypes.string,
    /**
     * Either textContent or listContents is required. You should provide only one of those two props.
     */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        textContent: PropTypes.string,
        listContents: PropTypes.arrayOf(PropTypes.string),
      }),
    ),
  };

  static defaultProps = {
    title: undefined,
    items: [],
  };

  render() {
    const { title, items } = this.props;
    return (
      <Section title={title} contentPadding>
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            textContent={item.textContent}
            listContents={item.listContents}
          />
        ))}
      </Section>
    );
  }
}

export default AccordionSection;
