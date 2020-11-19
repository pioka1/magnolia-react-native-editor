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
      var component = _util__WEBPACK_IMPORTED_MODULE_3__["ComponentHelper"].getRenderedComponent(content, componentMappings);

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
      var pageComponent = this.hasPageComponent() ? _util__WEBPACK_IMPORTED_MODULE_3__["ComponentHelper"].getRenderedComponent(contextValue.content, contextValue.componentMappings) : children;

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

  function getRenderedComponent(componentContent, componentMappings) {
    if (!componentContent || !componentMappings || !componentMappings[componentContent[_constants__WEBPACK_IMPORTED_MODULE_1__["default"].TEMPLATE_ID_PROP]]) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hZ25vbGlhL3RlbXBsYXRlLWFubm90YXRpb25zL2J1aWxkL21nbmwtc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hZ25vbGlhL3RlbXBsYXRlLWFubm90YXRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0VkaXRhYmxlQXJlYS9FZGl0YWJsZUFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9FZGl0YWJsZUFyZWEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9FZGl0YWJsZUNvbXBvbmVudC9FZGl0YWJsZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0VkaXRhYmxlQ29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvRWRpdGFibGVQYWdlL0VkaXRhYmxlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0VkaXRhYmxlUGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9Db21wb25lbnRIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvRWRpdG9yQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9FZGl0b3JDb250ZXh0SGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkVkaXRhYmxlQXJlYSIsInByb3BzIiwiY29uc3RhbnRzIiwiY29udGV4dCIsIkVycm9yIiwiYWRkQ29tbWVudCIsInBhcmVudFRlbXBsYXRlSWQiLCJjb250ZW50IiwiVEVNUExBVEVfSURfUFJPUCIsImlzRGV2TW9kZSIsIm5vZGUiLCJFZGl0b3JDb250ZXh0SGVscGVyIiwiaW5FZGl0b3IiLCJwYWdlVGVtcGxhdGVJZCIsImdldFBhcmVudFRlbXBsYXRlSWQiLCJhbGxEZWZpbml0aW9ucyIsInRlbXBsYXRlRGVmaW5pdGlvbnMiLCJvcGVuQ29tbWVudCIsIlRlbXBsYXRlQW5ub3RhdGlvbnMiLCJnZXRBcmVhQ29tbWVudFN0cmluZyIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJkb2N1bWVudCIsImNyZWF0ZUNvbW1lbnQiLCJDTE9TRURfQVJFQV9DT01NRU5UIiwibmV4dFNpYmxpbmciLCJjbGFzc05hbWUiLCJidWlsZEZvck1hZ25vbGlhIiwiTW9iaWxlV3JhcHBlciIsImNvbXBvbmVudE5hbWVzIiwiQ29tcG9uZW50SGVscGVyIiwiY2xhc3NuYW1lcyIsIm1hcCIsIm5hbWUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYW55IiwiYm9vbCIsIkZyYWdtZW50IiwiRWRpdG9yQ29udGV4dCIsIkVkaXRhYmxlQ29tcG9uZW50IiwicmVtb3ZlUmVmcyIsIm9wZW5Ob2RlIiwiY2xvc2VOb2RlIiwidGVtcGxhdGVJZCIsIm9wZW5Db21wb25lbnRDb21tZW50IiwiZ2V0Q29tcG9uZW50Q29tbWVudFN0cmluZyIsImNsb3NlZENvbXBvbmVudENvbW1lbnQiLCJDTE9TRURfQ09NUE9ORU5UX0NPTU1FTlQiLCJyZW1vdmUiLCJjb21wb25lbnRNYXBwaW5ncyIsImNvbXBvbmVudCIsImdldFJlbmRlcmVkQ29tcG9uZW50IiwiRWRpdGFibGVQYWdlIiwiYWRkQ2xvc2VDb21tZW50IiwiYWRkT3BlbkNvbW1lbnQiLCJyZWZyZXNoIiwiZmlyc3RDaGlsZCIsImNvbnRleHRWYWx1ZSIsImdldENvbnRleHRWYWx1ZSIsInBhZ2VUZW1wbGF0ZURlZmluaXRpb24iLCJnZXRQYWdlQ29tbWVudFN0cmluZyIsImNvbmZpZyIsInByb2Nlc3MiLCJjaGlsZHJlbiIsInBhZ2VDb21wb25lbnQiLCJoYXNQYWdlQ29tcG9uZW50IiwiZWxlbWVudFR5cGUiLCJzaGFwZSIsImNvbXBvbmVudEhlbHBlciIsImdldENvbXBvbmVudFByb3BlcnRpZXMiLCJjb21wb25lbnRDb250ZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbXBvbmVudENsYXNzIiwibWV0YWRhdGEiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInN0YXJ0c1dpdGgiLCJlbGVtZW50IiwiY2xvc2VDb21tZW50Iiwib3BlbkNvbW1lbnRFbGVtZW50IiwiY2xvc2VDb21tZW50RWxlbWVudCIsImFwcGVuZENoaWxkIiwiY2xhc3NlcyIsImFyZyIsIml0ZW0iLCJpdGVtVHlwZSIsInB1c2giLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJqb2luIiwiY3JlYXRlQ29udGV4dCIsIkVkaXRvclByb3ZpZGVyIiwiUHJvdmlkZXIiLCJFZGl0b3JDb25zdW1lciIsIkNvbnN1bWVyIiwiUmVuZGVyZXJDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsSUFBSSxJQUF5RDtBQUM3RDtBQUNBLE1BQU0sYUFLSjtBQUNGLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QixPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxLQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBLElBQU0rRixlQUFlLEdBQUc1RCxzREFBeEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkEsbUQiLCJmaWxlIjoibWdubC1yZWFjdC1lZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpIDogZmFjdG9yeShyb290W1wicmVhY3RcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9zcmMvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogVGVtcGxhdGVBbm5vdGF0aW9ucywgRWRpdG9yQ29udGV4dEhlbHBlciAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfc2VydmljZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9zZXJ2aWNlICovIFwiLi9zcmMvc2VydmljZS9pbmRleC5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlRlbXBsYXRlQW5ub3RhdGlvbnNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfc2VydmljZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiVGVtcGxhdGVBbm5vdGF0aW9uc1wiXTsgfSk7XG5cbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkVkaXRvckNvbnRleHRIZWxwZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfc2VydmljZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiRWRpdG9yQ29udGV4dEhlbHBlclwiXTsgfSk7XG5cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9zZXJ2aWNlL0VkaXRvckNvbnRleHRIZWxwZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3NlcnZpY2UvRWRpdG9yQ29udGV4dEhlbHBlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbmZ1bmN0aW9uIEVkaXRvckNvbnRleHRIZWxwZXIoKSB7XG4gIHJldHVybiB7XG4gICAgaW5FZGl0b3I6IGluRWRpdG9yLFxuICAgIHJlZnJlc2g6IHJlZnJlc2gsXG4gICAgaW5FZGl0b3JQcmV2aWV3OiBpbkVkaXRvclByZXZpZXdcbiAgfTtcblxuICBmdW5jdGlvbiBpbklmcmFtZSgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gQm9vbGVhbih3aW5kb3cuZnJhbWVFbGVtZW50ICYmIHdpbmRvdy5mcmFtZUVsZW1lbnQuY2xhc3NOYW1lLmluY2x1ZGVzKCdnd3QtRnJhbWUnKSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbkVkaXRvcigpIHtcbiAgICByZXR1cm4gaW5JZnJhbWUoKSAmJiB3aW5kb3cucGFyZW50LmxvY2F0aW9uLmhhc2guZW5kc1dpdGgoJzplZGl0Jyk7XG4gIH1cblxuICBmdW5jdGlvbiBpbkVkaXRvclByZXZpZXcoKSB7XG4gICAgcmV0dXJuIGluSWZyYW1lKCkgJiYgd2luZG93LnBhcmVudC5sb2NhdGlvbi5oYXNoLmVuZHNXaXRoKCc6dmlldycpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVmcmVzaCgpIHtcbiAgICBpZiAoaW5FZGl0b3IoKSAmJiB3aW5kb3cucGFyZW50Lm1nbmxSZWZyZXNoKSB7XG4gICAgICB3aW5kb3cucGFyZW50Lm1nbmxSZWZyZXNoKCk7XG4gICAgfVxuICB9XG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoRWRpdG9yQ29udGV4dEhlbHBlcigpKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvc2VydmljZS9UZW1wbGF0ZUFubm90YXRpb25zLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9zZXJ2aWNlL1RlbXBsYXRlQW5ub3RhdGlvbnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKCEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSkgeyByZXR1cm47IH0gdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5mdW5jdGlvbiBUZW1wbGF0ZUFubm90YXRpb25zKCkge1xuICB2YXIgQUNUSVZBVElPTl9TVEFUVVNfTk9UX0FDVElWQVRFRCA9IDA7XG4gIHZhciBBQ1RJVkFUSU9OX1NUQVRVU19NT0RJRklFRCA9IDE7XG4gIHZhciBBQ1RJVkFUSU9OX1NUQVRVU19BQ1RJVkFURUQgPSAyO1xuICB2YXIgVkFMVUVfUFJPQ0VTU09SUyA9IHtcbiAgICBjb250ZW50OiBnZXRDb250ZW50UGF0aCxcbiAgICBhdmFpbGFibGVDb21wb25lbnRzOiBnZXRBdmFpbGFibGVDb21wb25lbnRzLFxuICAgIHNob3dBZGRCdXR0b246IGNhbkFkZE1vcmVDb21wb25lbnRzLFxuICAgIGFjdGl2YXRpb25TdGF0dXM6IGdldEFjdGl2YXRpb25TdGF0dXNcbiAgfTtcbiAgdmFyIFBBR0VfTUFQID0ge1xuICAgIGNvbnRlbnQ6IFsnQHBhdGgnLCAnJ10sXG4gICAgZGlhbG9nOiBbJ2RpYWxvZycsICcnLCBnZXRWYWx1ZUZyb21PYmplY3RdXG4gIH07XG4gIHZhciBBUkVBX01BUCA9IHtcbiAgICBuYW1lOiBbJ0BuYW1lJywgJyddLFxuICAgIGNvbnRlbnQ6IFBBR0VfTUFQLmNvbnRlbnQsXG4gICAgZGlhbG9nOiBQQUdFX01BUC5kaWFsb2csXG4gICAgYXZhaWxhYmxlQ29tcG9uZW50czogWydhdmFpbGFibGVDb21wb25lbnRzJywgW11dLFxuICAgIHR5cGU6IFsndHlwZScsICdsaXN0JywgZ2V0VmFsdWVGcm9tT2JqZWN0XSxcbiAgICBsYWJlbDogWyd0aXRsZScsICcnLCBnZXRWYWx1ZUZyb21PYmplY3RdLFxuICAgIGluaGVyaXQ6IFsnaW5oZXJpdGFuY2UnLCBmYWxzZSwgZ2V0VmFsdWVGcm9tT2JqZWN0XSxcbiAgICBvcHRpb25hbDogWydvcHRpb25hbCcsIGZhbHNlLCBnZXRWYWx1ZUZyb21PYmplY3RdLFxuICAgIGNyZWF0ZWRBcmVhTm9kZTogWydjcmVhdGVBcmVhTm9kZScsIHRydWUsIGdldFZhbHVlRnJvbU9iamVjdF0sXG4gICAgc2hvd0FkZEJ1dHRvbjogWydtYXhDb21wb25lbnRzJywgdHJ1ZV0sXG4gICAgc2hvd05ld0NvbXBvbmVudEFyZWE6IFtudWxsLCB0cnVlXSxcbiAgICBkZXNjcmlwdGlvbjogWydkZXNjcmlwdGlvbicsICcnLCBnZXRWYWx1ZUZyb21PYmplY3RdLFxuICAgIGFjdGl2YXRpb25TdGF0dXM6IFtudWxsLCAwXVxuICB9O1xuICB2YXIgQ09NUE9ORU5UX01BUCA9IHtcbiAgICBjb250ZW50OiBQQUdFX01BUC5jb250ZW50LFxuICAgIGRpYWxvZzogUEFHRV9NQVAuZGlhbG9nLFxuICAgIGxhYmVsOiBbJ3RpdGxlJywgJycsIGdldFZhbHVlRnJvbU9iamVjdF0sXG4gICAgZGVzY3JpcHRpb246IFsnZGVzY3JpcHRpb24nLCAnJywgZ2V0VmFsdWVGcm9tT2JqZWN0XSxcbiAgICBhY3RpdmF0aW9uU3RhdHVzOiBbbnVsbCwgMF1cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBnZXRBcmVhQ29tbWVudFN0cmluZzogZ2V0QXJlYUNvbW1lbnRTdHJpbmcsXG4gICAgZ2V0Q29tcG9uZW50Q29tbWVudFN0cmluZzogZ2V0Q29tcG9uZW50Q29tbWVudFN0cmluZyxcbiAgICBnZXRQYWdlQ29tbWVudFN0cmluZzogZ2V0UGFnZUNvbW1lbnRTdHJpbmdcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRQYWdlQ29tbWVudFN0cmluZyhwYWdlLCB0ZW1wbGF0ZURlZmluaXRpb24pIHtcbiAgICByZXR1cm4gXCJjbXM6cGFnZSBcIi5jb25jYXQoZ2V0Q29tbWVudFN0cmluZyhwYWdlLCBQQUdFX01BUCwgdGVtcGxhdGVEZWZpbml0aW9uKSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcmVhQ29tbWVudFN0cmluZyhhcmVhLCB0ZW1wbGF0ZURlZmluaXRpb24sIGNvbXBvbmVudENvdW50KSB7XG4gICAgdmFyIGN1c3RvbVBhcmFtcyA9IHtcbiAgICAgIGNvbXBvbmVudENvdW50OiBjb21wb25lbnRDb3VudFxuICAgIH07XG4gICAgdmFyIGFyZWFUZW1wbGF0ZURlZmluaXRpb24gPSB0ZW1wbGF0ZURlZmluaXRpb24gJiYgdGVtcGxhdGVEZWZpbml0aW9uLmFyZWFzID8gdGVtcGxhdGVEZWZpbml0aW9uLmFyZWFzW2FyZWFbJ0BuYW1lJ11dIDoge307XG4gICAgcmV0dXJuIFwiY21zOmFyZWEgXCIuY29uY2F0KGdldENvbW1lbnRTdHJpbmcoYXJlYSwgQVJFQV9NQVAsIGFyZWFUZW1wbGF0ZURlZmluaXRpb24sIGN1c3RvbVBhcmFtcykpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29tcG9uZW50Q29tbWVudFN0cmluZyhjb21wb25lbnQsIHRlbXBsYXRlRGVmaW5pdGlvbikge1xuICAgIHJldHVybiBcImNtczpjb21wb25lbnQgXCIuY29uY2F0KGdldENvbW1lbnRTdHJpbmcoY29tcG9uZW50LCBDT01QT05FTlRfTUFQLCB0ZW1wbGF0ZURlZmluaXRpb24pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbW1lbnRTdHJpbmcoZGF0YSwgbWFwLCB0ZW1wbGF0ZURlZmluaXRpb24sIGN1c3RvbVBhcmFtcykge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhtYXApLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIF9tYXAka2V5ID0gX3NsaWNlZFRvQXJyYXkobWFwW2tleV0sIDMpLFxuICAgICAgICAgIGRhdGFLZXkgPSBfbWFwJGtleVswXSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWUgPSBfbWFwJGtleVsxXSxcbiAgICAgICAgICBnZXREYXRhRm4gPSBfbWFwJGtleVsyXTtcblxuICAgICAgdmFyIGNvbnRlbnRQcm9jZXNzb3IgPSBWQUxVRV9QUk9DRVNTT1JTW2tleV07XG4gICAgICB2YXIgdmFsdWUgPSBkZWZhdWx0VmFsdWU7XG5cbiAgICAgIGlmIChjb250ZW50UHJvY2Vzc29yKSB7XG4gICAgICAgIHZhbHVlID0gY29udGVudFByb2Nlc3NvcihkYXRhLCBkYXRhS2V5LCB0ZW1wbGF0ZURlZmluaXRpb24sIGN1c3RvbVBhcmFtcyk7XG4gICAgICB9IGVsc2UgaWYgKGdldERhdGFGbikge1xuICAgICAgICB2YWx1ZSA9IGdldERhdGFGbih0ZW1wbGF0ZURlZmluaXRpb24sIGRhdGFLZXksIGRlZmF1bHRWYWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGRhdGEgIT0gbnVsbCAmJiBkYXRhS2V5ICE9PSBudWxsKSB7XG4gICAgICAgIHZhbHVlID0gZGF0YVtkYXRhS2V5XSB8fCAnJztcbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZW0gPSB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH07XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlbS52YWx1ZSAhPT0gXCJzdHJpbmdcIiB8fCBpdGVtLnZhbHVlKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFwiXCIuY29uY2F0KGtleSwgXCI9XFxcIlwiKS5jb25jYXQoaXRlbS52YWx1ZSwgXCJcXFwiXCIpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0LmpvaW4oJyAnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEF2YWlsYWJsZUNvbXBvbmVudHMoYXJlYSwgZGF0YUtleSwgdGVtcGxhdGVEZWZpbml0aW9uKSB7XG4gICAgaWYgKCF0ZW1wbGF0ZURlZmluaXRpb24gfHwgIXRlbXBsYXRlRGVmaW5pdGlvbltkYXRhS2V5XSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0ZW1wbGF0ZURlZmluaXRpb25bZGF0YUtleV0pLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gdGVtcGxhdGVEZWZpbml0aW9uW2RhdGFLZXldW2tleV0uaWQ7XG4gICAgfSkuam9pbignLCcpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuQWRkTW9yZUNvbXBvbmVudHMoYXJlYSwgZGF0YUtleSwgdGVtcGxhdGVEZWZpbml0aW9uLCBjdXN0b21QYXJhbXMpIHtcbiAgICBpZiAoIXRlbXBsYXRlRGVmaW5pdGlvbiB8fCB0ZW1wbGF0ZURlZmluaXRpb24ubWF4Q29tcG9uZW50cyA9PSBudWxsIHx8ICFjdXN0b21QYXJhbXMgfHwgY3VzdG9tUGFyYW1zLmNvbXBvbmVudENvdW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBjdXN0b21QYXJhbXMuY29tcG9uZW50Q291bnQgPCB0ZW1wbGF0ZURlZmluaXRpb24ubWF4Q29tcG9uZW50cztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFZhbHVlRnJvbU9iamVjdChvYmosIGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgdmFyIHZhbHVlID0gb2JqICYmIF90eXBlb2Yob2JqKSA9PT0gJ29iamVjdCcgJiYga2V5ID8gb2JqW2tleV0gOiBudWxsO1xuICAgIHZhbHVlID0gdmFsdWUgPT0gbnVsbCA/IGRlZmF1bHRWYWx1ZSA6IHZhbHVlO1xuICAgIHZhbHVlID0gdHlwZW9mIGRlZmF1bHRWYWx1ZSA9PT0gJ2Jvb2xlYW4nID8gQm9vbGVhbih2YWx1ZSkgOiB2YWx1ZTtcbiAgICByZXR1cm4gdmFsdWUgIT0gbnVsbCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29udGVudFBhdGgoZGF0YSwga2V5KSB7XG4gICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFba2V5XSA6IG51bGw7IC8vIE5PVEU6IEVtcHR5IHN0cmluZyBpcyBhY2NlcHRhYmxlLiBTbyB3ZSBuZWVkIGNoZWNrIHZhbHVlICE9IG51bGxcblxuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsID8gXCJ3ZWJzaXRlOlwiLmNvbmNhdCh2YWx1ZSkgOiAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFjdGl2YXRpb25TdGF0dXMoZGF0YSkge1xuICAgIGlmICghZGF0YSB8fCAhZGF0YVsnbWdubDphY3RpdmF0aW9uU3RhdHVzJ10gfHwgZGF0YVsnbWdubDphY3RpdmF0aW9uU3RhdHVzJ10gPT09ICdmYWxzZScpIHtcbiAgICAgIHJldHVybiBBQ1RJVkFUSU9OX1NUQVRVU19OT1RfQUNUSVZBVEVEO1xuICAgIH1cblxuICAgIHZhciBsYXN0TW9kaWZpZWQgPSBkYXRhWydtZ25sOmxhc3RNb2RpZmllZCddID8gbmV3IERhdGUoZGF0YVsnbWdubDpsYXN0TW9kaWZpZWQnXSkgOiBudWxsO1xuICAgIHZhciBsYXN0QWN0aXZhdGVkID0gZGF0YVsnbWdubDpsYXN0QWN0aXZhdGVkJ10gPyBuZXcgRGF0ZShkYXRhWydtZ25sOmxhc3RBY3RpdmF0ZWQnXSkgOiBudWxsO1xuICAgIHJldHVybiBsYXN0TW9kaWZpZWQgJiYgbGFzdEFjdGl2YXRlZCAmJiBsYXN0TW9kaWZpZWQuZ2V0VGltZSgpID4gbGFzdEFjdGl2YXRlZC5nZXRUaW1lKCkgPyBBQ1RJVkFUSU9OX1NUQVRVU19NT0RJRklFRCA6IEFDVElWQVRJT05fU1RBVFVTX0FDVElWQVRFRDtcbiAgfVxufVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKFRlbXBsYXRlQW5ub3RhdGlvbnMoKSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3NlcnZpY2UvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9zZXJ2aWNlL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogVGVtcGxhdGVBbm5vdGF0aW9ucywgRWRpdG9yQ29udGV4dEhlbHBlciAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfVGVtcGxhdGVBbm5vdGF0aW9uc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9UZW1wbGF0ZUFubm90YXRpb25zICovIFwiLi9zcmMvc2VydmljZS9UZW1wbGF0ZUFubm90YXRpb25zLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiVGVtcGxhdGVBbm5vdGF0aW9uc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9UZW1wbGF0ZUFubm90YXRpb25zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9FZGl0b3JDb250ZXh0SGVscGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0VkaXRvckNvbnRleHRIZWxwZXIgKi8gXCIuL3NyYy9zZXJ2aWNlL0VkaXRvckNvbnRleHRIZWxwZXIuanNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJFZGl0b3JDb250ZXh0SGVscGVyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX0VkaXRvckNvbnRleHRIZWxwZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl07IH0pO1xuXG5cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gMDpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogbXVsdGkgLi9zcmMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3NyYy9pbmRleC5qcyAqL1wiLi9zcmMvaW5kZXguanNcIik7XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0lzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12YVc1a1pYZ3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNObGNuWnBZMlV2UldScGRHOXlRMjl1ZEdWNGRFaGxiSEJsY2k1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZjMlZ5ZG1salpTOVVaVzF3YkdGMFpVRnVibTkwWVhScGIyNXpMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5elpYSjJhV05sTDJsdVpHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYklrVmthWFJ2Y2tOdmJuUmxlSFJJWld4d1pYSWlMQ0pwYmtWa2FYUnZjaUlzSW5KbFpuSmxjMmdpTENKcGJrVmthWFJ2Y2xCeVpYWnBaWGNpTENKcGJrbG1jbUZ0WlNJc0luZHBibVJ2ZHlJc0lrSnZiMnhsWVc0aUxDSm1jbUZ0WlVWc1pXMWxiblFpTENKamJHRnpjMDVoYldVaUxDSnBibU5zZFdSbGN5SXNJbkJoY21WdWRDSXNJbXh2WTJGMGFXOXVJaXdpYUdGemFDSXNJbVZ1WkhOWGFYUm9JaXdpYldkdWJGSmxabkpsYzJnaUxDSlVaVzF3YkdGMFpVRnVibTkwWVhScGIyNXpJaXdpUVVOVVNWWkJWRWxQVGw5VFZFRlVWVk5mVGs5VVgwRkRWRWxXUVZSRlJDSXNJa0ZEVkVsV1FWUkpUMDVmVTFSQlZGVlRYMDFQUkVsR1NVVkVJaXdpUVVOVVNWWkJWRWxQVGw5VFZFRlVWVk5mUVVOVVNWWkJWRVZFSWl3aVZrRk1WVVZmVUZKUFEwVlRVMDlTVXlJc0ltTnZiblJsYm5RaUxDSm5aWFJEYjI1MFpXNTBVR0YwYUNJc0ltRjJZV2xzWVdKc1pVTnZiWEJ2Ym1WdWRITWlMQ0puWlhSQmRtRnBiR0ZpYkdWRGIyMXdiMjVsYm5Seklpd2ljMmh2ZDBGa1pFSjFkSFJ2YmlJc0ltTmhia0ZrWkUxdmNtVkRiMjF3YjI1bGJuUnpJaXdpWVdOMGFYWmhkR2x2YmxOMFlYUjFjeUlzSW1kbGRFRmpkR2wyWVhScGIyNVRkR0YwZFhNaUxDSlFRVWRGWDAxQlVDSXNJbVJwWVd4dlp5SXNJbWRsZEZaaGJIVmxSbkp2YlU5aWFtVmpkQ0lzSWtGU1JVRmZUVUZRSWl3aWJtRnRaU0lzSW5SNWNHVWlMQ0pzWVdKbGJDSXNJbWx1YUdWeWFYUWlMQ0p2Y0hScGIyNWhiQ0lzSW1OeVpXRjBaV1JCY21WaFRtOWtaU0lzSW5Ob2IzZE9aWGREYjIxd2IyNWxiblJCY21WaElpd2laR1Z6WTNKcGNIUnBiMjRpTENKRFQwMVFUMDVGVGxSZlRVRlFJaXdpWjJWMFFYSmxZVU52YlcxbGJuUlRkSEpwYm1jaUxDSm5aWFJEYjIxd2IyNWxiblJEYjIxdFpXNTBVM1J5YVc1bklpd2laMlYwVUdGblpVTnZiVzFsYm5SVGRISnBibWNpTENKd1lXZGxJaXdpZEdWdGNHeGhkR1ZFWldacGJtbDBhVzl1SWl3aVoyVjBRMjl0YldWdWRGTjBjbWx1WnlJc0ltRnlaV0VpTENKamIyMXdiMjVsYm5SRGIzVnVkQ0lzSW1OMWMzUnZiVkJoY21GdGN5SXNJbUZ5WldGVVpXMXdiR0YwWlVSbFptbHVhWFJwYjI0aUxDSmhjbVZoY3lJc0ltTnZiWEJ2Ym1WdWRDSXNJbVJoZEdFaUxDSnRZWEFpTENKeVpYTjFiSFFpTENKUFltcGxZM1FpTENKclpYbHpJaXdpWm05eVJXRmphQ0lzSW10bGVTSXNJbVJoZEdGTFpYa2lMQ0prWldaaGRXeDBWbUZzZFdVaUxDSm5aWFJFWVhSaFJtNGlMQ0pqYjI1MFpXNTBVSEp2WTJWemMyOXlJaXdpZG1Gc2RXVWlMQ0pwZEdWdElpd2ljSFZ6YUNJc0ltcHZhVzRpTENKcFpDSXNJbTFoZUVOdmJYQnZibVZ1ZEhNaUxDSnZZbW9pTENKc1lYTjBUVzlrYVdacFpXUWlMQ0pFWVhSbElpd2liR0Z6ZEVGamRHbDJZWFJsWkNJc0ltZGxkRlJwYldVaVhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03UVVGRFJDeFBPMUZEVmtFN1VVRkRRVHM3VVVGRlFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3T3p0UlFVZEJPMUZCUTBFN08xRkJSVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3d3UTBGQk1FTXNaME5CUVdkRE8xRkJRekZGTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEVzZDBSQlFYZEVMR3RDUVVGclFqdFJRVU14UlR0UlFVTkJMR2xFUVVGcFJDeGpRVUZqTzFGQlF5OUVPenRSUVVWQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFTeDVRMEZCZVVNc2FVTkJRV2xETzFGQlF6RkZMR2RJUVVGblNDeHRRa0ZCYlVJc1JVRkJSVHRSUVVOeVNUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxESkNRVUV5UWl3d1FrRkJNRUlzUlVGQlJUdFJRVU4yUkN4cFEwRkJhVU1zWlVGQlpUdFJRVU5vUkR0UlFVTkJPMUZCUTBFN08xRkJSVUU3VVVGRFFTeHpSRUZCYzBRc0swUkJRU3RFT3p0UlFVVnlTRHRSUVVOQk96czdVVUZIUVR0UlFVTkJPenM3T3pzN096czdPenM3TzBGRGJFWkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUczdPenM3T3pzN096czdPenRCUTBGQk8wRkJRVUVzVTBGQlUwRXNiVUpCUVZRc1IwRkJLMEk3UVVGRE0wSXNVMEZCVHp0QlFVTklReXhaUVVGUkxFVkJRVkpCTEZGQlJFYzdRVUZGU0VNc1YwRkJUeXhGUVVGUVFTeFBRVVpITzBGQlIwaERMRzFDUVVGbExFVkJRV1pCTzBGQlNFY3NSMEZCVURzN1FVRk5RU3hYUVVGVFF5eFJRVUZVTEVkQlFXOUNPMEZCUTJoQ0xGRkJRVWtzVDBGQlQwTXNUVUZCVUN4TFFVRnJRaXhYUVVGMFFpeEZRVUZ0UXp0QlFVTXZRaXhoUVVGUExFdEJRVkE3UVVGRFNEczdRVUZEUkN4WFFVRlBReXhQUVVGUExFTkJRVU5FTEUxQlFVMHNRMEZCUTBVc1dVRkJVQ3hKUVVGMVFrWXNUVUZCVFN4RFFVRkRSU3haUVVGUUxFTkJRVzlDUXl4VFFVRndRaXhEUVVFNFFrTXNVVUZCT1VJc1EwRkJkVU1zVjBGQmRrTXNRMEZCZUVJc1EwRkJaRHRCUVVOSU96dEJRVVZFTEZkQlFWTlNMRkZCUVZRc1IwRkJiMEk3UVVGRGFFSXNWMEZCVDBjc1VVRkJVU3hOUVVGTlF5eE5RVUZOTEVOQlFVTkxMRTFCUVZBc1EwRkJZME1zVVVGQlpDeERRVUYxUWtNc1NVRkJka0lzUTBGQk5FSkRMRkZCUVRWQ0xFTkJRWEZETEU5QlFYSkRMRU5CUVhKQ08wRkJRMGc3TzBGQlJVUXNWMEZCVTFZc1pVRkJWQ3hIUVVFeVFqdEJRVU4yUWl4WFFVRlBReXhSUVVGUkxFMUJRVTFETEUxQlFVMHNRMEZCUTBzc1RVRkJVQ3hEUVVGalF5eFJRVUZrTEVOQlFYVkNReXhKUVVGMlFpeERRVUUwUWtNc1VVRkJOVUlzUTBGQmNVTXNUMEZCY2tNc1EwRkJja0k3UVVGRFNEczdRVUZGUkN4WFFVRlRXQ3hQUVVGVUxFZEJRVzFDTzBGQlEyWXNVVUZCU1VRc1VVRkJVU3hOUVVGTlNTeE5RVUZOTEVOQlFVTkxMRTFCUVZBc1EwRkJZMGtzVjBGQmFFTXNSVUZCTmtNN1FVRkRla05VTEZsQlFVMHNRMEZCUTBzc1RVRkJVQ3hEUVVGalNTeFhRVUZrTzBGQlEwZzdRVUZEU2p0QlFVTktPenRCUVVWalpDeHJSa0ZCYlVJc1JVRkJiRU1zUlRzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVU0zUWtFc1UwRkJVMlVzYlVKQlFWUXNSMEZCSzBJN1FVRkRNMElzVFVGQlRVTXNLMEpCUVN0Q0xFZEJRVWNzUTBGQmVFTTdRVUZEUVN4TlFVRk5ReXd3UWtGQk1FSXNSMEZCUnl4RFFVRnVRenRCUVVOQkxFMUJRVTFETERKQ1FVRXlRaXhIUVVGSExFTkJRWEJETzBGQlJVRXNUVUZCVFVNc1owSkJRV2RDTEVkQlFVYzdRVUZEY2tKRExGZEJRVThzUlVGQlJVTXNZMEZFV1R0QlFVVnlRa01zZFVKQlFXMUNMRVZCUVVWRExITkNRVVpCTzBGQlIzSkNReXhwUWtGQllTeEZRVUZGUXl4dlFrRklUVHRCUVVseVFrTXNiMEpCUVdkQ0xFVkJRVVZETzBGQlNrY3NSMEZCZWtJN1FVRk5RU3hOUVVGTlF5eFJRVUZSTEVkQlFVYzdRVUZEWWxJc1YwRkJUeXhGUVVGRkxFTkJRVU1zVDBGQlJDeEZRVUZWTEVWQlFWWXNRMEZFU1R0QlFVVmlVeXhWUVVGTkxFVkJRVVVzUTBGQlF5eFJRVUZFTEVWQlFWY3NSVUZCV0N4RlFVRmxReXhyUWtGQlpqdEJRVVpMTEVkQlFXcENPMEZCU1VFc1RVRkJUVU1zVVVGQlVTeEhRVUZITzBGQlEySkRMRkZCUVVrc1JVRkJSU3hEUVVGRExFOUJRVVFzUlVGQlZTeEZRVUZXTEVOQlJFODdRVUZGWWxvc1YwRkJUeXhGUVVGRlVTeFJRVUZSTEVOQlFVTlNMRTlCUmt3N1FVRkhZbE1zVlVGQlRTeEZRVUZGUkN4UlFVRlJMRU5CUVVORExFMUJTRW83UVVGSllsQXNkVUpCUVcxQ0xFVkJRVVVzUTBGQlF5eHhRa0ZCUkN4RlFVRjNRaXhGUVVGNFFpeERRVXBTTzBGQlMySlhMRkZCUVVrc1JVRkJSU3hEUVVGRExFMUJRVVFzUlVGQlV5eE5RVUZVTEVWQlFXbENTQ3hyUWtGQmFrSXNRMEZNVHp0QlFVMWlTU3hUUVVGTExFVkJRVVVzUTBGQlF5eFBRVUZFTEVWQlFWVXNSVUZCVml4RlFVRmpTaXhyUWtGQlpDeERRVTVOTzBGQlQySkxMRmRCUVU4c1JVRkJSU3hEUVVGRExHRkJRVVFzUlVGQlowSXNTMEZCYUVJc1JVRkJkVUpNTEd0Q1FVRjJRaXhEUVZCSk8wRkJVV0pOTEZsQlFWRXNSVUZCUlN4RFFVRkRMRlZCUVVRc1JVRkJZU3hMUVVGaUxFVkJRVzlDVGl4clFrRkJjRUlzUTBGU1J6dEJRVk5pVHl4dFFrRkJaU3hGUVVGRkxFTkJRVU1zWjBKQlFVUXNSVUZCYlVJc1NVRkJia0lzUlVGQmVVSlFMR3RDUVVGNlFpeERRVlJLTzBGQlZXSk9MR2xDUVVGaExFVkJRVVVzUTBGQlF5eGxRVUZFTEVWQlFXdENMRWxCUVd4Q0xFTkJWa1k3UVVGWFltTXNkMEpCUVc5Q0xFVkJRVVVzUTBGQlF5eEpRVUZFTEVWQlFVOHNTVUZCVUN4RFFWaFVPMEZCV1dKRExHVkJRVmNzUlVGQlJTeERRVUZETEdGQlFVUXNSVUZCWjBJc1JVRkJhRUlzUlVGQmIwSlVMR3RDUVVGd1FpeERRVnBCTzBGQllXSktMRzlDUVVGblFpeEZRVUZGTEVOQlFVTXNTVUZCUkN4RlFVRlBMRU5CUVZBN1FVRmlUQ3hIUVVGcVFqdEJRV2RDUVN4TlFVRk5ZeXhoUVVGaExFZEJRVWM3UVVGRGJFSndRaXhYUVVGUExFVkJRVVZSTEZGQlFWRXNRMEZCUTFJc1QwRkVRVHRCUVVWc1FsTXNWVUZCVFN4RlFVRkZSQ3hSUVVGUkxFTkJRVU5ETEUxQlJrTTdRVUZIYkVKTExGTkJRVXNzUlVGQlJTeERRVUZETEU5QlFVUXNSVUZCVlN4RlFVRldMRVZCUVdOS0xHdENRVUZrTEVOQlNGYzdRVUZKYkVKVExHVkJRVmNzUlVGQlJTeERRVUZETEdGQlFVUXNSVUZCWjBJc1JVRkJhRUlzUlVGQmIwSlVMR3RDUVVGd1FpeERRVXBMTzBGQlMyeENTaXh2UWtGQlowSXNSVUZCUlN4RFFVRkRMRWxCUVVRc1JVRkJUeXhEUVVGUU8wRkJURUVzUjBGQmRFSTdRVUZQUVN4VFFVRlBPMEZCUTBobExIZENRVUZ2UWl4RlFVRndRa0VzYjBKQlJFYzdRVUZGU0VNc05rSkJRWGxDTEVWQlFYcENRU3g1UWtGR1J6dEJRVWRJUXl4M1FrRkJiMElzUlVGQmNFSkJPMEZCU0Vjc1IwRkJVRHM3UVVGTlFTeFhRVUZUUVN4dlFrRkJWQ3hEUVVFNFFrTXNTVUZCT1VJc1JVRkJiME5ETEd0Q1FVRndReXhGUVVGM1JEdEJRVU53UkN3NFFrRkJiVUpETEdkQ1FVRm5RaXhEUVVGRFJpeEpRVUZFTEVWQlFVOW9RaXhSUVVGUUxFVkJRV2xDYVVJc2EwSkJRV3BDTEVOQlFXNURPMEZCUTBnN08wRkJSVVFzVjBGQlUwb3NiMEpCUVZRc1EwRkJPRUpOTEVsQlFUbENMRVZCUVc5RFJpeHJRa0ZCY0VNc1JVRkJkMFJITEdOQlFYaEVMRVZCUVhkRk8wRkJRM0JGTEZGQlFVMURMRmxCUVZrc1IwRkJSenRCUVVGRlJDeHZRa0ZCWXl4RlFVRmtRVHRCUVVGR0xFdEJRWEpDTzBGQlEwRXNVVUZCVFVVc2MwSkJRWE5DTEVkQlFVZE1MR3RDUVVGclFpeEpRVUZKUVN4clFrRkJhMElzUTBGQlEwMHNTMEZCZWtNc1IwRkJhVVJPTEd0Q1FVRnJRaXhEUVVGRFRTeExRVUZ1UWl4RFFVRjVRa29zU1VGQlNTeERRVUZETEU5QlFVUXNRMEZCTjBJc1EwRkJha1FzUjBGQk1rWXNSVUZCTVVnN1FVRkRRU3c0UWtGQmJVSkVMR2RDUVVGblFpeERRVUZEUXl4SlFVRkVMRVZCUVU5b1FpeFJRVUZRTEVWQlFXbENiVUlzYzBKQlFXcENMRVZCUVhsRFJDeFpRVUY2UXl4RFFVRnVRenRCUVVOSU96dEJRVVZFTEZkQlFWTlFMSGxDUVVGVUxFTkJRVzFEVlN4VFFVRnVReXhGUVVFNFExQXNhMEpCUVRsRExFVkJRV3RGTzBGQlF6bEVMRzFEUVVGM1FrTXNaMEpCUVdkQ0xFTkJRVU5OTEZOQlFVUXNSVUZCV1Zvc1lVRkJXaXhGUVVFeVFrc3NhMEpCUVROQ0xFTkJRWGhETzBGQlEwZzdPMEZCUlVRc1YwRkJVME1zWjBKQlFWUXNRMEZCTUVKUExFbEJRVEZDTEVWQlFXZERReXhIUVVGb1F5eEZRVUZ4UTFRc2EwSkJRWEpETEVWQlFYbEVTU3haUVVGNlJDeEZRVUYxUlR0QlFVTnVSU3hSUVVGTlRTeE5RVUZOTEVkQlFVY3NSVUZCWmp0QlFVTkJReXhWUVVGTkxFTkJRVU5ETEVsQlFWQXNRMEZCV1Vnc1IwRkJXaXhGUVVGcFFra3NUMEZCYWtJc1EwRkJlVUlzVlVGQlFVTXNSMEZCUnl4RlFVRkpPMEZCUVVFc2IwTkJRMlZNTEVkQlFVY3NRMEZCUTBzc1IwRkJSQ3hEUVVSc1FqdEJRVUZCTEZWQlEzSkNReXhQUVVSeFFqdEJRVUZCTEZWQlExcERMRmxCUkZrN1FVRkJRU3hWUVVORlF5eFRRVVJHT3p0QlFVVTFRaXhWUVVGTlF5eG5Ra0ZCWjBJc1IwRkJSelZETEdkQ1FVRm5RaXhEUVVGRGQwTXNSMEZCUkN4RFFVRjZRenRCUVVOQkxGVkJRVWxMTEV0QlFVc3NSMEZCUjBnc1dVRkJXanM3UVVGRFFTeFZRVUZKUlN4blFrRkJTaXhGUVVGelFqdEJRVU5zUWtNc1lVRkJTeXhIUVVGSFJDeG5Ra0ZCWjBJc1EwRkJRMVlzU1VGQlJDeEZRVUZQVHl4UFFVRlFMRVZCUVdkQ1ppeHJRa0ZCYUVJc1JVRkJiME5KTEZsQlFYQkRMRU5CUVhoQ08wRkJRMGdzVDBGR1JDeE5RVVZQTEVsQlFVbGhMRk5CUVVvc1JVRkJaVHRCUVVOc1FrVXNZVUZCU3l4SFFVRkhSaXhUUVVGVExFTkJRVU5xUWl4clFrRkJSQ3hGUVVGeFFtVXNUMEZCY2tJc1JVRkJPRUpETEZsQlFUbENMRU5CUVdwQ08wRkJRMGdzVDBGR1RTeE5RVVZCTEVsQlFVbFNMRWxCUVVrc1NVRkJTU3hKUVVGU0xFbEJRV2RDVHl4UFFVRlBMRXRCUVVzc1NVRkJhRU1zUlVGQmMwTTdRVUZEZWtOSkxHRkJRVXNzUjBGQlIxZ3NTVUZCU1N4RFFVRkRUeXhQUVVGRUxFTkJRVW9zU1VGQmFVSXNSVUZCZWtJN1FVRkRTRHM3UVVGRFJDeFZRVUZOU3l4SlFVRkpMRWRCUVVjN1FVRkJSVTRzVjBGQlJ5eEZRVUZJUVN4SFFVRkdPMEZCUVU5TExHRkJRVXNzUlVGQlRFRTdRVUZCVUN4UFFVRmlPenRCUVVWQkxGVkJRVWtzVDBGQlQwTXNTVUZCU1N4RFFVRkRSQ3hMUVVGYUxFdEJRWE5DTEZGQlFYUkNMRWxCUVd0RFF5eEpRVUZKTEVOQlFVTkVMRXRCUVRORExFVkJRV3RFTzBGQlF6bERWQ3hqUVVGTkxFTkJRVU5YTEVsQlFWQXNWMEZCWlZBc1IwRkJaaXhuUWtGQmRVSk5MRWxCUVVrc1EwRkJRMFFzUzBGQk5VSTdRVUZEU0R0QlFVTktMRXRCYUVKRU8wRkJhMEpCTEZkQlFVOVVMRTFCUVUwc1EwRkJRMWtzU1VGQlVDeERRVUZaTEVkQlFWb3NRMEZCVUR0QlFVTklPenRCUVVWRUxGZEJRVk0xUXl4elFrRkJWQ3hEUVVGblEzZENMRWxCUVdoRExFVkJRWE5EWVN4UFFVRjBReXhGUVVFclEyWXNhMEpCUVM5RExFVkJRVzFGTzBGQlF5OUVMRkZCUVVrc1EwRkJRMEVzYTBKQlFVUXNTVUZCZFVJc1EwRkJRMEVzYTBKQlFXdENMRU5CUVVObExFOUJRVVFzUTBGQk9VTXNSVUZCZVVRN1FVRkRja1FzWVVGQlR5eEZRVUZRTzBGQlEwZzdPMEZCUlVRc1YwRkJUMG9zVFVGQlRTeERRVUZEUXl4SlFVRlFMRU5CUVZsYUxHdENRVUZyUWl4RFFVRkRaU3hQUVVGRUxFTkJRVGxDTEVWQlFYbERUaXhIUVVGNlF5eERRVUUyUXl4VlFVRkJTeXhIUVVGSE8wRkJRVUVzWVVGQlNXUXNhMEpCUVd0Q0xFTkJRVU5sTEU5QlFVUXNRMEZCYkVJc1EwRkJORUpFTEVkQlFUVkNMRVZCUVdsRFV5eEZRVUZ5UXp0QlFVRkJMRXRCUVdoRUxFVkJRWGxHUkN4SlFVRjZSaXhEUVVFNFJpeEhRVUU1Uml4RFFVRlFPMEZCUTBnN08wRkJSVVFzVjBGQlV6RkRMRzlDUVVGVUxFTkJRVGhDYzBJc1NVRkJPVUlzUlVGQmIwTmhMRTlCUVhCRExFVkJRVFpEWml4clFrRkJOME1zUlVGQmFVVkpMRmxCUVdwRkxFVkJRU3RGTzBGQlF6TkZMRkZCUVVrc1EwRkJRMG9zYTBKQlFVUXNTVUZCZFVKQkxHdENRVUZyUWl4RFFVRkRkMElzWVVGQmJrSXNTVUZCYjBNc1NVRkJNMFFzU1VGQmJVVXNRMEZCUTNCQ0xGbEJRWEJGTEVsQlFXOUdRU3haUVVGWkxFTkJRVU5FTEdOQlFXSXNTVUZCSzBJc1NVRkJka2dzUlVGQk5rZzdRVUZEZWtnc1lVRkJUeXhKUVVGUU8wRkJRMGc3TzBGQlEwUXNWMEZCVDBNc1dVRkJXU3hEUVVGRFJDeGpRVUZpTEVkQlFUaENTQ3hyUWtGQmEwSXNRMEZCUTNkQ0xHRkJRWGhFTzBGQlEwZzdPMEZCUlVRc1YwRkJVM1pETEd0Q1FVRlVMRU5CUVRSQ2QwTXNSMEZCTlVJc1JVRkJhVU5ZTEVkQlFXcERMRVZCUVhORFJTeFpRVUYwUXl4RlFVRnZSRHRCUVVOb1JDeFJRVUZKUnl4TFFVRkxMRWRCUVVkTkxFZEJRVWNzU1VGQlNTeFJRVUZQUVN4SFFVRlFMRTFCUVdVc1VVRkJkRUlzU1VGQmEwTllMRWRCUVd4RExFZEJRWGREVnl4SFFVRkhMRU5CUVVOWUxFZEJRVVFzUTBGQk0wTXNSMEZCYlVRc1NVRkJMMFE3UVVGRFFVc3NVMEZCU3l4SFFVRkhRU3hMUVVGTExFbEJRVWtzU1VGQlZDeEhRVUZuUWtnc1dVRkJhRUlzUjBGQkswSkhMRXRCUVhaRE8wRkJRMEZCTEZOQlFVc3NSMEZCUnl4UFFVRlBTQ3haUVVGUUxFdEJRWGRDTEZOQlFYaENMRWRCUVc5RGRrUXNUMEZCVHl4RFFVRkRNRVFzUzBGQlJDeERRVUV6UXl4SFFVRnhSRUVzUzBGQk4wUTdRVUZEUVN4WFFVRlBRU3hMUVVGTExFbEJRVWtzU1VGQlZDeEhRVUZuUWtFc1MwRkJhRUlzUjBGQmQwSklMRmxCUVM5Q08wRkJRMGc3TzBGQlJVUXNWMEZCVTNoRExHTkJRVlFzUTBGQmQwSm5ReXhKUVVGNFFpeEZRVUU0UWswc1IwRkJPVUlzUlVGQmJVTTdRVUZETDBJc1VVRkJUVXNzUzBGQlN5eEhRVUZIV0N4SlFVRkpMRWRCUVVkQkxFbEJRVWtzUTBGQlEwMHNSMEZCUkN4RFFVRlFMRWRCUVdVc1NVRkJha01zUTBGRUswSXNRMEZGTDBJN08wRkJRMEVzVjBGQlQwc3NTMEZCU3l4SlFVRkpMRWxCUVZRc2NVSkJRVEpDUVN4TFFVRXpRaXhKUVVGeFF5eEZRVUUxUXp0QlFVTklPenRCUVVWRUxGZEJRVk55UXl4dFFrRkJWQ3hEUVVFMlFqQkNMRWxCUVRkQ0xFVkJRVzFETzBGQlF5OUNMRkZCUVVrc1EwRkJRMEVzU1VGQlJDeEpRVUZUTEVOQlFVTkJMRWxCUVVrc1EwRkJReXgxUWtGQlJDeERRVUZrTEVsQlFUSkRRU3hKUVVGSkxFTkJRVU1zZFVKQlFVUXNRMEZCU2l4TFFVRnJReXhQUVVGcVJpeEZRVUV3Ump0QlFVTjBSaXhoUVVGUGNrTXNLMEpCUVZBN1FVRkRTRHM3UVVGRlJDeFJRVUZOZFVRc1dVRkJXU3hIUVVGSGJFSXNTVUZCU1N4RFFVRkRMRzFDUVVGRUxFTkJRVW9zUjBGQk5FSXNTVUZCU1cxQ0xFbEJRVW9zUTBGQlUyNUNMRWxCUVVrc1EwRkJReXh0UWtGQlJDeERRVUZpTEVOQlFUVkNMRWRCUVd0RkxFbEJRWFpHTzBGQlEwRXNVVUZCVFc5Q0xHRkJRV0VzUjBGQlIzQkNMRWxCUVVrc1EwRkJReXh2UWtGQlJDeERRVUZLTEVkQlFUWkNMRWxCUVVsdFFpeEpRVUZLTEVOQlFWTnVRaXhKUVVGSkxFTkJRVU1zYjBKQlFVUXNRMEZCWWl4RFFVRTNRaXhIUVVGdlJTeEpRVUV4Ump0QlFVVkJMRmRCUVU5clFpeFpRVUZaTEVsQlFVbEZMR0ZCUVdoQ0xFbEJRV2xEUml4WlFVRlpMRU5CUVVOSExFOUJRV0lzUzBGQmVVSkVMR0ZCUVdFc1EwRkJRME1zVDBGQlpDeEZRVUV4UkN4SFFVRnZSbnBFTERCQ1FVRndSaXhIUVVGcFNFTXNNa0pCUVhoSU8wRkJRMGc3UVVGRFNqczdRVUZGWTBnc2EwWkJRVzFDTEVWQlFXeERMRVU3T3pzN096czdPenM3T3p0QlEzcElRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJJaXdpWm1sc1pTSTZJbTFuYm13dGMyVnlkbWxqWlM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaWhtZFc1amRHbHZiaUIzWldKd1lXTnJWVzVwZG1WeWMyRnNUVzlrZFd4bFJHVm1hVzVwZEdsdmJpaHliMjkwTENCbVlXTjBiM0o1S1NCN1hHNWNkR2xtS0hSNWNHVnZaaUJsZUhCdmNuUnpJRDA5UFNBbmIySnFaV04wSnlBbUppQjBlWEJsYjJZZ2JXOWtkV3hsSUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaaFkzUnZjbmtvS1R0Y2JseDBaV3h6WlNCcFppaDBlWEJsYjJZZ1pHVm1hVzVsSUQwOVBTQW5ablZ1WTNScGIyNG5JQ1ltSUdSbFptbHVaUzVoYldRcFhHNWNkRngwWkdWbWFXNWxLRnRkTENCbVlXTjBiM0o1S1R0Y2JseDBaV3h6WlNCN1hHNWNkRngwZG1GeUlHRWdQU0JtWVdOMGIzSjVLQ2s3WEc1Y2RGeDBabTl5S0haaGNpQnBJR2x1SUdFcElDaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY2dQeUJsZUhCdmNuUnpJRG9nY205dmRDbGJhVjBnUFNCaFcybGRPMXh1WEhSOVhHNTlLU2gwYUdsekxDQm1kVzVqZEdsdmJpZ3BJSHRjYm5KbGRIVnliaUFpTENJZ1hIUXZMeUJVYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSMllYSWdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN5QTlJSHQ5TzF4dVhHNGdYSFF2THlCVWFHVWdjbVZ4ZFdseVpTQm1kVzVqZEdsdmJseHVJRngwWm5WdVkzUnBiMjRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlodGIyUjFiR1ZKWkNrZ2UxeHVYRzRnWEhSY2RDOHZJRU5vWldOcklHbG1JRzF2WkhWc1pTQnBjeUJwYmlCallXTm9aVnh1SUZ4MFhIUnBaaWhwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU2tnZTF4dUlGeDBYSFJjZEhKbGRIVnliaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVsZUhCdmNuUnpPMXh1SUZ4MFhIUjlYRzRnWEhSY2RDOHZJRU55WldGMFpTQmhJRzVsZHlCdGIyUjFiR1VnS0dGdVpDQndkWFFnYVhRZ2FXNTBieUIwYUdVZ1kyRmphR1VwWEc0Z1hIUmNkSFpoY2lCdGIyUjFiR1VnUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNBOUlIdGNiaUJjZEZ4MFhIUnBPaUJ0YjJSMWJHVkpaQ3hjYmlCY2RGeDBYSFJzT2lCbVlXeHpaU3hjYmlCY2RGeDBYSFJsZUhCdmNuUnpPaUI3ZlZ4dUlGeDBYSFI5TzF4dVhHNGdYSFJjZEM4dklFVjRaV04xZEdVZ2RHaGxJRzF2WkhWc1pTQm1kVzVqZEdsdmJseHVJRngwWEhSdGIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1allXeHNLRzF2WkhWc1pTNWxlSEJ2Y25SekxDQnRiMlIxYkdVc0lHMXZaSFZzWlM1bGVIQnZjblJ6TENCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktUdGNibHh1SUZ4MFhIUXZMeUJHYkdGbklIUm9aU0J0YjJSMWJHVWdZWE1nYkc5aFpHVmtYRzRnWEhSY2RHMXZaSFZzWlM1c0lEMGdkSEoxWlR0Y2JseHVJRngwWEhRdkx5QlNaWFIxY200Z2RHaGxJR1Y0Y0c5eWRITWdiMllnZEdobElHMXZaSFZzWlZ4dUlGeDBYSFJ5WlhSMWNtNGdiVzlrZFd4bExtVjRjRzl5ZEhNN1hHNGdYSFI5WEc1Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdWeklHOWlhbVZqZENBb1gxOTNaV0p3WVdOclgyMXZaSFZzWlhOZlh5bGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJTQTlJRzF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1NZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWek8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1oyVjBkR1Z5SUdaMWJtTjBhVzl1SUdadmNpQm9ZWEp0YjI1NUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUdkbGRIUmxjaWtnZTF4dUlGeDBYSFJwWmlnaFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZLR1Y0Y0c5eWRITXNJRzVoYldVcEtTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUc1aGJXVXNJSHNnWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3dnWjJWME9pQm5aWFIwWlhJZ2ZTazdYRzRnWEhSY2RIMWNiaUJjZEgwN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCZlgyVnpUVzlrZFd4bElHOXVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXBJSHRjYmlCY2RGeDBhV1lvZEhsd1pXOW1JRk41YldKdmJDQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdVM2x0WW05c0xuUnZVM1J5YVc1blZHRm5LU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lGTjViV0p2YkM1MGIxTjBjbWx1WjFSaFp5d2dleUIyWVd4MVpUb2dKMDF2WkhWc1pTY2dmU2s3WEc0Z1hIUmNkSDFjYmlCY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUNkZlgyVnpUVzlrZFd4bEp5d2dleUIyWVd4MVpUb2dkSEoxWlNCOUtUdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklHTnlaV0YwWlNCaElHWmhhMlVnYm1GdFpYTndZV05sSUc5aWFtVmpkRnh1SUZ4MEx5OGdiVzlrWlNBbUlERTZJSFpoYkhWbElHbHpJR0VnYlc5a2RXeGxJR2xrTENCeVpYRjFhWEpsSUdsMFhHNGdYSFF2THlCdGIyUmxJQ1lnTWpvZ2JXVnlaMlVnWVd4c0lIQnliM0JsY25ScFpYTWdiMllnZG1Gc2RXVWdhVzUwYnlCMGFHVWdibk5jYmlCY2RDOHZJRzF2WkdVZ0ppQTBPaUJ5WlhSMWNtNGdkbUZzZFdVZ2QyaGxiaUJoYkhKbFlXUjVJRzV6SUc5aWFtVmpkRnh1SUZ4MEx5OGdiVzlrWlNBbUlEaDhNVG9nWW1Wb1lYWmxJR3hwYTJVZ2NtVnhkV2x5WlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTUwSUQwZ1puVnVZM1JwYjI0b2RtRnNkV1VzSUcxdlpHVXBJSHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JREVwSUhaaGJIVmxJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloMllXeDFaU2s3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUE0S1NCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnWEhSY2RHbG1LQ2h0YjJSbElDWWdOQ2tnSmlZZ2RIbHdaVzltSUhaaGJIVmxJRDA5UFNBbmIySnFaV04wSnlBbUppQjJZV3gxWlNBbUppQjJZV3gxWlM1ZlgyVnpUVzlrZFd4bEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkSFpoY2lCdWN5QTlJRTlpYW1WamRDNWpjbVZoZEdVb2JuVnNiQ2s3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lodWN5azdYRzRnWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2h1Y3l3Z0oyUmxabUYxYkhRbkxDQjdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNJSFpoYkhWbE9pQjJZV3gxWlNCOUtUdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlESWdKaVlnZEhsd1pXOW1JSFpoYkhWbElDRTlJQ2R6ZEhKcGJtY25LU0JtYjNJb2RtRnlJR3RsZVNCcGJpQjJZV3gxWlNrZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLRzV6TENCclpYa3NJR1oxYm1OMGFXOXVLR3RsZVNrZ2V5QnlaWFIxY200Z2RtRnNkV1ZiYTJWNVhUc2dmUzVpYVc1a0tHNTFiR3dzSUd0bGVTa3BPMXh1SUZ4MFhIUnlaWFIxY200Z2JuTTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5Qm5aWFJFWldaaGRXeDBSWGh3YjNKMElHWjFibU4wYVc5dUlHWnZjaUJqYjIxd1lYUnBZbWxzYVhSNUlIZHBkR2dnYm05dUxXaGhjbTF2Ym5rZ2JXOWtkV3hsYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV1SUQwZ1puVnVZM1JwYjI0b2JXOWtkV3hsS1NCN1hHNGdYSFJjZEhaaGNpQm5aWFIwWlhJZ1BTQnRiMlIxYkdVZ0ppWWdiVzlrZFd4bExsOWZaWE5OYjJSMWJHVWdQMXh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEVSbFptRjFiSFFvS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1ZiSjJSbFptRjFiSFFuWFRzZ2ZTQTZYRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwVFc5a2RXeGxSWGh3YjNKMGN5Z3BJSHNnY21WMGRYSnVJRzF2WkhWc1pUc2dmVHRjYmlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0dkbGRIUmxjaXdnSjJFbkxDQm5aWFIwWlhJcE8xeHVJRngwWEhSeVpYUjFjbTRnWjJWMGRHVnlPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOGdQU0JtZFc1amRHbHZiaWh2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLU0I3SUhKbGRIVnliaUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2s3SUgwN1hHNWNiaUJjZEM4dklGOWZkMlZpY0dGamExOXdkV0pzYVdOZmNHRjBhRjlmWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbkFnUFNCY0lsd2lPMXh1WEc1Y2JpQmNkQzh2SUV4dllXUWdaVzUwY25rZ2JXOWtkV3hsSUdGdVpDQnlaWFIxY200Z1pYaHdiM0owYzF4dUlGeDBjbVYwZFhKdUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9YMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV6SUQwZ01DazdYRzRpTENKbGVIQnZjblFnZXlCVVpXMXdiR0YwWlVGdWJtOTBZWFJwYjI1ekxDQkZaR2wwYjNKRGIyNTBaWGgwU0dWc2NHVnlJSDBnWm5KdmJTQW5MaTl6WlhKMmFXTmxKenRjYmlJc0ltWjFibU4wYVc5dUlFVmthWFJ2Y2tOdmJuUmxlSFJJWld4d1pYSW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdhVzVGWkdsMGIzSXNYRzRnSUNBZ0lDQWdJSEpsWm5KbGMyZ3NYRzRnSUNBZ0lDQWdJR2x1UldScGRHOXlVSEpsZG1sbGQxeHVJQ0FnSUgwN1hHNWNiaUFnSUNCbWRXNWpkR2x2YmlCcGJrbG1jbUZ0WlNncElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUIzYVc1a2IzY2dQVDA5SUNkMWJtUmxabWx1WldRbktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRUp2YjJ4bFlXNG9kMmx1Wkc5M0xtWnlZVzFsUld4bGJXVnVkQ0FtSmlCM2FXNWtiM2N1Wm5KaGJXVkZiR1Z0Wlc1MExtTnNZWE56VG1GdFpTNXBibU5zZFdSbGN5Z25aM2QwTFVaeVlXMWxKeWtwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR1oxYm1OMGFXOXVJR2x1UldScGRHOXlLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYVc1SlpuSmhiV1VvS1NBbUppQjNhVzVrYjNjdWNHRnlaVzUwTG14dlkyRjBhVzl1TG1oaGMyZ3VaVzVrYzFkcGRHZ29KenBsWkdsMEp5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1puVnVZM1JwYjI0Z2FXNUZaR2wwYjNKUWNtVjJhV1YzS0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2FXNUpabkpoYldVb0tTQW1KaUIzYVc1a2IzY3VjR0Z5Wlc1MExteHZZMkYwYVc5dUxtaGhjMmd1Wlc1a2MxZHBkR2dvSnpwMmFXVjNKeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdablZ1WTNScGIyNGdjbVZtY21WemFDZ3BJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHbHVSV1JwZEc5eUtDa2dKaVlnZDJsdVpHOTNMbkJoY21WdWRDNXRaMjVzVW1WbWNtVnphQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkMmx1Wkc5M0xuQmhjbVZ1ZEM1dFoyNXNVbVZtY21WemFDZ3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCRlpHbDBiM0pEYjI1MFpYaDBTR1ZzY0dWeUtDazdYRzRpTENKbWRXNWpkR2x2YmlCVVpXMXdiR0YwWlVGdWJtOTBZWFJwYjI1ektDa2dlMXh1SUNBZ0lHTnZibk4wSUVGRFZFbFdRVlJKVDA1ZlUxUkJWRlZUWDA1UFZGOUJRMVJKVmtGVVJVUWdQU0F3TzF4dUlDQWdJR052Ym5OMElFRkRWRWxXUVZSSlQwNWZVMVJCVkZWVFgwMVBSRWxHU1VWRUlEMGdNVHRjYmlBZ0lDQmpiMjV6ZENCQlExUkpWa0ZVU1U5T1gxTlVRVlJWVTE5QlExUkpWa0ZVUlVRZ1BTQXlPMXh1WEc0Z0lDQWdZMjl1YzNRZ1ZrRk1WVVZmVUZKUFEwVlRVMDlTVXlBOUlIdGNiaUFnSUNBZ0lDQWdZMjl1ZEdWdWREb2daMlYwUTI5dWRHVnVkRkJoZEdnc1hHNGdJQ0FnSUNBZ0lHRjJZV2xzWVdKc1pVTnZiWEJ2Ym1WdWRITTZJR2RsZEVGMllXbHNZV0pzWlVOdmJYQnZibVZ1ZEhNc1hHNGdJQ0FnSUNBZ0lITm9iM2RCWkdSQ2RYUjBiMjQ2SUdOaGJrRmtaRTF2Y21WRGIyMXdiMjVsYm5SekxGeHVJQ0FnSUNBZ0lDQmhZM1JwZG1GMGFXOXVVM1JoZEhWek9pQm5aWFJCWTNScGRtRjBhVzl1VTNSaGRIVnpYRzRnSUNBZ2ZUdGNiaUFnSUNCamIyNXpkQ0JRUVVkRlgwMUJVQ0E5SUh0Y2JpQWdJQ0FnSUNBZ1kyOXVkR1Z1ZERvZ1d5ZEFjR0YwYUNjc0lDY25YU3hjYmlBZ0lDQWdJQ0FnWkdsaGJHOW5PaUJiSjJScFlXeHZaeWNzSUNjbkxDQm5aWFJXWVd4MVpVWnliMjFQWW1wbFkzUmRYRzRnSUNBZ2ZUdGNiaUFnSUNCamIyNXpkQ0JCVWtWQlgwMUJVQ0E5SUh0Y2JpQWdJQ0FnSUNBZ2JtRnRaVG9nV3lkQWJtRnRaU2NzSUNjblhTeGNiaUFnSUNBZ0lDQWdZMjl1ZEdWdWREb2dVRUZIUlY5TlFWQXVZMjl1ZEdWdWRDeGNiaUFnSUNBZ0lDQWdaR2xoYkc5bk9pQlFRVWRGWDAxQlVDNWthV0ZzYjJjc1hHNGdJQ0FnSUNBZ0lHRjJZV2xzWVdKc1pVTnZiWEJ2Ym1WdWRITTZJRnNuWVhaaGFXeGhZbXhsUTI5dGNHOXVaVzUwY3ljc0lGdGRYU3hjYmlBZ0lDQWdJQ0FnZEhsd1pUb2dXeWQwZVhCbEp5d2dKMnhwYzNRbkxDQm5aWFJXWVd4MVpVWnliMjFQWW1wbFkzUmRMRnh1SUNBZ0lDQWdJQ0JzWVdKbGJEb2dXeWQwYVhSc1pTY3NJQ2NuTENCblpYUldZV3gxWlVaeWIyMVBZbXBsWTNSZExGeHVJQ0FnSUNBZ0lDQnBibWhsY21sME9pQmJKMmx1YUdWeWFYUmhibU5sSnl3Z1ptRnNjMlVzSUdkbGRGWmhiSFZsUm5KdmJVOWlhbVZqZEYwc1hHNGdJQ0FnSUNBZ0lHOXdkR2x2Ym1Gc09pQmJKMjl3ZEdsdmJtRnNKeXdnWm1Gc2MyVXNJR2RsZEZaaGJIVmxSbkp2YlU5aWFtVmpkRjBzWEc0Z0lDQWdJQ0FnSUdOeVpXRjBaV1JCY21WaFRtOWtaVG9nV3lkamNtVmhkR1ZCY21WaFRtOWtaU2NzSUhSeWRXVXNJR2RsZEZaaGJIVmxSbkp2YlU5aWFtVmpkRjBzWEc0Z0lDQWdJQ0FnSUhOb2IzZEJaR1JDZFhSMGIyNDZJRnNuYldGNFEyOXRjRzl1Wlc1MGN5Y3NJSFJ5ZFdWZExGeHVJQ0FnSUNBZ0lDQnphRzkzVG1WM1EyOXRjRzl1Wlc1MFFYSmxZVG9nVzI1MWJHd3NJSFJ5ZFdWZExGeHVJQ0FnSUNBZ0lDQmtaWE5qY21sd2RHbHZiam9nV3lka1pYTmpjbWx3ZEdsdmJpY3NJQ2NuTENCblpYUldZV3gxWlVaeWIyMVBZbXBsWTNSZExGeHVJQ0FnSUNBZ0lDQmhZM1JwZG1GMGFXOXVVM1JoZEhWek9pQmJiblZzYkN3Z01GMWNiaUFnSUNCOU8xeHVYRzRnSUNBZ1kyOXVjM1FnUTA5TlVFOU9SVTVVWDAxQlVDQTlJSHRjYmlBZ0lDQWdJQ0FnWTI5dWRHVnVkRG9nVUVGSFJWOU5RVkF1WTI5dWRHVnVkQ3hjYmlBZ0lDQWdJQ0FnWkdsaGJHOW5PaUJRUVVkRlgwMUJVQzVrYVdGc2IyY3NYRzRnSUNBZ0lDQWdJR3hoWW1Wc09pQmJKM1JwZEd4bEp5d2dKeWNzSUdkbGRGWmhiSFZsUm5KdmJVOWlhbVZqZEYwc1hHNGdJQ0FnSUNBZ0lHUmxjMk55YVhCMGFXOXVPaUJiSjJSbGMyTnlhWEIwYVc5dUp5d2dKeWNzSUdkbGRGWmhiSFZsUm5KdmJVOWlhbVZqZEYwc1hHNGdJQ0FnSUNBZ0lHRmpkR2wyWVhScGIyNVRkR0YwZFhNNklGdHVkV3hzTENBd1hWeHVJQ0FnSUgwN1hHNGdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnWjJWMFFYSmxZVU52YlcxbGJuUlRkSEpwYm1jc1hHNGdJQ0FnSUNBZ0lHZGxkRU52YlhCdmJtVnVkRU52YlcxbGJuUlRkSEpwYm1jc1hHNGdJQ0FnSUNBZ0lHZGxkRkJoWjJWRGIyMXRaVzUwVTNSeWFXNW5YRzRnSUNBZ2ZUdGNibHh1SUNBZ0lHWjFibU4wYVc5dUlHZGxkRkJoWjJWRGIyMXRaVzUwVTNSeWFXNW5LSEJoWjJVc0lIUmxiWEJzWVhSbFJHVm1hVzVwZEdsdmJpa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZR050Y3pwd1lXZGxJQ1I3WjJWMFEyOXRiV1Z1ZEZOMGNtbHVaeWh3WVdkbExDQlFRVWRGWDAxQlVDd2dkR1Z0Y0d4aGRHVkVaV1pwYm1sMGFXOXVLWDFnTzF4dUlDQWdJSDFjYmx4dUlDQWdJR1oxYm1OMGFXOXVJR2RsZEVGeVpXRkRiMjF0Wlc1MFUzUnlhVzVuS0dGeVpXRXNJSFJsYlhCc1lYUmxSR1ZtYVc1cGRHbHZiaXdnWTI5dGNHOXVaVzUwUTI5MWJuUXBJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdZM1Z6ZEc5dFVHRnlZVzF6SUQwZ2V5QmpiMjF3YjI1bGJuUkRiM1Z1ZENCOU8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCaGNtVmhWR1Z0Y0d4aGRHVkVaV1pwYm1sMGFXOXVJRDBnZEdWdGNHeGhkR1ZFWldacGJtbDBhVzl1SUNZbUlIUmxiWEJzWVhSbFJHVm1hVzVwZEdsdmJpNWhjbVZoY3lBL0lIUmxiWEJzWVhSbFJHVm1hVzVwZEdsdmJpNWhjbVZoYzF0aGNtVmhXeWRBYm1GdFpTZGRYU0E2SUh0OU8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1lHTnRjenBoY21WaElDUjdaMlYwUTI5dGJXVnVkRk4wY21sdVp5aGhjbVZoTENCQlVrVkJYMDFCVUN3Z1lYSmxZVlJsYlhCc1lYUmxSR1ZtYVc1cGRHbHZiaXdnWTNWemRHOXRVR0Z5WVcxektYMWdPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHWjFibU4wYVc5dUlHZGxkRU52YlhCdmJtVnVkRU52YlcxbGJuUlRkSEpwYm1jb1kyOXRjRzl1Wlc1MExDQjBaVzF3YkdGMFpVUmxabWx1YVhScGIyNHBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR0JqYlhNNlkyOXRjRzl1Wlc1MElDUjdaMlYwUTI5dGJXVnVkRk4wY21sdVp5aGpiMjF3YjI1bGJuUXNJRU5QVFZCUFRrVk9WRjlOUVZBc0lIUmxiWEJzWVhSbFJHVm1hVzVwZEdsdmJpbDlZRHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQm1kVzVqZEdsdmJpQm5aWFJEYjIxdFpXNTBVM1J5YVc1bktHUmhkR0VzSUcxaGNDd2dkR1Z0Y0d4aGRHVkVaV1pwYm1sMGFXOXVMQ0JqZFhOMGIyMVFZWEpoYlhNcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2NtVnpkV3gwSUQwZ1cxMDdYRzRnSUNBZ0lDQWdJRTlpYW1WamRDNXJaWGx6S0cxaGNDa3VabTl5UldGamFDaHJaWGtnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdXMlJoZEdGTFpYa3NJR1JsWm1GMWJIUldZV3gxWlN3Z1oyVjBSR0YwWVVadVhTQTlJRzFoY0Z0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWTI5dWRHVnVkRkJ5YjJObGMzTnZjaUE5SUZaQlRGVkZYMUJTVDBORlUxTlBVbE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQjJZV3gxWlNBOUlHUmxabUYxYkhSV1lXeDFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hqYjI1MFpXNTBVSEp2WTJWemMyOXlLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVWdQU0JqYjI1MFpXNTBVSEp2WTJWemMyOXlLR1JoZEdFc0lHUmhkR0ZMWlhrc0lIUmxiWEJzWVhSbFJHVm1hVzVwZEdsdmJpd2dZM1Z6ZEc5dFVHRnlZVzF6S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvWjJWMFJHRjBZVVp1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1VnUFNCblpYUkVZWFJoUm00b2RHVnRjR3hoZEdWRVpXWnBibWwwYVc5dUxDQmtZWFJoUzJWNUxDQmtaV1poZFd4MFZtRnNkV1VwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hrWVhSaElDRTlJRzUxYkd3Z0ppWWdaR0YwWVV0bGVTQWhQVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbElEMGdaR0YwWVZ0a1lYUmhTMlY1WFNCOGZDQW5KenRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR2wwWlcwZ1BTQjdJR3RsZVN3Z2RtRnNkV1VnZlR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCcGRHVnRMblpoYkhWbElDRTlQU0JjSW5OMGNtbHVaMXdpSUh4OElHbDBaVzB1ZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhOMWJIUXVjSFZ6YUNoZ0pIdHJaWGw5UFZ3aUpIdHBkR1Z0TG5aaGJIVmxmVndpWUNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwcE8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnlaWE4xYkhRdWFtOXBiaWduSUNjcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdaMWJtTjBhVzl1SUdkbGRFRjJZV2xzWVdKc1pVTnZiWEJ2Ym1WdWRITW9ZWEpsWVN3Z1pHRjBZVXRsZVN3Z2RHVnRjR3hoZEdWRVpXWnBibWwwYVc5dUtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNnaGRHVnRjR3hoZEdWRVpXWnBibWwwYVc5dUlIeDhJQ0YwWlcxd2JHRjBaVVJsWm1sdWFYUnBiMjViWkdGMFlVdGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQW5KenRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCUFltcGxZM1F1YTJWNWN5aDBaVzF3YkdGMFpVUmxabWx1YVhScGIyNWJaR0YwWVV0bGVWMHBMbTFoY0NoclpYa2dQVDRnZEdWdGNHeGhkR1ZFWldacGJtbDBhVzl1VzJSaGRHRkxaWGxkVzJ0bGVWMHVhV1FwTG1wdmFXNG9KeXduS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JtZFc1amRHbHZiaUJqWVc1QlpHUk5iM0psUTI5dGNHOXVaVzUwY3loaGNtVmhMQ0JrWVhSaFMyVjVMQ0IwWlcxd2JHRjBaVVJsWm1sdWFYUnBiMjRzSUdOMWMzUnZiVkJoY21GdGN5a2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb0lYUmxiWEJzWVhSbFJHVm1hVzVwZEdsdmJpQjhmQ0IwWlcxd2JHRjBaVVJsWm1sdWFYUnBiMjR1YldGNFEyOXRjRzl1Wlc1MGN5QTlQU0J1ZFd4c0lIeDhJQ0ZqZFhOMGIyMVFZWEpoYlhNZ2ZId2dZM1Z6ZEc5dFVHRnlZVzF6TG1OdmJYQnZibVZ1ZEVOdmRXNTBJRDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJqZFhOMGIyMVFZWEpoYlhNdVkyOXRjRzl1Wlc1MFEyOTFiblFnUENCMFpXMXdiR0YwWlVSbFptbHVhWFJwYjI0dWJXRjRRMjl0Y0c5dVpXNTBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQm1kVzVqZEdsdmJpQm5aWFJXWVd4MVpVWnliMjFQWW1wbFkzUW9iMkpxTENCclpYa3NJR1JsWm1GMWJIUldZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQnNaWFFnZG1Gc2RXVWdQU0J2WW1vZ0ppWWdkSGx3Wlc5bUlHOWlhaUE5UFQwZ0oyOWlhbVZqZENjZ0ppWWdhMlY1SUQ4Z2IySnFXMnRsZVYwZ09pQnVkV3hzTzF4dUlDQWdJQ0FnSUNCMllXeDFaU0E5SUhaaGJIVmxJRDA5SUc1MWJHd2dQeUJrWldaaGRXeDBWbUZzZFdVZ09pQjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ2RtRnNkV1VnUFNCMGVYQmxiMllnWkdWbVlYVnNkRlpoYkhWbElEMDlQU0FuWW05dmJHVmhiaWNnUHlCQ2IyOXNaV0Z1S0haaGJIVmxLU0E2SUhaaGJIVmxPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkbUZzZFdVZ0lUMGdiblZzYkNBL0lIWmhiSFZsSURvZ1pHVm1ZWFZzZEZaaGJIVmxPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHWjFibU4wYVc5dUlHZGxkRU52Ym5SbGJuUlFZWFJvS0dSaGRHRXNJR3RsZVNrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUdSaGRHRWdQeUJrWVhSaFcydGxlVjBnT2lCdWRXeHNPMXh1SUNBZ0lDQWdJQ0F2THlCT1QxUkZPaUJGYlhCMGVTQnpkSEpwYm1jZ2FYTWdZV05qWlhCMFlXSnNaUzRnVTI4Z2QyVWdibVZsWkNCamFHVmpheUIyWVd4MVpTQWhQU0J1ZFd4c1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMllXeDFaU0FoUFNCdWRXeHNJRDhnWUhkbFluTnBkR1U2Skh0MllXeDFaWDFnSURvZ0p5YzdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1puVnVZM1JwYjI0Z1oyVjBRV04wYVhaaGRHbHZibE4wWVhSMWN5aGtZWFJoS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doWkdGMFlTQjhmQ0FoWkdGMFlWc25iV2R1YkRwaFkzUnBkbUYwYVc5dVUzUmhkSFZ6SjEwZ2ZId2daR0YwWVZzbmJXZHViRHBoWTNScGRtRjBhVzl1VTNSaGRIVnpKMTBnUFQwOUlDZG1ZV3h6WlNjcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJCUTFSSlZrRlVTVTlPWDFOVVFWUlZVMTlPVDFSZlFVTlVTVlpCVkVWRU8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdiR0Z6ZEUxdlpHbG1hV1ZrSUQwZ1pHRjBZVnNuYldkdWJEcHNZWE4wVFc5a2FXWnBaV1FuWFNBL0lHNWxkeUJFWVhSbEtHUmhkR0ZiSjIxbmJtdzZiR0Z6ZEUxdlpHbG1hV1ZrSjEwcElEb2diblZzYkR0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYkdGemRFRmpkR2wyWVhSbFpDQTlJR1JoZEdGYkoyMW5ibXc2YkdGemRFRmpkR2wyWVhSbFpDZGRJRDhnYm1WM0lFUmhkR1VvWkdGMFlWc25iV2R1YkRwc1lYTjBRV04wYVhaaGRHVmtKMTBwSURvZ2JuVnNiRHRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYkdGemRFMXZaR2xtYVdWa0lDWW1JR3hoYzNSQlkzUnBkbUYwWldRZ0ppWWdiR0Z6ZEUxdlpHbG1hV1ZrTG1kbGRGUnBiV1VvS1NBK0lHeGhjM1JCWTNScGRtRjBaV1F1WjJWMFZHbHRaU2dwSUQ4Z1FVTlVTVlpCVkVsUFRsOVRWRUZVVlZOZlRVOUVTVVpKUlVRZ09pQkJRMVJKVmtGVVNVOU9YMU5VUVZSVlUxOUJRMVJKVmtGVVJVUTdYRzRnSUNBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JVWlcxd2JHRjBaVUZ1Ym05MFlYUnBiMjV6S0NrN1hHNGlMQ0psZUhCdmNuUWdleUJrWldaaGRXeDBJR0Z6SUZSbGJYQnNZWFJsUVc1dWIzUmhkR2x2Ym5NZ2ZTQm1jbTl0SUNjdUwxUmxiWEJzWVhSbFFXNXViM1JoZEdsdmJuTW5PMXh1Wlhod2IzSjBJSHNnWkdWbVlYVnNkQ0JoY3lCRlpHbDBiM0pEYjI1MFpYaDBTR1ZzY0dWeUlIMGdabkp2YlNBbkxpOUZaR2wwYjNKRGIyNTBaWGgwU0dWc2NHVnlKenRjYmlKZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPSIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vYnVpbGQvbWdubC1zZXJ2aWNlLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vYnVpbGQvbWdubC1zZXJ2aWNlLmpzJyk7XG59XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZmFsc3kgdmFsdWUgY2FuJ3QgYmUgYSBTeW1ib2xcbiAgICBpZiAoIXByb3BWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMFxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGVtcGxhdGVBbm5vdGF0aW9ucyB9IGZyb20gJ0BtYWdub2xpYS90ZW1wbGF0ZS1hbm5vdGF0aW9ucyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBFZGl0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL0VkaXRhYmxlQ29tcG9uZW50JztcbmltcG9ydCB7XG4gICAgRWRpdG9yQ29udGV4dCwgY29uc3RhbnRzLCBFZGl0b3JDb250ZXh0SGVscGVyLCBDb21wb25lbnRIZWxwZXJcbn0gZnJvbSAnLi4vLi4vdXRpbCc7XG5cbmNsYXNzIEVkaXRhYmxlQXJlYSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgcGFyZW50VGVtcGxhdGVJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICBidWlsZEZvck1hZ25vbGlhOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgTW9iaWxlV3JhcHBlcjogUHJvcFR5cGVzLm5vZGVcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgcGFyZW50VGVtcGxhdGVJZDogbnVsbCxcbiAgICAgICAgY2xhc3NOYW1lOiBudWxsLFxuICAgICAgICBidWlsZEZvck1hZ25vbGlhOiBmYWxzZSxcbiAgICAgICAgTW9iaWxlV3JhcHBlcjogUmVhY3QuRnJhZ21lbnRcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuY29uc3RhbnRzID0gY29uc3RhbnRzO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoIXRoaXMuY29udGV4dCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFZGl0YWJsZUFyZWEgY29tcG9uZW50IG11c3QgYmUgd3JhcHBlZCBpbnNpZGUgRWRpdGFibGVQYWdlIGNvbXBvbmVudC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZENvbW1lbnQoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGUgPSBFZGl0b3JDb250ZXh0O1xuXG4gICAgZ2V0UGFyZW50VGVtcGxhdGVJZCgpIHtcbiAgICAgICAgY29uc3QgeyBwYXJlbnRUZW1wbGF0ZUlkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGNvbnRlbnQgfSA9IHRoaXMuY29udGV4dDtcblxuICAgICAgICByZXR1cm4gcGFyZW50VGVtcGxhdGVJZCB8fCBjb250ZW50W2NvbnN0YW50cy5URU1QTEFURV9JRF9QUk9QXTtcbiAgICB9XG5cbiAgICBhZGRDb21tZW50KCkge1xuICAgICAgICBjb25zdCB7IGlzRGV2TW9kZSB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBpZiAoIXRoaXMubm9kZSB8fCAoIWlzRGV2TW9kZSAmJiAhRWRpdG9yQ29udGV4dEhlbHBlci5pbkVkaXRvcigpKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgY29udGVudCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgcGFnZVRlbXBsYXRlSWQgPSB0aGlzLmdldFBhcmVudFRlbXBsYXRlSWQoKTtcbiAgICAgICAgY29uc3QgeyB0ZW1wbGF0ZURlZmluaXRpb25zOiBhbGxEZWZpbml0aW9ucyB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZURlZmluaXRpb25zID0gYWxsRGVmaW5pdGlvbnNbcGFnZVRlbXBsYXRlSWRdO1xuICAgICAgICBjb25zdCBvcGVuQ29tbWVudCA9IFRlbXBsYXRlQW5ub3RhdGlvbnMuZ2V0QXJlYUNvbW1lbnRTdHJpbmcoY29udGVudCwgdGVtcGxhdGVEZWZpbml0aW9ucyk7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVDb21tZW50KG9wZW5Db21tZW50KSwgdGhpcy5ub2RlKTtcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5jb25zdGFudHMuQ0xPU0VEX0FSRUFfQ09NTUVOVCksIHRoaXMubm9kZS5uZXh0U2libGluZyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjb250ZW50LCBjbGFzc05hbWUsIGJ1aWxkRm9yTWFnbm9saWEsIE1vYmlsZVdyYXBwZXJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudE5hbWVzID0gY29udGVudFsnQG5vZGVzJ107XG5cbiAgICAgICAgaWYgKGJ1aWxkRm9yTWFnbm9saWEpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e25vZGUgPT4gdGhpcy5ub2RlID0gbm9kZX0ga2V5PXtjb250ZW50WydAaWQnXX0gY2xhc3NOYW1lPXtDb21wb25lbnRIZWxwZXIuY2xhc3NuYW1lcyhjbGFzc05hbWUpfT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50TmFtZXMubWFwKChuYW1lKSA9PiA8RWRpdGFibGVDb21wb25lbnQga2V5PXtjb250ZW50W25hbWVdWydAaWQnXX0gY29udGVudD17Y29udGVudFtuYW1lXX0gLz4pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vYmlsZVdyYXBwZXIga2V5PXtjb250ZW50WydAaWQnXX0gY2xhc3NOYW1lPXtDb21wb25lbnRIZWxwZXIuY2xhc3NuYW1lcyhjbGFzc05hbWUpfT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWVzLm1hcCgobmFtZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRhYmxlQ29tcG9uZW50IGtleT17Y29udGVudFtuYW1lXVsnQGlkJ119IGNvbnRlbnQ9e2NvbnRlbnRbbmFtZV19IGJ1aWxkRm9yTWFnbm9saWE9e2J1aWxkRm9yTWFnbm9saWF9IE1vYmlsZVdyYXBwZXI9e01vYmlsZVdyYXBwZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Nb2JpbGVXcmFwcGVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdGFibGVBcmVhO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBFZGl0YWJsZUFyZWEgfSBmcm9tICcuL0VkaXRhYmxlQXJlYSc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgVGVtcGxhdGVBbm5vdGF0aW9ucyB9IGZyb20gJ0BtYWdub2xpYS90ZW1wbGF0ZS1hbm5vdGF0aW9ucyc7XG5pbXBvcnQge1xuICAgIEVkaXRvckNvbnRleHQsIGNvbnN0YW50cywgQ29tcG9uZW50SGVscGVyLCBFZGl0b3JDb250ZXh0SGVscGVyXG59IGZyb20gJy4uLy4uL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0YWJsZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgYnVpbGRGb3JNYWdub2xpYTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIE1vYmlsZVdyYXBwZXI6IFByb3BUeXBlcy5ub2RlXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGJ1aWxkRm9yTWFnbm9saWE6IGZhbHNlLFxuICAgICAgICBNb2JpbGVXcmFwcGVyOiBSZWFjdC5GcmFnbWVudFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5jb25zdGFudHMgPSBjb25zdGFudHM7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuYWRkQ29tbWVudCgpO1xuICAgICAgICB0aGlzLnJlbW92ZVJlZnMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGUgPSBFZGl0b3JDb250ZXh0O1xuXG4gICAgYWRkQ29tbWVudCgpIHtcbiAgICAgICAgY29uc3QgeyBpc0Rldk1vZGUgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3QgeyBjb250ZW50IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIXRoaXMub3Blbk5vZGUgfHwgIXRoaXMuY2xvc2VOb2RlIHx8ICghaXNEZXZNb2RlICYmICFFZGl0b3JDb250ZXh0SGVscGVyLmluRWRpdG9yKCkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGVtcGxhdGVJZCA9IGNvbnRlbnRbY29uc3RhbnRzLlRFTVBMQVRFX0lEX1BST1BdO1xuICAgICAgICBjb25zdCB7IHRlbXBsYXRlRGVmaW5pdGlvbnM6IGFsbERlZmluaXRpb25zIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlRGVmaW5pdGlvbnMgPSBhbGxEZWZpbml0aW9uc1t0ZW1wbGF0ZUlkXTtcbiAgICAgICAgY29uc3Qgb3BlbkNvbXBvbmVudENvbW1lbnQgPSBUZW1wbGF0ZUFubm90YXRpb25zLmdldENvbXBvbmVudENvbW1lbnRTdHJpbmcoY29udGVudCwgdGVtcGxhdGVEZWZpbml0aW9ucyk7XG4gICAgICAgIGNvbnN0IGNsb3NlZENvbXBvbmVudENvbW1lbnQgPSB0aGlzLmNvbnN0YW50cy5DTE9TRURfQ09NUE9ORU5UX0NPTU1FTlQ7XG4gICAgICAgIHRoaXMub3Blbk5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlQ29tbWVudChvcGVuQ29tcG9uZW50Q29tbWVudCksIHRoaXMub3Blbk5vZGUpO1xuICAgICAgICB0aGlzLmNsb3NlTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVDb21tZW50KGNsb3NlZENvbXBvbmVudENvbW1lbnQpLCB0aGlzLmNsb3NlTm9kZSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlUmVmcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wZW5Ob2RlIHx8ICF0aGlzLmNsb3NlTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3Blbk5vZGUucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuY2xvc2VOb2RlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjb250ZW50LCBidWlsZEZvck1hZ25vbGlhLCBNb2JpbGVXcmFwcGVyIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGNvbXBvbmVudE1hcHBpbmdzIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IENvbXBvbmVudEhlbHBlci5nZXRSZW5kZXJlZENvbXBvbmVudChjb250ZW50LCBjb21wb25lbnRNYXBwaW5ncyk7XG5cbiAgICAgICAgaWYgKGJ1aWxkRm9yTWFnbm9saWEpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9e25vZGUgPT4gdGhpcy5vcGVuTm9kZSA9IG5vZGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIHtjb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtub2RlID0+IHRoaXMuY2xvc2VOb2RlID0gbm9kZX0gLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vYmlsZVdyYXBwZXI+e2NvbXBvbmVudH08L01vYmlsZVdyYXBwZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBFZGl0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4vRWRpdGFibGVDb21wb25lbnQnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGVtcGxhdGVBbm5vdGF0aW9ucyB9IGZyb20gJ0BtYWdub2xpYS90ZW1wbGF0ZS1hbm5vdGF0aW9ucyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQge1xuICAgIEVkaXRvclByb3ZpZGVyLCBDb21wb25lbnRIZWxwZXIsIGNvbnN0YW50cywgRWRpdG9yQ29udGV4dEhlbHBlclxufSBmcm9tICcuLi8uLi91dGlsJztcblxuY2xhc3MgRWRpdGFibGVQYWdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgICAgICAgY29udGVudDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgdGVtcGxhdGVEZWZpbml0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgY29uZmlnOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgY29tcG9uZW50TWFwcGluZ3M6IFByb3BUeXBlcy5vYmplY3RcbiAgICAgICAgfSksXG4gICAgICAgIGJ1aWxkRm9yTWFnbm9saWE6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBNb2JpbGVXcmFwcGVyOiBQcm9wVHlwZXMubm9kZVxuICAgIH1cblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGNoaWxkcmVuOiBudWxsLFxuICAgICAgICBjb250ZW50OiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZURlZmluaXRpb25zOiBudWxsLFxuICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgIGNvbXBvbmVudE1hcHBpbmdzOiB7fVxuICAgICAgICB9LFxuICAgICAgICBidWlsZEZvck1hZ25vbGlhOiBmYWxzZSxcbiAgICAgICAgTW9iaWxlV3JhcHBlcjogUmVhY3QuRnJhZ21lbnRcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5hZGRDbG9zZUNvbW1lbnQoKTtcbiAgICAgICAgdGhpcy5hZGRPcGVuQ29tbWVudCgpO1xuICAgICAgICBFZGl0b3JDb250ZXh0SGVscGVyLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5hZGRPcGVuQ29tbWVudCgpO1xuICAgICAgICBFZGl0b3JDb250ZXh0SGVscGVyLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICBhZGRPcGVuQ29tbWVudCgpIHtcbiAgICAgICAgY29uc3QgY29udGV4dFZhbHVlID0gdGhpcy5nZXRDb250ZXh0VmFsdWUoKTtcbiAgICAgICAgaWYgKCF0aGlzLm5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWdlVGVtcGxhdGVEZWZpbml0aW9uID0gY29udGV4dFZhbHVlLmNvbnRlbnQgJiYgY29udGV4dFZhbHVlLnRlbXBsYXRlRGVmaW5pdGlvbnNcbiAgICAgICAgICAgID8gY29udGV4dFZhbHVlLnRlbXBsYXRlRGVmaW5pdGlvbnNbY29udGV4dFZhbHVlLmNvbnRlbnRbY29uc3RhbnRzLlRFTVBMQVRFX0lEX1BST1BdXSA6IG51bGw7XG4gICAgICAgIGNvbnN0IG9wZW5Db21tZW50ID0gVGVtcGxhdGVBbm5vdGF0aW9ucy5nZXRQYWdlQ29tbWVudFN0cmluZyhjb250ZXh0VmFsdWUuY29udGVudCwgcGFnZVRlbXBsYXRlRGVmaW5pdGlvbik7XG4gICAgICAgIENvbXBvbmVudEhlbHBlci5hZGRDb21tZW50KHRoaXMubm9kZSwgb3BlbkNvbW1lbnQpO1xuICAgIH1cblxuICAgIGFkZENsb3NlQ29tbWVudCgpIHtcbiAgICAgICAgQ29tcG9uZW50SGVscGVyLmFkZENvbW1lbnQodGhpcy5ub2RlLCAnL2NtczpwYWdlJyk7XG4gICAgfVxuXG4gICAgaGFzUGFnZUNvbXBvbmVudCgpIHtcbiAgICAgICAgY29uc3QgeyBjb250ZW50LCBjb21wb25lbnRNYXBwaW5ncyB9ID0gdGhpcy5nZXRDb250ZXh0VmFsdWUoKTtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQgJiYgY29tcG9uZW50TWFwcGluZ3MgJiYgY29tcG9uZW50TWFwcGluZ3NbY29udGVudFtjb25zdGFudHMuVEVNUExBVEVfSURfUFJPUF1dO1xuICAgIH1cblxuICAgIGdldENvbnRleHRWYWx1ZSgpIHtcbiAgICAgICAgY29uc3QgeyB0ZW1wbGF0ZURlZmluaXRpb25zLCBjb250ZW50LCBjb25maWcgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgY29tcG9uZW50TWFwcGluZ3MgfSA9IGNvbmZpZztcbiAgICAgICAgY29uc3QgaXNEZXZNb2RlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XG5cbiAgICAgICAgY29uc3QgY29udGV4dFZhbHVlID0ge1xuICAgICAgICAgICAgdGVtcGxhdGVEZWZpbml0aW9ucyxcbiAgICAgICAgICAgIGNvbXBvbmVudE1hcHBpbmdzLFxuICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAgIGlzRGV2TW9kZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY29udGV4dFZhbHVlO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiwgYnVpbGRGb3JNYWdub2xpYSwgTW9iaWxlV3JhcHBlciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY29udGV4dFZhbHVlID0gdGhpcy5nZXRDb250ZXh0VmFsdWUoKTtcbiAgICAgICAgY29uc3QgcGFnZUNvbXBvbmVudCA9IHRoaXMuaGFzUGFnZUNvbXBvbmVudCgpID8gQ29tcG9uZW50SGVscGVyLmdldFJlbmRlcmVkQ29tcG9uZW50KGNvbnRleHRWYWx1ZS5jb250ZW50LCBjb250ZXh0VmFsdWUuY29tcG9uZW50TWFwcGluZ3MpIDogY2hpbGRyZW47XG5cbiAgICAgICAgaWYgKGJ1aWxkRm9yTWFnbm9saWEpIHtcbiAgICAgICAgICAgIC8vIE5PVEU6IFdlIG5lZWQgYSBkaXYgdGFnIGFzIGEgcGFyZW50IG5vZGUgZm9yIFBhZ2UncyBjaGlsZCBIVE1MLiBJdCB3aWxsIGNhdXNlIGFuIGlzc3VlIGlmIHdlXG4gICAgICAgICAgICAvLyBkb24ndCBoYXZlIGEgcGFyZW50IG5vZGUuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxFZGl0b3JQcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9e25vZGUgPT4gdGhpcy5ub2RlID0gbm9kZX0ga2V5PXtjb250ZXh0VmFsdWUuY29udGVudFsnQGlkJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAge3BhZ2VDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRWRpdG9yUHJvdmlkZXI+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDxNb2JpbGVXcmFwcGVyPntwYWdlQ29tcG9uZW50fTwvTW9iaWxlV3JhcHBlcj47XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0YWJsZVBhZ2U7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEVkaXRhYmxlUGFnZSB9IGZyb20gJy4vRWRpdGFibGVQYWdlJztcclxuIiwiZXhwb3J0IHsgRWRpdGFibGVQYWdlIH0gZnJvbSAnLi9FZGl0YWJsZVBhZ2UnO1xyXG5leHBvcnQgeyBFZGl0YWJsZUFyZWEgfSBmcm9tICcuL0VkaXRhYmxlQXJlYSc7XHJcbmV4cG9ydCB7IEVkaXRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9FZGl0YWJsZUNvbXBvbmVudCdcclxuIiwiZXhwb3J0IHsgRWRpdGFibGVQYWdlLCBFZGl0YWJsZUFyZWEsIEVkaXRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0IHsgRWRpdG9yQ29udGV4dCwgRWRpdG9yQ29udGV4dEhlbHBlciwgQ29tcG9uZW50SGVscGVyIH0gZnJvbSAnLi91dGlsJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcblxuZnVuY3Rpb24gY29tcG9uZW50SGVscGVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldFJlbmRlcmVkQ29tcG9uZW50LCBnZXRDb21wb25lbnRQcm9wZXJ0aWVzLCBhZGRDb21tZW50LCBjbGFzc25hbWVzXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldFJlbmRlcmVkQ29tcG9uZW50KGNvbXBvbmVudENvbnRlbnQsIGNvbXBvbmVudE1hcHBpbmdzKSB7XG4gICAgICAgIGlmICghY29tcG9uZW50Q29udGVudCB8fCAhY29tcG9uZW50TWFwcGluZ3MgfHwgIWNvbXBvbmVudE1hcHBpbmdzW2NvbXBvbmVudENvbnRlbnRbY29uc3RhbnRzLlRFTVBMQVRFX0lEX1BST1BdXSkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tcG9uZW50Q2xhc3MgPSBjb21wb25lbnRNYXBwaW5nc1tjb21wb25lbnRDb250ZW50W2NvbnN0YW50cy5URU1QTEFURV9JRF9QUk9QXV07XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50Q2xhc3MsIGdldENvbXBvbmVudFByb3BlcnRpZXMoY29tcG9uZW50Q29udGVudCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENvbXBvbmVudFByb3BlcnRpZXMoY29tcG9uZW50Q29udGVudCkge1xuICAgICAgICBpZiAoIWNvbXBvbmVudENvbnRlbnQgfHwgdHlwZW9mIGNvbXBvbmVudENvbnRlbnQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvcHMgPSB7fTtcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoY29tcG9uZW50Q29udGVudCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKCdAJykgfHwga2V5LnN0YXJ0c1dpdGgoJ21nbmw6JykgfHwga2V5LnN0YXJ0c1dpdGgoJ2pjcjonKSkge1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhW2tleV0gPSBjb21wb25lbnRDb250ZW50W2tleV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3BzW2tleV0gPSBjb21wb25lbnRDb250ZW50W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBwcm9wcy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkQ29tbWVudChlbGVtZW50LCBvcGVuQ29tbWVudCwgY2xvc2VDb21tZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wZW5Db21tZW50KSB7XG4gICAgICAgICAgICBjb25zdCBvcGVuQ29tbWVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KG9wZW5Db21tZW50KTtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5zZXJ0QmVmb3JlKG9wZW5Db21tZW50RWxlbWVudCwgZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xvc2VDb21tZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjbG9zZUNvbW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChjbG9zZUNvbW1lbnQpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjbG9zZUNvbW1lbnRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsYXNzbmFtZXMoLi4uYXJnKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcbiAgICAgICAgYXJnLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaXRlbVR5cGUgPSB0eXBlb2YgaXRlbTtcbiAgICAgICAgICAgIGlmIChpdGVtVHlwZSA9PT0gJ3N0cmluZycgfHwgaXRlbVR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pICYmIGl0ZW0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKGNsYXNzbmFtZXMoLi4uaXRlbSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhpdGVtKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnRIZWxwZXIoKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEVkaXRvckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5leHBvcnQgY29uc3QgRWRpdG9yUHJvdmlkZXIgPSBFZGl0b3JDb250ZXh0LlByb3ZpZGVyO1xuZXhwb3J0IGNvbnN0IEVkaXRvckNvbnN1bWVyID0gRWRpdG9yQ29udGV4dC5Db25zdW1lcjtcbmV4cG9ydCBkZWZhdWx0IEVkaXRvckNvbnRleHQ7XG4iLCJpbXBvcnQgeyBFZGl0b3JDb250ZXh0SGVscGVyIH0gZnJvbSAnQG1hZ25vbGlhL3RlbXBsYXRlLWFubm90YXRpb25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRvckNvbnRleHRIZWxwZXI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIENMT1NFRF9BUkVBX0NPTU1FTlQ6ICcvY21zOmFyZWEnLFxyXG4gICAgQ0xPU0VEX0NPTVBPTkVOVF9DT01NRU5UOiAnL2Ntczpjb21wb25lbnQnLFxyXG4gICAgVEVNUExBVEVfSURfUFJPUDogJ21nbmw6dGVtcGxhdGUnXHJcbn07XHJcbiIsImltcG9ydCBFZGl0b3JDb250ZXh0LCB7IEVkaXRvckNvbnN1bWVyLCBFZGl0b3JQcm92aWRlciB9IGZyb20gJy4vRWRpdG9yQ29udGV4dCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29uc3RhbnRzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbXBvbmVudEhlbHBlciB9IGZyb20gJy4vQ29tcG9uZW50SGVscGVyJztcclxuZXhwb3J0IHsgRWRpdG9yQ29udGV4dCwgRWRpdG9yQ29uc3VtZXIsIEVkaXRvclByb3ZpZGVyIH07XHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCBSZW5kZXJlckNvbnRleHQgaXMgZGVwcmVjYXRlZC4gVXNlIEVkaXRvckNvbnRleHQgaW5zdGVhZFxyXG4gKi9cclxuY29uc3QgUmVuZGVyZXJDb250ZXh0ID0gRWRpdG9yQ29udGV4dDtcclxuZXhwb3J0IHsgUmVuZGVyZXJDb250ZXh0IH07XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWRpdG9yQ29udGV4dEhlbHBlciB9IGZyb20gJy4vRWRpdG9yQ29udGV4dEhlbHBlcic7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyJdLCJzb3VyY2VSb290IjoiIn0=