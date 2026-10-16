'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445554433',
  'Олександр': '+380501234567',
  'Іван': '+380671112233',
};

const findPhoneByName = (name) => {
  return phonebook[name];
};

module.exports = { phonebook, findPhoneByName };
