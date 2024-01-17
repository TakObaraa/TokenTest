import path from 'path';

export default {
  process(_, sourcePath) {
    return {
      code: `
const React = require('react');
const ReactComponent = (props) => {
  return React.createElement(
    'svg',
    props,
    ${JSON.stringify(path.basename(sourcePath))}
  );
}
module.exports = { ReactComponent };
`,
    };
  },
};
