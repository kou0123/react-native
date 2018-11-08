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
var cards = [
    {
        text: 'Card One',
        name: 'One',
        image: require('./img/test.jpg'),
    },
];
var DeckSwiperExample = /** @class */ (function (_super) {
    __extends(DeckSwiperExample, _super);
    function DeckSwiperExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeckSwiperExample.prototype.render = function () {
        return (react_1.default.createElement(native_base_1.Container, null,
            react_1.default.createElement(native_base_1.Header, null),
            react_1.default.createElement(native_base_1.View, null,
                react_1.default.createElement(native_base_1.DeckSwiper, { dataSource: cards, renderItem: function (item) {
                        return react_1.default.createElement(native_base_1.Card, { style: { elevation: 3 } },
                            react_1.default.createElement(native_base_1.CardItem, null,
                                react_1.default.createElement(native_base_1.Left, null,
                                    react_1.default.createElement(native_base_1.Thumbnail, { source: item.image }),
                                    react_1.default.createElement(native_base_1.Body, null,
                                        react_1.default.createElement(native_base_1.Text, null, item.text),
                                        react_1.default.createElement(native_base_1.Text, { note: true }, "NativeBase")))),
                            react_1.default.createElement(native_base_1.CardItem, { cardBody: true },
                                react_1.default.createElement(react_native_1.Image, { style: { height: 300, flex: 1 }, source: item.image })),
                            react_1.default.createElement(native_base_1.CardItem, null,
                                react_1.default.createElement(native_base_1.Icon, { name: "heart", style: { color: '#ED4A6A' } }),
                                react_1.default.createElement(native_base_1.Text, null, item.name)));
                    } }))));
    };
    return DeckSwiperExample;
}(react_1.Component));
exports.default = DeckSwiperExample;
