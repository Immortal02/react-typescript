import React from "react";

import { storiesOf, configure } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Button, Welcome } from "@storybook/react/demo";

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.story.tsx$/);
// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }

function loadStories() {
  req.keys().forEach(
    module => req(module).default()
  );
}

configure(loadStories, module);
