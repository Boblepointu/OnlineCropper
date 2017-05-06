module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EMPTY_GIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

function getElementOffset(el) {
  var rect = el.getBoundingClientRect();
  var docEl = document.documentElement;

  var rectTop = rect.top + window.pageYOffset - docEl.clientTop;
  var rectLeft = rect.left + window.pageXOffset - docEl.clientLeft;

  return {
    top: rectTop,
    left: rectLeft
  };
}

function getClientPos(e) {
  var pageX = void 0;
  var pageY = void 0;

  if (e.touches) {
    pageX = e.touches[0].pageX;
    pageY = e.touches[0].pageY;
  } else {
    pageX = e.pageX;
    pageY = e.pageY;
  }

  return {
    x: pageX,
    y: pageY
  };
}

function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

function isCropInvalid(crop) {
  return !crop.width || !crop.height;
}

function inverseOrd(ord) {
  var inversedOrd = void 0;

  if (ord === 'n') inversedOrd = 's';else if (ord === 'ne') inversedOrd = 'sw';else if (ord === 'e') inversedOrd = 'w';else if (ord === 'se') inversedOrd = 'nw';else if (ord === 's') inversedOrd = 'n';else if (ord === 'sw') inversedOrd = 'ne';else if (ord === 'w') inversedOrd = 'e';else if (ord === 'nw') inversedOrd = 'se';

  return inversedOrd;
}

function ensureAspectDimensions(cropObj, imageEl) {
  var imageWidth = imageEl.naturalWidth;
  var imageHeight = imageEl.naturalHeight;
  var imageAspect = imageWidth / imageHeight;
  var crop = _extends({}, cropObj);

  if (crop.width) {
    crop.height = crop.width / crop.aspect * imageAspect;
  } else if (crop.height) {
    crop.width = crop.height * crop.aspect / imageAspect;
  }

  if (crop.y + crop.height > 100) {
    crop.height = 100 - crop.y;
    crop.width = crop.height * crop.aspect / imageAspect;
  }
  if (crop.x + crop.width > 100) {
    crop.width = 100 - crop.x;
    crop.height = crop.width / crop.aspect * imageAspect;
  }

  return crop;
}

