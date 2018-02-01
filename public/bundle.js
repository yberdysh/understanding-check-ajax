/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {


/*
Your Tasks:

1. If there is a front end route, render the appropriate data. We have routes on the backend that will send us array of data containing the appropriate cute animals! If there is a front end route, we should send a GET request using AJAX to request those data from the Server. Then we can call `renderView` to render the data to the page.
   a) /#dogs, render all the dogs!
   b) /#cats, render all the cats!
   c) /#dragons, render all the dragons!

2. When a user clicks one of the buttons (event listeners!!), we want to:
   a) Display the appropriate cute animals using `renderView`
   b) change the url to match!

*/

// ALL YOUR CODE HERE


//This function takes an array of animal objects, and renders them on the page.
//You don't need to change this function!

function renderView(arrOfData) {
  const view = document.getElementById('content');
  //remove anything in the content div if there is something
  if (view.firstChild) view.removeChild(view.firstChild);

  //create a new div
  const list = document.createElement('div');
  list.className = 'list'

  //run through the list of animals
  arrOfData.forEach(animal => {
    //create div for each
    const item = document.createElement('div');
    //set the innerHTML to include the animals name and image
    item.innerHTML = `<div class="item"><h2>${animal.name}</h2><img src=${animal.image} /></div>`
    //append the new div to the list
    list.appendChild(item);
  })
  //append the new list to the content div
  view.appendChild(list);
}


/***/ })
/******/ ]);