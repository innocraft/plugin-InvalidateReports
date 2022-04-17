(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else if(typeof define === 'function' && define.amd)
		define(["CoreHome", , "CorePluginsAdmin"], factory);
	else if(typeof exports === 'object')
		exports["InvalidateReports"] = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else
		root["InvalidateReports"] = factory(root["CoreHome"], root["Vue"], root["CorePluginsAdmin"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__19dc__, __WEBPACK_EXTERNAL_MODULE__8bbf__, __WEBPACK_EXTERNAL_MODULE_a5a2__) {
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
/******/ 	__webpack_require__.p = "plugins/InvalidateReports/vue/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "19dc":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__19dc__;

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "a5a2":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_a5a2__;

/***/ }),

/***/ "a5f2":
/***/ (function(module, exports) {



/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "InvalidateReports", function() { return /* reexport */ InvalidateReports; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/InvalidateReports/vue/src/InvalidateReports/InvalidateReports.vue?vue&type=template&id=07a8f0ec

var _hoisted_1 = {
  class: "form-group row"
};
var _hoisted_2 = {
  class: "col s12 ng-scope input-field m6"
};
var _hoisted_3 = {
  class: "ng-scope"
};
var _hoisted_4 = {
  class: "site-selection select-wrapper"
};
var _hoisted_5 = {
  for: "invalidateSite",
  class: "ng-binding"
};
var _hoisted_6 = {
  class: "ui-confirm",
  id: "confirmInvalidation",
  ref: "confirmInvalidation"
};
var _hoisted_7 = ["innerHTML"];
var _hoisted_8 = ["value"];
var _hoisted_9 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SiteSelector = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SiteSelector");

  var _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");

  var _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SiteSelector, {
    title: "",
    siteid: "all",
    id: "invalidateSite",
    "model-value": _ctx.site,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      _ctx.site = $event;

      _ctx.fetchSegments();
    }),
    "show-selected-site": true,
    "all-sites-location": "top",
    "switch-site-on-select": false,
    sitename: _ctx.translate('InvalidateReports_AllWebsites'),
    "all-sites-text": _ctx.translate('InvalidateReports_AllWebsites')
  }, null, 8, ["model-value", "sitename", "all-sites-text"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", _hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('InvalidateReports_ChooseWebsite')), 1)])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    uicontrol: "select",
    name: "segment",
    modelValue: _ctx.segment,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.segment = $event;
    }),
    options: _ctx.availableSegments,
    title: _ctx.translate('InvalidateReports_ChooseSegment')
  }, null, 8, ["modelValue", "options", "title"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    uicontrol: "select",
    name: "months",
    modelValue: _ctx.months,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return _ctx.months = $event;
    }),
    value: 0,
    title: _ctx.translate('InvalidateReports_ChooseRange'),
    options: _ctx.availableRanges
  }, null, 8, ["modelValue", "title", "options"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
    onConfirm: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.invalidate();
    }),
    saving: _ctx.loading,
    value: _ctx.translate('InvalidateReports_InvalidateReports')
  }, null, 8, ["saving", "value"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", {
    innerHTML: _ctx.$sanitize(_ctx.confirmInvalidationTitle)
  }, null, 8, _hoisted_7), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "yes",
    type: "button",
    value: _ctx.translate('General_Yes')
  }, null, 8, _hoisted_8), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "no",
    type: "button",
    value: _ctx.translate('General_No')
  }, null, 8, _hoisted_9)], 512)]);
}
// CONCATENATED MODULE: ./plugins/InvalidateReports/vue/src/InvalidateReports/InvalidateReports.vue?vue&type=template&id=07a8f0ec

// EXTERNAL MODULE: external "CoreHome"
var external_CoreHome_ = __webpack_require__("19dc");

