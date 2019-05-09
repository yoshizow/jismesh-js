(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jismesh"] = factory();
	else
		root["jismesh"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index */ \"./src/index.js\");\n\n\n//# sourceURL=webpack://jismesh/./index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst _unitLv1Lat = 40/60;\nconst _unitLv1Lon = 1;\nconst _unitLv2Lat = 5/60;\nconst _unitLv2Lon = 7.5/60;\nconst _unitLv3Lat = 30/3600;\nconst _unitLv3Lon = 45/3600;\nconst _unitLv4Lat = 15/3600;\nconst _unitLv4Lon = 22.5/3600;\nconst _unitLv5Lat = 7.5/3600;\nconst _unitLv5Lon = 11.25/3600;\nconst _unitLv6Lat = 3.75/3600;\nconst _unitLv6Lon = 5.625/3600;\nconst _unit40000Lat = 40/120;\nconst _unit40000Lon = 1/2;\nconst _unit20000Lat = 40/240;\nconst _unit20000Lon = 1/4;\nconst _unit16000Lat = 40/300;\nconst _unit16000Lon = 1/5;\nconst _unit8000Lat = 4/60;\nconst _unit8000Lon = 6/60;\nconst _unit5000Lat = 2.5/60;\nconst _unit5000Lon = 3.75/60;\nconst _unit4000Lat = 2/60;\nconst _unit4000Lon = 3/60;\nconst _unit2500Lat = 2.5/120;\nconst _unit2500Lon = 3.75/120;\nconst _unit2000Lat = 1/60;\nconst _unit2000Lon = 1.5/60;\n\nfunction _toMeshCodeLv1(lat, lon) {\n  const y = Math.floor(lat / _unitLv1Lat);\n  const west = Math.floor(lon);\n  const x = west - 100;\n  const code = String(100 * y + x);\n  const south = y * _unitLv1Lat;\n  return { south, west, code };\n}\n\nfunction _toMeshCodeLv2(lat, lon) {\n  const cellLv1 = _toMeshCodeLv1(lat, lon);\n  const y = Math.floor((lat - cellLv1.south) / _unitLv2Lat);\n  const x = Math.floor((lon - cellLv1.west)  / _unitLv2Lon);\n  const code = cellLv1.code + (10 * y + x);\n  const south = cellLv1.south + y * _unitLv2Lat;\n  const west  = cellLv1.west  + x * _unitLv2Lon;\n  return { south, west, code };\n}\n\nfunction _toMeshCodeLv3(lat, lon) {\n  const cellLv2 = _toMeshCodeLv2(lat, lon);\n  const y = Math.floor((lat - cellLv2.south) / _unitLv3Lat);\n  const x = Math.floor((lon - cellLv2.west)  / _unitLv3Lon);\n  const code = cellLv2.code + (10 * y + x);\n  const south = cellLv2.south + y * _unitLv3Lat;\n  const west  = cellLv2.west  + x * _unitLv3Lon;\n  return { south, west, code };\n}\n\nfunction _toMeshCodeLv4(lat, lon) {\n  const cellLv3 = _toMeshCodeLv3(lat, lon);\n  const y = Math.floor((lat - cellLv3.south) / _unitLv4Lat);\n  const x = Math.floor((lon - cellLv3.west)  / _unitLv4Lon);\n  const code = cellLv3.code + (2 * y + x + 1);\n  const south = cellLv3.south + y * _unitLv4Lat;\n  const west  = cellLv3.west  + x * _unitLv4Lon;\n  return { south, west, code };\n}\n\nfunction _toMeshCodeLv5(lat, lon) {\n  const cellLv4 = _toMeshCodeLv4(lat, lon);\n  const y = Math.floor((lat - cellLv4.south) / _unitLv5Lat);\n  const x = Math.floor((lon - cellLv4.west)  / _unitLv5Lon);\n  const code = cellLv4.code + (2 * y + x + 1);\n  const south = cellLv4.south + y * _unitLv5Lat;\n  const west  = cellLv4.west  + x * _unitLv5Lon;\n  return { south, west, code };\n}\n\nfunction _toMeshCodeLv6(lat, lon) {\n  const cellLv5 = _toMeshCodeLv5(lat, lon);\n  const y = Math.floor((lat - cellLv5.south) / _unitLv6Lat);\n  const x = Math.floor((lon - cellLv5.west)  / _unitLv6Lon);\n  const code = cellLv5.code + (2 * y + x + 1);\n  return { code };\n}\n\nfunction _toMeshCode40000(lat, lon) {\n  const cellLv1 = _toMeshCodeLv1(lat, lon);\n  const y = Math.floor((lat - cellLv1.south) / _unit40000Lat);\n  const x = Math.floor((lon - cellLv1.west)  / _unit40000Lon);\n  const code = cellLv1.code + (2 * y + x + 1);\n  const south = cellLv1.south + y * _unit40000Lat;\n  const west  = cellLv1.west  + x * _unit40000Lon;\n  return { south, west, code };\n}\n\nfunction _toMeshCode20000(lat, lon) {\n  const cell40000 = _toMeshCode40000(lat, lon);\n  const y = Math.floor((lat - cell40000.south) / _unit20000Lat);\n  const x = Math.floor((lon - cell40000.west)  / _unit20000Lon);\n  const code = cell40000.code + (2 * y + x + 1) + '5';\n  return { code };\n}\n\nfunction _toMeshCode16000(lat, lon) {\n  const cellLv1 = _toMeshCodeLv1(lat, lon);\n  const y = Math.floor((lat - cellLv1.south) / _unit16000Lat);\n  const x = Math.floor((lon - cellLv1.west)  / _unit16000Lon);\n  const code = cellLv1.code + (10 * (y * 2) + (x * 2)) + '7';\n  return { code };\n}\n\nfunction _toMeshCode8000(lat, lon) {\n  const cellLv1 = _toMeshCodeLv1(lat, lon);\n  const y = Math.floor((lat - cellLv1.south) / _unit8000Lat);\n  const x = Math.floor((lon - cellLv1.west)  / _unit8000Lon);\n  const code = cellLv1.code + (10 * y + x) + '6';\n  const south = cellLv1.south + y * _unit8000Lat;\n  const west  = cellLv1.west  + x * _unit8000Lon;\n  return { south, west, code };\n}\n\nfunction _toMeshCode5000(lat, lon) {\n  const cellLv2 = _toMeshCodeLv2(lat, lon);\n  const y = Math.floor((lat - cellLv2.south) / _unit5000Lat);\n  const x = Math.floor((lon - cellLv2.west)  / _unit5000Lon);\n  const code = cellLv2.code + (2 * y + x + 1);\n  const south = cellLv2.south + y * _unit5000Lat;\n  const west  = cellLv2.west  + x * _unit5000Lon;\n  return { south, west, code };\n}\n\nfunction _toMeshCode4000(lat, lon) {\n  const cell8000 = _toMeshCode8000(lat, lon);\n  const y = Math.floor((lat - cell8000.south) / _unit4000Lat);\n  const x = Math.floor((lon - cell8000.west)  / _unit4000Lon);\n  const code = cell8000.code + (2 * y + x + 1) + '7';\n  return { code };\n}\n\nfunction _toMeshCode2500(lat, lon) {\n  const cell5000 = _toMeshCode5000(lat, lon);\n  const y = Math.floor((lat - cell5000.south) / _unit2500Lat);\n  const x = Math.floor((lon - cell5000.west)  / _unit2500Lon);\n  const code = cell5000.code + (2 * y + x + 1) + '6';\n  return { code };\n}\n\nfunction _toMeshCode2000(lat, lon) {\n  const cellLv2 = _toMeshCodeLv2(lat, lon);\n  const y = Math.floor((lat - cellLv2.south) / _unit2000Lat);\n  const x = Math.floor((lon - cellLv2.west)  / _unit2000Lon);\n  const code = cellLv2.code + (10 * (y * 2) + (x * 2)) + '5';\n  return { code };\n}\n\nconst _toMeshCodeProcs = {\n  1: _toMeshCodeLv1,\n  2: _toMeshCodeLv2,\n  3: _toMeshCodeLv3,\n  4: _toMeshCodeLv4,\n  5: _toMeshCodeLv5,\n  6: _toMeshCodeLv6,\n  40000: _toMeshCode40000,\n  20000: _toMeshCode20000,\n  16000: _toMeshCode16000,\n  8000: _toMeshCode8000,\n  5000: _toMeshCode5000,\n  4000: _toMeshCode4000,\n  2500: _toMeshCode2500,\n  2000: _toMeshCode2000,\n};\n\nfunction toMeshCode(lat, lon, level) {\n  if (lat < 0 || 66.66 <= lat) {\n    throw new RangeError(`Latitude is out of bound: ${lat}`);\n  }\n  if (lon < 100 || 180 <= lon) {\n    throw new RangeError(`Longitude is out of bound: ${lon}`);\n  }\n\n  const toMeshCodeProc = _toMeshCodeProcs[level];\n  if (!toMeshCodeProc) {\n    throw new RangeError(`Unsupported level: ${level}`);\n  }\n\n  return toMeshCodeProc(lat, lon).code;\n}\n\nfunction toMeshLevel(meshCode) {\n  meshCode = String(meshCode);\n\n  switch (meshCode.length) {\n  case 4:\n    return 1;\n  case 5:\n    return 40000;\n  case 6:\n    return 2;\n  case 7:\n    switch (meshCode.charAt(6)) {\n    case '1': case '2': case '3': case '4':\n      return 5000;\n    case '6':\n      return 8000;\n    case '5':\n      return 20000;\n    case '7':\n      return 16000;\n    }\n    break;\n  case 8:\n    return 3;\n  case 9:\n    switch (meshCode.charAt(8)) {\n    case '1': case '2': case '3': case '4':\n      return 4;\n    case '5':\n      return 2000;\n    case '6':\n      return 2500;\n    case '7':\n      return 4000;\n    }\n    break;\n  case 10:\n    switch (meshCode.charAt(9)) {\n    case '1': case '2': case '3': case '4':\n      return 5;\n    }\n    break;\n  case 11:\n    switch (meshCode.charAt(10)) {\n    case '1': case '2': case '3': case '4':\n      return 6;\n    }\n    break;\n  }\n\n  throw new Error(`Unsupported mesh code: ${meshCode}`);\n}\n\nfunction _toMeshPointLv1(meshCode) {\n  const y = parseInt(meshCode.substring(0, 2));\n  const x = parseInt(meshCode.substring(2, 4));\n  const unitLat = _unitLv1Lat;\n  const unitLon = _unitLv1Lon;\n  const south = y * unitLat;\n  const west  = x * unitLon + 100;\n  return { south, west, unitLat, unitLon };\n}\n\nfunction _toMeshPointLv2(meshCode) {\n  const cellLv1 = _toMeshPointLv1(meshCode);\n  const y = parseInt(meshCode.charAt(4));\n  const x = parseInt(meshCode.charAt(5));\n  const unitLat = _unitLv2Lat;\n  const unitLon = _unitLv2Lon;\n  const south = cellLv1.south + y * unitLat;\n  const west  = cellLv1.west  + x * unitLon;\n  return { south, west, unitLat, unitLon };\n}\n\nfunction _toMeshPointLv3(meshCode) {\n  const cellLv2 = _toMeshPointLv2(meshCode);\n  const y = parseInt(meshCode.charAt(6));\n  const x = parseInt(meshCode.charAt(7));\n  const unitLat = _unitLv3Lat;\n  const unitLon = _unitLv3Lon;\n  const south = cellLv2.south + y * unitLat;\n  const west  = cellLv2.west  + x * unitLon;\n  return { south, west, unitLat, unitLon };\n}\n\nfunction _toMeshPointLv4(meshCode) {\n  const cellLv3 = _toMeshPointLv3(meshCode);\n  const c = parseInt(meshCode.charAt(8)) - 1;\n  const y = Math.floor(c / 2);\n  const x = c % 2;\n  const unitLat = _unitLv4Lat;\n  const unitLon = _unitLv4Lon;\n  const south = cellLv3.south + y * unitLat;\n  const west  = cellLv3.west  + x * unitLon;\n  return { south, west, unitLat, unitLon };\n}\n\nfunction _toMeshPointLv5(meshCode) {\n  const cellLv4 = _toMeshPointLv4(meshCode);\n  const c = parseInt(meshCode.charAt(9)) - 1;\n  const y = Math.floor(c / 2);\n  const x = c % 2;\n  const unitLat = _unitLv5Lat;\n  const unitLon = _unitLv5Lon;\n  const south = cellLv4.south + y * unitLat;\n  const west  = cellLv4.west  + x * unitLon;\n  return { south, west, unitLat, unitLon };\n}\n\nfunction _toMeshPointLv6(meshCode) {\n  const cellLv5 = _toMeshPointLv5(meshCode);\n  const c = parseInt(meshCode.charAt(10)) - 1;\n  const y = Math.floor(c / 2);\n  const x = c % 2;\n  const unitLat = _unitLv6Lat;\n  const unitLon = _unitLv6Lon;\n  const south = cellLv5.south + y * unitLat;\n  const west  = cellLv5.west  + x * unitLon;\n  return { south, west, unitLat, unitLon };\n}\n\nfunction _toMeshPoint40000(meshCode) {\n  const cellLv1 = _toMeshPointLv1(meshCode);\n  const c = parseInt(meshCode.charAt(4)) - 1;\n  const y = Math.floor(c / 2);\n  const x = c % 2;\n  const unitLat = _unit40000Lat;\n  const unitLon = _unit40000Lon;\n  const south = cellLv1.south + y * unitLat;\n  const west  = cellLv1.west  + x * unitLon;\n  return { south, west, unitLat, unitLon };\n}\n\nfunction _toMeshPoint20000(meshCode) {\n  const cell40000 = _toMeshPoint40000(meshCode);\n  const c = parseInt(meshCode.charAt(5)) - 1;\n  const y = Math.floor(c / 2);\n  const x = c % 2;\n  const unitLat = _unit20000Lat;\n  const unitLon = _unit20000Lon;\n  const south = cell40000.south + y * unitLat;\n  const west  = cell40000.west  + x * unitLon;\n  return { south, west, unitLat, unitLon };\n}\n\nfunction _toMeshPoint16000(meshCode) {\n  const cellLv1 = _toMeshPointLv1(meshCode);\n  const y = parseInt(meshCode.charAt(4)) / 2;\n  const x = parseInt(meshCode.charAt(5)) / 2;\n  const unitLat = _unit16000Lat;\n  const unitLon = _unit16000Lon;\n  const south = cellLv1.south + y * unitLat;\n  const west  = cellLv1.west  + x * unitLon;\n  return { south, west, unitLat, unitLon };\n}\n\nfunction _toMeshPoint8000(meshCode) {\n  const cellLv1 = _toMeshPointLv1(meshCode);\n  const y = parseInt(meshCode.charAt(4));\n  const x = parseInt(meshCode.charAt(5));\n  const unitLat = _unit8000Lat;\n  const unitLon = _unit8000Lon;\n  const south = cellLv1.south + y * unitLat;\n  const west  = cellLv1.west  + x * unitLon;\n  return { south, west, unitLat, unitLon };\n}\n\nfunction _toMeshPoint5000(meshCode) {\n  const cellLv2 = _toMeshPointLv2(meshCode);\n  const c = parseInt(meshCode.charAt(6)) - 1;\n  const y = Math.floor(c / 2);\n  const x = c % 2;\n  const unitLat = _unit5000Lat;\n  const unitLon = _unit5000Lon;\n  const south = cellLv2.south + y * _unit5000Lat;\n  const west  = cellLv2.west  + x * _unit5000Lon;\n  return { south, west, unitLat, unitLon };\n}\n\nfunction _toMeshPoint4000(meshCode) {\n  const cell8000 = _toMeshPoint8000(meshCode);\n  const c = parseInt(meshCode.charAt(7)) - 1;\n  const y = Math.floor(c / 2);\n  const x = c % 2;\n  const unitLat = _unit4000Lat;\n  const unitLon = _unit4000Lon;\n  const south = cell8000.south + y * unitLat;\n  const west  = cell8000.west  + x * unitLon;\n  return { south, west, unitLat, unitLon };\n}\n\nfunction _toMeshPoint2500(meshCode) {\n  const cell5000 = _toMeshPoint5000(meshCode);\n  const c = parseInt(meshCode.charAt(7)) - 1;\n  const y = Math.floor(c / 2);\n  const x = c % 2;\n  const unitLat = _unit2500Lat;\n  const unitLon = _unit2500Lon;\n  const south = cell5000.south + y * unitLat;\n  const west  = cell5000.west  + x * unitLon;\n  return { south, west, unitLat, unitLon };\n}\n\nfunction _toMeshPoint2000(meshCode) {\n  const cellLv2 = _toMeshPointLv2(meshCode);\n  const y = parseInt(meshCode.charAt(6)) / 2;\n  const x = parseInt(meshCode.charAt(7)) / 2;\n  const unitLat = _unit2000Lat;\n  const unitLon = _unit2000Lon;\n  const south = cellLv2.south + y * unitLat;\n  const west  = cellLv2.west  + x * unitLon;\n  return { south, west, unitLat, unitLon };\n}\n\nconst _toMeshPointProcs = {\n  1: _toMeshPointLv1,\n  2: _toMeshPointLv2,\n  3: _toMeshPointLv3,\n  4: _toMeshPointLv4,\n  5: _toMeshPointLv5,\n  6: _toMeshPointLv6,\n  40000: _toMeshPoint40000,\n  20000: _toMeshPoint20000,\n  16000: _toMeshPoint16000,\n  8000: _toMeshPoint8000,\n  5000: _toMeshPoint5000,\n  4000: _toMeshPoint4000,\n  2500: _toMeshPoint2500,\n  2000: _toMeshPoint2000,\n};\n\nfunction toMeshPoint(meshCode, latMultiplier, lonMultiplier) {\n  meshCode = String(meshCode);\n  const level = toMeshLevel(meshCode);\n  const { south, west, unitLat, unitLon } = _toMeshPointProcs[level](meshCode);\n  const lat = south + latMultiplier * unitLat;\n  const lon = west  + lonMultiplier * unitLon;\n  return [lat, lon];\n}\n\nmodule.exports = {\n  toMeshCode,\n  toMeshPoint,\n  toMeshLevel,\n};\n\n\n//# sourceURL=webpack://jismesh/./src/index.js?");

/***/ })

/******/ });
});