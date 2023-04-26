"use strict";

const exhaustiveMakeObservable = require("./exhaustive-make-observable.js");

module.exports = {
  configs: {
    recommended: {
      plugins: ["mobx"],
      rules: {
        "mobx/exhaustive-make-observable": "error",
      },
    },
  },
  rules: {
    "exhaustive-make-observable": exhaustiveMakeObservable,
  },
};
