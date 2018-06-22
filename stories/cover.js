import React from 'react';
import styles from 'bootstrap/dist/css/bootstrap.css';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

import CoverReadme from '../src/components/cover/README.md';
import Cover from '../src/components/cover/index.jsx';

const store = {
  getState() {
    return {
      spinner: true,
    };
  },

  subscribe() {

  },

  dispatch() {

  },
};

storiesOf('Cover', module)
  .addDecorator(withReadme(CoverReadme))
  .add('Showing Cover', () => (
        <Cover store={store}></ Cover>
  ));
