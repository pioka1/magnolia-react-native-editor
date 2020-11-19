(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@magnolia/template-annotations/build/mgnl-service.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@magnolia/template-annotations/build/mgnl-service.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: TemplateAnnotations, EditorContextHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ "./src/service/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateAnnotations", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["TemplateAnnotations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorContextHelper", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["EditorContextHelper"]; });



/***/ }),

/***/ "./src/service/EditorContextHelper.js":
/*!********************************************!*\
  !*** ./src/service/EditorContextHelper.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function EditorContextHelper() {
  return {
    inEditor: inEditor,
    refresh: refresh,
    inEditorPreview: inEditorPreview
  };

  function inIframe() {
    if (typeof window === 'undefined') {
      return false;
    }

    return Boolean(window.frameElement && window.frameElement.className.includes('gwt-Frame'));
  }

  function inEditor() {
    return inIframe() && window.parent.location.hash.endsWith(':edit');
  }

  function inEditorPreview() {
    return inIframe() && window.parent.location.hash.endsWith(':view');
  }

  function refresh() {
    if (inEditor() && window.parent.mgnlRefresh) {
      window.parent.mgnlRefresh();
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (EditorContextHelper());

/***/ }),

/***/ "./src/service/TemplateAnnotations.js":
/*!********************************************!*\
  !*** ./src/service/TemplateAnnotations.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function TemplateAnnotations() {
  var ACTIVATION_STATUS_NOT_ACTIVATED = 0;
  var ACTIVATION_STATUS_MODIFIED = 1;
  var ACTIVATION_STATUS_ACTIVATED = 2;
  var VALUE_PROCESSORS = {
    content: getContentPath,
    availableComponents: getAvailableComponents,
    showAddButton: canAddMoreComponents,
    activationStatus: getActivationStatus
  };
  var PAGE_MAP = {
    content: ['@path', ''],
    dialog: ['dialog', '', getValueFromObject]
  };
  var AREA_MAP = {
    name: ['@name', ''],
    content: PAGE_MAP.content,
    dialog: PAGE_MAP.dialog,
    availableComponents: ['availableComponents', []],
    type: ['type', 'list', getValueFromObject],
    label: ['title', '', getValueFromObject],
    inherit: ['inheritance', false, getValueFromObject],
    optional: ['optional', false, getValueFromObject],
    createdAreaNode: ['createAreaNode', true, getValueFromObject],
    showAddButton: ['maxComponents', true],
    showNewComponentArea: [null, true],
    description: ['description', '', getValueFromObject],
    activationStatus: [null, 0]
  };
  var COMPONENT_MAP = {
    content: PAGE_MAP.content,
    dialog: PAGE_MAP.dialog,
    label: ['title', '', getValueFromObject],
    description: ['description', '', getValueFromObject],
    activationStatus: [null, 0]
  };
  return {
    getAreaCommentString: getAreaCommentString,
    getComponentCommentString: getComponentCommentString,
    getPageCommentString: getPageCommentString
  };

  function getPageCommentString(page, templateDefinition) {
    return "cms:page ".concat(getCommentString(page, PAGE_MAP, templateDefinition));
  }

  function getAreaCommentString(area, templateDefinition, componentCount) {
    var customParams = {
      componentCount: componentCount
    };
    var areaTemplateDefinition = templateDefinition && templateDefinition.areas ? templateDefinition.areas[area['@name']] : {};
    return "cms:area ".concat(getCommentString(area, AREA_MAP, areaTemplateDefinition, customParams));
  }

  function getComponentCommentString(component, templateDefinition) {
    return "cms:component ".concat(getCommentString(component, COMPONENT_MAP, templateDefinition));
  }

  function getCommentString(data, map, templateDefinition, customParams) {
    var result = [];
    Object.keys(map).forEach(function (key) {
      var _map$key = _slicedToArray(map[key], 3),
          dataKey = _map$key[0],
          defaultValue = _map$key[1],
          getDataFn = _map$key[2];

      var contentProcessor = VALUE_PROCESSORS[key];
      var value = defaultValue;

      if (contentProcessor) {
        value = contentProcessor(data, dataKey, templateDefinition, customParams);
      } else if (getDataFn) {
        value = getDataFn(templateDefinition, dataKey, defaultValue);
      } else if (data != null && dataKey !== null) {
        value = data[dataKey] || '';
      }

      var item = {
        key: key,
        value: value
      };

      if (typeof item.value !== "string" || item.value) {
        result.push("".concat(key, "=\"").concat(item.value, "\""));
      }
    });
    return result.join(' ');
  }

  function getAvailableComponents(area, dataKey, templateDefinition) {
    if (!templateDefinition || !templateDefinition[dataKey]) {
      return '';
    }

    return Object.keys(templateDefinition[dataKey]).map(function (key) {
      return templateDefinition[dataKey][key].id;
    }).join(',');
  }

  function canAddMoreComponents(area, dataKey, templateDefinition, customParams) {
    if (!templateDefinition || templateDefinition.maxComponents == null || !customParams || customParams.componentCount == null) {
      return true;
    }

    return customParams.componentCount < templateDefinition.maxComponents;
  }

  function getValueFromObject(obj, key, defaultValue) {
    var value = obj && _typeof(obj) === 'object' && key ? obj[key] : null;
    value = value == null ? defaultValue : value;
    value = typeof defaultValue === 'boolean' ? Boolean(value) : value;
    return value != null ? value : defaultValue;
  }

  function getContentPath(data, key) {
    var value = data ? data[key] : null; // NOTE: Empty string is acceptable. So we need check value != null

    return value != null ? "website:".concat(value) : '';
  }

  function getActivationStatus(data) {
    if (!data || !data['mgnl:activationStatus'] || data['mgnl:activationStatus'] === 'false') {
      return ACTIVATION_STATUS_NOT_ACTIVATED;
    }

    var lastModified = data['mgnl:lastModified'] ? new Date(data['mgnl:lastModified']) : null;
    var lastActivated = data['mgnl:lastActivated'] ? new Date(data['mgnl:lastActivated']) : null;
    return lastModified && lastActivated && lastModified.getTime() > lastActivated.getTime() ? ACTIVATION_STATUS_MODIFIED : ACTIVATION_STATUS_ACTIVATED;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (TemplateAnnotations());

/***/ }),

/***/ "./src/service/index.js":
/*!******************************!*\
  !*** ./src/service/index.js ***!
  \******************************/
/*! exports provided: TemplateAnnotations, EditorContextHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TemplateAnnotations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TemplateAnnotations */ "./src/service/TemplateAnnotations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateAnnotations", function() { return _TemplateAnnotations__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _EditorContextHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditorContextHelper */ "./src/service/EditorContextHelper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorContextHelper", function() { return _EditorContextHelper__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvRWRpdG9yQ29udGV4dEhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9UZW1wbGF0ZUFubm90YXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlL2luZGV4LmpzIl0sIm5hbWVzIjpbIkVkaXRvckNvbnRleHRIZWxwZXIiLCJpbkVkaXRvciIsInJlZnJlc2giLCJpbkVkaXRvclByZXZpZXciLCJpbklmcmFtZSIsIndpbmRvdyIsIkJvb2xlYW4iLCJmcmFtZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbmNsdWRlcyIsInBhcmVudCIsImxvY2F0aW9uIiwiaGFzaCIsImVuZHNXaXRoIiwibWdubFJlZnJlc2giLCJUZW1wbGF0ZUFubm90YXRpb25zIiwiQUNUSVZBVElPTl9TVEFUVVNfTk9UX0FDVElWQVRFRCIsIkFDVElWQVRJT05fU1RBVFVTX01PRElGSUVEIiwiQUNUSVZBVElPTl9TVEFUVVNfQUNUSVZBVEVEIiwiVkFMVUVfUFJPQ0VTU09SUyIsImNvbnRlbnQiLCJnZXRDb250ZW50UGF0aCIsImF2YWlsYWJsZUNvbXBvbmVudHMiLCJnZXRBdmFpbGFibGVDb21wb25lbnRzIiwic2hvd0FkZEJ1dHRvbiIsImNhbkFkZE1vcmVDb21wb25lbnRzIiwiYWN0aXZhdGlvblN0YXR1cyIsImdldEFjdGl2YXRpb25TdGF0dXMiLCJQQUdFX01BUCIsImRpYWxvZyIsImdldFZhbHVlRnJvbU9iamVjdCIsIkFSRUFfTUFQIiwibmFtZSIsInR5cGUiLCJsYWJlbCIsImluaGVyaXQiLCJvcHRpb25hbCIsImNyZWF0ZWRBcmVhTm9kZSIsInNob3dOZXdDb21wb25lbnRBcmVhIiwiZGVzY3JpcHRpb24iLCJDT01QT05FTlRfTUFQIiwiZ2V0QXJlYUNvbW1lbnRTdHJpbmciLCJnZXRDb21wb25lbnRDb21tZW50U3RyaW5nIiwiZ2V0UGFnZUNvbW1lbnRTdHJpbmciLCJwYWdlIiwidGVtcGxhdGVEZWZpbml0aW9uIiwiZ2V0Q29tbWVudFN0cmluZyIsImFyZWEiLCJjb21wb25lbnRDb3VudCIsImN1c3RvbVBhcmFtcyIsImFyZWFUZW1wbGF0ZURlZmluaXRpb24iLCJhcmVhcyIsImNvbXBvbmVudCIsImRhdGEiLCJtYXAiLCJyZXN1bHQiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImRhdGFLZXkiLCJkZWZhdWx0VmFsdWUiLCJnZXREYXRhRm4iLCJjb250ZW50UHJvY2Vzc29yIiwidmFsdWUiLCJpdGVtIiwicHVzaCIsImpvaW4iLCJpZCIsIm1heENvbXBvbmVudHMiLCJvYmoiLCJsYXN0TW9kaWZpZWQiLCJEYXRlIiwibGFzdEFjdGl2YXRlZCIsImdldFRpbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtR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QUFFY0gsa0ZBQW1CLEVBQWxDLEU7Ozs7Ozs7Ozs7OztBQ3pIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Im1nbmwtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgeyBUZW1wbGF0ZUFubm90YXRpb25zLCBFZGl0b3JDb250ZXh0SGVscGVyIH0gZnJvbSAnLi9zZXJ2aWNlJztcbiIsImZ1bmN0aW9uIEVkaXRvckNvbnRleHRIZWxwZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5FZGl0b3IsXG4gICAgICAgIHJlZnJlc2gsXG4gICAgICAgIGluRWRpdG9yUHJldmlld1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBpbklmcmFtZSgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEJvb2xlYW4od2luZG93LmZyYW1lRWxlbWVudCAmJiB3aW5kb3cuZnJhbWVFbGVtZW50LmNsYXNzTmFtZS5pbmNsdWRlcygnZ3d0LUZyYW1lJykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluRWRpdG9yKCkge1xuICAgICAgICByZXR1cm4gaW5JZnJhbWUoKSAmJiB3aW5kb3cucGFyZW50LmxvY2F0aW9uLmhhc2guZW5kc1dpdGgoJzplZGl0Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5FZGl0b3JQcmV2aWV3KCkge1xuICAgICAgICByZXR1cm4gaW5JZnJhbWUoKSAmJiB3aW5kb3cucGFyZW50LmxvY2F0aW9uLmhhc2guZW5kc1dpdGgoJzp2aWV3Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaCgpIHtcbiAgICAgICAgaWYgKGluRWRpdG9yKCkgJiYgd2luZG93LnBhcmVudC5tZ25sUmVmcmVzaCkge1xuICAgICAgICAgICAgd2luZG93LnBhcmVudC5tZ25sUmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JDb250ZXh0SGVscGVyKCk7XG4iLCJmdW5jdGlvbiBUZW1wbGF0ZUFubm90YXRpb25zKCkge1xuICAgIGNvbnN0IEFDVElWQVRJT05fU1RBVFVTX05PVF9BQ1RJVkFURUQgPSAwO1xuICAgIGNvbnN0IEFDVElWQVRJT05fU1RBVFVTX01PRElGSUVEID0gMTtcbiAgICBjb25zdCBBQ1RJVkFUSU9OX1NUQVRVU19BQ1RJVkFURUQgPSAyO1xuXG4gICAgY29uc3QgVkFMVUVfUFJPQ0VTU09SUyA9IHtcbiAgICAgICAgY29udGVudDogZ2V0Q29udGVudFBhdGgsXG4gICAgICAgIGF2YWlsYWJsZUNvbXBvbmVudHM6IGdldEF2YWlsYWJsZUNvbXBvbmVudHMsXG4gICAgICAgIHNob3dBZGRCdXR0b246IGNhbkFkZE1vcmVDb21wb25lbnRzLFxuICAgICAgICBhY3RpdmF0aW9uU3RhdHVzOiBnZXRBY3RpdmF0aW9uU3RhdHVzXG4gICAgfTtcbiAgICBjb25zdCBQQUdFX01BUCA9IHtcbiAgICAgICAgY29udGVudDogWydAcGF0aCcsICcnXSxcbiAgICAgICAgZGlhbG9nOiBbJ2RpYWxvZycsICcnLCBnZXRWYWx1ZUZyb21PYmplY3RdXG4gICAgfTtcbiAgICBjb25zdCBBUkVBX01BUCA9IHtcbiAgICAgICAgbmFtZTogWydAbmFtZScsICcnXSxcbiAgICAgICAgY29udGVudDogUEFHRV9NQVAuY29udGVudCxcbiAgICAgICAgZGlhbG9nOiBQQUdFX01BUC5kaWFsb2csXG4gICAgICAgIGF2YWlsYWJsZUNvbXBvbmVudHM6IFsnYXZhaWxhYmxlQ29tcG9uZW50cycsIFtdXSxcbiAgICAgICAgdHlwZTogWyd0eXBlJywgJ2xpc3QnLCBnZXRWYWx1ZUZyb21PYmplY3RdLFxuICAgICAgICBsYWJlbDogWyd0aXRsZScsICcnLCBnZXRWYWx1ZUZyb21PYmplY3RdLFxuICAgICAgICBpbmhlcml0OiBbJ2luaGVyaXRhbmNlJywgZmFsc2UsIGdldFZhbHVlRnJvbU9iamVjdF0sXG4gICAgICAgIG9wdGlvbmFsOiBbJ29wdGlvbmFsJywgZmFsc2UsIGdldFZhbHVlRnJvbU9iamVjdF0sXG4gICAgICAgIGNyZWF0ZWRBcmVhTm9kZTogWydjcmVhdGVBcmVhTm9kZScsIHRydWUsIGdldFZhbHVlRnJvbU9iamVjdF0sXG4gICAgICAgIHNob3dBZGRCdXR0b246IFsnbWF4Q29tcG9uZW50cycsIHRydWVdLFxuICAgICAgICBzaG93TmV3Q29tcG9uZW50QXJlYTogW251bGwsIHRydWVdLFxuICAgICAgICBkZXNjcmlwdGlvbjogWydkZXNjcmlwdGlvbicsICcnLCBnZXRWYWx1ZUZyb21PYmplY3RdLFxuICAgICAgICBhY3RpdmF0aW9uU3RhdHVzOiBbbnVsbCwgMF1cbiAgICB9O1xuXG4gICAgY29uc3QgQ09NUE9ORU5UX01BUCA9IHtcbiAgICAgICAgY29udGVudDogUEFHRV9NQVAuY29udGVudCxcbiAgICAgICAgZGlhbG9nOiBQQUdFX01BUC5kaWFsb2csXG4gICAgICAgIGxhYmVsOiBbJ3RpdGxlJywgJycsIGdldFZhbHVlRnJvbU9iamVjdF0sXG4gICAgICAgIGRlc2NyaXB0aW9uOiBbJ2Rlc2NyaXB0aW9uJywgJycsIGdldFZhbHVlRnJvbU9iamVjdF0sXG4gICAgICAgIGFjdGl2YXRpb25TdGF0dXM6IFtudWxsLCAwXVxuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0QXJlYUNvbW1lbnRTdHJpbmcsXG4gICAgICAgIGdldENvbXBvbmVudENvbW1lbnRTdHJpbmcsXG4gICAgICAgIGdldFBhZ2VDb21tZW50U3RyaW5nXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldFBhZ2VDb21tZW50U3RyaW5nKHBhZ2UsIHRlbXBsYXRlRGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gYGNtczpwYWdlICR7Z2V0Q29tbWVudFN0cmluZyhwYWdlLCBQQUdFX01BUCwgdGVtcGxhdGVEZWZpbml0aW9uKX1gO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEFyZWFDb21tZW50U3RyaW5nKGFyZWEsIHRlbXBsYXRlRGVmaW5pdGlvbiwgY29tcG9uZW50Q291bnQpIHtcbiAgICAgICAgY29uc3QgY3VzdG9tUGFyYW1zID0geyBjb21wb25lbnRDb3VudCB9O1xuICAgICAgICBjb25zdCBhcmVhVGVtcGxhdGVEZWZpbml0aW9uID0gdGVtcGxhdGVEZWZpbml0aW9uICYmIHRlbXBsYXRlRGVmaW5pdGlvbi5hcmVhcyA/IHRlbXBsYXRlRGVmaW5pdGlvbi5hcmVhc1thcmVhWydAbmFtZSddXSA6IHt9O1xuICAgICAgICByZXR1cm4gYGNtczphcmVhICR7Z2V0Q29tbWVudFN0cmluZyhhcmVhLCBBUkVBX01BUCwgYXJlYVRlbXBsYXRlRGVmaW5pdGlvbiwgY3VzdG9tUGFyYW1zKX1gO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENvbXBvbmVudENvbW1lbnRTdHJpbmcoY29tcG9uZW50LCB0ZW1wbGF0ZURlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGBjbXM6Y29tcG9uZW50ICR7Z2V0Q29tbWVudFN0cmluZyhjb21wb25lbnQsIENPTVBPTkVOVF9NQVAsIHRlbXBsYXRlRGVmaW5pdGlvbil9YDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDb21tZW50U3RyaW5nKGRhdGEsIG1hcCwgdGVtcGxhdGVEZWZpbml0aW9uLCBjdXN0b21QYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKG1hcCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW2RhdGFLZXksIGRlZmF1bHRWYWx1ZSwgZ2V0RGF0YUZuXSA9IG1hcFtrZXldO1xuICAgICAgICAgICAgY29uc3QgY29udGVudFByb2Nlc3NvciA9IFZBTFVFX1BST0NFU1NPUlNba2V5XTtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgIGlmIChjb250ZW50UHJvY2Vzc29yKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBjb250ZW50UHJvY2Vzc29yKGRhdGEsIGRhdGFLZXksIHRlbXBsYXRlRGVmaW5pdGlvbiwgY3VzdG9tUGFyYW1zKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2V0RGF0YUZuKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBnZXREYXRhRm4odGVtcGxhdGVEZWZpbml0aW9uLCBkYXRhS2V5LCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhICE9IG51bGwgJiYgZGF0YUtleSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZGF0YVtkYXRhS2V5XSB8fCAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB7IGtleSwgdmFsdWUgfTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtLnZhbHVlICE9PSBcInN0cmluZ1wiIHx8IGl0ZW0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChgJHtrZXl9PVwiJHtpdGVtLnZhbHVlfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQuam9pbignICcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEF2YWlsYWJsZUNvbXBvbmVudHMoYXJlYSwgZGF0YUtleSwgdGVtcGxhdGVEZWZpbml0aW9uKSB7XG4gICAgICAgIGlmICghdGVtcGxhdGVEZWZpbml0aW9uIHx8ICF0ZW1wbGF0ZURlZmluaXRpb25bZGF0YUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0ZW1wbGF0ZURlZmluaXRpb25bZGF0YUtleV0pLm1hcChrZXkgPT4gdGVtcGxhdGVEZWZpbml0aW9uW2RhdGFLZXldW2tleV0uaWQpLmpvaW4oJywnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5BZGRNb3JlQ29tcG9uZW50cyhhcmVhLCBkYXRhS2V5LCB0ZW1wbGF0ZURlZmluaXRpb24sIGN1c3RvbVBhcmFtcykge1xuICAgICAgICBpZiAoIXRlbXBsYXRlRGVmaW5pdGlvbiB8fCB0ZW1wbGF0ZURlZmluaXRpb24ubWF4Q29tcG9uZW50cyA9PSBudWxsIHx8ICFjdXN0b21QYXJhbXMgfHwgY3VzdG9tUGFyYW1zLmNvbXBvbmVudENvdW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXN0b21QYXJhbXMuY29tcG9uZW50Q291bnQgPCB0ZW1wbGF0ZURlZmluaXRpb24ubWF4Q29tcG9uZW50cztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWYWx1ZUZyb21PYmplY3Qob2JqLCBrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBsZXQgdmFsdWUgPSBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYga2V5ID8gb2JqW2tleV0gOiBudWxsO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlID09IG51bGwgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcbiAgICAgICAgdmFsdWUgPSB0eXBlb2YgZGVmYXVsdFZhbHVlID09PSAnYm9vbGVhbicgPyBCb29sZWFuKHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICByZXR1cm4gdmFsdWUgIT0gbnVsbCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENvbnRlbnRQYXRoKGRhdGEsIGtleSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGRhdGEgPyBkYXRhW2tleV0gOiBudWxsO1xuICAgICAgICAvLyBOT1RFOiBFbXB0eSBzdHJpbmcgaXMgYWNjZXB0YWJsZS4gU28gd2UgbmVlZCBjaGVjayB2YWx1ZSAhPSBudWxsXG4gICAgICAgIHJldHVybiB2YWx1ZSAhPSBudWxsID8gYHdlYnNpdGU6JHt2YWx1ZX1gIDogJyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QWN0aXZhdGlvblN0YXR1cyhkYXRhKSB7XG4gICAgICAgIGlmICghZGF0YSB8fCAhZGF0YVsnbWdubDphY3RpdmF0aW9uU3RhdHVzJ10gfHwgZGF0YVsnbWdubDphY3RpdmF0aW9uU3RhdHVzJ10gPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgIHJldHVybiBBQ1RJVkFUSU9OX1NUQVRVU19OT1RfQUNUSVZBVEVEO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGFzdE1vZGlmaWVkID0gZGF0YVsnbWdubDpsYXN0TW9kaWZpZWQnXSA/IG5ldyBEYXRlKGRhdGFbJ21nbmw6bGFzdE1vZGlmaWVkJ10pIDogbnVsbDtcbiAgICAgICAgY29uc3QgbGFzdEFjdGl2YXRlZCA9IGRhdGFbJ21nbmw6bGFzdEFjdGl2YXRlZCddID8gbmV3IERhdGUoZGF0YVsnbWdubDpsYXN0QWN0aXZhdGVkJ10pIDogbnVsbDtcblxuICAgICAgICByZXR1cm4gbGFzdE1vZGlmaWVkICYmIGxhc3RBY3RpdmF0ZWQgJiYgbGFzdE1vZGlmaWVkLmdldFRpbWUoKSA+IGxhc3RBY3RpdmF0ZWQuZ2V0VGltZSgpID8gQUNUSVZBVElPTl9TVEFUVVNfTU9ESUZJRUQgOiBBQ1RJVkFUSU9OX1NUQVRVU19BQ1RJVkFURUQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZW1wbGF0ZUFubm90YXRpb25zKCk7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFRlbXBsYXRlQW5ub3RhdGlvbnMgfSBmcm9tICcuL1RlbXBsYXRlQW5ub3RhdGlvbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFZGl0b3JDb250ZXh0SGVscGVyIH0gZnJvbSAnLi9FZGl0b3JDb250ZXh0SGVscGVyJztcbiJdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),

/***/ "./node_modules/@magnolia/template-annotations/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@magnolia/template-annotations/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
    module.exports = __webpack_require__(/*! ./build/mgnl-service.js */ "./node_modules/@magnolia/template-annotations/build/mgnl-service.js");
}


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./src/component/EditableArea/EditableArea.js":
/*!****************************************************!*\
  !*** ./src/component/EditableArea/EditableArea.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @magnolia/template-annotations */ "./node_modules/@magnolia/template-annotations/index.js");
