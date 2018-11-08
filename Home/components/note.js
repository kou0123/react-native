"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var Note = /** @class */ (function (_super) {
    __extends(Note, _super);
    function Note() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Note.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, { key: this.props.keyval, style: styles.note },
            react_1.default.createElement(react_native_1.Text, { style: styles.noteText }, this.props.val.noteText),
            react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: this.props.deleteMethod, style: styles.noteDelete },
                react_1.default.createElement(react_native_1.Text, { style: styles.noteDeleteText }, "D"))));
    };
    return Note;
}(react_1.Component));
exports.default = Note;
var styles = react_native_1.StyleSheet.create({
    note: {
        position: "relative",
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: "#ededed"
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: "#E91E63"
    },
    noteDelete: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2980b9",
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    noteDeleteText: {
        color: "white"
    }
});