// EXTERNAL MODULE: external "CorePluginsAdmin"
var external_CorePluginsAdmin_ = __webpack_require__("a5a2");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/InvalidateReports/vue/src/InvalidateReports/InvalidateReports.vue?vue&type=script&lang=ts
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/* harmony default export */ var InvalidateReportsvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    availableRanges: {
      type: [Object, Array],
      required: true
    }
  },
  components: {
    SiteSelector: external_CoreHome_["SiteSelector"],
    Field: external_CorePluginsAdmin_["Field"],
    SaveButton: external_CorePluginsAdmin_["SaveButton"]
  },
  data: function data() {
    return {
      loading: false,
      site: {
        id: 'all',
        name: ''
      },
      segment: '',
      months: 0,
      availableSegments: {
        '': Object(external_CoreHome_["translate"])('InvalidateReports_AllSegments')
      }
    };
  },
  created: function created() {
    this.fetchSegments();
  },
  methods: {
    invalidate: function invalidate() {
      var _this = this;

      external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.confirmInvalidation, {
        yes: function yes() {
          _this.invalidateReports();
        }
      });
    },
    fetchSegments: function fetchSegments() {
      var _this2 = this;

      external_CoreHome_["AjaxHelper"].fetch({
        method: 'SegmentEditor.getAll',
        idSite: this.site.id
      }, {
        withTokenInUrl: true
      }).then(function (segments) {
        var availSegments = {
          '': Object(external_CoreHome_["translate"])('InvalidateReports_AllSegments')
        };
        segments.forEach(function (segment) {
          availSegments[segment.definition] = "".concat(segment.name, " (").concat(segment.definition, ")");
        });
        _this2.availableSegments = availSegments;

        if (!_this2.availableSegments[_this2.segment]) {
          _this2.segment = '';
        }
      });
    },
    invalidateReports: function invalidateReports() {
      var _this3 = this;

      this.loading = true;
      external_CoreHome_["AjaxHelper"].fetch({
        module: 'InvalidateReports',
        action: 'invalidateReports',
        idSites: this.site.id,
        segment: this.segment,
        months: this.months
      }, {
        withTokenInUrl: true
      }).then(function (response) {
        var messageParts = [Object(external_CoreHome_["translate"])('InvalidateReports_InvalidationSuccess'), Object(external_CoreHome_["translate"])('InvalidateReports_InvalidateAPIReturn')].concat(_toConsumableArray(response));
        var message = messageParts.join('<br />').replace(/\n/g, '<br />');
        var instanceId = external_CoreHome_["NotificationsStore"].show({
          message: message,
          id: 'InvalidatedReports',
          context: 'success',
          type: 'transient'
        });
        external_CoreHome_["NotificationsStore"].scrollToNotification(instanceId);
      }).finally(function () {
        _this3.loading = false;
      });
    }
  },
  computed: {
    confirmInvalidationTitle: function confirmInvalidationTitle() {
      var isAllSites = this.site.id === 'all';
      return Object(external_CoreHome_["translate"])('InvalidateReports_ConfirmInvalidation', isAllSites ? this.site.name : "".concat(Object(external_CoreHome_["translate"])('General_Website'), " ").concat(this.site.name), this.segment ? "".concat(Object(external_CoreHome_["translate"])('General_Segment'), " ").concat(this.availableSegments[this.segment]) : Object(external_CoreHome_["translate"])('InvalidateReports_AllSegments'));
    }
  }
}));
// CONCATENATED MODULE: ./plugins/InvalidateReports/vue/src/InvalidateReports/InvalidateReports.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./plugins/InvalidateReports/vue/src/InvalidateReports/InvalidateReports.vue?vue&type=custom&index=0&blockType=todo
var InvalidateReportsvue_type_custom_index_0_blockType_todo = __webpack_require__("a5f2");
var InvalidateReportsvue_type_custom_index_0_blockType_todo_default = /*#__PURE__*/__webpack_require__.n(InvalidateReportsvue_type_custom_index_0_blockType_todo);

// CONCATENATED MODULE: ./plugins/InvalidateReports/vue/src/InvalidateReports/InvalidateReports.vue



InvalidateReportsvue_type_script_lang_ts.render = render
/* custom blocks */

if (typeof InvalidateReportsvue_type_custom_index_0_blockType_todo_default.a === 'function') InvalidateReportsvue_type_custom_index_0_blockType_todo_default()(InvalidateReportsvue_type_script_lang_ts)


/* harmony default export */ var InvalidateReports = (InvalidateReportsvue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/InvalidateReports/vue/src/index.ts
/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ })

/******/ });
});
//# sourceMappingURL=InvalidateReports.umd.js.map