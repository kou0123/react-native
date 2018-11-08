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
var native_base_1 = require("native-base");
var Match = /** @class */ (function (_super) {
    __extends(Match, _super);
    function Match() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Match.prototype.render = function () {
        return (react_1.default.createElement(native_base_1.Container, null,
            react_1.default.createElement(native_base_1.Header, null),
            react_1.default.createElement(native_base_1.Content, null,
                react_1.default.createElement(native_base_1.Icon, { type: "FontAwesome", style: styles.heart, name: 'heartbeat' }))));
    };
    return Match;
}(react_1.Component));
var styles = react_native_1.StyleSheet.create({
    heart: {
        color: 'red'
    },
});
exports.default = Match;
