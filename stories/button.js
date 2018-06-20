import React from 'react';
import styles from 'bootstrap/dist/css/bootstrap.css';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withReadme, withDocs } from 'storybook-readme';

import ButtonReadme from '../src//components/button/README.md';
import Button from '../src/components/button/index.jsx';
import Cover from '../src/components/cover/index.jsx';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withDocs(ButtonReadme));
stories.addDecorator(withReadme(ButtonReadme));

stories.add('Basic usage', () => {
  const className = text('Class name', 'btn-success');
  const label = text('Label', 'button');

  return (<div>
    <p>Simple button component. You can provide class name and label text in Knobs tab to change it's look</p>
    <Button className={`${styles.btn} ${className.split(' ').map(item => (styles[item])).join(' ')}`} onClick={action('clicked')}>{label}</Button>
  </div>
  );
});
