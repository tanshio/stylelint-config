"use strict"
const test = require('ava');
const stylelint = require('stylelint');
const config = require("../");

const css = `
/**
 * Multi-line comment
 */

.test {
  pading-left: 10px;
  padding: 20px;
}


.selector-1,
.selector-2,
.selector-3[type="text"] {
  background: linear-gradient(#fff, rgba(0, 0, 0, 0.8));
  box-sizing: border-box;
  display: block;
  color: #333;
}
`;



test('foo',async t => {
  const result = stylelint.lint({
      code: css,
      config,
    })
  // console.log(result)

  await result.then(data => {
    // console.log(data)
    t.falsy(data.errored, data.warnings)
  });

});

test('bar',t => {
  t.deepEqual([1, 2], [2, 2]);
});