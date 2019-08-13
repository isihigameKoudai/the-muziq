import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';

storiesOf('atoms/Button', module)
  .add('with text', () => (
    <Button></Button>
  ));
