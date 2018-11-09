import React from 'react';
import { mount } from 'enzyme';

import AccordionSection from './AccordionSection.component';

describe('AccordionSection', () => {
  test('shows title and both text and list items as collapsed', () => {
    const output = mount(
      <AccordionSection
        title="title"
        items={[
          {
            title: 'text',
            textContent: 'content',
          },
          {
            title: 'list',
            listContents: ['a', 'b', 'c'],
          },
        ]}
      />,
    );

    expect(output.text()).toContain('title');

    const items = output.find('.AccordionItem');
    expect(items.length).toEqual(2);

    const textItem = items.at(0);
    expect(textItem.hasClass('is-collapsed')).toEqual(true);
    expect(textItem.find('.AccordionItem__title').text()).toEqual('text');
    expect(textItem.find('.AccordionItem__content').text()).toEqual('content');

    const listItem = items.at(1);
    expect(listItem.hasClass('is-collapsed')).toEqual(true);
    expect(listItem.find('.AccordionItem__title').text()).toEqual('list');
    expect(listItem.find('.AccordionItem__content li').length).toEqual(3);
    expect(
      listItem
        .find('.AccordionItem__content li')
        .at(0)
        .text(),
    ).toEqual('a');
    expect(
      listItem
        .find('.AccordionItem__content li')
        .at(1)
        .text(),
    ).toEqual('b');
    expect(
      listItem
        .find('.AccordionItem__content li')
        .at(2)
        .text(),
    ).toEqual('c');
  });

  test('when item header is clicked, the item is extended/hidden', () => {
    const output = mount(
      <AccordionSection
        items={[
          {
            title: 'text',
            textContent: 'content',
          },
        ]}
      />,
    );

    expect(
      output
        .find('.AccordionItem')
        .first()
        .hasClass('is-collapsed'),
    ).toEqual(true);

    output
      .find('.AccordionItem')
      .first()
      .find('.AccordionItem__title')
      .simulate('click');
    expect(
      output
        .find('.AccordionItem')
        .first()
        .hasClass('is-collapsed'),
    ).toEqual(false);

    output
      .find('.AccordionItem')
      .first()
      .find('.AccordionItem__title')
      .simulate('click');
    expect(
      output
        .find('.AccordionItem')
        .first()
        .hasClass('is-collapsed'),
    ).toEqual(true);
  });

  test("when another item's header is clicked, previously extended item is still extended as well", () => {
    const output = mount(
      <AccordionSection
        items={[
          {
            title: 'text',
            textContent: 'content',
          },
          {
            title: 'text',
            textContent: 'content',
          },
        ]}
      />,
    );

    expect(output.find('.AccordionItem').length).toEqual(2);

    expect(
      output
        .find('.AccordionItem')
        .at(0)
        .hasClass('is-collapsed'),
    ).toEqual(true);
    expect(
      output
        .find('.AccordionItem')
        .at(1)
        .hasClass('is-collapsed'),
    ).toEqual(true);

    output
      .find('.AccordionItem')
      .at(0)
      .find('.AccordionItem__title')
      .simulate('click');
    expect(
      output
        .find('.AccordionItem')
        .at(0)
        .hasClass('is-collapsed'),
    ).toEqual(false);
    expect(
      output
        .find('.AccordionItem')
        .at(1)
        .hasClass('is-collapsed'),
    ).toEqual(true);

    output
      .find('.AccordionItem')
      .at(1)
      .find('.AccordionItem__title')
      .simulate('click');
    expect(
      output
        .find('.AccordionItem')
        .at(0)
        .hasClass('is-collapsed'),
    ).toEqual(false);
    expect(
      output
        .find('.AccordionItem')
        .at(1)
        .hasClass('is-collapsed'),
    ).toEqual(false);
  });
});
