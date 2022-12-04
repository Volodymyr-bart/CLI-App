const path = require("path");
const fs = require("fs");
const contactsPath = path.resolve("./db/contacts.json");

fs.readFile(contactsPath, "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data);
});
// fs.writeFile()

// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}
