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
/******/ 	return __webpack_require__(__webpack_require__.s = "./design.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../components/common_componentc/footer/index.js":
/*!*******************************************************!*\
  !*** ../components/common_componentc/footer/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/footer/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/common_componentc/footer/index.scss":
/*!*********************************************************!*\
  !*** ../components/common_componentc/footer/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/header/index.js":
/*!*******************************************************!*\
  !*** ../components/common_componentc/header/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/header/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


window.onload = function () {
  var menu_btn = document.querySelector('.header_hamburger');
  menu_btn.addEventListener("click", menu_action);

  function menu_action() {
    var header_navigation = document.querySelector('.header');
    header_navigation.classList.toggle('active');
    document.querySelector('.header_main').classList.toggle('active');
  }
};

if (document.documentElement.clientWidth < 992) {
  document.querySelector('.header_mob').append(document.querySelector('.header_logo'));
}

window.addEventListener('resize', function () {
  if (document.documentElement.clientWidth < 992) {
    document.querySelector('.header_mob').append(document.querySelector('.header_logo'));
  } else {
    document.querySelector('.after_logo').after(document.querySelector('.header_logo'));
  }
});

/***/ }),

/***/ "../components/common_componentc/header/index.scss":
/*!*********************************************************!*\
  !*** ../components/common_componentc/header/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/normalize/index.js":
/*!**********************************************************!*\
  !*** ../components/common_componentc/normalize/index.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/normalize/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/common_componentc/normalize/index.scss":
/*!************************************************************!*\
  !*** ../components/common_componentc/normalize/index.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/plans/index.js":
/*!******************************************************!*\
  !*** ../components/common_componentc/plans/index.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/plans/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

var swiper = new Swiper(".plans", {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 3
    },
    // 992: {
    //     slidesPerView: 2,
    // },
    600: {
      slidesPerView: 2
    },
    300: {
      slidesPerView: 1
    }
  }
});

/***/ }),

/***/ "../components/common_componentc/plans/index.scss":
/*!********************************************************!*\
  !*** ../components/common_componentc/plans/index.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/top/index.js":
/*!****************************************************!*\
  !*** ../components/common_componentc/top/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/top/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/common_componentc/top/index.scss":
/*!******************************************************!*\
  !*** ../components/common_componentc/top/index.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/button/index.js":
/*!***********************************************!*\
  !*** ../components/interface/button/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/button/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/interface/button/index.scss":
/*!*************************************************!*\
  !*** ../components/interface/button/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/category_section/index.js":
/*!*********************************************************!*\
  !*** ../components/interface/category_section/index.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/category_section/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

var all_items = document.querySelectorAll('.category_item');
all_items.forEach(function (item) {
  item.addEventListener("click", function () {
    var href = item.dataset.href;
    window.location = href;
  });
});

/***/ }),

/***/ "../components/interface/category_section/index.scss":
/*!***********************************************************!*\
  !*** ../components/interface/category_section/index.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/form/index.js":
/*!*********************************************!*\
  !*** ../components/interface/form/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/form/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

var field_inputs = document.querySelectorAll('.input__wrap');

if (field_inputs.length > 0) {
  field_inputs.forEach(function (element) {
    var input = element.querySelector('.input');
    var length = input;
    input.addEventListener('focus', function () {
      element.classList.add('active');
    });
    input.addEventListener('blur', function () {
      if (this.value.length < 1) {
        element.classList.remove('active');
      }
    });

    if (length > 1) {
      input.classList.add('active');
    } else {
      input.classList.remove('active');
    }
  }); // $('.form__group_label').on('click', function () {
  //     $(this).parents('.input').toggleClass('in-focus')
  // })
  // console.log(field_inputs);
  // for (const key in field_inputs) {
  //     if (field_inputs.hasOwnProperty(key) && typeof field_inputs[key] == 'object') {
  //         let input = field_inputs[key];
  //     }
  // }
}

/***/ }),

/***/ "../components/interface/form/index.scss":
/*!***********************************************!*\
  !*** ../components/interface/form/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/grid/fontsAndColors.scss":
/*!********************************************************!*\
  !*** ../components/interface/grid/fontsAndColors.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/grid/index.js":
/*!*********************************************!*\
  !*** ../components/interface/grid/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/grid/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fontsAndColors_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fontsAndColors.scss */ "../components/interface/grid/fontsAndColors.scss");