/* harmony import */ var _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EditableComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../EditableComponent */ "./src/component/EditableComponent/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util */ "./src/util/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var EditableArea = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(EditableArea, _React$PureComponent);

  function EditableArea(props) {
    var _this;

    _classCallCheck(this, EditableArea);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditableArea).call(this, props));
    _this.constants = _util__WEBPACK_IMPORTED_MODULE_4__["constants"];
    return _this;
  }

  _createClass(EditableArea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.context) {
        throw new Error('EditableArea component must be wrapped inside EditablePage component.');
      }

      this.addComment();
    }
  }, {
    key: "getParentTemplateId",
    value: function getParentTemplateId() {
      var parentTemplateId = this.props.parentTemplateId;
      var content = this.context.content;
      return parentTemplateId || content[_util__WEBPACK_IMPORTED_MODULE_4__["constants"].TEMPLATE_ID_PROP];
    }
  }, {
    key: "addComment",
    value: function addComment() {
      var isDevMode = this.context.isDevMode;

      if (!this.node || !isDevMode && !_util__WEBPACK_IMPORTED_MODULE_4__["EditorContextHelper"].inEditor()) {
        return;
      }

      var content = this.props.content;
      var pageTemplateId = this.getParentTemplateId();
      var allDefinitions = this.context.templateDefinitions;
      var templateDefinitions = allDefinitions[pageTemplateId];
      var openComment = _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_1__["TemplateAnnotations"].getAreaCommentString(content, templateDefinitions);
      this.node.parentNode.insertBefore(document.createComment(openComment), this.node);
      this.node.parentNode.insertBefore(document.createComment(this.constants.CLOSED_AREA_COMMENT), this.node.nextSibling);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          content = _this$props.content,
          className = _this$props.className,
          buildForMagnolia = _this$props.buildForMagnolia,
          MobileWrapper = _this$props.MobileWrapper;
      var componentNames = content['@nodes'];

      if (buildForMagnolia) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          ref: function ref(node) {
            return _this2.node = node;
          },
          key: content['@id'],
          className: _util__WEBPACK_IMPORTED_MODULE_4__["ComponentHelper"].classnames(className)
        }, componentNames.map(function (name) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditableComponent__WEBPACK_IMPORTED_MODULE_3__["EditableComponent"], {
            key: content[name]['@id'],
            content: content[name]
          });
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MobileWrapper, {
        key: content['@id'],
        className: _util__WEBPACK_IMPORTED_MODULE_4__["ComponentHelper"].classnames(className)
      }, componentNames.map(function (name) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditableComponent__WEBPACK_IMPORTED_MODULE_3__["EditableComponent"], {
          key: content[name]['@id'],
          content: content[name],
          buildForMagnolia: buildForMagnolia,
          MobileWrapper: MobileWrapper
        });
      }));
    }
  }]);

  return EditableArea;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

_defineProperty(EditableArea, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  parentTemplateId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  buildForMagnolia: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  MobileWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
});

_defineProperty(EditableArea, "defaultProps", {
  parentTemplateId: null,
  className: null,
  buildForMagnolia: false,
  MobileWrapper: react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment
});

_defineProperty(EditableArea, "contextType", _util__WEBPACK_IMPORTED_MODULE_4__["EditorContext"]);

/* harmony default export */ __webpack_exports__["default"] = (EditableArea);

/***/ }),

/***/ "./src/component/EditableArea/index.js":
/*!*********************************************!*\
  !*** ./src/component/EditableArea/index.js ***!
  \*********************************************/
/*! exports provided: EditableArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditableArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditableArea */ "./src/component/EditableArea/EditableArea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableArea", function() { return _EditableArea__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/component/EditableComponent/EditableComponent.js":
/*!**************************************************************!*\
  !*** ./src/component/EditableComponent/EditableComponent.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditableComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @magnolia/template-annotations */ "./node_modules/@magnolia/template-annotations/index.js");
/* harmony import */ var _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util */ "./src/util/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var EditableComponent = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(EditableComponent, _React$PureComponent);

  function EditableComponent(props) {
    var _this;

    _classCallCheck(this, EditableComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditableComponent).call(this, props));
    _this.constants = _util__WEBPACK_IMPORTED_MODULE_3__["constants"];
    return _this;
  }

  _createClass(EditableComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.addComment();
      this.removeRefs();
    }
  }, {
    key: "addComment",
    value: function addComment() {
      var isDevMode = this.context.isDevMode;
      var content = this.props.content;

      if (!this.openNode || !this.closeNode || !isDevMode && !_util__WEBPACK_IMPORTED_MODULE_3__["EditorContextHelper"].inEditor()) {
        return;
      }

      var templateId = content[_util__WEBPACK_IMPORTED_MODULE_3__["constants"].TEMPLATE_ID_PROP];
      var allDefinitions = this.context.templateDefinitions;
      var templateDefinitions = allDefinitions[templateId];
      var openComponentComment = _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_2__["TemplateAnnotations"].getComponentCommentString(content, templateDefinitions);
      var closedComponentComment = this.constants.CLOSED_COMPONENT_COMMENT;
      this.openNode.parentNode.insertBefore(document.createComment(openComponentComment), this.openNode);
      this.closeNode.parentNode.insertBefore(document.createComment(closedComponentComment), this.closeNode);
    }
  }, {
    key: "removeRefs",
    value: function removeRefs() {
      if (!this.openNode || !this.closeNode) {
        return;
      }

      this.openNode.remove();
      this.closeNode.remove();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          content = _this$props.content,
          buildForMagnolia = _this$props.buildForMagnolia,
          MobileWrapper = _this$props.MobileWrapper;
      var componentMappings = this.context.componentMappings;
      var component = _util__WEBPACK_IMPORTED_MODULE_3__["ComponentHelper"].getRenderedComponent(content, componentMappings, buildForMagnolia);

      if (buildForMagnolia) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          ref: function ref(node) {
            return _this2.openNode = node;
          }
        }), component, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          ref: function ref(node) {
            return _this2.closeNode = node;
          }
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MobileWrapper, null, component);
    }
  }]);

  return EditableComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

_defineProperty(EditableComponent, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  buildForMagnolia: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  MobileWrapper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
});

_defineProperty(EditableComponent, "defaultProps", {
  buildForMagnolia: false,
  MobileWrapper: react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment
});

_defineProperty(EditableComponent, "contextType", _util__WEBPACK_IMPORTED_MODULE_3__["EditorContext"]);



/***/ }),

/***/ "./src/component/EditableComponent/index.js":
/*!**************************************************!*\
  !*** ./src/component/EditableComponent/index.js ***!
  \**************************************************/
/*! exports provided: EditableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditableComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditableComponent */ "./src/component/EditableComponent/EditableComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableComponent", function() { return _EditableComponent__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/component/EditablePage/EditablePage.js":
/*!****************************************************!*\
  !*** ./src/component/EditablePage/EditablePage.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @magnolia/template-annotations */ "./node_modules/@magnolia/template-annotations/index.js");
/* harmony import */ var _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util */ "./src/util/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var EditablePage = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(EditablePage, _React$PureComponent);

  function EditablePage() {
    _classCallCheck(this, EditablePage);

    return _possibleConstructorReturn(this, _getPrototypeOf(EditablePage).apply(this, arguments));
  }

  _createClass(EditablePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.addCloseComment();
      this.addOpenComment();
      _util__WEBPACK_IMPORTED_MODULE_3__["EditorContextHelper"].refresh();
    } // eslint-disable-next-line camelcase

  }, {
    key: "UNSAFE_componentWillUpdate",
    value: function UNSAFE_componentWillUpdate() {
      this.node.firstChild.remove();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.addOpenComment();
      _util__WEBPACK_IMPORTED_MODULE_3__["EditorContextHelper"].refresh();
    }
  }, {
    key: "addOpenComment",
    value: function addOpenComment() {
      var contextValue = this.getContextValue();

      if (!this.node) {
        return;
      }

      var pageTemplateDefinition = contextValue.content && contextValue.templateDefinitions ? contextValue.templateDefinitions[contextValue.content[_util__WEBPACK_IMPORTED_MODULE_3__["constants"].TEMPLATE_ID_PROP]] : null;
      var openComment = _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_1__["TemplateAnnotations"].getPageCommentString(contextValue.content, pageTemplateDefinition);
      _util__WEBPACK_IMPORTED_MODULE_3__["ComponentHelper"].addComment(this.node, openComment);
    }
  }, {
    key: "addCloseComment",
    value: function addCloseComment() {
      _util__WEBPACK_IMPORTED_MODULE_3__["ComponentHelper"].addComment(this.node, '/cms:page');
    }
  }, {
    key: "hasPageComponent",
    value: function hasPageComponent() {
      var _this$getContextValue = this.getContextValue(),
          content = _this$getContextValue.content,
          componentMappings = _this$getContextValue.componentMappings;

      return content && componentMappings && componentMappings[content[_util__WEBPACK_IMPORTED_MODULE_3__["constants"].TEMPLATE_ID_PROP]];
    }
  }, {
    key: "getContextValue",
    value: function getContextValue() {
      var _this$props = this.props,
          templateDefinitions = _this$props.templateDefinitions,
          content = _this$props.content,
          config = _this$props.config;
      var componentMappings = config.componentMappings;
      var isDevMode = "development" === 'development';
      var contextValue = {
        templateDefinitions: templateDefinitions,
        componentMappings: componentMappings,
        content: content,
        isDevMode: isDevMode
      };
      return contextValue;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          buildForMagnolia = _this$props2.buildForMagnolia,
          MobileWrapper = _this$props2.MobileWrapper;
      var contextValue = this.getContextValue();
      var pageComponent = this.hasPageComponent() ? _util__WEBPACK_IMPORTED_MODULE_3__["ComponentHelper"].getRenderedComponent(contextValue.content, contextValue.componentMappings, buildForMagnolia) : children;

      if (buildForMagnolia) {
        // NOTE: We need a div tag as a parent node for Page's child HTML. It will cause an issue if we
        // don't have a parent node.
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util__WEBPACK_IMPORTED_MODULE_3__["EditorProvider"], {
          value: contextValue
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          ref: function ref(node) {
            return _this.node = node;
          },
          key: contextValue.content['@id']
        }, pageComponent));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MobileWrapper, null, pageComponent);
    }
  }]);

  return EditablePage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

_defineProperty(EditablePage, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType,
  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  templateDefinitions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  config: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    componentMappings: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
  }),
  buildForMagnolia: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  MobileWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
});

_defineProperty(EditablePage, "defaultProps", {
  children: null,
  content: null,
  templateDefinitions: null,
  config: {
    componentMappings: {}
  },
  buildForMagnolia: false,
  MobileWrapper: react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment
});

/* harmony default export */ __webpack_exports__["default"] = (EditablePage);

/***/ }),

/***/ "./src/component/EditablePage/index.js":
/*!*********************************************!*\
  !*** ./src/component/EditablePage/index.js ***!
  \*********************************************/
/*! exports provided: EditablePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditablePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditablePage */ "./src/component/EditablePage/EditablePage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditablePage", function() { return _EditablePage__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/component/index.js":
/*!********************************!*\
  !*** ./src/component/index.js ***!
  \********************************/
/*! exports provided: EditablePage, EditableArea, EditableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditablePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditablePage */ "./src/component/EditablePage/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditablePage", function() { return _EditablePage__WEBPACK_IMPORTED_MODULE_0__["EditablePage"]; });

/* harmony import */ var _EditableArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableArea */ "./src/component/EditableArea/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableArea", function() { return _EditableArea__WEBPACK_IMPORTED_MODULE_1__["EditableArea"]; });