var ReactCrop = function (_Component) {
  _inherits(ReactCrop, _Component);

  function ReactCrop(props) {
    _classCallCheck(this, ReactCrop);

    var _this = _possibleConstructorReturn(this, (ReactCrop.__proto__ || Object.getPrototypeOf(ReactCrop)).call(this, props));

    _this.onDocMouseTouchMove = _this.onDocMouseTouchMove.bind(_this);
    _this.onDocMouseTouchEnd = _this.onDocMouseTouchEnd.bind(_this);
    _this.onImageLoad = _this.onImageLoad.bind(_this);
    _this.onComponentMouseTouchDown = _this.onComponentMouseTouchDown.bind(_this);
    _this.onComponentKeyDown = _this.onComponentKeyDown.bind(_this);
    _this.onCropMouseTouchDown = _this.onCropMouseTouchDown.bind(_this);

    _this.state = {
      crop: _this.nextCropState(props.crop)
    };
    return _this;
  }

  _createClass(ReactCrop, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('mousemove', this.onDocMouseTouchMove);
      document.addEventListener('touchmove', this.onDocMouseTouchMove);

      document.addEventListener('mouseup', this.onDocMouseTouchEnd);
      document.addEventListener('touchend', this.onDocMouseTouchEnd);
      document.addEventListener('touchcancel', this.onDocMouseTouchEnd);

      if (this.imageRef.complete || this.imageRef.readyState) {
        if (this.imageRef.naturalWidth === 0) {
          // Broken load on iOS, PR #51
          // https://css-tricks.com/snippets/jquery/fixing-load-in-ie-for-cached-images/
          // http://stackoverflow.com/questions/821516/browser-independent-way-to-detect-when-image-has-been-loaded
          var src = this.imageRef.src;
          this.imageRef.src = EMPTY_GIF;
          this.imageRef.src = src;
        } else {
          // Fixme: this is causing a double onImageLoaded event in normal cases.
          this.onImageLoad(this.imageRef);
        }
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.crop) {
        var nextCrop = this.nextCropState(nextProps.crop);
        var aspectRatioChanged = this.state.crop.aspect && nextCrop.aspect !== this.state.crop.aspect;

        if (nextCrop.aspect) {
          nextCrop = ensureAspectDimensions(nextCrop, this.imageRef);
        }

        this.cropInvalid = isCropInvalid(nextCrop);
        this.setState({ crop: nextCrop }, function () {
          if (aspectRatioChanged) {
            _this2.props.onAspectRatioChange(nextCrop, _this2.getPixelCrop(nextCrop));
          }
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mousemove', this.onDocMouseTouchMove);
      document.removeEventListener('touchmove', this.onDocMouseTouchMove);

      document.removeEventListener('mouseup', this.onDocMouseTouchEnd);
      document.removeEventListener('touchend', this.onDocMouseTouchEnd);
      document.removeEventListener('touchcancel', this.onDocMouseTouchEnd);
    }
  }, {
    key: 'onDocMouseTouchMove',
    value: function onDocMouseTouchMove(e) {
      if (this.props.disabled) {
        return;
      }

      if (!this.mouseDownOnCrop) {
        return;
      }

      e.preventDefault(); // Stop drag selection.

      var crop = this.state.crop;

      var evData = this.evData;
      var clientPos = getClientPos(e);

      if (evData.isResize && crop.aspect && evData.cropOffset) {
        clientPos.y = this.straightenYPath(clientPos.x);
      }

      var xDiffPx = clientPos.x - evData.clientStartX;
      evData.xDiffPc = xDiffPx / evData.imageWidth * 100;

      var yDiffPx = clientPos.y - evData.clientStartY;
      evData.yDiffPc = yDiffPx / evData.imageHeight * 100;

      if (evData.isResize) {
        this.resizeCrop();
      } else {
        this.dragCrop();
      }

      this.cropInvalid = false;
      this.props.onChange(crop, this.getPixelCrop(crop));
      this.setState({ crop: crop });
    }
  }, {
    key: 'onCropMouseTouchDown',
    value: function onCropMouseTouchDown(e) {
      if (this.props.disabled) {
        return;
      }

      e.preventDefault(); // Stop drag selection.

      var crop = this.state.crop;

      var clientPos = getClientPos(e);

      // Focus for detecting keypress.
      this.componentRef.focus();

      var ord = e.target.dataset.ord;
      var xInversed = ord === 'nw' || ord === 'w' || ord === 'sw';
      var yInversed = ord === 'nw' || ord === 'n' || ord === 'ne';

      var cropOffset = void 0;

      if (crop.aspect) {
        cropOffset = getElementOffset(this.cropSelectRef);
      }

      this.evData = {
        imageWidth: this.imageRef.width,
        imageHeight: this.imageRef.height,
        clientStartX: clientPos.x,
        clientStartY: clientPos.y,
        cropStartWidth: crop.width,
        cropStartHeight: crop.height,
        cropStartX: xInversed ? crop.x + crop.width : crop.x,
        cropStartY: yInversed ? crop.y + crop.height : crop.y,
        xInversed: xInversed,
        yInversed: yInversed,
        xCrossOver: xInversed,
        yCrossOver: yInversed,
        startXCrossOver: xInversed,
        startYCrossOver: yInversed,
        isResize: e.target !== this.cropSelectRef,
        ord: ord,
        cropOffset: cropOffset
      };

      this.mouseDownOnCrop = true;
    }
  }, {
    key: 'onComponentMouseTouchDown',
    value: function onComponentMouseTouchDown(e) {
      if (e.target !== this.imageCopyRef && e.target !== this.cropWrapperRef) {
        return;
      }

      if (this.props.disabled) {
        return;
      }

      e.preventDefault(); // Stop drag selection.

      var crop = this.props.keepSelection === true ? {} : this.state.crop;
      var clientPos = getClientPos(e);

      // Focus for detecting keypress.
      this.componentRef.focus();

      var imageOffset = getElementOffset(this.imageRef);
      var xPc = (clientPos.x - imageOffset.left) / this.imageRef.width * 100;
      var yPc = (clientPos.y - imageOffset.top) / this.imageRef.height * 100;

      crop.x = xPc;
      crop.y = yPc;
      crop.width = 0;
      crop.height = 0;

      this.evData = {
        imageWidth: this.imageRef.width,
        imageHeight: this.imageRef.height,
        clientStartX: clientPos.x,
        clientStartY: clientPos.y,
        cropStartWidth: crop.width,
        cropStartHeight: crop.height,
        cropStartX: crop.x,
        cropStartY: crop.y,
        xInversed: false,
        yInversed: false,
        xCrossOver: false,
        yCrossOver: false,
        startXCrossOver: false,
        startYCrossOver: false,
        isResize: true,
        ord: 'nw'
      };

      this.mouseDownOnCrop = true;
      this.setState({ newCropIsBeingDrawn: true });
    }
  }, {
    key: 'onComponentKeyDown',
    value: function onComponentKeyDown(e) {
      var _this3 = this;

      if (this.props.disabled) {
        return;
      }

      var keyCode = e.which;
      var crop = this.state.crop;

      var nudged = false;

      if (!crop.width || !crop.height) {
        return;
      }

      if (keyCode === ReactCrop.arrowKey.left) {
        crop.x -= ReactCrop.nudgeStep;
        nudged = true;
      } else if (keyCode === ReactCrop.arrowKey.right) {
        crop.x += ReactCrop.nudgeStep;
        nudged = true;
      } else if (keyCode === ReactCrop.arrowKey.up) {
        crop.y -= ReactCrop.nudgeStep;
        nudged = true;
      } else if (keyCode === ReactCrop.arrowKey.down) {
        crop.y += ReactCrop.nudgeStep;
        nudged = true;
      }

      if (nudged) {
        e.preventDefault(); // Stop drag selection.
        crop.x = clamp(crop.x, 0, 100 - crop.width);
        crop.y = clamp(crop.y, 0, 100 - crop.height);

        this.setState({ crop: crop }, function () {
          _this3.props.onChange(crop, _this3.getPixelCrop(crop));
          _this3.props.onComplete(crop, _this3.getPixelCrop(crop));
        });
      }
    }
  }, {
    key: 'onDocMouseTouchEnd',
    value: function onDocMouseTouchEnd() {
      if (this.props.disabled) {
        return;
      }

      if (this.mouseDownOnCrop) {
        var crop = this.state.crop;

        this.cropInvalid = isCropInvalid(crop);
        this.mouseDownOnCrop = false;

        this.props.onComplete(crop, this.getPixelCrop(crop));
        this.setState({ newCropIsBeingDrawn: false });
      }
    }
  }, {
    key: 'onImageLoad',
    value: function onImageLoad(imageEl) {
      var crop = this.state.crop;

      // If there is a width or height then infer the other to
      // ensure the value is correct.
      if (crop.aspect) {
        crop = ensureAspectDimensions(crop, imageEl);
        this.cropInvalid = isCropInvalid(crop);
        this.setState({ crop: crop });
      }
      if (this.props.onImageLoaded) {
        this.props.onImageLoaded(crop, imageEl, this.getPixelCrop(crop));
      }
    }
  }, {
    key: 'getPixelCrop',
    value: function getPixelCrop(crop) {
      return {
        x: Math.round(this.imageRef.naturalWidth * (crop.x / 100)),
        y: Math.round(this.imageRef.naturalHeight * (crop.y / 100)),
        width: Math.round(this.imageRef.naturalWidth * (crop.width / 100)),
        height: Math.round(this.imageRef.naturalHeight * (crop.height / 100))
      };
    }
  }, {
    key: 'getCropStyle',
    value: function getCropStyle() {
      return {
        top: this.state.crop.y + '%',
        left: this.state.crop.x + '%',
        width: this.state.crop.width + '%',
        height: this.state.crop.height + '%'
      };
    }
  }, {
    key: 'getNewSize',
    value: function getNewSize() {
      var crop = this.state.crop;

      var evData = this.evData;
      var imageAspect = evData.imageWidth / evData.imageHeight;

      // New width.
      var newWidth = evData.cropStartWidth + evData.xDiffPc;

      if (evData.xCrossOver) {
        newWidth = Math.abs(newWidth);
      }

      var maxWidth = this.props.maxWidth;

      // Stop the box expanding on the opposite side when some edges are hit.
      if (!this.state.newCropIsBeingDrawn) {
        maxWidth = ['nw', 'w', 'sw'].indexOf(evData.inversedXOrd || evData.ord) > -1 ? evData.cropStartX : 100 - evData.cropStartX;
        maxWidth = clamp(maxWidth, 100, this.props.maxWidth);
      }

      newWidth = clamp(newWidth, this.props.minWidth, maxWidth);

      // New height.
      var newHeight = void 0;

      if (crop.aspect) {
        newHeight = newWidth / crop.aspect * imageAspect;
      } else {
        newHeight = evData.cropStartHeight + evData.yDiffPc;
      }

      if (evData.yCrossOver) {
        // Cap if polarity is inversed and the ape fills the y space.
        newHeight = Math.min(Math.abs(newHeight), evData.cropStartY);
      }

      var maxHeight = this.props.maxHeight;

      // Stop the box expanding on the opposite side when some edges are hit.
      if (!this.state.newCropIsBeingDrawn) {
        maxHeight = ['nw', 'n', 'ne'].indexOf(evData.inversedYOrd || evData.ord) > -1 ? evData.cropStartY : 100 - evData.cropStartY;
        maxHeight = clamp(maxHeight, 100, this.props.maxHeight);
      }

      newHeight = clamp(newHeight, this.props.minHeight, maxHeight);

      if (crop.aspect) {
        newWidth = clamp(newHeight * crop.aspect / imageAspect, 0, 100);
      }

      return {
        width: newWidth,
        height: newHeight
      };
    }
  }, {
    key: 'dragCrop',
    value: function dragCrop() {
      var crop = this.state.crop;

      var evData = this.evData;
      crop.x = clamp(evData.cropStartX + evData.xDiffPc, 0, 100 - crop.width);
      crop.y = clamp(evData.cropStartY + evData.yDiffPc, 0, 100 - crop.height);
    }
  }, {
    key: 'resizeCrop',
    value: function resizeCrop() {
      var crop = this.state.crop;

      var evData = this.evData;
      var ord = evData.ord;

      // On the inverse change the diff so it's the same and
      // the same algo applies.
      if (evData.xInversed) {
        evData.xDiffPc -= evData.cropStartWidth * 2;
      }
      if (evData.yInversed) {
        evData.yDiffPc -= evData.cropStartHeight * 2;
      }

      // New size.
      var newSize = this.getNewSize();

      // Adjust x/y to give illusion of 'staticness' as width/height is increased
      // when polarity is inversed.
      var newX = evData.cropStartX;
      var newY = evData.cropStartY;

      if (evData.xCrossOver) {
        newX = crop.x + (crop.width - newSize.width);
      }

      if (evData.yCrossOver) {
        // This not only removes the little "shake" when inverting at a diagonal, but for some
        // reason y was way off at fast speeds moving sw->ne with fixed aspect only, I couldn't
        // figure out why.
        if (evData.lastYCrossover === false) {
          newY = crop.y - newSize.height;
        } else {
          newY = crop.y + (crop.height - newSize.height);
        }
      }

      // Apply x/y/width/height changes depending on ordinate (fixed aspect always applies both).
      if (crop.aspect || ReactCrop.xyOrds.indexOf(ord) > -1) {
        crop.x = clamp(newX, 0, 100 - newSize.width);
        crop.y = clamp(newY, 0, 100 - newSize.height);

        crop.width = newSize.width;
        crop.height = newSize.height;
      } else if (ReactCrop.xOrds.indexOf(ord) > -1) {
        crop.x = clamp(newX, 0, 100 - newSize.width);
        crop.width = newSize.width;
      } else if (ReactCrop.yOrds.indexOf(ord) > -1) {
        crop.y = clamp(newY, 0, 100 - newSize.height);
        crop.height = newSize.height;
      }

      evData.lastYCrossover = evData.yCrossOver;
      this.crossOverCheck();
    }
  }, {
    key: 'straightenYPath',
    value: function straightenYPath(clientX) {
      var evData = this.evData;
      var ord = evData.ord;
      var cropOffset = evData.cropOffset;
      var cropStartWidth = evData.cropStartWidth / 100 * evData.imageWidth;
      var cropStartHeight = evData.cropStartHeight / 100 * evData.imageHeight;
      var k = void 0;
      var d = void 0;

      if (ord === 'nw' || ord === 'se') {
        k = cropStartHeight / cropStartWidth;
        d = cropOffset.top - cropOffset.left * k;
      } else {
        k = -cropStartHeight / cropStartWidth;
        d = cropOffset.top + (cropStartHeight - cropOffset.left * k);
      }

      return k * clientX + d;
    }
  }, {
    key: 'createCropSelection',
    value: function createCropSelection() {
      var _this4 = this;

      var style = this.getCropStyle();

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(n) {
            return _this4.cropSelectRef = n;
          },
          style: style,
          className: 'ReactCrop__crop-selection',
          onMouseDown: this.onCropMouseTouchDown,
          onTouchStart: this.onCropMouseTouchDown
        },
        _react2.default.createElement('div', { className: 'ReactCrop__drag-bar ord-n', 'data-ord': 'n' }),
        _react2.default.createElement('div', { className: 'ReactCrop__drag-bar ord-e', 'data-ord': 'e' }),
        _react2.default.createElement('div', { className: 'ReactCrop__drag-bar ord-s', 'data-ord': 's' }),
        _react2.default.createElement('div', { className: 'ReactCrop__drag-bar ord-w', 'data-ord': 'w' }),
        _react2.default.createElement('div', { className: 'ReactCrop__drag-handle ord-nw', 'data-ord': 'nw' }),
        _react2.default.createElement('div', { className: 'ReactCrop__drag-handle ord-n', 'data-ord': 'n' }),
        _react2.default.createElement('div', { className: 'ReactCrop__drag-handle ord-ne', 'data-ord': 'ne' }),
        _react2.default.createElement('div', { className: 'ReactCrop__drag-handle ord-e', 'data-ord': 'e' }),
        _react2.default.createElement('div', { className: 'ReactCrop__drag-handle ord-se', 'data-ord': 'se' }),
        _react2.default.createElement('div', { className: 'ReactCrop__drag-handle ord-s', 'data-ord': 's' }),
        _react2.default.createElement('div', { className: 'ReactCrop__drag-handle ord-sw', 'data-ord': 'sw' }),
        _react2.default.createElement('div', { className: 'ReactCrop__drag-handle ord-w', 'data-ord': 'w' })
      );
    }
  }, {
    key: 'nextCropState',
    value: function nextCropState(crop) {
      var nextCrop = _extends({}, ReactCrop.defaultCrop, crop);
      this.cropInvalid = isCropInvalid(nextCrop);
      return nextCrop;
    }
  }, {
    key: 'crossOverCheck',
    value: function crossOverCheck() {
      var evData = this.evData;

      if (!evData.xCrossOver && -Math.abs(evData.cropStartWidth) - evData.xDiffPc >= 0 || evData.xCrossOver && -Math.abs(evData.cropStartWidth) - evData.xDiffPc <= 0) {
        evData.xCrossOver = !evData.xCrossOver;
      }

      if (!evData.yCrossOver && -Math.abs(evData.cropStartHeight) - evData.yDiffPc >= 0 || evData.yCrossOver && -Math.abs(evData.cropStartHeight) - evData.yDiffPc <= 0) {
        evData.yCrossOver = !evData.yCrossOver;
      }

      var swapXOrd = evData.xCrossOver !== evData.startXCrossOver;
      var swapYOrd = evData.yCrossOver !== evData.startYCrossOver;

      evData.inversedXOrd = swapXOrd ? inverseOrd(evData.ord) : false;
      evData.inversedYOrd = swapYOrd ? inverseOrd(evData.ord) : false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var cropSelection = void 0;

      if (!this.cropInvalid) {
        cropSelection = this.createCropSelection();
      }

      var componentClasses = ['ReactCrop'];

      if (this.state.newCropIsBeingDrawn) {
        componentClasses.push('ReactCrop--new-crop');
      }
      if (this.state.crop.aspect) {
        componentClasses.push('ReactCrop--fixed-aspect');
      }
      if (this.props.disabled) {
        componentClasses.push('ReactCrop--disabled');
      }

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(n) {
            return _this5.componentRef = n;
          },
          className: componentClasses.join(' '),
          onTouchStart: this.onComponentMouseTouchDown,
          onMouseDown: this.onComponentMouseTouchDown,
          tabIndex: '1',
          onKeyDown: this.onComponentKeyDown
        },
        _react2.default.createElement('img', {
          ref: function ref(n) {
            return _this5.imageRef = n;
          },
          crossOrigin: this.props.crossorigin,
          className: 'ReactCrop__image',
          src: this.props.src,
          onLoad: function onLoad(e) {
            return _this5.onImageLoad(e.target);
          },
          alt: this.props.imageAlt
        }),
        _react2.default.createElement(
          'div',
          {
            className: 'ReactCrop__crop-wrapper',
            ref: function ref(n) {
              return _this5.cropWrapperRef = n;
            }
          },
          _react2.default.createElement('img', {
            ref: function ref(n) {
              return _this5.imageCopyRef = n;
            },
            crossOrigin: this.props.crossorigin,
            className: 'ReactCrop__image-copy',
            src: this.props.src,
            alt: this.props.imageAlt
          }),
          cropSelection
        ),
        this.props.children
      );
    }
  }]);

  return ReactCrop;
}(_react.Component);