/* harmony import */ var _fontsAndColors_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fontsAndColors_scss__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../components/interface/grid/index.scss":
/*!***********************************************!*\
  !*** ../components/interface/grid/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/module/catalog_elements/index.js":
/*!******************************************************!*\
  !*** ../components/module/catalog_elements/index.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _star_rate_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./star_rate.scss */ "../components/module/catalog_elements/star_rate.scss");
/* harmony import */ var _star_rate_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_star_rate_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "../components/module/catalog_elements/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shop_scripts_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shop_scripts/index */ "../components/module/shop_scripts/index.js");



var checker = document.querySelectorAll('.catalog_swiper').length;

if (checker >= 1) {
  var swiper = new Swiper(".catalog_swiper", {
    lazy: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    breakpoints: {
      1200: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 3
      },
      600: {
        slidesPerView: 2
      },
      300: {
        slidesPerView: 1
      }
    }
  });
}

var all_count_plus = document.querySelectorAll('.count_plus');
var all_count_minus = document.querySelectorAll('.count_minus');
var all_count_input = document.querySelectorAll('.count_input');
var all_card_btn = document.querySelectorAll('.product_card_btn');
var all_delete_btn = document.querySelectorAll('.basket_item_delete');
var delete_cards = document.querySelector('.basket_total_clear_btn');
var card_like = document.querySelectorAll('.card_like');
var item_like = document.querySelector('.item_like');
var card_like_delete = document.querySelectorAll('.card_delete');

if (card_like_delete != null) {
  card_like_delete.forEach(function (like_btn_delete) {
    like_btn_delete.addEventListener("click", function () {
      var _this = this;

      var item_id = this.closest('.product_card__block').dataset.quantity_item_id;
      fetch("/api/favour_item/".concat(item_id, "/remove_by_like/"), {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }).then(function (data) {
        return data.json();
      }).then(function (body) {
        Object(_shop_scripts_index__WEBPACK_IMPORTED_MODULE_2__["delete_item"])(_this, '.product_card__block');
      });
    });
  });
}

