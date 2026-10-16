'use strict';

const fn = () => {
  const obj1 = { name: 'Marcus' };
  let obj2 = { name: 'Marcus' };

  obj1.name = 'Aurelius';
  obj2.name = 'Aurelius';

  // obj1 = { name: 'Other' }; // не можна, бо const

  obj2 = { name: 'Other' };
};

module.exports = { fn };
