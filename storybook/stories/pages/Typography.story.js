import React from 'react';
import { storiesOf } from '@storybook/react';

import CustomContent from '../../../src/components/CustomContent/CustomContent.component';
import Section from '../../../src/components/Section/Section.component';
import './TypographyPage.scss';

storiesOf('Pages/Typography', module).add('default', () => {
  const sizes = {
    H1: <h1>How quickly daft jumping zebras vex</h1>,
    'H2 (Large)': (
      <h2 className="h2-large">How quickly daft jumping zebras vex</h2>
    ),
    'H2 (Small)': (
      <h2 className="h2-small">How quickly daft jumping zebras vex</h2>
    ),
    'H3 (Large)': (
      <h3 className="h3-large">How quickly daft jumping zebras vex</h3>
    ),
    'H3 (Small)': (
      <h3 className="h3-small">How quickly daft jumping zebras vex</h3>
    ),
    H4: <h4>How quickly daft jumping zebras vex</h4>,
    H5: <h5>How quickly daft jumping zebras vex</h5>,
    H6: <h6>How quickly daft jumping zebras vex</h6>,
    Quote: <blockquote>How quickly daft jumping zebras vex</blockquote>,
    'Lead (Large)': (
      <div className="lead-text-large">How quickly daft jumping zebras vex</div>
    ),
    'Lead (Small)': (
      <div className="lead-text-small">How quickly daft jumping zebras vex</div>
    ),
    'Subtitle (Large)': (
      <div className="subtitle-text-large">
        How quickly daft jumping zebras vex
      </div>
    ),
    'Subtitle (Small)': (
      <div className="subtitle-text-small">
        How quickly daft jumping zebras vex
      </div>
    ),
    'Body (Large)': (
      <div className="body-text-large">How quickly daft jumping zebras vex</div>
    ),
    'Body (Small)': (
      <div className="body-text-small">How quickly daft jumping zebras vex</div>
    ),
    'Micro (Label)': (
      <div className="micro-text-label">
        How quickly daft jumping zebras vex
      </div>
    ),
    'Micro (Large)': (
      <div className="micro-text-large">
        How quickly daft jumping zebras vex
      </div>
    ),
    'Micro (Small)': (
      <div className="micro-text-small">
        How quickly daft jumping zebras vex
      </div>
    ),
  };

  const wysiwygHTML = (
    <React.Fragment>
      <h1>Typical article starts with h1</h1>

      <div className="subtitle-text">
        Then, maybe it has a subtitle. Like this one, for example
      </div>

      <p>
        Then, comes a paragraph. Ut in feugiat elit, at egestas augue. Sed in
        malesuada lorem, a lacinia justo. Nulla sed convallis quam. Aenean
        luctus lobortis nunc, quis blandit orci aliquam sit amet. Phasellus a
        nulla mauris. Morbi eu mi ligula. Nulla iaculis mi et lorem pretium
        maximus. Sed sit amet nisi eu tortor pharetra commodo ut volutpat
        tellus. Aenean id diam ultrices, mattis ex vel, semper leo. Integer
        cursus elementum purus, malesuada elementum tellus ullamcorper et. Donec
        cursus ultrices lacinia. Morbi venenatis pellentesque elit, vel varius
        sapien fringilla ac. Proin varius elit ipsum, eget egestas leo ultrices
        nec. Vivamus quis enim eget elit tempus faucibus.
      </p>

      <h2>Introduction, as h2</h2>

      <p>
        Vivamus ac blandit odio, et imperdiet justo. Nullam nec volutpat nunc,
        at convallis ipsum. Aenean in mauris ac libero facilisis fermentum ut
        eget diam. Aenean pharetra eros turpis, vel rhoncus est lacinia a.
        Nullam porttitor volutpat arcu, a rhoncus lacus pretium eu. Donec metus
        erat, auctor mollis nisi nec, mattis placerat dui. Curabitur purus
        libero, tincidunt ut ultricies sit amet, varius sed velit. Morbi
        sollicitudin laoreet posuere. Pellentesque felis tortor, commodo id
        bibendum eget, consectetur eu nisl.
      </p>

      <h2>Moreover</h2>

      <h3>We can have h3</h3>

      <p>
        Sed consectetur arcu ut condimentum condimentum. Vestibulum eget dui
        eros. Mauris id eros lacus. Proin maximus erat a ante feugiat mattis.
        Quisque placerat, nunc et placerat suscipit, ante nulla gravida felis, a
        dapibus est nisl non libero. Vivamus in pellentesque augue, vulputate
        ultrices augue. Aliquam eget nibh at risus elementum ullamcorper.
        Maecenas hendrerit, mi vel pellentesque rhoncus, mi enim vestibulum
        eros, in dictum mi tortor eu purus. Maecenas venenatis pellentesque
        tristique. Nam feugiat ex eu lectus commodo aliquam. Integer a faucibus
        lorem, at condimentum lacus. In hac habitasse platea dictumst. Donec
        imperdiet, mauris et rutrum egestas, ipsum magna imperdiet metus, eget
        facilisis ante metus id purus.
      </p>

      <p>
        Proin ut justo id lectus finibus eleifend in in lectus. Duis sed cursus
        lorem, et dictum leo. Sed id posuere sem. Vestibulum sit amet justo
        condimentum, ultricies leo at, porttitor augue. Quisque lacinia et est
        sit amet consectetur. Aenean pellentesque venenatis tellus quis
        suscipit. Nunc aliquet consectetur elit, vitae molestie felis laoreet
        nec. Nullam eros justo, bibendum sed nisi ut, consequat vestibulum
        risus. Sed consequat vestibulum sem, vitae fermentum diam suscipit nec.
        Vestibulum laoreet ullamcorper rhoncus. Mauris in tempus leo. Curabitur
        id malesuada est.
      </p>

      <blockquote>
        "Sometimes, a quote comes in between." - anonymous
      </blockquote>

      <p>
        And next paragraph proceeds. Ut in feugiat elit, at egestas augue. Sed
        in malesuada lorem, a lacinia justo. Nulla sed convallis quam. Aenean
        luctus lobortis nunc, quis blandit orci aliquam sit amet. Phasellus a
        nulla mauris. Morbi eu mi ligula. Nulla iaculis mi et lorem pretium
        maximus. Sed sit amet nisi eu tortor pharetra commodo ut volutpat
        tellus. Aenean id diam ultrices, mattis ex vel, semper leo. Integer
        cursus elementum purus, malesuada elementum tellus ullamcorper et. Donec
        cursus ultrices lacinia. Morbi venenatis pellentesque elit, vel varius
        sapien fringilla ac. Proin varius elit ipsum, eget egestas leo ultrices
        nec. Vivamus quis enim eget elit tempus faucibus.
      </p>

      <h6>BTW. This is a h6 paragraph.</h6>
    </React.Fragment>
  );

  return (
    <div className="TypographyPage">
      <Section contentPadding title="Typography">
        <CustomContent>
          {Object.keys(sizes).map(key => (
            <div key={key} className="TypographyPage__row">
              <div className="TypographyPage__row__label">{key}</div>
              <div className="TypographyPage__row__body">{sizes[key]}</div>
            </div>
          ))}
        </CustomContent>
      </Section>

      <Section contentPadding title="WYSIWYG (Small)">
        <CustomContent variant="small">{wysiwygHTML}</CustomContent>
      </Section>

      <Section contentPadding title="WYSIWYG (Large)">
        <CustomContent variant="large">{wysiwygHTML}</CustomContent>
      </Section>
    </div>
  );
});