/* harmony import */ var _EditableComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditableComponent */ "./src/component/EditableComponent/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableComponent", function() { return _EditableComponent__WEBPACK_IMPORTED_MODULE_2__["EditableComponent"]; });





/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: EditablePage, EditableArea, EditableComponent, EditorContext, EditorContextHelper, ComponentHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/component/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditablePage", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["EditablePage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableArea", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["EditableArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableComponent", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["EditableComponent"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorContext", function() { return _util__WEBPACK_IMPORTED_MODULE_1__["EditorContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorContextHelper", function() { return _util__WEBPACK_IMPORTED_MODULE_1__["EditorContextHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentHelper", function() { return _util__WEBPACK_IMPORTED_MODULE_1__["ComponentHelper"]; });




/***/ }),

/***/ "./src/util/ComponentHelper.js":
/*!*************************************!*\
  !*** ./src/util/ComponentHelper.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/util/constants.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




function componentHelper() {
  return {
    getRenderedComponent: getRenderedComponent,
    getComponentProperties: getComponentProperties,
    addComment: addComment,
    classnames: classnames
  };

  function getRenderedComponent(componentContent, componentMappings, buildForMagnolia) {
    if (!componentContent || !componentMappings || !componentMappings[componentContent[_constants__WEBPACK_IMPORTED_MODULE_1__["default"].TEMPLATE_ID_PROP]]) {
      return buildForMagnolia ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div') : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment);
    }

    var componentClass = componentMappings[componentContent[_constants__WEBPACK_IMPORTED_MODULE_1__["default"].TEMPLATE_ID_PROP]];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(componentClass, getComponentProperties(componentContent));
  }

  function getComponentProperties(componentContent) {
    if (!componentContent || _typeof(componentContent) !== 'object') {
      return {};
    }

    var props = {};
    var metadata = {};
    Object.keys(componentContent).forEach(function (key) {
      if (key.startsWith('@') || key.startsWith('mgnl:') || key.startsWith('jcr:')) {
        metadata[key] = componentContent[key];
      } else {
        props[key] = componentContent[key];
      }
    });
    props.metadata = metadata;
    return props;
  }

  function addComment(element, openComment, closeComment) {
    if (typeof document === 'undefined' || !element) {
      return;
    }

    if (openComment) {
      var openCommentElement = document.createComment(openComment);
      element.insertBefore(openCommentElement, element.firstChild);
    }

    if (closeComment) {
      var closeCommentElement = document.createComment(closeComment);
      element.appendChild(closeCommentElement);
    }
  }

  function classnames() {
    var classes = [];

    for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
      arg[_key] = arguments[_key];
    }

    arg.forEach(function (item) {
      if (item == null) {
        return;
      }

      var itemType = _typeof(item);

      if (itemType === 'string' || itemType === 'number') {
        classes.push(item);
      } else if (Array.isArray(item) && item.length) {
        classes.push(classnames.apply(void 0, _toConsumableArray(item)));
      } else if (itemType === 'object') {
        Object.keys(item).forEach(function (key) {
          if (item[key]) {
            classes.push(key);
          }
        });
      }
    });
    return classes.join(' ');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (componentHelper());

/***/ }),

/***/ "./src/util/EditorContext.js":
/*!***********************************!*\
  !*** ./src/util/EditorContext.js ***!
  \***********************************/
/*! exports provided: EditorProvider, EditorConsumer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorProvider", function() { return EditorProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorConsumer", function() { return EditorConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var EditorContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
var EditorProvider = EditorContext.Provider;
var EditorConsumer = EditorContext.Consumer;
/* harmony default export */ __webpack_exports__["default"] = (EditorContext);

/***/ }),

/***/ "./src/util/EditorContextHelper.js":
/*!*****************************************!*\
  !*** ./src/util/EditorContextHelper.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @magnolia/template-annotations */ "./node_modules/@magnolia/template-annotations/index.js");
/* harmony import */ var _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_0__["EditorContextHelper"]);

/***/ }),

