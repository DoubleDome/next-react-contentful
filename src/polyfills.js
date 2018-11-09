// TODO are those added? they are needed for react-slick
// import 'core-js/es6/map';
// import 'core-js/es6/set';
// import 'raf/polyfill';

window.matchMedia =
  window.matchMedia ||
  function matchMedia() {
    return {
      matches: false,
      addListener: function addListener() {},
      removeListener: function removeListener() {},
    };
  };

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function requestAnimationFrame(callback) {
    return setTimeout(callback, 0);
  };

window.cancelAnimationFrame =
  window.cancelAnimationFrame ||
  window.mozCancelAnimationFrame ||
  function cancelAnimationFrame(timeoutId) {
    clearTimeout(timeoutId);
  };
