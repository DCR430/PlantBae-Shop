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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/annotated-layout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/annotated-layout.js":
/*!***********************************!*\
  !*** ./pages/annotated-layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass AnnotatedLayout extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      discount: '10%',\n      enabled: false\n    });\n\n    _defineProperty(this, \"handleSubmit\", () => {\n      this.setState({\n        discount: this.state.discount\n      });\n      console.log('submission', this.state);\n    });\n\n    _defineProperty(this, \"handleChange\", field => {\n      return value => this.setState({\n        [field]: value\n      });\n    });\n\n    _defineProperty(this, \"handleToggle\", () => {\n      this.setState(({\n        enabled\n      }) => {\n        return {\n          enabled: !enabled\n        };\n      });\n    });\n  }\n\n  render() {\n    const {\n      discount,\n      enabled\n    } = this.state;\n    const contentStatus = enabled ? 'Disable' : 'Enable';\n    const textStatus = enabled ? 'enabled' : 'disabled';\n    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Page\"], {\n      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].AnnotatedSection, {\n          title: \"Default discount\",\n          description: \"Add a product to Sample App, it will automatically be discounted.\",\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n            sectioned: true,\n            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n              onSubmit: this.handleSubmit,\n              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"FormLayout\"], {\n                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n                  value: discount,\n                  onChange: this.handleChange('discount'),\n                  label: \"Discount percentage\",\n                  type: \"discount\"\n                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n                  distribution: \"trailing\",\n                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n                    primary: true,\n                    submit: true,\n                    children: \"Save\"\n                  })\n                })]\n              })\n            })\n          })\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].AnnotatedSection, {\n          title: \"Price updates\",\n          description: \"Temporarily disable all Sample App price updates\",\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"SettingToggle\"], {\n            action: {\n              content: contentStatus,\n              onAction: this.handleToggle\n            },\n            enabled: enabled,\n            children: [\"This setting is\", ' ', /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"TextStyle\"], {\n              variation: \"strong\",\n              children: textStatus\n            }), \".\"]\n          })\n        })]\n      })\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnnotatedLayout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hbm5vdGF0ZWQtbGF5b3V0LmpzPzAxNzciXSwibmFtZXMiOlsiQW5ub3RhdGVkTGF5b3V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJkaXNjb3VudCIsImVuYWJsZWQiLCJzZXRTdGF0ZSIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImZpZWxkIiwidmFsdWUiLCJyZW5kZXIiLCJjb250ZW50U3RhdHVzIiwidGV4dFN0YXR1cyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImNvbnRlbnQiLCJvbkFjdGlvbiIsImhhbmRsZVRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFZSSxNQUFNQSxlQUFOLFNBQThCQyw0Q0FBSyxDQUFDQyxTQUFwQyxDQUE4QztBQUFBO0FBQUE7O0FBQUEsbUNBQ2xDO0FBQ05DLGNBQVEsRUFBRSxLQURKO0FBRU5DLGFBQU8sRUFBRTtBQUZILEtBRGtDOztBQUFBLDBDQTBEM0IsTUFBTTtBQUNuQixXQUFLQyxRQUFMLENBQWM7QUFDWkYsZ0JBQVEsRUFBRSxLQUFLRyxLQUFMLENBQVdIO0FBRFQsT0FBZDtBQUdBSSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLEtBQUtGLEtBQS9CO0FBQ0QsS0EvRHlDOztBQUFBLDBDQWlFMUJHLEtBQUQsSUFBVztBQUN4QixhQUFRQyxLQUFELElBQVcsS0FBS0wsUUFBTCxDQUFjO0FBQUUsU0FBQ0ksS0FBRCxHQUFTQztBQUFYLE9BQWQsQ0FBbEI7QUFDRCxLQW5FeUM7O0FBQUEsMENBb0UzQixNQUFNO0FBQ2pCLFdBQUtMLFFBQUwsQ0FBYyxDQUFDO0FBQUVEO0FBQUYsT0FBRCxLQUFpQjtBQUM3QixlQUFPO0FBQUVBLGlCQUFPLEVBQUUsQ0FBQ0E7QUFBWixTQUFQO0FBQ0QsT0FGRDtBQUdELEtBeEV1QztBQUFBOztBQU0xQ08sUUFBTSxHQUFHO0FBRVAsVUFBTTtBQUFFUixjQUFGO0FBQVlDO0FBQVosUUFBd0IsS0FBS0UsS0FBbkM7QUFDQSxVQUFNTSxhQUFhLEdBQUdSLE9BQU8sR0FBRyxTQUFILEdBQWUsUUFBNUM7QUFDQSxVQUFNUyxVQUFVLEdBQUdULE9BQU8sR0FBRyxTQUFILEdBQWUsVUFBekM7QUFHQSx3QkFDRSw4REFBQyxxREFBRDtBQUFBLDZCQUNFLCtEQUFDLHVEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsdURBQUQsQ0FBUSxnQkFBUjtBQUNFLGVBQUssRUFBQyxrQkFEUjtBQUVFLHFCQUFXLEVBQUMsbUVBRmQ7QUFBQSxpQ0FJRSw4REFBQyxxREFBRDtBQUFNLHFCQUFTLE1BQWY7QUFBQSxtQ0FDRSw4REFBQyxxREFBRDtBQUFNLHNCQUFRLEVBQUUsS0FBS1UsWUFBckI7QUFBQSxxQ0FDRSwrREFBQywyREFBRDtBQUFBLHdDQUNFLDhEQUFDLDBEQUFEO0FBQ0UsdUJBQUssRUFBRVgsUUFEVDtBQUVFLDBCQUFRLEVBQUUsS0FBS1ksWUFBTCxDQUFrQixVQUFsQixDQUZaO0FBR0UsdUJBQUssRUFBQyxxQkFIUjtBQUlFLHNCQUFJLEVBQUM7QUFKUCxrQkFERixlQU9FLDhEQUFDLHNEQUFEO0FBQU8sOEJBQVksRUFBQyxVQUFwQjtBQUFBLHlDQUNFLDhEQUFDLHVEQUFEO0FBQVEsMkJBQU8sTUFBZjtBQUFnQiwwQkFBTSxNQUF0QjtBQUFBO0FBQUE7QUFERixrQkFQRjtBQUFBO0FBREY7QUFERjtBQUpGLFVBREYsZUF1QkUsOERBQUMsdURBQUQsQ0FBUSxnQkFBUjtBQUNKLGVBQUssRUFBQyxlQURGO0FBRUoscUJBQVcsRUFBQyxrREFGUjtBQUFBLGlDQUlKLCtEQUFDLDhEQUFEO0FBQ0Usa0JBQU0sRUFBRTtBQUNOQyxxQkFBTyxFQUFFSixhQURIO0FBRU5LLHNCQUFRLEVBQUUsS0FBS0M7QUFGVCxhQURWO0FBS0UsbUJBQU8sRUFBRWQsT0FMWDtBQUFBLDBDQU9rQixHQVBsQixlQVFFLDhEQUFDLDBEQUFEO0FBQVcsdUJBQVMsRUFBQyxRQUFyQjtBQUFBLHdCQUErQlM7QUFBL0IsY0FSRjtBQUFBO0FBSkksVUF2QkY7QUFBQTtBQURGLE1BREY7QUEyQ0Q7O0FBeER5Qzs7QUEyRTdCYiw4RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Fubm90YXRlZC1sYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbixcbiAgICBDYXJkLFxuICAgIEZvcm0sXG4gICAgRm9ybUxheW91dCxcbiAgICBMYXlvdXQsXG4gICAgUGFnZSxcbiAgICBTZXR0aW5nVG9nZ2xlLFxuICAgIFN0YWNrLFxuICAgIFRleHRGaWVsZCxcbiAgICBUZXh0U3R5bGVcbiB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuXG4gICAgY2xhc3MgQW5ub3RhdGVkTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgZGlzY291bnQ6ICcxMCUnLFxuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgXG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IHsgZGlzY291bnQsIGVuYWJsZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgICAgY29uc3QgY29udGVudFN0YXR1cyA9IGVuYWJsZWQgPyAnRGlzYWJsZScgOiAnRW5hYmxlJztcbiAgICAgICAgICBjb25zdCB0ZXh0U3RhdHVzID0gZW5hYmxlZCA/ICdlbmFibGVkJyA6ICdkaXNhYmxlZCc7XG4gICAgICBcbiAgICAgIFxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGFnZT5cbiAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRGVmYXVsdCBkaXNjb3VudFwiXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkFkZCBhIHByb2R1Y3QgdG8gU2FtcGxlIEFwcCwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGRpc2NvdW50ZWQuXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaXNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdkaXNjb3VudCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRpc2NvdW50IHBlcmNlbnRhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGlzY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXN0cmlidXRpb249XCJ0cmFpbGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgc3VibWl0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXG4gICAgICAgICAgICB0aXRsZT1cIlByaWNlIHVwZGF0ZXNcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUZW1wb3JhcmlseSBkaXNhYmxlIGFsbCBTYW1wbGUgQXBwIHByaWNlIHVwZGF0ZXNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTZXR0aW5nVG9nZ2xlXG4gICAgICAgICAgICAgIGFjdGlvbj17e1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRTdGF0dXMsXG4gICAgICAgICAgICAgICAgb25BY3Rpb246IHRoaXMuaGFuZGxlVG9nZ2xlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBlbmFibGVkPXtlbmFibGVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBUaGlzIHNldHRpbmcgaXN7JyAnfVxuICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPnt0ZXh0U3RhdHVzfTwvVGV4dFN0eWxlPi5cbiAgICAgICAgICAgIDwvU2V0dGluZ1RvZ2dsZT5cbiAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxuICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZGlzY291bnQ6IHRoaXMuc3RhdGUuZGlzY291bnQsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pc3Npb24nLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgfTtcbiAgICAgIFxuICAgICAgICBoYW5kbGVDaGFuZ2UgPSAoZmllbGQpID0+IHtcbiAgICAgICAgICByZXR1cm4gKHZhbHVlKSA9PiB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogdmFsdWUgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHsgZW5hYmxlZCB9KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7IGVuYWJsZWQ6ICFlbmFibGVkIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgfVxuICAgICAgXG4gICAgICBleHBvcnQgZGVmYXVsdCBBbm5vdGF0ZWRMYXlvdXQ7XG5cblxuICAgICAgICBcblxuICBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/annotated-layout.js\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiPzMyZTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QvanN4LXJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-runtime\n");

/***/ })

/******/ });