if (item_like != null) {
  item_like.addEventListener("click", function () {
    var item_id = this.closest('.product_card__block').dataset.quantity_item_id;
    var arr_api = {
      item_id: Number(item_id)
    };
    document.querySelector('.navigation_icon_like').style.transform = 'scale(1.3)';
    setTimeout(function () {
      document.querySelector('.navigation_icon_like').style.transform = 'scale(1)';
    }, 200);
    fetch("/api/favour_items/", {
      method: "POST",
      body: JSON.stringify(arr_api),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
  });
}

if (card_like != null) {
  card_like.forEach(function (like_btn) {
    like_btn.addEventListener("click", function () {
      var item_id = this.closest('.product_card__block').dataset.quantity_item_id;
      console.log('this: ', this);
      console.log('item_id: ', item_id);
      var arr_api = {
        item_id: Number(item_id)
      };
      document.querySelector('.navigation_icon_like').style.transform = 'scale(1.3)';
      setTimeout(function () {
        document.querySelector('.navigation_icon_like').style.transform = 'scale(1)';
      }, 200);
      fetch("/api/favour_items/", {
        method: "POST",
        body: JSON.stringify(arr_api),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      });
    });
  });
}

if (delete_cards != null) {
  delete_cards.addEventListener("click", function () {
    fetch("/api/cart_items/", {
      method: 'DELETE'
    }).then(function (data) {
      return data.json();
    }).then(function (data) {
      var all_cards = document.querySelectorAll('.product_card__block');
      all_cards.forEach(function (card) {
        var pseudo_btn = card.querySelector('.basket_item_delete');
        Object(_shop_scripts_index__WEBPACK_IMPORTED_MODULE_2__["delete_item"])(pseudo_btn, '.product_card__block');
      });
      Object(_shop_scripts_index__WEBPACK_IMPORTED_MODULE_2__["change_counter"])(data.cart_items_quantity, null, '.header_counter');
      Object(_shop_scripts_index__WEBPACK_IMPORTED_MODULE_2__["change_counter"])(data.cart_total_price, null, '.header_price');
      var length_item = $('.product_card__block_all_value').length;
      var current_price = Number(wrapper.querySelector('.product_card__block_all_value').textContent);
      var all_price;

      if (length_item == 1) {
        all_price = 0;
      } else {
        all_price = return_all_price() - current_price;
      }

      document.querySelector('.product_card_total_price').textContent = "".concat(parseInt(all_price));
    });
  });
}

if (all_delete_btn != null) {
  all_delete_btn.forEach(function (element) {
    element.addEventListener('click', function () {
      var _this2 = this;

      var wrapper = this.closest('.product_card__block');
      var item_id = Number(wrapper.dataset.quantity_item_id);
      fetch("/api/cart_item/".concat(item_id), {
        method: 'DELETE'
      }).then(function (data) {
        return data.json();
      }).then(function (data) {
        Object(_shop_scripts_index__WEBPACK_IMPORTED_MODULE_2__["delete_item"])(_this2, '.product_card__block');
        Object(_shop_scripts_index__WEBPACK_IMPORTED_MODULE_2__["change_counter"])(data.cart_items_quantity, null, '.header_counter');
        Object(_shop_scripts_index__WEBPACK_IMPORTED_MODULE_2__["change_counter"])(data.cart_total_price, null, '.header_price');
        var length_item = document.querySelectorAll('.product_card__block_all_value').length;
        var current_price = Number(wrapper.querySelector('.product_card__block_all_value').textContent);
        var all_price;

        if (length_item == 1) {
          all_price = 0;
        } else {
          all_price = return_all_price() - current_price;
        }

        document.querySelector('.product_card_total_price').textContent = "".concat(parseInt(all_price));
      });
    });
  });
}

all_card_btn.forEach(function (element) {
  element.addEventListener('click', function () {
    var input = this.closest('.product_card__block').querySelector('.count_input');
    var quantity = input != null ? Number(input.value) : 1;
    var item_id = Number(this.closest('.product_card__block').dataset.quantity_item_id);
    var body = {
      "item_id": item_id,
      "quantity": quantity
    };
    fetch('/api/cart_items/', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(function (data) {
      return data.json();
    }).then(function (data) {
      Object(_shop_scripts_index__WEBPACK_IMPORTED_MODULE_2__["change_counter"])(data.cart_items_quantity, null, '.header_counter');
      Object(_shop_scripts_index__WEBPACK_IMPORTED_MODULE_2__["change_counter"])(data.cart_total_price, null, '.header_price');
    });
  });
});
all_count_plus.forEach(function (count) {
  count.addEventListener('click', function () {
    var value = Object(_shop_scripts_index__WEBPACK_IMPORTED_MODULE_2__["plus"])('.product_card__block', '.count_input', this);
    var wrapper = this.closest('.product_card__block');
    var item_id = Number(wrapper.dataset.quantity_item_id);
    change_quantity(item_id, value, wrapper);
  });
});
all_count_minus.forEach(function (count) {
  count.addEventListener('click', function () {
    var value = Object(_shop_scripts_index__WEBPACK_IMPORTED_MODULE_2__["minus"])('.product_card__block', '.count_input', this);
    var wrapper = this.closest('.product_card__block');
    var item_id = Number(wrapper.dataset.quantity_item_id);
    change_quantity(item_id, value, wrapper);
  });
});
all_count_input.forEach(function (count) {
  count.addEventListener('change', function () {
    var value = Object(_shop_scripts_index__WEBPACK_IMPORTED_MODULE_2__["input_basket"])(this);
    var wrapper = this.closest('.product_card__block');
    var item_id = Number(wrapper.dataset.quantity_item_id);
    change_quantity(item_id, value, wrapper);
  });
});

function change_quantity(item_id, value, wrapper) {
  var check_item = wrapper.classList.contains('item__block');

  if (!check_item) {
    fetch("/api/cart_item/".concat(item_id, "/"), {
      method: 'PATCH',
      body: JSON.stringify({
        quantity: value
      }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(function (data) {
      return data.json();
    }).then(function (data) {
      Object(_shop_scripts_index__WEBPACK_IMPORTED_MODULE_2__["change_counter"])(data.cart_items_quantity, null, '.header_counter');

      if (document.querySelector('.product_card_total_price') != undefined) {
        wrapper.querySelector('.product_card__block_all_value').textContent = "".concat(parseInt(data.cart_item_total_price)); // let all_price = return_all_price();

        document.querySelector('.product_card_total_price').textContent = "".concat(parseInt(data.cart_total_price));
      } // $('.basket_all_sale_payment').text(`${data.cart_total_price} ${data.cart_currency}`);

    });
  }
}

function return_all_price() {
  var all_item = document.querySelectorAll('.product_card__block_all_value');
  var all_price = 0;
  all_item.forEach(function (element) {
    var price = Number(element.dataset.price);
    all_price += price;
  });
  return all_price;
}

var item_content_info_btn_fast = document.querySelector('.item_content_info_btn_fast');
var card_fast_buy = document.querySelectorAll('.card_fast_buy');

if (item_content_info_btn_fast != null) {
  item_content_info_btn_fast.addEventListener("click", function () {
    var name = this.dataset.card_name;
    var container = document.querySelector('.modal__block_fast_buy');
    var name_section = container.querySelector('.modal_name');
    var item_id = document.querySelector('.item_content_info__block').dataset.quantity_item_id;
    var item_id_input = document.querySelector('.modal_form_fast_buy_hidden');
    item_id_input.value = item_id;
    name_section.textContent = name;
  });
}

if (card_fast_buy != null) {
  card_fast_buy.forEach(function (element) {
    var wrapper = element.closest('.card_item');
    var name_product = wrapper.querySelector('.card_title').textContent;
    var item_id = wrapper.dataset.quantity_item_id;
    var item_id_input = document.querySelector('.modal_form_fast_buy_hidden');
    element.addEventListener("click", function (e) {
      var container = document.querySelector('.modal__block_fast_buy');
      var name_section = container.querySelector('.modal_name');
      console.log('name_section: ', name_section);
      name_section.textContent = name_product;
      item_id_input.value = item_id;
    });
  });
}

/***/ }),

/***/ "../components/module/catalog_elements/index.scss":
/*!********************************************************!*\
  !*** ../components/module/catalog_elements/index.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/module/catalog_elements/star_rate.scss":
/*!************************************************************!*\
  !*** ../components/module/catalog_elements/star_rate.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/module/modal_script/index.js":
/*!**************************************************!*\
  !*** ../components/module/modal_script/index.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/module/modal_script/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

var modal_open = document.querySelectorAll('.modal_open');
var all_modals = document.querySelectorAll('.modal__block');
var modal_close = document.querySelectorAll('.modal_close');
modal_open.forEach(function (element) {
  var modal_block = document.querySelector(".".concat(element.dataset.href));
  element.addEventListener('click', function () {
    all_modals.forEach(function (modal) {
      modal.classList.remove('active');
    });
    modal_block.classList.add('active');
  });
});
all_modals.forEach(function (element) {
  document.body.addEventListener('click', function (e) {
    // ?????? ?????????? ?? ?????????? ?????????? ???????? ????????????????
    var target = e.target; // ?????????????? ??????????????, ???? ?????????????? ?????? ????????

    var check = element.classList.contains('active');

    if (!target.closest('.modal__block') && !target.closest('.modal_open') && check) {
      // ???????? ???????? ?????????????? ?????? ?????? ???????????????????????? ???????????????? ???? ???????? ?????????????????? ?? ???? ????????????
      element.classList.remove('active'); // ???? ?????????????????? ???????? ??????????????????, ???????????? ???????????????? ??????????
    }
  });
});
modal_close.forEach(function (element) {
  var wrapper = element.closest('.modal__block');
  element.addEventListener('click', function () {
    wrapper.classList.remove('active');
  });
});

/***/ }),

/***/ "../components/module/modal_script/index.scss":
/*!****************************************************!*\
  !*** ../components/module/modal_script/index.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/module/shop_scripts/basket_action.js":
/*!**********************************************************!*\
  !*** ../components/module/shop_scripts/basket_action.js ***!
  \**********************************************************/
/*! exports provided: minus, plus, input_basket, delete_item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minus", function() { return minus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus", function() { return plus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input_basket", function() { return input_basket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_item", function() { return delete_item; });
function minus(wrapper, input_name, this_click) {
  var wrap = this_click.closest(wrapper);
  var input = wrap.querySelector(input_name);
  var value = Number(input.value);

  if (value <= 1) {
    input.value = 1;
  } else {
    input.value = value - 1;
  }

  return Number(input.value);
}

function plus(wrapper, input_name, this_click) {
  var wrap = this_click.closest(wrapper);
  var input = wrap.querySelector(input_name);
  var value = Number(input.value);
  input.value = value + 1;
  return Number(input.value);
}

function input_basket(input_name) {
  var input = input_name;
  var value = Number(input.value);

  if (value <= 0) {
    input.value = 1;
  }

  return Number(input.value);
}

function delete_item(this_click, wrapper) {
  var wrap = this_click.closest(wrapper);
  wrap.style.position = 'relative';
  wrap.style.transition = 'all .2s';
  wrap.style.maxHeight = '1000px';
  wrap.style.maxHeight = '0px';
  wrap.style.transform = 'scale(0)';
  setTimeout(function () {
    wrap.style.position = 'absolute';
  }, 200);
  setTimeout(function () {
    wrap.remove();
  }, 1000);
}



/***/ }),

