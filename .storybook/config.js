import { configure } from '@storybook/react';

const req = require.context("../src/client/components/", true, /\.story\.tsx$/);
console.log(req.keys());

function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
