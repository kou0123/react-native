"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADD_NOTE = "ADD_NOTE";
exports.DELETE_NOTE = "DELETE_NOTE";
exports.addNote = function (payload) { return ({
    type: "ADD_NOTE",
    payload: { noteText: payload }
}); };
exports.deleteNote = function (payload) { return ({
    type: "DELETE_NOTE",
    payload: payload
}); };
