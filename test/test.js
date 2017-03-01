"use strict"
const test = require('ava');
const stylelint = require('stylelint');
const config = require("../");




const inValidcss = `
/**
 * Multi-line comment
 */

.test {
  ml: 20px;
  padding-left: 10px;
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




.selector-4{color:red}
@media screen and (max-width:991px){
  .selecter-5 {
    color: blue;
  }
}
`;

const validcss = `
/**
 * Multi-line comment
 */

.test {
  margin-left: 20px;
  padding: 20px;
  padding-left: 10px;
}


.selector-1,
.selector-2,
.selector-3[type="text"] {
  background: linear-gradient(#fff, rgba(0, 0, 0, 0.8));
  box-sizing: border-box;
  display: block;
  color: #333;
}

.selector-4 {
  color: red;
}

@media screen and (max-width: 991px) {
  .selecter-5 {
    color: blue;
  }
}
`;



test('foo',async t => {
  const result = stylelint.lint({
      code: inValidcss,
      config,
    })

  await result.then(data => {
    const errored = data.errored;
    t.false(errored, data.results[0].warnings.map(e=>e.text).join('\n'))
  });
})

test('bar',async t => {
  const result = stylelint.lint({
      code: validcss,
      config,
    })

  await result.then(data => {
    const errored = data.errored;
    t.false(errored, data.results[0].warnings.map(e=>e.text).join('\n'))
  });
})
