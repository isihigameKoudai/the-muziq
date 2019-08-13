import { configure } from '@storybook/react';

const req = require.context("../src/client/components/", true, /\.story\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
