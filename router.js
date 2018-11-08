"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_router_flux_1 = require("react-native-router-flux");
var home_1 = __importDefault(require("./screens/home"));
var daily_1 = __importDefault(require("./screens/daily"));
var heart_1 = __importDefault(require("./screens/heart"));
var match_1 = __importDefault(require("./screens/match"));
var search_1 = __importDefault(require("./screens/search"));
var profile_1 = __importDefault(require("./screens/profile"));
var native_base_1 = require("native-base");
var RouterComponent = function () {
    return (react_1.default.createElement(react_native_router_flux_1.Router, null,
        react_1.default.createElement(react_native_router_flux_1.Tabs, { key: 'root', swipeEnabled: true },
            react_1.default.createElement(react_native_router_flux_1.Scene, { key: "\u30DB\u30FC\u30E0", component: home_1.default, iconName: 'home', iconColor: 'red', icon: TabBarIcon }),
            react_1.default.createElement(react_native_router_flux_1.Scene, { key: "\u691C\u7D22", component: search_1.default, iconName: 'search', iconColor: 'red', icon: TabBarIcon }),
            react_1.default.createElement(react_native_router_flux_1.Scene, { key: "\u30E1\u30C3\u30BB\u30FC\u30B8", component: match_1.default, iconName: 'comments-o', iconColor: 'red', icon: TabBarIcon }),
            react_1.default.createElement(react_native_router_flux_1.Scene, { key: "\u6BCE\u65E5", component: daily_1.default, iconName: 'gift', iconColor: 'red', icon: TabBarIcon }),
            react_1.default.createElement(react_native_router_flux_1.Scene, { key: "\u76F8\u624B\u304B\u3089", component: heart_1.default, iconName: 'heart', iconColor: 'red', icon: TabBarIcon }),
            react_1.default.createElement(react_native_router_flux_1.Scene, { key: "\u30D7\u30ED\u30D5", component: profile_1.default, iconName: 'user', iconColor: 'red', icon: TabBarIcon }))));
};
var TabBarIcon = function (props) { return (react_1.default.createElement(native_base_1.View, { style: styles.tabIconContainerStyle },
    react_1.default.createElement(native_base_1.Icon, { name: props.iconName, type: "FontAwesome", color: props.focused ? 'blue' : 'grey', style: styles.tabIconStyle }))); };
var styles = {
    tabIconContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabIconStyle: {
        width: 24,
        height: 24,
        fontSize: 24,
    },
};
exports.default = RouterComponent;
