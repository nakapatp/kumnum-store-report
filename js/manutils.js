// ***************************************************
// Shopping Cart functions

var manUtils = (function() {
  // Public methods and properties
  var obj = {};

  obj.formatNumber = function(number, fixed) {
    var str = Number(number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    return (fixed == 0) ? str.slice(0,-3) : str;
  }
  obj.generateRandomLetter = function () {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    return alphabet[Math.floor(Math.random() * alphabet.length)]
  };
  obj.getParam = function (param) {
    return new URLSearchParams(window.location.search).get(param);
  };
  obj.getGlobalVars = function (key) {
    for (var i = 0; i < globalVars.length; i++) {
      if (globalVars[i].Key == key)
        return globalVars[i].Value;
    }
    return null;
  };
  obj.hasClass = function (elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
  };
  obj.removeAllChildNodes = function (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  };

  return obj;
})();
