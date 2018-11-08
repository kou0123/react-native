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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
var actions_1 = require("./actions");
var note_1 = __importDefault(require("./components/note"));
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            noteText: "",
            noteArray: {}
        };
        return _this;
    }
    Home.prototype.render = function () {
        var _this = this;
        var notes = this.props.noteArray.map(function (val, key) {
            return (react_1.default.createElement(note_1.default, { key: key, keyval: key, val: val, deleteMethod: function () { return _this.deleteNote(key); } }));
        });
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.View, { style: styles.header },
                react_1.default.createElement(react_native_1.Text, { style: styles.headerText }, "- NOTER -")),
            react_1.default.createElement(react_native_1.ScrollView, { style: styles.scrollContainer }, notes),
            react_1.default.createElement(react_native_1.View, { style: styles.footer },
                react_1.default.createElement(react_native_1.TextInput, { style: styles.textInput, placeholder: ">note", onChangeText: function (noteText) { return _this.setState({ noteText: noteText }); }, value: this.state.noteText, placeholderTextColor: "white", underlineColorAndroid: "transparent" })),
            react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: this.addNote.bind(this), style: styles.addButton },
                react_1.default.createElement(react_native_1.Text, { style: styles.addButtonText }, "+"))));
    };
    Home.prototype.addNote = function () {
        if (this.state.noteText) {
            this.props.onAddNote(this.state.noteText);
            this.setState({ noteText: "" });
        }
    };
    Home.prototype.deleteNote = function (key) {
        this.props.noteArray.splice(key, 1);
        this.setState({ noteArray: this.props.noteArray });
    };
    return Home;
}(react_1.Component));
var mapStateToProps = function (state) {
    return {
        noteArray: state.home.noteArray
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        onAddNote: function (text) { return dispatch(actions_1.addNote(text)); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Home);
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: "#E91E63",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 10,
        borderBottomColor: "#ddd"
    },
    headerText: {
        color: "white",
        fontSize: 18,
        padding: 26
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: "stretch",
        color: "#fff",
        padding: 20,
        backgroundColor: "#252525",
        borderTopWidth: 2,
        borderTopColor: "#ededed"
    },
    addButton: {
        position: "absolute",
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: "#E91E63",
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
        elevation: 8
    },
    addButtonText: {
        color: "#fff",
        fontSize: 24
    }
});
