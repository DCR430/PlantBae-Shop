module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/edit-products.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/edit-products.js":
/*!********************************!*\
  !*** ./pages/edit-products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! React */ \"React\");\n/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(React__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst UPDATE_PRICE = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`\n  mutation productVariantUpdate($input: ProductVariantInput!) {\n    productVariantUpdate(input: $input) {\n      product {\n        title\n      }\n      productVariant {\n        id\n        price\n      }\n    }\n  }\n`;\n\nclass EditProduct extends React__WEBPACK_IMPORTED_MODULE_5___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      discount: '',\n      price: '',\n      variantId: '',\n      showToast: false\n    });\n\n    _defineProperty(this, \"handleChange\", field => {\n      return value => this.setState({\n        [field]: value\n      });\n    });\n\n    _defineProperty(this, \"itemToBeConsumed\", () => {\n      const item = store_js__WEBPACK_IMPORTED_MODULE_2___default.a.get('item');\n      const price = item.variants.edges[0].node.price;\n      const variantId = item.variants.edges[0].node.id;\n      const discounter = price * 0.1;\n      this.setState({\n        price,\n        variantId\n      });\n      return (price - discounter).toFixed(2);\n    });\n  }\n\n  componentDidMount() {\n    this.setState({\n      discount: this.itemToBeConsumed()\n    });\n  }\n\n  render() {\n    const {\n      name,\n      price,\n      discount,\n      variantId\n    } = this.state;\n    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_apollo__WEBPACK_IMPORTED_MODULE_4__[\"Mutation\"], {\n      mutation: UPDATE_PRICE,\n      children: (handleSubmit, {\n        error,\n        data\n      }) => {\n        const showError = error && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Banner\"], {\n          status: \"critical\",\n          children: error.message\n        });\n\n        const showToast = data && data.productVariantUpdate && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Toast\"], {\n          content: \"Sucessfully updated\",\n          onDismiss: () => this.setState({\n            showToast: false\n          })\n        });\n\n        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Frame\"], {\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], {\n            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], {\n              children: [showToast, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Section, {\n                children: showError\n              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Section, {\n                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"DisplayText\"], {\n                  size: \"large\",\n                  children: name\n                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n                    sectioned: true,\n                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"FormLayout\"], {\n                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"FormLayout\"].Group, {\n                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n                          prefix: \"$\",\n                          value: price,\n                          disabled: true,\n                          label: \"Original price\",\n                          type: \"price\"\n                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n                          prefix: \"$\",\n                          value: discount,\n                          onChange: this.handleChange('discount'),\n                          label: \"Discounted price\",\n                          type: \"discount\"\n                        })]\n                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n                        children: \"This sale price will expire in two weeks\"\n                      })]\n                    })\n                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"PageActions\"], {\n                    primaryAction: [{\n                      content: 'Save',\n                      onAction: () => {\n                        const productVariableInput = {\n                          id: variantId,\n                          price: discount\n                        };\n                        handleSubmit({\n                          variables: {\n                            input: productVariableInput\n                          }\n                        });\n                      }\n                    }],\n                    secondaryActions: [{\n                      content: 'Remove discount'\n                    }]\n                  })]\n                })]\n              })]\n            })\n          })\n        });\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditProduct);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lZGl0LXByb2R1Y3RzLmpzPzg4MzIiXSwibmFtZXMiOlsiVVBEQVRFX1BSSUNFIiwiZ3FsIiwiRWRpdFByb2R1Y3QiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRpc2NvdW50IiwicHJpY2UiLCJ2YXJpYW50SWQiLCJzaG93VG9hc3QiLCJmaWVsZCIsInZhbHVlIiwic2V0U3RhdGUiLCJpdGVtIiwic3RvcmUiLCJnZXQiLCJ2YXJpYW50cyIsImVkZ2VzIiwibm9kZSIsImlkIiwiZGlzY291bnRlciIsInRvRml4ZWQiLCJjb21wb25lbnREaWRNb3VudCIsIml0ZW1Ub0JlQ29uc3VtZWQiLCJyZW5kZXIiLCJuYW1lIiwic3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJlcnJvciIsImRhdGEiLCJzaG93RXJyb3IiLCJtZXNzYWdlIiwicHJvZHVjdFZhcmlhbnRVcGRhdGUiLCJoYW5kbGVDaGFuZ2UiLCJjb250ZW50Iiwib25BY3Rpb24iLCJwcm9kdWN0VmFyaWFibGVJbnB1dCIsInZhcmlhYmxlcyIsImlucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWFFO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsWUFBWSxHQUFHQyxrREFBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FaRTs7QUFnQkEsTUFBTUMsV0FBTixTQUEwQkMsNENBQUssQ0FBQ0MsU0FBaEMsQ0FBMEM7QUFBQTtBQUFBOztBQUFBLG1DQUNoQztBQUNOQyxjQUFRLEVBQUUsRUFESjtBQUVOQyxXQUFLLEVBQUUsRUFGRDtBQUdOQyxlQUFTLEVBQUUsRUFITDtBQUlOQyxlQUFTLEVBQUU7QUFKTCxLQURnQzs7QUFBQSwwQ0ErRnhCQyxLQUFELElBQVc7QUFDeEIsYUFBUUMsS0FBRCxJQUFXLEtBQUtDLFFBQUwsQ0FBYztBQUFFLFNBQUNGLEtBQUQsR0FBU0M7QUFBWCxPQUFk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QUFFWCxTQURxQjtBQUV6QkQsK0JBQUssRUFBRUQ7QUFGa0IseUJBQTdCO0FBSUVxQixvQ0FBWSxDQUFDO0FBQ1hVLG1DQUFTLEVBQUU7QUFBRUMsaUNBQUssRUFBRUY7QUFBVDtBQURBLHlCQUFELENBQVo7QUFHSDtBQVZILHFCQURhLENBRGpCO0FBZUUsb0NBQWdCLEVBQUUsQ0FDaEI7QUFDRUYsNkJBQU8sRUFBRTtBQURYLHFCQURnQjtBQWZwQixvQkF4QkY7QUFBQSxrQkFGRjtBQUFBLGdCQUxGO0FBQUE7QUFERjtBQURFLFVBREo7QUE2RFc7QUEzRVQsTUFERjtBQStFRDs7QUE3RnVDOztBQTZHM0IvQiwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2VkaXQtcHJvZHVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENhcmQsXG4gICAgRGlzcGxheVRleHQsXG4gICAgRm9ybSxcbiAgICBGb3JtTGF5b3V0LFxuICAgIExheW91dCxcbiAgICBQYWdlLFxuICAgIFBhZ2VBY3Rpb25zLFxuICAgIFRleHRGaWVsZCxcbiAgICBCYW5uZXIsXG4gICAgRnJhbWUsXG4gICAgVG9hc3QsXG4gIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG4gIGltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XG4gIGltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuICBpbXBvcnQgeyBNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG4gIGltcG9ydCBSZWFjdCBmcm9tICdSZWFjdCdcbiAgXG4gIGNvbnN0IFVQREFURV9QUklDRSA9IGdxbGBcbiAgbXV0YXRpb24gcHJvZHVjdFZhcmlhbnRVcGRhdGUoJGlucHV0OiBQcm9kdWN0VmFyaWFudElucHV0ISkge1xuICAgIHByb2R1Y3RWYXJpYW50VXBkYXRlKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIHByb2R1Y3Qge1xuICAgICAgICB0aXRsZVxuICAgICAgfVxuICAgICAgcHJvZHVjdFZhcmlhbnQge1xuICAgICAgICBpZFxuICAgICAgICBwcmljZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuXG5cbiAgY2xhc3MgRWRpdFByb2R1Y3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgZGlzY291bnQ6ICcnLFxuICAgICAgcHJpY2U6ICcnLFxuICAgICAgdmFyaWFudElkOiAnJyxcbiAgICAgIHNob3dUb2FzdDogZmFsc2UsXG4gICAgfTtcbiAgXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGlzY291bnQ6IHRoaXMuaXRlbVRvQmVDb25zdW1lZCgpIH0pO1xuICAgIH1cbiAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBuYW1lLCBwcmljZSwgZGlzY291bnQsIHZhcmlhbnRJZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxNdXRhdGlvblxuICAgICAgICAgIG11dGF0aW9uPXtVUERBVEVfUFJJQ0V9XG4gICAgICAgID5cbiAgICAgICAgICB7KGhhbmRsZVN1Ym1pdCwge2Vycm9yLCBkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzaG93RXJyb3IgPSBlcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgPEJhbm5lciBzdGF0dXM9XCJjcml0aWNhbFwiPntlcnJvci5tZXNzYWdlfTwvQmFubmVyPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBjb25zdCBzaG93VG9hc3QgPSBkYXRhICYmIGRhdGEucHJvZHVjdFZhcmlhbnRVcGRhdGUgJiYgKFxuICAgICAgICAgICAgICAgIDxUb2FzdFxuICAgICAgICAgICAgICAgICAgY29udGVudD1cIlN1Y2Vzc2Z1bGx5IHVwZGF0ZWRcIlxuICAgICAgICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1RvYXN0OiBmYWxzZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICBcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEZyYW1lPlxuICAgICAgICA8UGFnZT5cbiAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIHtzaG93VG9hc3R9XG4gICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIHtzaG93RXJyb3J9XG4gICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxuICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxuICAgICAgICAgICAgICA8RGlzcGxheVRleHQgc2l6ZT1cImxhcmdlXCI+e25hbWV9PC9EaXNwbGF5VGV4dD5cbiAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxuICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0Lkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD1cIiRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk9yaWdpbmFsIHByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg9XCIkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaXNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnZGlzY291bnQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGlzY291bnRlZCBwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGlzY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dC5Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgVGhpcyBzYWxlIHByaWNlIHdpbGwgZXhwaXJlIGluIHR3byB3ZWVrc1xuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgIDxQYWdlQWN0aW9uc1xuICAgICAgICAgICAgICAgICAgcHJpbWFyeUFjdGlvbj17W1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1NhdmUnLFxuICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0VmFyaWFibGVJbnB1dCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdmFyaWFudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBkaXNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHsgaW5wdXQ6IHByb2R1Y3RWYXJpYWJsZUlucHV0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlBY3Rpb25zPXtbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnUmVtb3ZlIGRpc2NvdW50J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvUGFnZT5cbiAgICAgICAgPC9GcmFtZT5cbiAgICAgICk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgIDwvTXV0YXRpb24+XG4gICAgICApXG4gICAgfVxuICBcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZmllbGQpID0+IHtcbiAgICAgIHJldHVybiAodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KTtcbiAgICB9O1xuICBcbiAgICBpdGVtVG9CZUNvbnN1bWVkID0gKCkgPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IHN0b3JlLmdldCgnaXRlbScpO1xuICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLnZhcmlhbnRzLmVkZ2VzWzBdLm5vZGUucHJpY2U7XG4gICAgICBjb25zdCB2YXJpYW50SWQgPSBpdGVtLnZhcmlhbnRzLmVkZ2VzWzBdLm5vZGUuaWQ7XG4gICAgICBjb25zdCBkaXNjb3VudGVyID0gcHJpY2UgKiAwLjE7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2UsIHZhcmlhbnRJZCB9KTtcbiAgICAgIHJldHVybiAocHJpY2UgLSBkaXNjb3VudGVyKS50b0ZpeGVkKDIpO1xuICAgIH07XG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IEVkaXRQcm9kdWN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/edit-products.js\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "React":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"React\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiP2M0ODEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiUmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJSZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///React\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-apollo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIj8yMGU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWFwb2xsby5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-apollo\n");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiPzMyZTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QvanN4LXJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-runtime\n");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"store-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiP2QxYWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3RvcmUtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///store-js\n");

/***/ })

/******/ });