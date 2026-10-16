'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Олександр', phone: '+380501234567' },
  { name: 'Іван', phone: '+380671112233' },
];

const findPhoneByName = (name) => {
  for (let i = 0; i < phonebook.length; i++) {
    if (phonebook[i].name === name) {
      return phonebook[i].phone;
    }
  }
};

module.exports = { phonebook, findPhoneByName };