/***/ "./src/util/constants.js":
/*!*******************************!*\
  !*** ./src/util/constants.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  CLOSED_AREA_COMMENT: '/cms:area',
  CLOSED_COMPONENT_COMMENT: '/cms:component',
  TEMPLATE_ID_PROP: 'mgnl:template'
});

/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/*! exports provided: constants, ComponentHelper, EditorContext, EditorConsumer, EditorProvider, RendererContext, EditorContextHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendererContext", function() { return RendererContext; });
/* harmony import */ var _EditorContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditorContext */ "./src/util/EditorContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorContext", function() { return _EditorContext__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorConsumer", function() { return _EditorContext__WEBPACK_IMPORTED_MODULE_0__["EditorConsumer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorProvider", function() { return _EditorContext__WEBPACK_IMPORTED_MODULE_0__["EditorProvider"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/util/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ComponentHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComponentHelper */ "./src/util/ComponentHelper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentHelper", function() { return _ComponentHelper__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _EditorContextHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditorContextHelper */ "./src/util/EditorContextHelper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorContextHelper", function() { return _EditorContextHelper__WEBPACK_IMPORTED_MODULE_3__["default"]; });





/**
 * @deprecated RendererContext is deprecated. Use EditorContext instead
 */

var RendererContext = _EditorContext__WEBPACK_IMPORTED_MODULE_0__["default"];



/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hZ25vbGlhL3RlbXBsYXRlLWFubm90YXRpb25zL2J1aWxkL21nbmwtc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hZ25vbGlhL3RlbXBsYXRlLWFubm90YXRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0VkaXRhYmxlQXJlYS9FZGl0YWJsZUFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9FZGl0YWJsZUFyZWEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9FZGl0YWJsZUNvbXBvbmVudC9FZGl0YWJsZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0VkaXRhYmxlQ29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvRWRpdGFibGVQYWdlL0VkaXRhYmxlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0VkaXRhYmxlUGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9Db21wb25lbnRIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvRWRpdG9yQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9FZGl0b3JDb250ZXh0SGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkVkaXRhYmxlQXJlYSIsInByb3BzIiwiY29uc3RhbnRzIiwiY29udGV4dCIsIkVycm9yIiwiYWRkQ29tbWVudCIsInBhcmVudFRlbXBsYXRlSWQiLCJjb250ZW50IiwiVEVNUExBVEVfSURfUFJPUCIsImlzRGV2TW9kZSIsIm5vZGUiLCJFZGl0b3JDb250ZXh0SGVscGVyIiwiaW5FZGl0b3IiLCJwYWdlVGVtcGxhdGVJZCIsImdldFBhcmVudFRlbXBsYXRlSWQiLCJhbGxEZWZpbml0aW9ucyIsInRlbXBsYXRlRGVmaW5pdGlvbnMiLCJvcGVuQ29tbWVudCIsIlRlbXBsYXRlQW5ub3RhdGlvbnMiLCJnZXRBcmVhQ29tbWVudFN0cmluZyIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJkb2N1bWVudCIsImNyZWF0ZUNvbW1lbnQiLCJDTE9TRURfQVJFQV9DT01NRU5UIiwibmV4dFNpYmxpbmciLCJjbGFzc05hbWUiLCJidWlsZEZvck1hZ25vbGlhIiwiTW9iaWxlV3JhcHBlciIsImNvbXBvbmVudE5hbWVzIiwiQ29tcG9uZW50SGVscGVyIiwiY2xhc3NuYW1lcyIsIm1hcCIsIm5hbWUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYW55IiwiYm9vbCIsIkZyYWdtZW50IiwiRWRpdG9yQ29udGV4dCIsIkVkaXRhYmxlQ29tcG9uZW50IiwicmVtb3ZlUmVmcyIsIm9wZW5Ob2RlIiwiY2xvc2VOb2RlIiwidGVtcGxhdGVJZCIsIm9wZW5Db21wb25lbnRDb21tZW50IiwiZ2V0Q29tcG9uZW50Q29tbWVudFN0cmluZyIsImNsb3NlZENvbXBvbmVudENvbW1lbnQiLCJDTE9TRURfQ09NUE9ORU5UX0NPTU1FTlQiLCJyZW1vdmUiLCJjb21wb25lbnRNYXBwaW5ncyIsImNvbXBvbmVudCIsImdldFJlbmRlcmVkQ29tcG9uZW50IiwiRWRpdGFibGVQYWdlIiwiYWRkQ2xvc2VDb21tZW50IiwiYWRkT3BlbkNvbW1lbnQiLCJyZWZyZXNoIiwiZmlyc3RDaGlsZCIsImNvbnRleHRWYWx1ZSIsImdldENvbnRleHRWYWx1ZSIsInBhZ2VUZW1wbGF0ZURlZmluaXRpb24iLCJnZXRQYWdlQ29tbWVudFN0cmluZyIsImNvbmZpZyIsInByb2Nlc3MiLCJjaGlsZHJlbiIsInBhZ2VDb21wb25lbnQiLCJoYXNQYWdlQ29tcG9uZW50IiwiZWxlbWVudFR5cGUiLCJzaGFwZSIsImNvbXBvbmVudEhlbHBlciIsImdldENvbXBvbmVudFByb3BlcnRpZXMiLCJjb21wb25lbnRDb250ZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbXBvbmVudENsYXNzIiwibWV0YWRhdGEiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInN0YXJ0c1dpdGgiLCJlbGVtZW50IiwiY2xvc2VDb21tZW50Iiwib3BlbkNvbW1lbnRFbGVtZW50IiwiY2xvc2VDb21tZW50RWxlbWVudCIsImFwcGVuZENoaWxkIiwiY2xhc3NlcyIsImFyZyIsIml0ZW0iLCJpdGVtVHlwZSIsInB1c2giLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJqb2luIiwiY3JlYXRlQ29udGV4dCIsIkVkaXRvclByb3ZpZGVyIiwiUHJvdmlkZXIiLCJFZGl0b3JDb25zdW1lciIsIkNvbnN1bWVyIiwiUmVuZGVyZXJDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsSUFBSSxJQUF5RDtBQUM3RDtBQUNBLE1BQU0sYUFLSjtBQUNGLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QixPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxLQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBSFAsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBR0EsSUFBTStGLGVBQWUsR0FBRzVELHNEQUF4QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQSxtRCIsImZpbGUiOiJtZ25sLXJlYWN0LWVkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSkgOiBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL3NyYy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBUZW1wbGF0ZUFubm90YXRpb25zLCBFZGl0b3JDb250ZXh0SGVscGVyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9zZXJ2aWNlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3NlcnZpY2UgKi8gXCIuL3NyYy9zZXJ2aWNlL2luZGV4LmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiVGVtcGxhdGVBbm5vdGF0aW9uc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9zZXJ2aWNlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJUZW1wbGF0ZUFubm90YXRpb25zXCJdOyB9KTtcblxuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiRWRpdG9yQ29udGV4dEhlbHBlclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9zZXJ2aWNlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJFZGl0b3JDb250ZXh0SGVscGVyXCJdOyB9KTtcblxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3NlcnZpY2UvRWRpdG9yQ29udGV4dEhlbHBlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvc2VydmljZS9FZGl0b3JDb250ZXh0SGVscGVyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuZnVuY3Rpb24gRWRpdG9yQ29udGV4dEhlbHBlcigpIHtcbiAgcmV0dXJuIHtcbiAgICBpbkVkaXRvcjogaW5FZGl0b3IsXG4gICAgcmVmcmVzaDogcmVmcmVzaCxcbiAgICBpbkVkaXRvclByZXZpZXc6IGluRWRpdG9yUHJldmlld1xuICB9O1xuXG4gIGZ1bmN0aW9uIGluSWZyYW1lKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBCb29sZWFuKHdpbmRvdy5mcmFtZUVsZW1lbnQgJiYgd2luZG93LmZyYW1lRWxlbWVudC5jbGFzc05hbWUuaW5jbHVkZXMoJ2d3dC1GcmFtZScpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluRWRpdG9yKCkge1xuICAgIHJldHVybiBpbklmcmFtZSgpICYmIHdpbmRvdy5wYXJlbnQubG9jYXRpb24uaGFzaC5lbmRzV2l0aCgnOmVkaXQnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluRWRpdG9yUHJldmlldygpIHtcbiAgICByZXR1cm4gaW5JZnJhbWUoKSAmJiB3aW5kb3cucGFyZW50LmxvY2F0aW9uLmhhc2guZW5kc1dpdGgoJzp2aWV3Jyk7XG4gIH1cblxuICBmdW5jdGlvbiByZWZyZXNoKCkge1xuICAgIGlmIChpbkVkaXRvcigpICYmIHdpbmRvdy5wYXJlbnQubWdubFJlZnJlc2gpIHtcbiAgICAgIHdpbmRvdy5wYXJlbnQubWdubFJlZnJlc2goKTtcbiAgICB9XG4gIH1cbn1cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChFZGl0b3JDb250ZXh0SGVscGVyKCkpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9zZXJ2aWNlL1RlbXBsYXRlQW5ub3RhdGlvbnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3NlcnZpY2UvVGVtcGxhdGVBbm5vdGF0aW9ucy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAoIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpKSB7IHJldHVybjsgfSB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbmZ1bmN0aW9uIFRlbXBsYXRlQW5ub3RhdGlvbnMoKSB7XG4gIHZhciBBQ1RJVkFUSU9OX1NUQVRVU19OT1RfQUNUSVZBVEVEID0gMDtcbiAgdmFyIEFDVElWQVRJT05fU1RBVFVTX01PRElGSUVEID0gMTtcbiAgdmFyIEFDVElWQVRJT05fU1RBVFVTX0FDVElWQVRFRCA9IDI7XG4gIHZhciBWQUxVRV9QUk9DRVNTT1JTID0ge1xuICAgIGNvbnRlbnQ6IGdldENvbnRlbnRQYXRoLFxuICAgIGF2YWlsYWJsZUNvbXBvbmVudHM6IGdldEF2YWlsYWJsZUNvbXBvbmVudHMsXG4gICAgc2hvd0FkZEJ1dHRvbjogY2FuQWRkTW9yZUNvbXBvbmVudHMsXG4gICAgYWN0aXZhdGlvblN0YXR1czogZ2V0QWN0aXZhdGlvblN0YXR1c1xuICB9O1xuICB2YXIgUEFHRV9NQVAgPSB7XG4gICAgY29udGVudDogWydAcGF0aCcsICcnXSxcbiAgICBkaWFsb2c6IFsnZGlhbG9nJywgJycsIGdldFZhbHVlRnJvbU9iamVjdF1cbiAgfTtcbiAgdmFyIEFSRUFfTUFQID0ge1xuICAgIG5hbWU6IFsnQG5hbWUnLCAnJ10sXG4gICAgY29udGVudDogUEFHRV9NQVAuY29udGVudCxcbiAgICBkaWFsb2c6IFBBR0VfTUFQLmRpYWxvZyxcbiAgICBhdmFpbGFibGVDb21wb25lbnRzOiBbJ2F2YWlsYWJsZUNvbXBvbmVudHMnLCBbXV0sXG4gICAgdHlwZTogWyd0eXBlJywgJ2xpc3QnLCBnZXRWYWx1ZUZyb21PYmplY3RdLFxuICAgIGxhYmVsOiBbJ3RpdGxlJywgJycsIGdldFZhbHVlRnJvbU9iamVjdF0sXG4gICAgaW5oZXJpdDogWydpbmhlcml0YW5jZScsIGZhbHNlLCBnZXRWYWx1ZUZyb21PYmplY3RdLFxuICAgIG9wdGlvbmFsOiBbJ29wdGlvbmFsJywgZmFsc2UsIGdldFZhbHVlRnJvbU9iamVjdF0sXG4gICAgY3JlYXRlZEFyZWFOb2RlOiBbJ2NyZWF0ZUFyZWFOb2RlJywgdHJ1ZSwgZ2V0VmFsdWVGcm9tT2JqZWN0XSxcbiAgICBzaG93QWRkQnV0dG9uOiBbJ21heENvbXBvbmVudHMnLCB0cnVlXSxcbiAgICBzaG93TmV3Q29tcG9uZW50QXJlYTogW251bGwsIHRydWVdLFxuICAgIGRlc2NyaXB0aW9uOiBbJ2Rlc2NyaXB0aW9uJywgJycsIGdldFZhbHVlRnJvbU9iamVjdF0sXG4gICAgYWN0aXZhdGlvblN0YXR1czogW251bGwsIDBdXG4gIH07XG4gIHZhciBDT01QT05FTlRfTUFQID0ge1xuICAgIGNvbnRlbnQ6IFBBR0VfTUFQLmNvbnRlbnQsXG4gICAgZGlhbG9nOiBQQUdFX01BUC5kaWFsb2csXG4gICAgbGFiZWw6IFsndGl0bGUnLCAnJywgZ2V0VmFsdWVGcm9tT2JqZWN0XSxcbiAgICBkZXNjcmlwdGlvbjogWydkZXNjcmlwdGlvbicsICcnLCBnZXRWYWx1ZUZyb21PYmplY3RdLFxuICAgIGFjdGl2YXRpb25TdGF0dXM6IFtudWxsLCAwXVxuICB9O1xuICByZXR1cm4ge1xuICAgIGdldEFyZWFDb21tZW50U3RyaW5nOiBnZXRBcmVhQ29tbWVudFN0cmluZyxcbiAgICBnZXRDb21wb25lbnRDb21tZW50U3RyaW5nOiBnZXRDb21wb25lbnRDb21tZW50U3RyaW5nLFxuICAgIGdldFBhZ2VDb21tZW50U3RyaW5nOiBnZXRQYWdlQ29tbWVudFN0cmluZ1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFBhZ2VDb21tZW50U3RyaW5nKHBhZ2UsIHRlbXBsYXRlRGVmaW5pdGlvbikge1xuICAgIHJldHVybiBcImNtczpwYWdlIFwiLmNvbmNhdChnZXRDb21tZW50U3RyaW5nKHBhZ2UsIFBBR0VfTUFQLCB0ZW1wbGF0ZURlZmluaXRpb24pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFyZWFDb21tZW50U3RyaW5nKGFyZWEsIHRlbXBsYXRlRGVmaW5pdGlvbiwgY29tcG9uZW50Q291bnQpIHtcbiAgICB2YXIgY3VzdG9tUGFyYW1zID0ge1xuICAgICAgY29tcG9uZW50Q291bnQ6IGNvbXBvbmVudENvdW50XG4gICAgfTtcbiAgICB2YXIgYXJlYVRlbXBsYXRlRGVmaW5pdGlvbiA9IHRlbXBsYXRlRGVmaW5pdGlvbiAmJiB0ZW1wbGF0ZURlZmluaXRpb24uYXJlYXMgPyB0ZW1wbGF0ZURlZmluaXRpb24uYXJlYXNbYXJlYVsnQG5hbWUnXV0gOiB7fTtcbiAgICByZXR1cm4gXCJjbXM6YXJlYSBcIi5jb25jYXQoZ2V0Q29tbWVudFN0cmluZyhhcmVhLCBBUkVBX01BUCwgYXJlYVRlbXBsYXRlRGVmaW5pdGlvbiwgY3VzdG9tUGFyYW1zKSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb21wb25lbnRDb21tZW50U3RyaW5nKGNvbXBvbmVudCwgdGVtcGxhdGVEZWZpbml0aW9uKSB7XG4gICAgcmV0dXJuIFwiY21zOmNvbXBvbmVudCBcIi5jb25jYXQoZ2V0Q29tbWVudFN0cmluZyhjb21wb25lbnQsIENPTVBPTkVOVF9NQVAsIHRlbXBsYXRlRGVmaW5pdGlvbikpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29tbWVudFN0cmluZyhkYXRhLCBtYXAsIHRlbXBsYXRlRGVmaW5pdGlvbiwgY3VzdG9tUGFyYW1zKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIE9iamVjdC5rZXlzKG1hcCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgX21hcCRrZXkgPSBfc2xpY2VkVG9BcnJheShtYXBba2V5XSwgMyksXG4gICAgICAgICAgZGF0YUtleSA9IF9tYXAka2V5WzBdLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IF9tYXAka2V5WzFdLFxuICAgICAgICAgIGdldERhdGFGbiA9IF9tYXAka2V5WzJdO1xuXG4gICAgICB2YXIgY29udGVudFByb2Nlc3NvciA9IFZBTFVFX1BST0NFU1NPUlNba2V5XTtcbiAgICAgIHZhciB2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblxuICAgICAgaWYgKGNvbnRlbnRQcm9jZXNzb3IpIHtcbiAgICAgICAgdmFsdWUgPSBjb250ZW50UHJvY2Vzc29yKGRhdGEsIGRhdGFLZXksIHRlbXBsYXRlRGVmaW5pdGlvbiwgY3VzdG9tUGFyYW1zKTtcbiAgICAgIH0gZWxzZSBpZiAoZ2V0RGF0YUZuKSB7XG4gICAgICAgIHZhbHVlID0gZ2V0RGF0YUZuKHRlbXBsYXRlRGVmaW5pdGlvbiwgZGF0YUtleSwgZGVmYXVsdFZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YSAhPSBudWxsICYmIGRhdGFLZXkgIT09IG51bGwpIHtcbiAgICAgICAgdmFsdWUgPSBkYXRhW2RhdGFLZXldIHx8ICcnO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXRlbSA9IHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVtLnZhbHVlICE9PSBcInN0cmluZ1wiIHx8IGl0ZW0udmFsdWUpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goXCJcIi5jb25jYXQoa2V5LCBcIj1cXFwiXCIpLmNvbmNhdChpdGVtLnZhbHVlLCBcIlxcXCJcIikpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQuam9pbignICcpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXZhaWxhYmxlQ29tcG9uZW50cyhhcmVhLCBkYXRhS2V5LCB0ZW1wbGF0ZURlZmluaXRpb24pIHtcbiAgICBpZiAoIXRlbXBsYXRlRGVmaW5pdGlvbiB8fCAhdGVtcGxhdGVEZWZpbml0aW9uW2RhdGFLZXldKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRlbXBsYXRlRGVmaW5pdGlvbltkYXRhS2V5XSkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiB0ZW1wbGF0ZURlZmluaXRpb25bZGF0YUtleV1ba2V5XS5pZDtcbiAgICB9KS5qb2luKCcsJyk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5BZGRNb3JlQ29tcG9uZW50cyhhcmVhLCBkYXRhS2V5LCB0ZW1wbGF0ZURlZmluaXRpb24sIGN1c3RvbVBhcmFtcykge1xuICAgIGlmICghdGVtcGxhdGVEZWZpbml0aW9uIHx8IHRlbXBsYXRlRGVmaW5pdGlvbi5tYXhDb21wb25lbnRzID09IG51bGwgfHwgIWN1c3RvbVBhcmFtcyB8fCBjdXN0b21QYXJhbXMuY29tcG9uZW50Q291bnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1c3RvbVBhcmFtcy5jb21wb25lbnRDb3VudCA8IHRlbXBsYXRlRGVmaW5pdGlvbi5tYXhDb21wb25lbnRzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VmFsdWVGcm9tT2JqZWN0KG9iaiwga2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICB2YXIgdmFsdWUgPSBvYmogJiYgX3R5cGVvZihvYmopID09PSAnb2JqZWN0JyAmJiBrZXkgPyBvYmpba2V5XSA6IG51bGw7XG4gICAgdmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gZGVmYXVsdFZhbHVlIDogdmFsdWU7XG4gICAgdmFsdWUgPSB0eXBlb2YgZGVmYXVsdFZhbHVlID09PSAnYm9vbGVhbicgPyBCb29sZWFuKHZhbHVlKSA6IHZhbHVlO1xuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsID8gdmFsdWUgOiBkZWZhdWx0VmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb250ZW50UGF0aChkYXRhLCBrZXkpIHtcbiAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVtrZXldIDogbnVsbDsgLy8gTk9URTogRW1wdHkgc3RyaW5nIGlzIGFjY2VwdGFibGUuIFNvIHdlIG5lZWQgY2hlY2sgdmFsdWUgIT0gbnVsbFxuXG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgPyBcIndlYnNpdGU6XCIuY29uY2F0KHZhbHVlKSA6ICcnO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QWN0aXZhdGlvblN0YXR1cyhkYXRhKSB7XG4gICAgaWYgKCFkYXRhIHx8ICFkYXRhWydtZ25sOmFjdGl2YXRpb25TdGF0dXMnXSB8fCBkYXRhWydtZ25sOmFjdGl2YXRpb25TdGF0dXMnXSA9PT0gJ2ZhbHNlJykge1xuICAgICAgcmV0dXJuIEFDVElWQVRJT05fU1RBVFVTX05PVF9BQ1RJVkFURUQ7XG4gICAgfVxuXG4gICAgdmFyIGxhc3RNb2RpZmllZCA9IGRhdGFbJ21nbmw6bGFzdE1vZGlmaWVkJ10gPyBuZXcgRGF0ZShkYXRhWydtZ25sOmxhc3RNb2RpZmllZCddKSA6IG51bGw7XG4gICAgdmFyIGxhc3RBY3RpdmF0ZWQgPSBkYXRhWydtZ25sOmxhc3RBY3RpdmF0ZWQnXSA/IG5ldyBEYXRlKGRhdGFbJ21nbmw6bGFzdEFjdGl2YXRlZCddKSA6IG51bGw7XG4gICAgcmV0dXJuIGxhc3RNb2RpZmllZCAmJiBsYXN0QWN0aXZhdGVkICYmIGxhc3RNb2RpZmllZC5nZXRUaW1lKCkgPiBsYXN0QWN0aXZhdGVkLmdldFRpbWUoKSA/IEFDVElWQVRJT05fU1RBVFVTX01PRElGSUVEIDogQUNUSVZBVElPTl9TVEFUVVNfQUNUSVZBVEVEO1xuICB9XG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoVGVtcGxhdGVBbm5vdGF0aW9ucygpKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvc2VydmljZS9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3NlcnZpY2UvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBUZW1wbGF0ZUFubm90YXRpb25zLCBFZGl0b3JDb250ZXh0SGVscGVyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9UZW1wbGF0ZUFubm90YXRpb25zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1RlbXBsYXRlQW5ub3RhdGlvbnMgKi8gXCIuL3NyYy9zZXJ2aWNlL1RlbXBsYXRlQW5ub3RhdGlvbnMuanNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJUZW1wbGF0ZUFubm90YXRpb25zXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX1RlbXBsYXRlQW5ub3RhdGlvbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX0VkaXRvckNvbnRleHRIZWxwZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vRWRpdG9yQ29udGV4dEhlbHBlciAqLyBcIi4vc3JjL3NlcnZpY2UvRWRpdG9yQ29udGV4dEhlbHBlci5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkVkaXRvckNvbnRleHRIZWxwZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfRWRpdG9yQ29udGV4dEhlbHBlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cblxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyAwOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBtdWx0aSAuL3NyYy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc3JjL2luZGV4LmpzICovXCIuL3NyYy9pbmRleC5qc1wiKTtcblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDSXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZhVzVrWlhndWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMM05sY25acFkyVXZSV1JwZEc5eVEyOXVkR1Y0ZEVobGJIQmxjaTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmMyVnlkbWxqWlM5VVpXMXdiR0YwWlVGdWJtOTBZWFJwYjI1ekxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTl6WlhKMmFXTmxMMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSWtWa2FYUnZja052Ym5SbGVIUklaV3h3WlhJaUxDSnBia1ZrYVhSdmNpSXNJbkpsWm5KbGMyZ2lMQ0pwYmtWa2FYUnZjbEJ5WlhacFpYY2lMQ0pwYmtsbWNtRnRaU0lzSW5kcGJtUnZkeUlzSWtKdmIyeGxZVzRpTENKbWNtRnRaVVZzWlcxbGJuUWlMQ0pqYkdGemMwNWhiV1VpTENKcGJtTnNkV1JsY3lJc0luQmhjbVZ1ZENJc0lteHZZMkYwYVc5dUlpd2lhR0Z6YUNJc0ltVnVaSE5YYVhSb0lpd2liV2R1YkZKbFpuSmxjMmdpTENKVVpXMXdiR0YwWlVGdWJtOTBZWFJwYjI1eklpd2lRVU5VU1ZaQlZFbFBUbDlUVkVGVVZWTmZUazlVWDBGRFZFbFdRVlJGUkNJc0lrRkRWRWxXUVZSSlQwNWZVMVJCVkZWVFgwMVBSRWxHU1VWRUlpd2lRVU5VU1ZaQlZFbFBUbDlUVkVGVVZWTmZRVU5VU1ZaQlZFVkVJaXdpVmtGTVZVVmZVRkpQUTBWVFUwOVNVeUlzSW1OdmJuUmxiblFpTENKblpYUkRiMjUwWlc1MFVHRjBhQ0lzSW1GMllXbHNZV0pzWlVOdmJYQnZibVZ1ZEhNaUxDSm5aWFJCZG1GcGJHRmliR1ZEYjIxd2IyNWxiblJ6SWl3aWMyaHZkMEZrWkVKMWRIUnZiaUlzSW1OaGJrRmtaRTF2Y21WRGIyMXdiMjVsYm5Seklpd2lZV04wYVhaaGRHbHZibE4wWVhSMWN5SXNJbWRsZEVGamRHbDJZWFJwYjI1VGRHRjBkWE1pTENKUVFVZEZYMDFCVUNJc0ltUnBZV3h2WnlJc0ltZGxkRlpoYkhWbFJuSnZiVTlpYW1WamRDSXNJa0ZTUlVGZlRVRlFJaXdpYm1GdFpTSXNJblI1Y0dVaUxDSnNZV0psYkNJc0ltbHVhR1Z5YVhRaUxDSnZjSFJwYjI1aGJDSXNJbU55WldGMFpXUkJjbVZoVG05a1pTSXNJbk5vYjNkT1pYZERiMjF3YjI1bGJuUkJjbVZoSWl3aVpHVnpZM0pwY0hScGIyNGlMQ0pEVDAxUVQwNUZUbFJmVFVGUUlpd2laMlYwUVhKbFlVTnZiVzFsYm5SVGRISnBibWNpTENKblpYUkRiMjF3YjI1bGJuUkRiMjF0Wlc1MFUzUnlhVzVuSWl3aVoyVjBVR0ZuWlVOdmJXMWxiblJUZEhKcGJtY2lMQ0p3WVdkbElpd2lkR1Z0Y0d4aGRHVkVaV1pwYm1sMGFXOXVJaXdpWjJWMFEyOXRiV1Z1ZEZOMGNtbHVaeUlzSW1GeVpXRWlMQ0pqYjIxd2IyNWxiblJEYjNWdWRDSXNJbU4xYzNSdmJWQmhjbUZ0Y3lJc0ltRnlaV0ZVWlcxd2JHRjBaVVJsWm1sdWFYUnBiMjRpTENKaGNtVmhjeUlzSW1OdmJYQnZibVZ1ZENJc0ltUmhkR0VpTENKdFlYQWlMQ0p5WlhOMWJIUWlMQ0pQWW1wbFkzUWlMQ0pyWlhseklpd2labTl5UldGamFDSXNJbXRsZVNJc0ltUmhkR0ZMWlhraUxDSmtaV1poZFd4MFZtRnNkV1VpTENKblpYUkVZWFJoUm00aUxDSmpiMjUwWlc1MFVISnZZMlZ6YzI5eUlpd2lkbUZzZFdVaUxDSnBkR1Z0SWl3aWNIVnphQ0lzSW1wdmFXNGlMQ0pwWkNJc0ltMWhlRU52YlhCdmJtVnVkSE1pTENKdlltb2lMQ0pzWVhOMFRXOWthV1pwWldRaUxDSkVZWFJsSWl3aWJHRnpkRUZqZEdsMllYUmxaQ0lzSW1kbGRGUnBiV1VpWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdRVUZEUkN4UE8xRkRWa0U3VVVGRFFUczdVVUZGUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTzFGQlEwRTdPenRSUVVkQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFTd3dRMEZCTUVNc1owTkJRV2RETzFGQlF6RkZPMUZCUTBFN08xRkJSVUU3VVVGRFFUdFJRVU5CTzFGQlEwRXNkMFJCUVhkRUxHdENRVUZyUWp0UlFVTXhSVHRSUVVOQkxHbEVRVUZwUkN4alFVRmpPMUZCUXk5RU96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVN4NVEwRkJlVU1zYVVOQlFXbERPMUZCUXpGRkxHZElRVUZuU0N4dFFrRkJiVUlzUlVGQlJUdFJRVU55U1R0UlFVTkJPenRSUVVWQk8xRkJRMEU3VVVGRFFUdFJRVU5CTERKQ1FVRXlRaXd3UWtGQk1FSXNSVUZCUlR0UlFVTjJSQ3hwUTBGQmFVTXNaVUZCWlR0UlFVTm9SRHRSUVVOQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVN4elJFRkJjMFFzSzBSQlFTdEVPenRSUVVWeVNEdFJRVU5CT3pzN1VVRkhRVHRSUVVOQk96czdPenM3T3pzN096czdPMEZEYkVaQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVRzN096czdPenM3T3pzN096dEJRMEZCTzBGQlFVRXNVMEZCVTBFc2JVSkJRVlFzUjBGQkswSTdRVUZETTBJc1UwRkJUenRCUVVOSVF5eFpRVUZSTEVWQlFWSkJMRkZCUkVjN1FVRkZTRU1zVjBGQlR5eEZRVUZRUVN4UFFVWkhPMEZCUjBoRExHMUNRVUZsTEVWQlFXWkJPMEZCU0Vjc1IwRkJVRHM3UVVGTlFTeFhRVUZUUXl4UlFVRlVMRWRCUVc5Q08wRkJRMmhDTEZGQlFVa3NUMEZCVDBNc1RVRkJVQ3hMUVVGclFpeFhRVUYwUWl4RlFVRnRRenRCUVVNdlFpeGhRVUZQTEV0QlFWQTdRVUZEU0RzN1FVRkRSQ3hYUVVGUFF5eFBRVUZQTEVOQlFVTkVMRTFCUVUwc1EwRkJRMFVzV1VGQlVDeEpRVUYxUWtZc1RVRkJUU3hEUVVGRFJTeFpRVUZRTEVOQlFXOUNReXhUUVVGd1FpeERRVUU0UWtNc1VVRkJPVUlzUTBGQmRVTXNWMEZCZGtNc1EwRkJlRUlzUTBGQlpEdEJRVU5JT3p0QlFVVkVMRmRCUVZOU0xGRkJRVlFzUjBGQmIwSTdRVUZEYUVJc1YwRkJUMGNzVVVGQlVTeE5RVUZOUXl4TlFVRk5MRU5CUVVOTExFMUJRVkFzUTBGQlkwTXNVVUZCWkN4RFFVRjFRa01zU1VGQmRrSXNRMEZCTkVKRExGRkJRVFZDTEVOQlFYRkRMRTlCUVhKRExFTkJRWEpDTzBGQlEwZzdPMEZCUlVRc1YwRkJVMVlzWlVGQlZDeEhRVUV5UWp0QlFVTjJRaXhYUVVGUFF5eFJRVUZSTEUxQlFVMURMRTFCUVUwc1EwRkJRMHNzVFVGQlVDeERRVUZqUXl4UlFVRmtMRU5CUVhWQ1F5eEpRVUYyUWl4RFFVRTBRa01zVVVGQk5VSXNRMEZCY1VNc1QwRkJja01zUTBGQmNrSTdRVUZEU0RzN1FVRkZSQ3hYUVVGVFdDeFBRVUZVTEVkQlFXMUNPMEZCUTJZc1VVRkJTVVFzVVVGQlVTeE5RVUZOU1N4TlFVRk5MRU5CUVVOTExFMUJRVkFzUTBGQlkwa3NWMEZCYUVNc1JVRkJOa003UVVGRGVrTlVMRmxCUVUwc1EwRkJRMHNzVFVGQlVDeERRVUZqU1N4WFFVRmtPMEZCUTBnN1FVRkRTanRCUVVOS096dEJRVVZqWkN4clJrRkJiVUlzUlVGQmJFTXNSVHM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVTTNRa0VzVTBGQlUyVXNiVUpCUVZRc1IwRkJLMEk3UVVGRE0wSXNUVUZCVFVNc0swSkJRU3RDTEVkQlFVY3NRMEZCZUVNN1FVRkRRU3hOUVVGTlF5d3dRa0ZCTUVJc1IwRkJSeXhEUVVGdVF6dEJRVU5CTEUxQlFVMURMREpDUVVFeVFpeEhRVUZITEVOQlFYQkRPMEZCUlVFc1RVRkJUVU1zWjBKQlFXZENMRWRCUVVjN1FVRkRja0pETEZkQlFVOHNSVUZCUlVNc1kwRkVXVHRCUVVWeVFrTXNkVUpCUVcxQ0xFVkJRVVZETEhOQ1FVWkJPMEZCUjNKQ1F5eHBRa0ZCWVN4RlFVRkZReXh2UWtGSVRUdEJRVWx5UWtNc2IwSkJRV2RDTEVWQlFVVkRPMEZCU2tjc1IwRkJla0k3UVVGTlFTeE5RVUZOUXl4UlFVRlJMRWRCUVVjN1FVRkRZbElzVjBGQlR5eEZRVUZGTEVOQlFVTXNUMEZCUkN4RlFVRlZMRVZCUVZZc1EwRkVTVHRCUVVWaVV5eFZRVUZOTEVWQlFVVXNRMEZCUXl4UlFVRkVMRVZCUVZjc1JVRkJXQ3hGUVVGbFF5eHJRa0ZCWmp0QlFVWkxMRWRCUVdwQ08wRkJTVUVzVFVGQlRVTXNVVUZCVVN4SFFVRkhPMEZCUTJKRExGRkJRVWtzUlVGQlJTeERRVUZETEU5QlFVUXNSVUZCVlN4RlFVRldMRU5CUkU4N1FVRkZZbG9zVjBGQlR5eEZRVUZGVVN4UlFVRlJMRU5CUVVOU0xFOUJSa3c3UVVGSFlsTXNWVUZCVFN4RlFVRkZSQ3hSUVVGUkxFTkJRVU5ETEUxQlNFbzdRVUZKWWxBc2RVSkJRVzFDTEVWQlFVVXNRMEZCUXl4eFFrRkJSQ3hGUVVGM1FpeEZRVUY0UWl4RFFVcFNPMEZCUzJKWExGRkJRVWtzUlVGQlJTeERRVUZETEUxQlFVUXNSVUZCVXl4TlFVRlVMRVZCUVdsQ1NDeHJRa0ZCYWtJc1EwRk1UenRCUVUxaVNTeFRRVUZMTEVWQlFVVXNRMEZCUXl4UFFVRkVMRVZCUVZVc1JVRkJWaXhGUVVGalNpeHJRa0ZCWkN4RFFVNU5PMEZCVDJKTExGZEJRVThzUlVGQlJTeERRVUZETEdGQlFVUXNSVUZCWjBJc1MwRkJhRUlzUlVGQmRVSk1MR3RDUVVGMlFpeERRVkJKTzBGQlVXSk5MRmxCUVZFc1JVRkJSU3hEUVVGRExGVkJRVVFzUlVGQllTeExRVUZpTEVWQlFXOUNUaXhyUWtGQmNFSXNRMEZTUnp0QlFWTmlUeXh0UWtGQlpTeEZRVUZGTEVOQlFVTXNaMEpCUVVRc1JVRkJiVUlzU1VGQmJrSXNSVUZCZVVKUUxHdENRVUY2UWl4RFFWUktPMEZCVldKT0xHbENRVUZoTEVWQlFVVXNRMEZCUXl4bFFVRkVMRVZCUVd0Q0xFbEJRV3hDTEVOQlZrWTdRVUZYWW1Nc2QwSkJRVzlDTEVWQlFVVXNRMEZCUXl4SlFVRkVMRVZCUVU4c1NVRkJVQ3hEUVZoVU8wRkJXV0pETEdWQlFWY3NSVUZCUlN4RFFVRkRMR0ZCUVVRc1JVRkJaMElzUlVGQmFFSXNSVUZCYjBKVUxHdENRVUZ3UWl4RFFWcEJPMEZCWVdKS0xHOUNRVUZuUWl4RlFVRkZMRU5CUVVNc1NVRkJSQ3hGUVVGUExFTkJRVkE3UVVGaVRDeEhRVUZxUWp0QlFXZENRU3hOUVVGTll5eGhRVUZoTEVkQlFVYzdRVUZEYkVKd1FpeFhRVUZQTEVWQlFVVlJMRkZCUVZFc1EwRkJRMUlzVDBGRVFUdEJRVVZzUWxNc1ZVRkJUU3hGUVVGRlJDeFJRVUZSTEVOQlFVTkRMRTFCUmtNN1FVRkhiRUpMTEZOQlFVc3NSVUZCUlN4RFFVRkRMRTlCUVVRc1JVRkJWU3hGUVVGV0xFVkJRV05LTEd0Q1FVRmtMRU5CU0ZjN1FVRkpiRUpUTEdWQlFWY3NSVUZCUlN4RFFVRkRMR0ZCUVVRc1JVRkJaMElzUlVGQmFFSXNSVUZCYjBKVUxHdENRVUZ3UWl4RFFVcExPMEZCUzJ4Q1NpeHZRa0ZCWjBJc1JVRkJSU3hEUVVGRExFbEJRVVFzUlVGQlR5eERRVUZRTzBGQlRFRXNSMEZCZEVJN1FVRlBRU3hUUVVGUE8wRkJRMGhsTEhkQ1FVRnZRaXhGUVVGd1FrRXNiMEpCUkVjN1FVRkZTRU1zTmtKQlFYbENMRVZCUVhwQ1FTeDVRa0ZHUnp0QlFVZElReXgzUWtGQmIwSXNSVUZCY0VKQk8wRkJTRWNzUjBGQlVEczdRVUZOUVN4WFFVRlRRU3h2UWtGQlZDeERRVUU0UWtNc1NVRkJPVUlzUlVGQmIwTkRMR3RDUVVGd1F5eEZRVUYzUkR0QlFVTndSQ3c0UWtGQmJVSkRMR2RDUVVGblFpeERRVUZEUml4SlFVRkVMRVZCUVU5b1FpeFJRVUZRTEVWQlFXbENhVUlzYTBKQlFXcENMRU5CUVc1RE8wRkJRMGc3TzBGQlJVUXNWMEZCVTBvc2IwSkJRVlFzUTBGQk9FSk5MRWxCUVRsQ0xFVkJRVzlEUml4clFrRkJjRU1zUlVGQmQwUkhMR05CUVhoRUxFVkJRWGRGTzBGQlEzQkZMRkZCUVUxRExGbEJRVmtzUjBGQlJ6dEJRVUZGUkN4dlFrRkJZeXhGUVVGa1FUdEJRVUZHTEV0QlFYSkNPMEZCUTBFc1VVRkJUVVVzYzBKQlFYTkNMRWRCUVVkTUxHdENRVUZyUWl4SlFVRkpRU3hyUWtGQmEwSXNRMEZCUTAwc1MwRkJla01zUjBGQmFVUk9MR3RDUVVGclFpeERRVUZEVFN4TFFVRnVRaXhEUVVGNVFrb3NTVUZCU1N4RFFVRkRMRTlCUVVRc1EwRkJOMElzUTBGQmFrUXNSMEZCTWtZc1JVRkJNVWc3UVVGRFFTdzRRa0ZCYlVKRUxHZENRVUZuUWl4RFFVRkRReXhKUVVGRUxFVkJRVTlvUWl4UlFVRlFMRVZCUVdsQ2JVSXNjMEpCUVdwQ0xFVkJRWGxEUkN4WlFVRjZReXhEUVVGdVF6dEJRVU5JT3p0QlFVVkVMRmRCUVZOUUxIbENRVUZVTEVOQlFXMURWU3hUUVVGdVF5eEZRVUU0UTFBc2EwSkJRVGxETEVWQlFXdEZPMEZCUXpsRUxHMURRVUYzUWtNc1owSkJRV2RDTEVOQlFVTk5MRk5CUVVRc1JVRkJXVm9zWVVGQldpeEZRVUV5UWtzc2EwSkJRVE5DTEVOQlFYaERPMEZCUTBnN08wRkJSVVFzVjBGQlUwTXNaMEpCUVZRc1EwRkJNRUpQTEVsQlFURkNMRVZCUVdkRFF5eEhRVUZvUXl4RlFVRnhRMVFzYTBKQlFYSkRMRVZCUVhsRVNTeFpRVUY2UkN4RlFVRjFSVHRCUVVOdVJTeFJRVUZOVFN4TlFVRk5MRWRCUVVjc1JVRkJaanRCUVVOQlF5eFZRVUZOTEVOQlFVTkRMRWxCUVZBc1EwRkJXVWdzUjBGQldpeEZRVUZwUWtrc1QwRkJha0lzUTBGQmVVSXNWVUZCUVVNc1IwRkJSeXhGUVVGSk8wRkJRVUVzYjBOQlEyVk1MRWRCUVVjc1EwRkJRMHNzUjBGQlJDeERRVVJzUWp0QlFVRkJMRlZCUTNKQ1F5eFBRVVJ4UWp0QlFVRkJMRlZCUTFwRExGbEJSRms3UVVGQlFTeFZRVU5GUXl4VFFVUkdPenRCUVVVMVFpeFZRVUZOUXl4blFrRkJaMElzUjBGQlJ6VkRMR2RDUVVGblFpeERRVUZEZDBNc1IwRkJSQ3hEUVVGNlF6dEJRVU5CTEZWQlFVbExMRXRCUVVzc1IwRkJSMGdzV1VGQldqczdRVUZEUVN4VlFVRkpSU3huUWtGQlNpeEZRVUZ6UWp0QlFVTnNRa01zWVVGQlN5eEhRVUZIUkN4blFrRkJaMElzUTBGQlExWXNTVUZCUkN4RlFVRlBUeXhQUVVGUUxFVkJRV2RDWml4clFrRkJhRUlzUlVGQmIwTkpMRmxCUVhCRExFTkJRWGhDTzBGQlEwZ3NUMEZHUkN4TlFVVlBMRWxCUVVsaExGTkJRVW9zUlVGQlpUdEJRVU5zUWtVc1lVRkJTeXhIUVVGSFJpeFRRVUZUTEVOQlFVTnFRaXhyUWtGQlJDeEZRVUZ4UW1Vc1QwRkJja0lzUlVGQk9FSkRMRmxCUVRsQ0xFTkJRV3BDTzBGQlEwZ3NUMEZHVFN4TlFVVkJMRWxCUVVsU0xFbEJRVWtzU1VGQlNTeEpRVUZTTEVsQlFXZENUeXhQUVVGUExFdEJRVXNzU1VGQmFFTXNSVUZCYzBNN1FVRkRla05KTEdGQlFVc3NSMEZCUjFnc1NVRkJTU3hEUVVGRFR5eFBRVUZFTEVOQlFVb3NTVUZCYVVJc1JVRkJla0k3UVVGRFNEczdRVUZEUkN4VlFVRk5TeXhKUVVGSkxFZEJRVWM3UVVGQlJVNHNWMEZCUnl4RlFVRklRU3hIUVVGR08wRkJRVTlMTEdGQlFVc3NSVUZCVEVFN1FVRkJVQ3hQUVVGaU96dEJRVVZCTEZWQlFVa3NUMEZCVDBNc1NVRkJTU3hEUVVGRFJDeExRVUZhTEV0QlFYTkNMRkZCUVhSQ0xFbEJRV3REUXl4SlFVRkpMRU5CUVVORUxFdEJRVE5ETEVWQlFXdEVPMEZCUXpsRFZDeGpRVUZOTEVOQlFVTlhMRWxCUVZBc1YwRkJaVkFzUjBGQlppeG5Ra0ZCZFVKTkxFbEJRVWtzUTBGQlEwUXNTMEZCTlVJN1FVRkRTRHRCUVVOS0xFdEJhRUpFTzBGQmEwSkJMRmRCUVU5VUxFMUJRVTBzUTBGQlExa3NTVUZCVUN4RFFVRlpMRWRCUVZvc1EwRkJVRHRCUVVOSU96dEJRVVZFTEZkQlFWTTFReXh6UWtGQlZDeERRVUZuUTNkQ0xFbEJRV2hETEVWQlFYTkRZU3hQUVVGMFF5eEZRVUVyUTJZc2EwSkJRUzlETEVWQlFXMUZPMEZCUXk5RUxGRkJRVWtzUTBGQlEwRXNhMEpCUVVRc1NVRkJkVUlzUTBGQlEwRXNhMEpCUVd0Q0xFTkJRVU5sTEU5QlFVUXNRMEZCT1VNc1JVRkJlVVE3UVVGRGNrUXNZVUZCVHl4RlFVRlFPMEZCUTBnN08wRkJSVVFzVjBGQlQwb3NUVUZCVFN4RFFVRkRReXhKUVVGUUxFTkJRVmxhTEd0Q1FVRnJRaXhEUVVGRFpTeFBRVUZFTEVOQlFUbENMRVZCUVhsRFRpeEhRVUY2UXl4RFFVRTJReXhWUVVGQlN5eEhRVUZITzBGQlFVRXNZVUZCU1dRc2EwSkJRV3RDTEVOQlFVTmxMRTlCUVVRc1EwRkJiRUlzUTBGQk5FSkVMRWRCUVRWQ0xFVkJRV2xEVXl4RlFVRnlRenRCUVVGQkxFdEJRV2hFTEVWQlFYbEdSQ3hKUVVGNlJpeERRVUU0Uml4SFFVRTVSaXhEUVVGUU8wRkJRMGc3TzBGQlJVUXNWMEZCVXpGRExHOUNRVUZVTEVOQlFUaENjMElzU1VGQk9VSXNSVUZCYjBOaExFOUJRWEJETEVWQlFUWkRaaXhyUWtGQk4wTXNSVUZCYVVWSkxGbEJRV3BGTEVWQlFTdEZPMEZCUXpORkxGRkJRVWtzUTBGQlEwb3NhMEpCUVVRc1NVRkJkVUpCTEd0Q1FVRnJRaXhEUVVGRGQwSXNZVUZCYmtJc1NVRkJiME1zU1VGQk0wUXNTVUZCYlVVc1EwRkJRM0JDTEZsQlFYQkZMRWxCUVc5R1FTeFpRVUZaTEVOQlFVTkVMR05CUVdJc1NVRkJLMElzU1VGQmRrZ3NSVUZCTmtnN1FVRkRla2dzWVVGQlR5eEpRVUZRTzBGQlEwZzdPMEZCUTBRc1YwRkJUME1zV1VGQldTeERRVUZEUkN4alFVRmlMRWRCUVRoQ1NDeHJRa0ZCYTBJc1EwRkJRM2RDTEdGQlFYaEVPMEZCUTBnN08wRkJSVVFzVjBGQlUzWkRMR3RDUVVGVUxFTkJRVFJDZDBNc1IwRkJOVUlzUlVGQmFVTllMRWRCUVdwRExFVkJRWE5EUlN4WlFVRjBReXhGUVVGdlJEdEJRVU5vUkN4UlFVRkpSeXhMUVVGTExFZEJRVWROTEVkQlFVY3NTVUZCU1N4UlFVRlBRU3hIUVVGUUxFMUJRV1VzVVVGQmRFSXNTVUZCYTBOWUxFZEJRV3hETEVkQlFYZERWeXhIUVVGSExFTkJRVU5ZTEVkQlFVUXNRMEZCTTBNc1IwRkJiVVFzU1VGQkwwUTdRVUZEUVVzc1UwRkJTeXhIUVVGSFFTeExRVUZMTEVsQlFVa3NTVUZCVkN4SFFVRm5Ra2dzV1VGQmFFSXNSMEZCSzBKSExFdEJRWFpETzBGQlEwRkJMRk5CUVVzc1IwRkJSeXhQUVVGUFNDeFpRVUZRTEV0QlFYZENMRk5CUVhoQ0xFZEJRVzlEZGtRc1QwRkJUeXhEUVVGRE1FUXNTMEZCUkN4RFFVRXpReXhIUVVGeFJFRXNTMEZCTjBRN1FVRkRRU3hYUVVGUFFTeExRVUZMTEVsQlFVa3NTVUZCVkN4SFFVRm5Ra0VzUzBGQmFFSXNSMEZCZDBKSUxGbEJRUzlDTzBGQlEwZzdPMEZCUlVRc1YwRkJVM2hETEdOQlFWUXNRMEZCZDBKblF5eEpRVUY0UWl4RlFVRTRRazBzUjBGQk9VSXNSVUZCYlVNN1FVRkRMMElzVVVGQlRVc3NTMEZCU3l4SFFVRkhXQ3hKUVVGSkxFZEJRVWRCTEVsQlFVa3NRMEZCUTAwc1IwRkJSQ3hEUVVGUUxFZEJRV1VzU1VGQmFrTXNRMEZFSzBJc1EwRkZMMEk3TzBGQlEwRXNWMEZCVDBzc1MwRkJTeXhKUVVGSkxFbEJRVlFzY1VKQlFUSkNRU3hMUVVFelFpeEpRVUZ4UXl4RlFVRTFRenRCUVVOSU96dEJRVVZFTEZkQlFWTnlReXh0UWtGQlZDeERRVUUyUWpCQ0xFbEJRVGRDTEVWQlFXMURPMEZCUXk5Q0xGRkJRVWtzUTBGQlEwRXNTVUZCUkN4SlFVRlRMRU5CUVVOQkxFbEJRVWtzUTBGQlF5eDFRa0ZCUkN4RFFVRmtMRWxCUVRKRFFTeEpRVUZKTEVOQlFVTXNkVUpCUVVRc1EwRkJTaXhMUVVGclF5eFBRVUZxUml4RlFVRXdSanRCUVVOMFJpeGhRVUZQY2tNc0swSkJRVkE3UVVGRFNEczdRVUZGUkN4UlFVRk5kVVFzV1VGQldTeEhRVUZIYkVJc1NVRkJTU3hEUVVGRExHMUNRVUZFTEVOQlFVb3NSMEZCTkVJc1NVRkJTVzFDTEVsQlFVb3NRMEZCVTI1Q0xFbEJRVWtzUTBGQlF5eHRRa0ZCUkN4RFFVRmlMRU5CUVRWQ0xFZEJRV3RGTEVsQlFYWkdPMEZCUTBFc1VVRkJUVzlDTEdGQlFXRXNSMEZCUjNCQ0xFbEJRVWtzUTBGQlF5eHZRa0ZCUkN4RFFVRktMRWRCUVRaQ0xFbEJRVWx0UWl4SlFVRktMRU5CUVZOdVFpeEpRVUZKTEVOQlFVTXNiMEpCUVVRc1EwRkJZaXhEUVVFM1FpeEhRVUZ2UlN4SlFVRXhSanRCUVVWQkxGZEJRVTlyUWl4WlFVRlpMRWxCUVVsRkxHRkJRV2hDTEVsQlFXbERSaXhaUVVGWkxFTkJRVU5ITEU5QlFXSXNTMEZCZVVKRUxHRkJRV0VzUTBGQlEwTXNUMEZCWkN4RlFVRXhSQ3hIUVVGdlJucEVMREJDUVVGd1JpeEhRVUZwU0VNc01rSkJRWGhJTzBGQlEwZzdRVUZEU2pzN1FVRkZZMGdzYTBaQlFXMUNMRVZCUVd4RExFVTdPenM3T3pzN096czdPenRCUTNwSVFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQklpd2labWxzWlNJNkltMW5ibXd0YzJWeWRtbGpaUzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpQjNaV0p3WVdOclZXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmloeWIyOTBMQ0JtWVdOMGIzSjVLU0I3WEc1Y2RHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMGVYQmxiMllnYlc5a2RXeGxJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJ0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1poWTNSdmNua29LVHRjYmx4MFpXeHpaU0JwWmloMGVYQmxiMllnWkdWbWFXNWxJRDA5UFNBblpuVnVZM1JwYjI0bklDWW1JR1JsWm1sdVpTNWhiV1FwWEc1Y2RGeDBaR1ZtYVc1bEtGdGRMQ0JtWVdOMGIzSjVLVHRjYmx4MFpXeHpaU0I3WEc1Y2RGeDBkbUZ5SUdFZ1BTQm1ZV04wYjNKNUtDazdYRzVjZEZ4MFptOXlLSFpoY2lCcElHbHVJR0VwSUNoMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjZ1B5QmxlSEJ2Y25SeklEb2djbTl2ZENsYmFWMGdQU0JoVzJsZE8xeHVYSFI5WEc1OUtTaDBhR2x6TENCbWRXNWpkR2x2YmlncElIdGNibkpsZEhWeWJpQWlMQ0lnWEhRdkx5QlVhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFIyWVhJZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3lBOUlIdDlPMXh1WEc0Z1hIUXZMeUJVYUdVZ2NtVnhkV2x5WlNCbWRXNWpkR2x2Ymx4dUlGeDBablZ1WTNScGIyNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2tnZTF4dVhHNGdYSFJjZEM4dklFTm9aV05ySUdsbUlHMXZaSFZzWlNCcGN5QnBiaUJqWVdOb1pWeHVJRngwWEhScFppaHBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTa2dlMXh1SUZ4MFhIUmNkSEpsZEhWeWJpQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTNWxlSEJ2Y25Sek8xeHVJRngwWEhSOVhHNGdYSFJjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzRnWEhSY2RIWmhjaUJ0YjJSMWJHVWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU0E5SUh0Y2JpQmNkRngwWEhScE9pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUnNPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmxlSEJ2Y25Sek9pQjdmVnh1SUZ4MFhIUjlPMXh1WEc0Z1hIUmNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dUlGeDBYSFJ0YjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1R0Y2JseHVJRngwWEhRdkx5QkdiR0ZuSUhSb1pTQnRiMlIxYkdVZ1lYTWdiRzloWkdWa1hHNGdYSFJjZEcxdlpIVnNaUzVzSUQwZ2RISjFaVHRjYmx4dUlGeDBYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1SUZ4MFhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc0Z1hIUjlYRzVjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1Z6SUc5aWFtVmpkQ0FvWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWHlsY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YlNBOUlHMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU1nUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ0E5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1zSUc1aGJXVXNJR2RsZEhSbGNpa2dlMXh1SUZ4MFhIUnBaaWdoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHVjRjRzl5ZEhNc0lHNWhiV1VwS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRzVoYldVc0lIc2daVzUxYldWeVlXSnNaVG9nZEhKMVpTd2daMlYwT2lCblpYUjBaWElnZlNrN1hHNGdYSFJjZEgxY2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JmWDJWelRXOWtkV3hsSUc5dUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNcElIdGNiaUJjZEZ4MGFXWW9kSGx3Wlc5bUlGTjViV0p2YkNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbktTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUZONWJXSnZiQzUwYjFOMGNtbHVaMVJoWnl3Z2V5QjJZV3gxWlRvZ0owMXZaSFZzWlNjZ2ZTazdYRzRnWEhSY2RIMWNiaUJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJQ2RmWDJWelRXOWtkV3hsSnl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdOeVpXRjBaU0JoSUdaaGEyVWdibUZ0WlhOd1lXTmxJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURFNklIWmhiSFZsSUdseklHRWdiVzlrZFd4bElHbGtMQ0J5WlhGMWFYSmxJR2wwWEc0Z1hIUXZMeUJ0YjJSbElDWWdNam9nYldWeVoyVWdZV3hzSUhCeWIzQmxjblJwWlhNZ2IyWWdkbUZzZFdVZ2FXNTBieUIwYUdVZ2JuTmNiaUJjZEM4dklHMXZaR1VnSmlBME9pQnlaWFIxY200Z2RtRnNkV1VnZDJobGJpQmhiSEpsWVdSNUlHNXpJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURoOE1Ub2dZbVZvWVhabElHeHBhMlVnY21WeGRXbHlaVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NTBJRDBnWm5WdVkzUnBiMjRvZG1Gc2RXVXNJRzF2WkdVcElIdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlERXBJSFpoYkhWbElEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWgyWVd4MVpTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQTRLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEdsbUtDaHRiMlJsSUNZZ05Da2dKaVlnZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMllXeDFaU0FtSmlCMllXeDFaUzVmWDJWelRXOWtkV3hsS1NCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnWEhSY2RIWmhjaUJ1Y3lBOUlFOWlhbVZqZEM1amNtVmhkR1VvYm5Wc2JDazdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaWh1Y3lrN1hHNGdYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaHVjeXdnSjJSbFptRjFiSFFuTENCN0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc0lIWmhiSFZsT2lCMllXeDFaU0I5S1R0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURJZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUNFOUlDZHpkSEpwYm1jbktTQm1iM0lvZG1GeUlHdGxlU0JwYmlCMllXeDFaU2tnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHNXpMQ0JyWlhrc0lHWjFibU4wYVc5dUtHdGxlU2tnZXlCeVpYUjFjbTRnZG1Gc2RXVmJhMlY1WFRzZ2ZTNWlhVzVrS0c1MWJHd3NJR3RsZVNrcE8xeHVJRngwWEhSeVpYUjFjbTRnYm5NN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCblpYUkVaV1poZFd4MFJYaHdiM0owSUdaMWJtTjBhVzl1SUdadmNpQmpiMjF3WVhScFltbHNhWFI1SUhkcGRHZ2dibTl1TFdoaGNtMXZibmtnYlc5a2RXeGxjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXVJRDBnWm5WdVkzUnBiMjRvYlc5a2RXeGxLU0I3WEc0Z1hIUmNkSFpoY2lCblpYUjBaWElnUFNCdGIyUjFiR1VnSmlZZ2JXOWtkV3hsTGw5ZlpYTk5iMlIxYkdVZ1AxeHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRVJsWm1GMWJIUW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVmJKMlJsWm1GMWJIUW5YVHNnZlNBNlhHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBUVzlrZFd4bFJYaHdiM0owY3lncElIc2djbVYwZFhKdUlHMXZaSFZzWlRzZ2ZUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLR2RsZEhSbGNpd2dKMkVuTENCblpYUjBaWElwTzF4dUlGeDBYSFJ5WlhSMWNtNGdaMlYwZEdWeU8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c1hHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04Z1BTQm1kVzVqZEdsdmJpaHZZbXBsWTNRc0lIQnliM0JsY25SNUtTQjdJSEpsZEhWeWJpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxWldOMExDQndjbTl3WlhKMGVTazdJSDA3WEc1Y2JpQmNkQzh2SUY5ZmQyVmljR0ZqYTE5d2RXSnNhV05mY0dGMGFGOWZYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuQWdQU0JjSWx3aU8xeHVYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXpJRDBnTUNrN1hHNGlMQ0psZUhCdmNuUWdleUJVWlcxd2JHRjBaVUZ1Ym05MFlYUnBiMjV6TENCRlpHbDBiM0pEYjI1MFpYaDBTR1ZzY0dWeUlIMGdabkp2YlNBbkxpOXpaWEoyYVdObEp6dGNiaUlzSW1aMWJtTjBhVzl1SUVWa2FYUnZja052Ym5SbGVIUklaV3h3WlhJb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUNBZ2FXNUZaR2wwYjNJc1hHNGdJQ0FnSUNBZ0lISmxabkpsYzJnc1hHNGdJQ0FnSUNBZ0lHbHVSV1JwZEc5eVVISmxkbWxsZDF4dUlDQWdJSDA3WEc1Y2JpQWdJQ0JtZFc1amRHbHZiaUJwYmtsbWNtRnRaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFI1Y0dWdlppQjNhVzVrYjNjZ1BUMDlJQ2QxYm1SbFptbHVaV1FuS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlFSnZiMnhsWVc0b2QybHVaRzkzTG1aeVlXMWxSV3hsYldWdWRDQW1KaUIzYVc1a2IzY3VabkpoYldWRmJHVnRaVzUwTG1Oc1lYTnpUbUZ0WlM1cGJtTnNkV1JsY3lnblozZDBMVVp5WVcxbEp5a3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHWjFibU4wYVc5dUlHbHVSV1JwZEc5eUtDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdhVzVKWm5KaGJXVW9LU0FtSmlCM2FXNWtiM2N1Y0dGeVpXNTBMbXh2WTJGMGFXOXVMbWhoYzJndVpXNWtjMWRwZEdnb0p6cGxaR2wwSnlrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWm5WdVkzUnBiMjRnYVc1RlpHbDBiM0pRY21WMmFXVjNLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYVc1SlpuSmhiV1VvS1NBbUppQjNhVzVrYjNjdWNHRnlaVzUwTG14dlkyRjBhVzl1TG1oaGMyZ3VaVzVrYzFkcGRHZ29KenAyYVdWM0p5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1puVnVZM1JwYjI0Z2NtVm1jbVZ6YUNncElIdGNiaUFnSUNBZ0lDQWdhV1lnS0dsdVJXUnBkRzl5S0NrZ0ppWWdkMmx1Wkc5M0xuQmhjbVZ1ZEM1dFoyNXNVbVZtY21WemFDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2QybHVaRzkzTG5CaGNtVnVkQzV0WjI1c1VtVm1jbVZ6YUNncE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JGWkdsMGIzSkRiMjUwWlhoMFNHVnNjR1Z5S0NrN1hHNGlMQ0ptZFc1amRHbHZiaUJVWlcxd2JHRjBaVUZ1Ym05MFlYUnBiMjV6S0NrZ2UxeHVJQ0FnSUdOdmJuTjBJRUZEVkVsV1FWUkpUMDVmVTFSQlZGVlRYMDVQVkY5QlExUkpWa0ZVUlVRZ1BTQXdPMXh1SUNBZ0lHTnZibk4wSUVGRFZFbFdRVlJKVDA1ZlUxUkJWRlZUWDAxUFJFbEdTVVZFSUQwZ01UdGNiaUFnSUNCamIyNXpkQ0JCUTFSSlZrRlVTVTlPWDFOVVFWUlZVMTlCUTFSSlZrRlVSVVFnUFNBeU8xeHVYRzRnSUNBZ1kyOXVjM1FnVmtGTVZVVmZVRkpQUTBWVFUwOVNVeUE5SUh0Y2JpQWdJQ0FnSUNBZ1kyOXVkR1Z1ZERvZ1oyVjBRMjl1ZEdWdWRGQmhkR2dzWEc0Z0lDQWdJQ0FnSUdGMllXbHNZV0pzWlVOdmJYQnZibVZ1ZEhNNklHZGxkRUYyWVdsc1lXSnNaVU52YlhCdmJtVnVkSE1zWEc0Z0lDQWdJQ0FnSUhOb2IzZEJaR1JDZFhSMGIyNDZJR05oYmtGa1pFMXZjbVZEYjIxd2IyNWxiblJ6TEZ4dUlDQWdJQ0FnSUNCaFkzUnBkbUYwYVc5dVUzUmhkSFZ6T2lCblpYUkJZM1JwZG1GMGFXOXVVM1JoZEhWelhHNGdJQ0FnZlR0Y2JpQWdJQ0JqYjI1emRDQlFRVWRGWDAxQlVDQTlJSHRjYmlBZ0lDQWdJQ0FnWTI5dWRHVnVkRG9nV3lkQWNHRjBhQ2NzSUNjblhTeGNiaUFnSUNBZ0lDQWdaR2xoYkc5bk9pQmJKMlJwWVd4dlp5Y3NJQ2NuTENCblpYUldZV3gxWlVaeWIyMVBZbXBsWTNSZFhHNGdJQ0FnZlR0Y2JpQWdJQ0JqYjI1emRDQkJVa1ZCWDAxQlVDQTlJSHRjYmlBZ0lDQWdJQ0FnYm1GdFpUb2dXeWRBYm1GdFpTY3NJQ2NuWFN4Y2JpQWdJQ0FnSUNBZ1kyOXVkR1Z1ZERvZ1VFRkhSVjlOUVZBdVkyOXVkR1Z1ZEN4Y2JpQWdJQ0FnSUNBZ1pHbGhiRzluT2lCUVFVZEZYMDFCVUM1a2FXRnNiMmNzWEc0Z0lDQWdJQ0FnSUdGMllXbHNZV0pzWlVOdmJYQnZibVZ1ZEhNNklGc25ZWFpoYVd4aFlteGxRMjl0Y0c5dVpXNTBjeWNzSUZ0ZFhTeGNiaUFnSUNBZ0lDQWdkSGx3WlRvZ1d5ZDBlWEJsSnl3Z0oyeHBjM1FuTENCblpYUldZV3gxWlVaeWIyMVBZbXBsWTNSZExGeHVJQ0FnSUNBZ0lDQnNZV0psYkRvZ1d5ZDBhWFJzWlNjc0lDY25MQ0JuWlhSV1lXeDFaVVp5YjIxUFltcGxZM1JkTEZ4dUlDQWdJQ0FnSUNCcGJtaGxjbWwwT2lCYkoybHVhR1Z5YVhSaGJtTmxKeXdnWm1Gc2MyVXNJR2RsZEZaaGJIVmxSbkp2YlU5aWFtVmpkRjBzWEc0Z0lDQWdJQ0FnSUc5d2RHbHZibUZzT2lCYkoyOXdkR2x2Ym1Gc0p5d2dabUZzYzJVc0lHZGxkRlpoYkhWbFJuSnZiVTlpYW1WamRGMHNYRzRnSUNBZ0lDQWdJR055WldGMFpXUkJjbVZoVG05a1pUb2dXeWRqY21WaGRHVkJjbVZoVG05a1pTY3NJSFJ5ZFdVc0lHZGxkRlpoYkhWbFJuSnZiVTlpYW1WamRGMHNYRzRnSUNBZ0lDQWdJSE5vYjNkQlpHUkNkWFIwYjI0NklGc25iV0Y0UTI5dGNHOXVaVzUwY3ljc0lIUnlkV1ZkTEZ4dUlDQWdJQ0FnSUNCemFHOTNUbVYzUTI5dGNHOXVaVzUwUVhKbFlUb2dXMjUxYkd3c0lIUnlkV1ZkTEZ4dUlDQWdJQ0FnSUNCa1pYTmpjbWx3ZEdsdmJqb2dXeWRrWlhOamNtbHdkR2x2Ymljc0lDY25MQ0JuWlhSV1lXeDFaVVp5YjIxUFltcGxZM1JkTEZ4dUlDQWdJQ0FnSUNCaFkzUnBkbUYwYVc5dVUzUmhkSFZ6T2lCYmJuVnNiQ3dnTUYxY2JpQWdJQ0I5TzF4dVhHNGdJQ0FnWTI5dWMzUWdRMDlOVUU5T1JVNVVYMDFCVUNBOUlIdGNiaUFnSUNBZ0lDQWdZMjl1ZEdWdWREb2dVRUZIUlY5TlFWQXVZMjl1ZEdWdWRDeGNiaUFnSUNBZ0lDQWdaR2xoYkc5bk9pQlFRVWRGWDAxQlVDNWthV0ZzYjJjc1hHNGdJQ0FnSUNBZ0lHeGhZbVZzT2lCYkozUnBkR3hsSnl3Z0p5Y3NJR2RsZEZaaGJIVmxSbkp2YlU5aWFtVmpkRjBzWEc0Z0lDQWdJQ0FnSUdSbGMyTnlhWEIwYVc5dU9pQmJKMlJsYzJOeWFYQjBhVzl1Snl3Z0p5Y3NJR2RsZEZaaGJIVmxSbkp2YlU5aWFtVmpkRjBzWEc0Z0lDQWdJQ0FnSUdGamRHbDJZWFJwYjI1VGRHRjBkWE02SUZ0dWRXeHNMQ0F3WFZ4dUlDQWdJSDA3WEc0Z0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdaMlYwUVhKbFlVTnZiVzFsYm5SVGRISnBibWNzWEc0Z0lDQWdJQ0FnSUdkbGRFTnZiWEJ2Ym1WdWRFTnZiVzFsYm5SVGRISnBibWNzWEc0Z0lDQWdJQ0FnSUdkbGRGQmhaMlZEYjIxdFpXNTBVM1J5YVc1blhHNGdJQ0FnZlR0Y2JseHVJQ0FnSUdaMWJtTjBhVzl1SUdkbGRGQmhaMlZEYjIxdFpXNTBVM1J5YVc1bktIQmhaMlVzSUhSbGJYQnNZWFJsUkdWbWFXNXBkR2x2YmlrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1lHTnRjenB3WVdkbElDUjdaMlYwUTI5dGJXVnVkRk4wY21sdVp5aHdZV2RsTENCUVFVZEZYMDFCVUN3Z2RHVnRjR3hoZEdWRVpXWnBibWwwYVc5dUtYMWdPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHWjFibU4wYVc5dUlHZGxkRUZ5WldGRGIyMXRaVzUwVTNSeWFXNW5LR0Z5WldFc0lIUmxiWEJzWVhSbFJHVm1hVzVwZEdsdmJpd2dZMjl0Y0c5dVpXNTBRMjkxYm5RcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1kzVnpkRzl0VUdGeVlXMXpJRDBnZXlCamIyMXdiMjVsYm5SRGIzVnVkQ0I5TzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JoY21WaFZHVnRjR3hoZEdWRVpXWnBibWwwYVc5dUlEMGdkR1Z0Y0d4aGRHVkVaV1pwYm1sMGFXOXVJQ1ltSUhSbGJYQnNZWFJsUkdWbWFXNXBkR2x2Ymk1aGNtVmhjeUEvSUhSbGJYQnNZWFJsUkdWbWFXNXBkR2x2Ymk1aGNtVmhjMXRoY21WaFd5ZEFibUZ0WlNkZFhTQTZJSHQ5TzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWUdOdGN6cGhjbVZoSUNSN1oyVjBRMjl0YldWdWRGTjBjbWx1WnloaGNtVmhMQ0JCVWtWQlgwMUJVQ3dnWVhKbFlWUmxiWEJzWVhSbFJHVm1hVzVwZEdsdmJpd2dZM1Z6ZEc5dFVHRnlZVzF6S1gxZ08xeHVJQ0FnSUgxY2JseHVJQ0FnSUdaMWJtTjBhVzl1SUdkbGRFTnZiWEJ2Ym1WdWRFTnZiVzFsYm5SVGRISnBibWNvWTI5dGNHOXVaVzUwTENCMFpXMXdiR0YwWlVSbFptbHVhWFJwYjI0cElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHQmpiWE02WTI5dGNHOXVaVzUwSUNSN1oyVjBRMjl0YldWdWRGTjBjbWx1WnloamIyMXdiMjVsYm5Rc0lFTlBUVkJQVGtWT1ZGOU5RVkFzSUhSbGJYQnNZWFJsUkdWbWFXNXBkR2x2YmlsOVlEdGNiaUFnSUNCOVhHNWNiaUFnSUNCbWRXNWpkR2x2YmlCblpYUkRiMjF0Wlc1MFUzUnlhVzVuS0dSaGRHRXNJRzFoY0N3Z2RHVnRjR3hoZEdWRVpXWnBibWwwYVc5dUxDQmpkWE4wYjIxUVlYSmhiWE1wSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnY21WemRXeDBJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lFOWlhbVZqZEM1clpYbHpLRzFoY0NrdVptOXlSV0ZqYUNoclpYa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1cyUmhkR0ZMWlhrc0lHUmxabUYxYkhSV1lXeDFaU3dnWjJWMFJHRjBZVVp1WFNBOUlHMWhjRnRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdZMjl1ZEdWdWRGQnliMk5sYzNOdmNpQTlJRlpCVEZWRlgxQlNUME5GVTFOUFVsTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCMllXeDFaU0E5SUdSbFptRjFiSFJXWVd4MVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGpiMjUwWlc1MFVISnZZMlZ6YzI5eUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVZ1BTQmpiMjUwWlc1MFVISnZZMlZ6YzI5eUtHUmhkR0VzSUdSaGRHRkxaWGtzSUhSbGJYQnNZWFJsUkdWbWFXNXBkR2x2Yml3Z1kzVnpkRzl0VUdGeVlXMXpLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9aMlYwUkdGMFlVWnVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVWdQU0JuWlhSRVlYUmhSbTRvZEdWdGNHeGhkR1ZFWldacGJtbDBhVzl1TENCa1lYUmhTMlY1TENCa1pXWmhkV3gwVm1Gc2RXVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaGtZWFJoSUNFOUlHNTFiR3dnSmlZZ1pHRjBZVXRsZVNBaFBUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsSUQwZ1pHRjBZVnRrWVhSaFMyVjVYU0I4ZkNBbkp6dGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHbDBaVzBnUFNCN0lHdGxlU3dnZG1Gc2RXVWdmVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJwZEdWdExuWmhiSFZsSUNFOVBTQmNJbk4wY21sdVoxd2lJSHg4SUdsMFpXMHVkbUZzZFdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWE4xYkhRdWNIVnphQ2hnSkh0clpYbDlQVndpSkh0cGRHVnRMblpoYkhWbGZWd2lZQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCeVpYTjFiSFF1YW05cGJpZ25JQ2NwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR1oxYm1OMGFXOXVJR2RsZEVGMllXbHNZV0pzWlVOdmJYQnZibVZ1ZEhNb1lYSmxZU3dnWkdGMFlVdGxlU3dnZEdWdGNHeGhkR1ZFWldacGJtbDBhVzl1S1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doZEdWdGNHeGhkR1ZFWldacGJtbDBhVzl1SUh4OElDRjBaVzF3YkdGMFpVUmxabWx1YVhScGIyNWJaR0YwWVV0bGVWMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlBbkp6dGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJQWW1wbFkzUXVhMlY1Y3loMFpXMXdiR0YwWlVSbFptbHVhWFJwYjI1YlpHRjBZVXRsZVYwcExtMWhjQ2hyWlhrZ1BUNGdkR1Z0Y0d4aGRHVkVaV1pwYm1sMGFXOXVXMlJoZEdGTFpYbGRXMnRsZVYwdWFXUXBMbXB2YVc0b0p5d25LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQm1kVzVqZEdsdmJpQmpZVzVCWkdSTmIzSmxRMjl0Y0c5dVpXNTBjeWhoY21WaExDQmtZWFJoUzJWNUxDQjBaVzF3YkdGMFpVUmxabWx1YVhScGIyNHNJR04xYzNSdmJWQmhjbUZ0Y3lrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvSVhSbGJYQnNZWFJsUkdWbWFXNXBkR2x2YmlCOGZDQjBaVzF3YkdGMFpVUmxabWx1YVhScGIyNHViV0Y0UTI5dGNHOXVaVzUwY3lBOVBTQnVkV3hzSUh4OElDRmpkWE4wYjIxUVlYSmhiWE1nZkh3Z1kzVnpkRzl0VUdGeVlXMXpMbU52YlhCdmJtVnVkRU52ZFc1MElEMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwY25WbE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmpkWE4wYjIxUVlYSmhiWE11WTI5dGNHOXVaVzUwUTI5MWJuUWdQQ0IwWlcxd2JHRjBaVVJsWm1sdWFYUnBiMjR1YldGNFEyOXRjRzl1Wlc1MGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNCbWRXNWpkR2x2YmlCblpYUldZV3gxWlVaeWIyMVBZbXBsWTNRb2IySnFMQ0JyWlhrc0lHUmxabUYxYkhSV1lXeDFaU2tnZTF4dUlDQWdJQ0FnSUNCc1pYUWdkbUZzZFdVZ1BTQnZZbW9nSmlZZ2RIbHdaVzltSUc5aWFpQTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2EyVjVJRDhnYjJKcVcydGxlVjBnT2lCdWRXeHNPMXh1SUNBZ0lDQWdJQ0IyWVd4MVpTQTlJSFpoYkhWbElEMDlJRzUxYkd3Z1B5QmtaV1poZFd4MFZtRnNkV1VnT2lCMllXeDFaVHRjYmlBZ0lDQWdJQ0FnZG1Gc2RXVWdQU0IwZVhCbGIyWWdaR1ZtWVhWc2RGWmhiSFZsSUQwOVBTQW5ZbTl2YkdWaGJpY2dQeUJDYjI5c1pXRnVLSFpoYkhWbEtTQTZJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RtRnNkV1VnSVQwZ2JuVnNiQ0EvSUhaaGJIVmxJRG9nWkdWbVlYVnNkRlpoYkhWbE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdaMWJtTjBhVzl1SUdkbGRFTnZiblJsYm5SUVlYUm9LR1JoZEdFc0lHdGxlU2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpTQTlJR1JoZEdFZ1B5QmtZWFJoVzJ0bGVWMGdPaUJ1ZFd4c08xeHVJQ0FnSUNBZ0lDQXZMeUJPVDFSRk9pQkZiWEIwZVNCemRISnBibWNnYVhNZ1lXTmpaWEIwWVdKc1pTNGdVMjhnZDJVZ2JtVmxaQ0JqYUdWamF5QjJZV3gxWlNBaFBTQnVkV3hzWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIyWVd4MVpTQWhQU0J1ZFd4c0lEOGdZSGRsWW5OcGRHVTZKSHQyWVd4MVpYMWdJRG9nSnljN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWm5WdVkzUnBiMjRnWjJWMFFXTjBhWFpoZEdsdmJsTjBZWFIxY3loa1lYUmhLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2haR0YwWVNCOGZDQWhaR0YwWVZzbmJXZHViRHBoWTNScGRtRjBhVzl1VTNSaGRIVnpKMTBnZkh3Z1pHRjBZVnNuYldkdWJEcGhZM1JwZG1GMGFXOXVVM1JoZEhWekoxMGdQVDA5SUNkbVlXeHpaU2NwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQkJRMVJKVmtGVVNVOU9YMU5VUVZSVlUxOU9UMVJmUVVOVVNWWkJWRVZFTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2JHRnpkRTF2WkdsbWFXVmtJRDBnWkdGMFlWc25iV2R1YkRwc1lYTjBUVzlrYVdacFpXUW5YU0EvSUc1bGR5QkVZWFJsS0dSaGRHRmJKMjFuYm13NmJHRnpkRTF2WkdsbWFXVmtKMTBwSURvZ2JuVnNiRHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdiR0Z6ZEVGamRHbDJZWFJsWkNBOUlHUmhkR0ZiSjIxbmJtdzZiR0Z6ZEVGamRHbDJZWFJsWkNkZElEOGdibVYzSUVSaGRHVW9aR0YwWVZzbmJXZHViRHBzWVhOMFFXTjBhWFpoZEdWa0oxMHBJRG9nYm5Wc2JEdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdiR0Z6ZEUxdlpHbG1hV1ZrSUNZbUlHeGhjM1JCWTNScGRtRjBaV1FnSmlZZ2JHRnpkRTF2WkdsbWFXVmtMbWRsZEZScGJXVW9LU0ErSUd4aGMzUkJZM1JwZG1GMFpXUXVaMlYwVkdsdFpTZ3BJRDhnUVVOVVNWWkJWRWxQVGw5VFZFRlVWVk5mVFU5RVNVWkpSVVFnT2lCQlExUkpWa0ZVU1U5T1gxTlVRVlJWVTE5QlExUkpWa0ZVUlVRN1hHNGdJQ0FnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQlVaVzF3YkdGMFpVRnVibTkwWVhScGIyNXpLQ2s3WEc0aUxDSmxlSEJ2Y25RZ2V5QmtaV1poZFd4MElHRnpJRlJsYlhCc1lYUmxRVzV1YjNSaGRHbHZibk1nZlNCbWNtOXRJQ2N1TDFSbGJYQnNZWFJsUVc1dWIzUmhkR2x2Ym5Nbk8xeHVaWGh3YjNKMElIc2daR1ZtWVhWc2RDQmhjeUJGWkdsMGIzSkRiMjUwWlhoMFNHVnNjR1Z5SUgwZ1puSnZiU0FuTGk5RlpHbDBiM0pEYjI1MFpYaDBTR1ZzY0dWeUp6dGNiaUpkTENKemIzVnlZMlZTYjI5MElqb2lJbjA9IiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9idWlsZC9tZ25sLXNlcnZpY2UubWluLmpzJyk7XG59IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9idWlsZC9tZ25sLXNlcnZpY2UuanMnKTtcbn1cbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4wXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUZW1wbGF0ZUFubm90YXRpb25zIH0gZnJvbSAnQG1hZ25vbGlhL3RlbXBsYXRlLWFubm90YXRpb25zJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IEVkaXRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vRWRpdGFibGVDb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgICBFZGl0b3JDb250ZXh0LCBjb25zdGFudHMsIEVkaXRvckNvbnRleHRIZWxwZXIsIENvbXBvbmVudEhlbHBlclxufSBmcm9tICcuLi8uLi91dGlsJztcblxuY2xhc3MgRWRpdGFibGVBcmVhIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgY29udGVudDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICBwYXJlbnRUZW1wbGF0ZUlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIGJ1aWxkRm9yTWFnbm9saWE6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBNb2JpbGVXcmFwcGVyOiBQcm9wVHlwZXMubm9kZVxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBwYXJlbnRUZW1wbGF0ZUlkOiBudWxsLFxuICAgICAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgICAgIGJ1aWxkRm9yTWFnbm9saWE6IGZhbHNlLFxuICAgICAgICBNb2JpbGVXcmFwcGVyOiBSZWFjdC5GcmFnbWVudFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5jb25zdGFudHMgPSBjb25zdGFudHM7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb250ZXh0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VkaXRhYmxlQXJlYSBjb21wb25lbnQgbXVzdCBiZSB3cmFwcGVkIGluc2lkZSBFZGl0YWJsZVBhZ2UgY29tcG9uZW50LicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkQ29tbWVudCgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZSA9IEVkaXRvckNvbnRleHQ7XG5cbiAgICBnZXRQYXJlbnRUZW1wbGF0ZUlkKCkge1xuICAgICAgICBjb25zdCB7IHBhcmVudFRlbXBsYXRlSWQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgY29udGVudCB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIHJldHVybiBwYXJlbnRUZW1wbGF0ZUlkIHx8IGNvbnRlbnRbY29uc3RhbnRzLlRFTVBMQVRFX0lEX1BST1BdO1xuICAgIH1cblxuICAgIGFkZENvbW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IHsgaXNEZXZNb2RlIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGlmICghdGhpcy5ub2RlIHx8ICghaXNEZXZNb2RlICYmICFFZGl0b3JDb250ZXh0SGVscGVyLmluRWRpdG9yKCkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBjb250ZW50IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBwYWdlVGVtcGxhdGVJZCA9IHRoaXMuZ2V0UGFyZW50VGVtcGxhdGVJZCgpO1xuICAgICAgICBjb25zdCB7IHRlbXBsYXRlRGVmaW5pdGlvbnM6IGFsbERlZmluaXRpb25zIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlRGVmaW5pdGlvbnMgPSBhbGxEZWZpbml0aW9uc1twYWdlVGVtcGxhdGVJZF07XG4gICAgICAgIGNvbnN0IG9wZW5Db21tZW50ID0gVGVtcGxhdGVBbm5vdGF0aW9ucy5nZXRBcmVhQ29tbWVudFN0cmluZyhjb250ZW50LCB0ZW1wbGF0ZURlZmluaXRpb25zKTtcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQob3BlbkNvbW1lbnQpLCB0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLmNvbnN0YW50cy5DTE9TRURfQVJFQV9DT01NRU5UKSwgdGhpcy5ub2RlLm5leHRTaWJsaW5nKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGNvbnRlbnQsIGNsYXNzTmFtZSwgYnVpbGRGb3JNYWdub2xpYSwgTW9iaWxlV3JhcHBlclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY29tcG9uZW50TmFtZXMgPSBjb250ZW50WydAbm9kZXMnXTtcblxuICAgICAgICBpZiAoYnVpbGRGb3JNYWdub2xpYSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17bm9kZSA9PiB0aGlzLm5vZGUgPSBub2RlfSBrZXk9e2NvbnRlbnRbJ0BpZCddfSBjbGFzc05hbWU9e0NvbXBvbmVudEhlbHBlci5jbGFzc25hbWVzKGNsYXNzTmFtZSl9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnROYW1lcy5tYXAoKG5hbWUpID0+IDxFZGl0YWJsZUNvbXBvbmVudCBrZXk9e2NvbnRlbnRbbmFtZV1bJ0BpZCddfSBjb250ZW50PXtjb250ZW50W25hbWVdfSAvPilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TW9iaWxlV3JhcHBlciBrZXk9e2NvbnRlbnRbJ0BpZCddfSBjbGFzc05hbWU9e0NvbXBvbmVudEhlbHBlci5jbGFzc25hbWVzKGNsYXNzTmFtZSl9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50TmFtZXMubWFwKChuYW1lKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWRpdGFibGVDb21wb25lbnQga2V5PXtjb250ZW50W25hbWVdWydAaWQnXX0gY29udGVudD17Y29udGVudFtuYW1lXX0gYnVpbGRGb3JNYWdub2xpYT17YnVpbGRGb3JNYWdub2xpYX0gTW9iaWxlV3JhcHBlcj17TW9iaWxlV3JhcHBlcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L01vYmlsZVdyYXBwZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0YWJsZUFyZWE7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEVkaXRhYmxlQXJlYSB9IGZyb20gJy4vRWRpdGFibGVBcmVhJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBUZW1wbGF0ZUFubm90YXRpb25zIH0gZnJvbSAnQG1hZ25vbGlhL3RlbXBsYXRlLWFubm90YXRpb25zJztcbmltcG9ydCB7XG4gICAgRWRpdG9yQ29udGV4dCwgY29uc3RhbnRzLCBDb21wb25lbnRIZWxwZXIsIEVkaXRvckNvbnRleHRIZWxwZXJcbn0gZnJvbSAnLi4vLi4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRhYmxlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgY29udGVudDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICBidWlsZEZvck1hZ25vbGlhOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgTW9iaWxlV3JhcHBlcjogUHJvcFR5cGVzLm5vZGVcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgYnVpbGRGb3JNYWdub2xpYTogZmFsc2UsXG4gICAgICAgIE1vYmlsZVdyYXBwZXI6IFJlYWN0LkZyYWdtZW50XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmNvbnN0YW50cyA9IGNvbnN0YW50cztcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5hZGRDb21tZW50KCk7XG4gICAgICAgIHRoaXMucmVtb3ZlUmVmcygpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZSA9IEVkaXRvckNvbnRleHQ7XG5cbiAgICBhZGRDb21tZW50KCkge1xuICAgICAgICBjb25zdCB7IGlzRGV2TW9kZSB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCB7IGNvbnRlbnQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghdGhpcy5vcGVuTm9kZSB8fCAhdGhpcy5jbG9zZU5vZGUgfHwgKCFpc0Rldk1vZGUgJiYgIUVkaXRvckNvbnRleHRIZWxwZXIuaW5FZGl0b3IoKSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0ZW1wbGF0ZUlkID0gY29udGVudFtjb25zdGFudHMuVEVNUExBVEVfSURfUFJPUF07XG4gICAgICAgIGNvbnN0IHsgdGVtcGxhdGVEZWZpbml0aW9uczogYWxsRGVmaW5pdGlvbnMgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3QgdGVtcGxhdGVEZWZpbml0aW9ucyA9IGFsbERlZmluaXRpb25zW3RlbXBsYXRlSWRdO1xuICAgICAgICBjb25zdCBvcGVuQ29tcG9uZW50Q29tbWVudCA9IFRlbXBsYXRlQW5ub3RhdGlvbnMuZ2V0Q29tcG9uZW50Q29tbWVudFN0cmluZyhjb250ZW50LCB0ZW1wbGF0ZURlZmluaXRpb25zKTtcbiAgICAgICAgY29uc3QgY2xvc2VkQ29tcG9uZW50Q29tbWVudCA9IHRoaXMuY29uc3RhbnRzLkNMT1NFRF9DT01QT05FTlRfQ09NTUVOVDtcbiAgICAgICAgdGhpcy5vcGVuTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVDb21tZW50KG9wZW5Db21wb25lbnRDb21tZW50KSwgdGhpcy5vcGVuTm9kZSk7XG4gICAgICAgIHRoaXMuY2xvc2VOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoY2xvc2VkQ29tcG9uZW50Q29tbWVudCksIHRoaXMuY2xvc2VOb2RlKTtcbiAgICB9XG5cbiAgICByZW1vdmVSZWZzKCkge1xuICAgICAgICBpZiAoIXRoaXMub3Blbk5vZGUgfHwgIXRoaXMuY2xvc2VOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcGVuTm9kZS5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5jbG9zZU5vZGUucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNvbnRlbnQsIGJ1aWxkRm9yTWFnbm9saWEsIE1vYmlsZVdyYXBwZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgY29tcG9uZW50TWFwcGluZ3MgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gQ29tcG9uZW50SGVscGVyLmdldFJlbmRlcmVkQ29tcG9uZW50KGNvbnRlbnQsIGNvbXBvbmVudE1hcHBpbmdzLCBidWlsZEZvck1hZ25vbGlhKTtcblxuICAgICAgICBpZiAoYnVpbGRGb3JNYWdub2xpYSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17bm9kZSA9PiB0aGlzLm9wZW5Ob2RlID0gbm9kZX0gLz5cbiAgICAgICAgICAgICAgICAgICAge2NvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9e25vZGUgPT4gdGhpcy5jbG9zZU5vZGUgPSBub2RlfSAvPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TW9iaWxlV3JhcHBlcj57Y29tcG9uZW50fTwvTW9iaWxlV3JhcHBlcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEVkaXRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9FZGl0YWJsZUNvbXBvbmVudCc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUZW1wbGF0ZUFubm90YXRpb25zIH0gZnJvbSAnQG1hZ25vbGlhL3RlbXBsYXRlLWFubm90YXRpb25zJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7XG4gICAgRWRpdG9yUHJvdmlkZXIsIENvbXBvbmVudEhlbHBlciwgY29uc3RhbnRzLCBFZGl0b3JDb250ZXh0SGVscGVyXG59IGZyb20gJy4uLy4uL3V0aWwnO1xuXG5jbGFzcyBFZGl0YWJsZVBhZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICB0ZW1wbGF0ZURlZmluaXRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBjb25maWc6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICBjb21wb25lbnRNYXBwaW5nczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9KSxcbiAgICAgICAgYnVpbGRGb3JNYWdub2xpYTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIE1vYmlsZVdyYXBwZXI6IFByb3BUeXBlcy5ub2RlXG4gICAgfVxuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgY2hpbGRyZW46IG51bGwsXG4gICAgICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlRGVmaW5pdGlvbnM6IG51bGwsXG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgY29tcG9uZW50TWFwcGluZ3M6IHt9XG4gICAgICAgIH0sXG4gICAgICAgIGJ1aWxkRm9yTWFnbm9saWE6IGZhbHNlLFxuICAgICAgICBNb2JpbGVXcmFwcGVyOiBSZWFjdC5GcmFnbWVudFxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmFkZENsb3NlQ29tbWVudCgpO1xuICAgICAgICB0aGlzLmFkZE9wZW5Db21tZW50KCk7XG4gICAgICAgIEVkaXRvckNvbnRleHRIZWxwZXIucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB0aGlzLmFkZE9wZW5Db21tZW50KCk7XG4gICAgICAgIEVkaXRvckNvbnRleHRIZWxwZXIucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIGFkZE9wZW5Db21tZW50KCkge1xuICAgICAgICBjb25zdCBjb250ZXh0VmFsdWUgPSB0aGlzLmdldENvbnRleHRWYWx1ZSgpO1xuICAgICAgICBpZiAoIXRoaXMubm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhZ2VUZW1wbGF0ZURlZmluaXRpb24gPSBjb250ZXh0VmFsdWUuY29udGVudCAmJiBjb250ZXh0VmFsdWUudGVtcGxhdGVEZWZpbml0aW9uc1xuICAgICAgICAgICAgPyBjb250ZXh0VmFsdWUudGVtcGxhdGVEZWZpbml0aW9uc1tjb250ZXh0VmFsdWUuY29udGVudFtjb25zdGFudHMuVEVNUExBVEVfSURfUFJPUF1dIDogbnVsbDtcbiAgICAgICAgY29uc3Qgb3BlbkNvbW1lbnQgPSBUZW1wbGF0ZUFubm90YXRpb25zLmdldFBhZ2VDb21tZW50U3RyaW5nKGNvbnRleHRWYWx1ZS5jb250ZW50LCBwYWdlVGVtcGxhdGVEZWZpbml0aW9uKTtcbiAgICAgICAgQ29tcG9uZW50SGVscGVyLmFkZENvbW1lbnQodGhpcy5ub2RlLCBvcGVuQ29tbWVudCk7XG4gICAgfVxuXG4gICAgYWRkQ2xvc2VDb21tZW50KCkge1xuICAgICAgICBDb21wb25lbnRIZWxwZXIuYWRkQ29tbWVudCh0aGlzLm5vZGUsICcvY21zOnBhZ2UnKTtcbiAgICB9XG5cbiAgICBoYXNQYWdlQ29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCB7IGNvbnRlbnQsIGNvbXBvbmVudE1hcHBpbmdzIH0gPSB0aGlzLmdldENvbnRleHRWYWx1ZSgpO1xuICAgICAgICByZXR1cm4gY29udGVudCAmJiBjb21wb25lbnRNYXBwaW5ncyAmJiBjb21wb25lbnRNYXBwaW5nc1tjb250ZW50W2NvbnN0YW50cy5URU1QTEFURV9JRF9QUk9QXV07XG4gICAgfVxuXG4gICAgZ2V0Q29udGV4dFZhbHVlKCkge1xuICAgICAgICBjb25zdCB7IHRlbXBsYXRlRGVmaW5pdGlvbnMsIGNvbnRlbnQsIGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBjb21wb25lbnRNYXBwaW5ncyB9ID0gY29uZmlnO1xuICAgICAgICBjb25zdCBpc0Rldk1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JztcblxuICAgICAgICBjb25zdCBjb250ZXh0VmFsdWUgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZURlZmluaXRpb25zLFxuICAgICAgICAgICAgY29tcG9uZW50TWFwcGluZ3MsXG4gICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgaXNEZXZNb2RlXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjb250ZXh0VmFsdWU7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuLCBidWlsZEZvck1hZ25vbGlhLCBNb2JpbGVXcmFwcGVyIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBjb250ZXh0VmFsdWUgPSB0aGlzLmdldENvbnRleHRWYWx1ZSgpO1xuICAgICAgICBjb25zdCBwYWdlQ29tcG9uZW50ID0gdGhpcy5oYXNQYWdlQ29tcG9uZW50KClcbiAgICAgICAgICAgID8gQ29tcG9uZW50SGVscGVyLmdldFJlbmRlcmVkQ29tcG9uZW50KGNvbnRleHRWYWx1ZS5jb250ZW50LCBjb250ZXh0VmFsdWUuY29tcG9uZW50TWFwcGluZ3MsIGJ1aWxkRm9yTWFnbm9saWEpXG4gICAgICAgICAgICA6IGNoaWxkcmVuO1xuXG4gICAgICAgIGlmIChidWlsZEZvck1hZ25vbGlhKSB7XG4gICAgICAgICAgICAvLyBOT1RFOiBXZSBuZWVkIGEgZGl2IHRhZyBhcyBhIHBhcmVudCBub2RlIGZvciBQYWdlJ3MgY2hpbGQgSFRNTC4gSXQgd2lsbCBjYXVzZSBhbiBpc3N1ZSBpZiB3ZVxuICAgICAgICAgICAgLy8gZG9uJ3QgaGF2ZSBhIHBhcmVudCBub2RlLlxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8RWRpdG9yUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRWYWx1ZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtub2RlID0+IHRoaXMubm9kZSA9IG5vZGV9IGtleT17Y29udGV4dFZhbHVlLmNvbnRlbnRbJ0BpZCddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYWdlQ29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0VkaXRvclByb3ZpZGVyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiA8TW9iaWxlV3JhcHBlcj57cGFnZUNvbXBvbmVudH08L01vYmlsZVdyYXBwZXI+O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdGFibGVQYWdlO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBFZGl0YWJsZVBhZ2UgfSBmcm9tICcuL0VkaXRhYmxlUGFnZSc7XHJcbiIsImV4cG9ydCB7IEVkaXRhYmxlUGFnZSB9IGZyb20gJy4vRWRpdGFibGVQYWdlJztcclxuZXhwb3J0IHsgRWRpdGFibGVBcmVhIH0gZnJvbSAnLi9FZGl0YWJsZUFyZWEnO1xyXG5leHBvcnQgeyBFZGl0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4vRWRpdGFibGVDb21wb25lbnQnXHJcbiIsImV4cG9ydCB7IEVkaXRhYmxlUGFnZSwgRWRpdGFibGVBcmVhLCBFZGl0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50JztcbmV4cG9ydCB7IEVkaXRvckNvbnRleHQsIEVkaXRvckNvbnRleHRIZWxwZXIsIENvbXBvbmVudEhlbHBlciB9IGZyb20gJy4vdXRpbCc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudEhlbHBlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRSZW5kZXJlZENvbXBvbmVudCwgZ2V0Q29tcG9uZW50UHJvcGVydGllcywgYWRkQ29tbWVudCwgY2xhc3NuYW1lc1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRSZW5kZXJlZENvbXBvbmVudChjb21wb25lbnRDb250ZW50LCBjb21wb25lbnRNYXBwaW5ncywgYnVpbGRGb3JNYWdub2xpYSkge1xuICAgICAgICBpZiAoIWNvbXBvbmVudENvbnRlbnQgfHwgIWNvbXBvbmVudE1hcHBpbmdzIHx8ICFjb21wb25lbnRNYXBwaW5nc1tjb21wb25lbnRDb250ZW50W2NvbnN0YW50cy5URU1QTEFURV9JRF9QUk9QXV0pIHtcbiAgICAgICAgICAgIHJldHVybiBidWlsZEZvck1hZ25vbGlhID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JykgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudENsYXNzID0gY29tcG9uZW50TWFwcGluZ3NbY29tcG9uZW50Q29udGVudFtjb25zdGFudHMuVEVNUExBVEVfSURfUFJPUF1dO1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudENsYXNzLCBnZXRDb21wb25lbnRQcm9wZXJ0aWVzKGNvbXBvbmVudENvbnRlbnQpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDb21wb25lbnRQcm9wZXJ0aWVzKGNvbXBvbmVudENvbnRlbnQpIHtcbiAgICAgICAgaWYgKCFjb21wb25lbnRDb250ZW50IHx8IHR5cGVvZiBjb21wb25lbnRDb250ZW50ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb3BzID0ge307XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGNvbXBvbmVudENvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnQCcpIHx8IGtleS5zdGFydHNXaXRoKCdtZ25sOicpIHx8IGtleS5zdGFydHNXaXRoKCdqY3I6JykpIHtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YVtrZXldID0gY29tcG9uZW50Q29udGVudFtrZXldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wc1trZXldID0gY29tcG9uZW50Q29udGVudFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcHJvcHMubWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZENvbW1lbnQoZWxlbWVudCwgb3BlbkNvbW1lbnQsIGNsb3NlQ29tbWVudCkge1xuICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCAhZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcGVuQ29tbWVudCkge1xuICAgICAgICAgICAgY29uc3Qgb3BlbkNvbW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChvcGVuQ29tbWVudCk7XG4gICAgICAgICAgICBlbGVtZW50Lmluc2VydEJlZm9yZShvcGVuQ29tbWVudEVsZW1lbnQsIGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsb3NlQ29tbWVudCkge1xuICAgICAgICAgICAgY29uc3QgY2xvc2VDb21tZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoY2xvc2VDb21tZW50KTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvc2VDb21tZW50RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGFzc25hbWVzKC4uLmFyZykge1xuICAgICAgICBjb25zdCBjbGFzc2VzID0gW107XG4gICAgICAgIGFyZy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1UeXBlID0gdHlwZW9mIGl0ZW07XG4gICAgICAgICAgICBpZiAoaXRlbVR5cGUgPT09ICdzdHJpbmcnIHx8IGl0ZW1UeXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGNsYXNzZXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSAmJiBpdGVtLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNsYXNzZXMucHVzaChjbGFzc25hbWVzKC4uLml0ZW0pKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaXRlbSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50SGVscGVyKCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBFZGl0b3JDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuZXhwb3J0IGNvbnN0IEVkaXRvclByb3ZpZGVyID0gRWRpdG9yQ29udGV4dC5Qcm92aWRlcjtcbmV4cG9ydCBjb25zdCBFZGl0b3JDb25zdW1lciA9IEVkaXRvckNvbnRleHQuQ29uc3VtZXI7XG5leHBvcnQgZGVmYXVsdCBFZGl0b3JDb250ZXh0O1xuIiwiaW1wb3J0IHsgRWRpdG9yQ29udGV4dEhlbHBlciB9IGZyb20gJ0BtYWdub2xpYS90ZW1wbGF0ZS1hbm5vdGF0aW9ucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JDb250ZXh0SGVscGVyO1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBDTE9TRURfQVJFQV9DT01NRU5UOiAnL2NtczphcmVhJyxcclxuICAgIENMT1NFRF9DT01QT05FTlRfQ09NTUVOVDogJy9jbXM6Y29tcG9uZW50JyxcclxuICAgIFRFTVBMQVRFX0lEX1BST1A6ICdtZ25sOnRlbXBsYXRlJ1xyXG59O1xyXG4iLCJpbXBvcnQgRWRpdG9yQ29udGV4dCwgeyBFZGl0b3JDb25zdW1lciwgRWRpdG9yUHJvdmlkZXIgfSBmcm9tICcuL0VkaXRvckNvbnRleHQnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnN0YW50cyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb21wb25lbnRIZWxwZXIgfSBmcm9tICcuL0NvbXBvbmVudEhlbHBlcic7XHJcbmV4cG9ydCB7IEVkaXRvckNvbnRleHQsIEVkaXRvckNvbnN1bWVyLCBFZGl0b3JQcm92aWRlciB9O1xyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgUmVuZGVyZXJDb250ZXh0IGlzIGRlcHJlY2F0ZWQuIFVzZSBFZGl0b3JDb250ZXh0IGluc3RlYWRcclxuICovXHJcbmNvbnN0IFJlbmRlcmVyQ29udGV4dCA9IEVkaXRvckNvbnRleHQ7XHJcbmV4cG9ydCB7IFJlbmRlcmVyQ29udGV4dCB9O1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVkaXRvckNvbnRleHRIZWxwZXIgfSBmcm9tICcuL0VkaXRvckNvbnRleHRIZWxwZXInO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiXSwic291cmNlUm9vdCI6IiJ9