ReactCrop.propTypes = {
  src: _react.PropTypes.string.isRequired,
  crop: _react.PropTypes.shape({
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    width: _react.PropTypes.number,
    height: _react.PropTypes.number
  }),
  imageAlt: _react.PropTypes.string,
  minWidth: _react.PropTypes.number,
  minHeight: _react.PropTypes.number,
  maxWidth: _react.PropTypes.number,
  maxHeight: _react.PropTypes.number,
  keepSelection: _react.PropTypes.bool,
  onChange: _react.PropTypes.func,
  onComplete: _react.PropTypes.func,
  onImageLoaded: _react.PropTypes.func,
  onAspectRatioChange: _react.PropTypes.func,
  disabled: _react.PropTypes.bool,
  crossorigin: _react.PropTypes.string,
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
};
ReactCrop.defaultProps = {
  crop: undefined,
  crossorigin: undefined,
  disabled: false,
  imageAlt: '',
  maxWidth: 100,
  maxHeight: 100,
  minWidth: 0,
  minHeight: 0,
  keepSelection: false,
  onChange: function onChange() {},
  onComplete: function onComplete() {},
  onImageLoaded: function onImageLoaded() {},
  onAspectRatioChange: function onAspectRatioChange() {},
  children: undefined
};
ReactCrop.xOrds = ['e', 'w'];
ReactCrop.yOrds = ['n', 's'];
ReactCrop.xyOrds = ['nw', 'ne', 'se', 'sw'];
ReactCrop.arrowKey = {
  left: 37,
  up: 38,
  right: 39,
  down: 40
};
ReactCrop.nudgeStep = 0.2;
ReactCrop.defaultCrop = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  aspect: false
};


module.exports = ReactCrop;

/***/ })
/******/ ]);