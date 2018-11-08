"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var rootReducer_1 = __importDefault(require("./rootReducer"));
exports.store = redux_1.createStore(rootReducer_1.default);
