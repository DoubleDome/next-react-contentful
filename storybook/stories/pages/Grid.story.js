import React from 'react';
import { storiesOf } from '@storybook/react';

import './GridPage.scss';

storiesOf('Pages/Grid', module).add('default', () => (
  <div className="GridPage">
    <div className="container">
      <div className="row">
        <div className="col col-12">
          <div className="col-inner">12</div>
        </div>
      </div>

      <div className="row">
        <div className="col col-6">
          <div className="col-inner">6</div>
        </div>
        <div className="col col-6">
          <div className="col-inner">6</div>
        </div>
      </div>

      <div className="row">
        <div className="col col-6">
          <div className="col-inner">6</div>
        </div>
        <div className="col col-3">
          <div className="col-inner">3</div>
        </div>
        <div className="col col-3">
          <div className="col-inner">3</div>
        </div>
      </div>

      <div className="row">
        <div className="col col-3">
          <div className="col-inner">3</div>
        </div>
        <div className="col col-3">
          <div className="col-inner">3</div>
        </div>
        <div className="col col-3">
          <div className="col-inner">3</div>
        </div>
        <div className="col col-3">
          <div className="col-inner">3</div>
        </div>
      </div>

      <div className="row">
        <div className="col col-1">
          <div className="col-inner">1</div>
        </div>
        <div className="col col-1">
          <div className="col-inner">1</div>
        </div>
        <div className="col col-1">
          <div className="col-inner">1</div>
        </div>
        <div className="col col-1">
          <div className="col-inner">1</div>
        </div>
        <div className="col col-1">
          <div className="col-inner">1</div>
        </div>
        <div className="col col-1">
          <div className="col-inner">1</div>
        </div>
        <div className="col col-1">
          <div className="col-inner">1</div>
        </div>
        <div className="col col-1">
          <div className="col-inner">1</div>
        </div>
        <div className="col col-1">
          <div className="col-inner">1</div>
        </div>
        <div className="col col-1">
          <div className="col-inner">1</div>
        </div>
        <div className="col col-1">
          <div className="col-inner">1</div>
        </div>
        <div className="col col-1">
          <div className="col-inner">1</div>
        </div>
      </div>
    </div>
  </div>
));
