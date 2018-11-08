"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/rootReducer
var redux_1 = require("redux");
var reducer_1 = __importDefault(require("./Home/reducer"));
exports.default = redux_1.combineReducers({
    home: reducer_1.default
});
