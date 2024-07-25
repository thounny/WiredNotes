"use strict";

// DB Object
let /** {Object} */ notekeeperDB = {};

/**
 * Initializes a local database. If the data exists in local storage, it is loaded;
 * Otherwise, a new empty database structure is created and stored.
 */
const initDB = function () {
  const /** {JSON | undefined} */ db = localStorage.getItem("notekeeperDB");

  if (db) {
    notekeeperDB = JSON.parse(db);
  } else {
    notekeeperDB.notebooks = [];
    localStorage.setItem("notekeeperDB", JSON.stringify(notekeeperDB));
  }
};

initDB();

export const db = {};
