webpackHotUpdate(0,{

/***/ 970:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(272);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(680);\n\nvar _actions = __webpack_require__(971);\n\n__webpack_require__(977);\n\nvar _slot = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./Slot/slot\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _slot2 = _interopRequireDefault(_slot);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar EditorRight = function EditorRight(_ref) {\n\tvar slots = _ref.slots;\n\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\t{ id: 'editorright', className: 'row' },\n\t\tslots.map(function (s, i) {\n\t\t\treturn _react2.default.createElement(_slot2.default, { key: i, index: i, slot: s });\n\t\t})\n\t);\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n\treturn {\n\t\tslots: state.slots\n\t};\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(EditorRight);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/Components/EditorRight/editorright.js\n ** module id = 970\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/Components/EditorRight/editorright.js?");

/***/ }

})