/***/ "../components/module/shop_scripts/change_counter.js":
/*!***********************************************************!*\
  !*** ../components/module/shop_scripts/change_counter.js ***!
  \***********************************************************/
/*! exports provided: change_counter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "change_counter", function() { return change_counter; });
function change_counter(val, up, className) {
  var old_count = Number(document.querySelector(className).textContent);
  var result;
  document.querySelector(className).style.transform = 'scale(1.3)';
  setTimeout(function () {
    document.querySelector(className).style.transform = 'scale(1)';
  }, 200);

  if (up == true) {
    result = old_count + val;
  } else if (up == false) {
    result = old_count - val;
  } else if (up == null) {
    result = val;
  }

  document.querySelector(className).textContent = result;
}



/***/ }),

/***/ "../components/module/shop_scripts/index.js":
/*!**************************************************!*\
  !*** ../components/module/shop_scripts/index.js ***!
  \**************************************************/
/*! exports provided: minus, plus, input_basket, delete_item, nova_pochta, change_counter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_shop_scripts_basket_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../module/shop_scripts/basket_action */ "../components/module/shop_scripts/basket_action.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minus", function() { return _module_shop_scripts_basket_action__WEBPACK_IMPORTED_MODULE_0__["minus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plus", function() { return _module_shop_scripts_basket_action__WEBPACK_IMPORTED_MODULE_0__["plus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "input_basket", function() { return _module_shop_scripts_basket_action__WEBPACK_IMPORTED_MODULE_0__["input_basket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delete_item", function() { return _module_shop_scripts_basket_action__WEBPACK_IMPORTED_MODULE_0__["delete_item"]; });

/* harmony import */ var _module_shop_scripts_order_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../module/shop_scripts/order_action */ "../components/module/shop_scripts/order_action.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nova_pochta", function() { return _module_shop_scripts_order_action__WEBPACK_IMPORTED_MODULE_1__["nova_pochta"]; });

/* harmony import */ var _module_shop_scripts_change_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/shop_scripts/change_counter */ "../components/module/shop_scripts/change_counter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "change_counter", function() { return _module_shop_scripts_change_counter__WEBPACK_IMPORTED_MODULE_2__["change_counter"]; });





/***/ }),

/***/ "../components/module/shop_scripts/order_action.js":
/*!*********************************************************!*\
  !*** ../components/module/shop_scripts/order_action.js ***!
  \*********************************************************/
/*! exports provided: nova_pochta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nova_pochta", function() { return nova_pochta; });
function nova_pochta() {
  var select_city, select_department;
  create_city_select({
    city_name: ".select_city",
    select_noResult: "???????? ???? ????????????????",
    api: "/api/settlements/"
  });
  create_department_select({
    city_name: ".select_city",
    department_name: ".select_department",
    select_noResult: "?????????????????? ???? ????????????????",
    api: "/api/warehouses/"
  });

  function create_city_select(_ref) {
    var city_name = _ref.city_name,
        select_noResult = _ref.select_noResult,
        api = _ref.api;
    select_city = new TomSelect('.select_city', {
      create: false,
      maxOptions: 100,
      valueField: 'value',
      labelField: 'title',
      searchField: 'title',
      sortField: {
        field: "text",
        direction: "asc"
      }
    });
    fetch(api, {
      method: 'GET'
    }).then(function (data) {
      return data.json();
    }).then(function (data) {
      data.results.forEach(function (element) {
        select_city.addOption({
          value: element.title,
          title: "".concat(element.title, " (").concat(element.region.title, ")")
        });
      });
      select_city.setValue([data.results[0].title]);
    }); // let select_city = $(city_name).select2({
    //     dropdownAutoWidth: true,
    //     width: "resolve",
    //     language: {
    //         noResults: function () {
    //             return gettext(select_noResult);
    //         },
    //     },
    //     ajax: {
    //         url: api,
    //         data: function (params) {
    //             var query = {
    //                 per_page: 20,
    //                 title: params.term,
    //                 page_number: params.page || 1,
    //             };
    //             return query;
    //         },
    //         processResults: function (data, params, ...props) {
    //             params.page = params.page || 1;
    //             let options = data.results.map((item) => {
    //                 let result;
    //                 if (item.region.title != '') {
    //                     result = `${item.title} (${item.region.title})`;
    //                 } else {
    //                     result = `${item.title}`;
    //                 }
    //                 return {
    //                     id: item.id,
    //                     text: result,
    //                     item,
    //                 };
    //             });
    //             return {
    //                 results: options,
    //                 pagination: {
    //                     more: params.page * 30 < data.count,
    //                 },
    //             };
    //         },
    //     },
    // });

    return select_city;
  }

  function create_department_select(_ref2) {
    var city_name = _ref2.city_name,
        department_name = _ref2.department_name,
        select_noResult = _ref2.select_noResult,
        api = _ref2.api;
    select_department = new TomSelect('.select_department', {
      create: false,
      valueField: 'value',
      labelField: 'title',
      searchField: 'title',
      sortField: {
        field: "text",
        direction: "asc"
      },
      render: {
        no_results: function no_results(data, escape) {
          return '<div class="no-results">?????????? ???????????????????? ???? ?????????? ?????? ?? ???????????????? ?????????? ?????????? ?????????????????? ?????????? ??????????</div>';
        }
      }
    });
    select_city.on('change', function (item) {
      fetch("".concat(api, "?query=").concat(item), {
        method: 'GET'
      }).then(function (data) {
        return data.json();
      }).then(function (data) {
        var length = data.results.length;
        console.log('length: ', length);
        select_department.clear();
        select_department.clearOptions();

        if (length >= 1) {
          var first_value = data.results[0].title;
          data.results.forEach(function (element) {
            select_department.addOption({
              value: "".concat(element.title),
              title: "".concat(element.title)
            });
          });
          select_department.setValue([first_value]);
        } else {}
      });
    }); // $(department_name).select2({
    //     dropdownAutoWidth: true,
    //     width: "resolve",
    //     language: {
    //         noResults: function () {
    //             return select_noResult;
    //         },
    //     },
    // });
    // $(city_name).on("select2:select", function (e) {
    //     $(department_name).val([]).trigger("change");
    //     $(department_name).empty();
    //     let item = e.params.data.item.title;
    //     fetch(`${api}?query=${item}`, {
    //         method: "GET",
    //     })
    //         .then((data) => {
    //             return data.json();
    //         })
    //         .then((body) => {
    //             if (body.count != 0) {
    //                 for (let key in body.results) {
    //                     let option_area = document.createElement("option");
    //                     option_area.textContent = body.results[key].title;
    //                     $(department_name)[0].appendChild(option_area);
    //                 }
    //             }
    //         });
    // });
  }
}



/***/ }),

