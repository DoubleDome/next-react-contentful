import React from 'react';
import { storiesOf } from '@storybook/react';
import { StoryDocsWrapper } from 'storybook-addon-docgen';

import Button from '../../../src/components/Button/Button.component';
import Section from '../../../src/components/Section/Section.component';

storiesOf('Components/Button', module).add('Default', () => (
  <StoryDocsWrapper component={Button}>
    <Section title="Variant" contentPadding>
      {'primary secondary tertiary'.split(' ').map(variant => (
        <p key={variant}>
          <Button variant={variant} label={variant} />
        </p>
      ))}
    </Section>

    <Section title="Size" contentPadding>
      {'inline small medium medium-padded large'.split(' ').map(size => (
        <p key={size}>
          <Button size={size} label={size} />
        </p>
      ))}
    </Section>

    <Section title="Inverted" contentPadding>
      <div style={{ backgroundColor: 'black' }}>
        {'primary secondary tertiary'.split(' ').map(variant => (
          <p key={variant}>
            <Button variant={variant} inverted label={variant} />
          </p>
        ))}
      </div>
    </Section>

    <Section title="Disabled" contentPadding>
      {'primary secondary tertiary'.split(' ').map(variant => (
        <p key={variant}>
          <Button variant={variant} disabled label={variant} />
        </p>
      ))}
    </Section>

    <Section title="Inline" contentPadding>
      A button can be also{' '}
      <Button variant="tertiary" size="inline" label="Inline" />.
    </Section>

    <Section title="With right icon" contentPadding>
      <Button
        variant="tertiary"
        label="Button with right arrow icon"
        iconRight="Right"
      />
    </Section>
  </StoryDocsWrapper>
));
