"use strict";

// IMPORT MODULE
import { generateID } from "./utils.js";
// DB Object
let notekeeperDB = {};

/**
 * Initializes a local database. If the data exists in local storage, it is loaded;
 * Otherwise, a new empty database structure is created and stored.
 */
const initDB = function () {
  const db = localStorage.getItem("notekeeperDB");

  if (db) {
    notekeeperDB = JSON.parse(db);
  } else {
    notekeeperDB.notebooks = [];
    localStorage.setItem("notekeeperDB", JSON.stringify(notekeeperDB));
  }
};

initDB();

/**
 * Reads and loads the localStorage data into the global variable `notekeeperDB`.
 */
const readDB = function () {
  notekeeperDB = JSON.parse(localStorage.getItem("notekeeperDB")) || {
    notebooks: [],
  };
};

/**
 * Writes the current state of the global variable `notekeeperDB` to local storage.
 */
const writeDB = function () {
  localStorage.setItem("notekeeperDB", JSON.stringify(notekeeperDB));
};

/**
 * Collection of functions for performing CRUD (Create, Read, Update, Delete)
 * operations on database.
 * The database state is managed using global variables and local storage.
 *
 * @namespace
 * @property {Object} get - Functions for retrieving data from the database.
 * @property {Object} post - Functions for adding data to the database.
 * @property {Object} update - Functions for updating data in the database.
 * @property {Object} delete - Functions for deleting data from the database.
 */
export const db = {
  post: {
    /**
     * Adds a new notebook to the database.
     * @function
     * @param {string} name - The name of the new notebook.
     * @returns {Object} The newly created notebook object.
     */
    notebook(name) {
      readDB();
      const notebookData = {
        id: generateID(),
        name,
        notes: [],
      };

      notekeeperDB.notebooks.push(notebookData);

      writeDB();

      return notebookData;
    },
  },
};
