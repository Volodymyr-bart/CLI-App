const path = require("path");
const fs = require("fs").promises;
const contactsPath = path.resolve("./db/contacts.json");

// fs.writeFile()

// TODO: задокументувати кожну функцію
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const result = contacts.find((contact) => contact.id === contactId);
    console.log(result);
    // return JSON.parse(result);
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  try {
  } catch (error) {
    console.log(error);
  }
}

async function addContact(name, email, phone) {
  try {
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