/***/ "../components/pages/design/index.js":
/*!*******************************************!*\
  !*** ../components/pages/design/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/pages/design/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/pages/design/index.scss":
/*!*********************************************!*\
  !*** ../components/pages/design/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./design.js":
/*!*******************!*\
  !*** ./design.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_common_componentc_normalize_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/common_componentc/normalize/index */ "../components/common_componentc/normalize/index.js");
/* harmony import */ var _components_interface_grid_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/interface/grid/index */ "../components/interface/grid/index.js");
/* harmony import */ var _components_interface_form_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/interface/form/index */ "../components/interface/form/index.js");
/* harmony import */ var _components_interface_button_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/interface/button/index */ "../components/interface/button/index.js");
/* harmony import */ var _components_module_catalog_elements_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/module/catalog_elements/index */ "../components/module/catalog_elements/index.js");
/* harmony import */ var _components_module_modal_script_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/module/modal_script/index */ "../components/module/modal_script/index.js");
/* harmony import */ var _components_interface_category_section_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/interface/category_section/index */ "../components/interface/category_section/index.js");
/* harmony import */ var _components_common_componentc_header_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/common_componentc/header/index */ "../components/common_componentc/header/index.js");
/* harmony import */ var _components_common_componentc_footer_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/common_componentc/footer/index */ "../components/common_componentc/footer/index.js");
/* harmony import */ var _components_common_componentc_top_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/common_componentc/top/index */ "../components/common_componentc/top/index.js");
/* harmony import */ var _components_common_componentc_plans_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/common_componentc/plans/index */ "../components/common_componentc/plans/index.js");
/* harmony import */ var _components_pages_design_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/pages/design/index */ "../components/pages/design/index.js");
// script interface



 // script common elements

 // import '../components/module/subscribe_section/index'


 // script pages




 // import '../components/common_componentc/form_action/index'



/***/ })

/******/ });
//# sourceMappingURL=index.js.map