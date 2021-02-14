// ***************************************************
// Utilities functions
// v.1.1 (2021-02-10 13:08)

var manUtils = (function() {
  // Public methods and properties
  var obj = {};

  obj.arrayHasKeyValue = function(arr, key, value) {
    if (arr.length > 0) {
      for (var i in arr) {
        if (arr[i][key] == value)
          return true;
      }
    }
    return false;
  };
  obj.encryptKey = function(raw) {
    var key = '';

    return key;
  };
  obj.decryptKey = function(key) {
    var raw = key;

    return raw;
  };
  obj.formatDateThai = function(date) {
    var str = "";
    var month = {
      '01': 'มกราคม',
      '02': 'กุมภาพันธ์',
      '03': 'มีนาคม',
      '04': 'เมษายน',
      '05': 'พฤษภาคม',
      '06': 'มิถุนายน',
      '07': 'กรกฎาคม',
      '08': 'สิงหาคม',
      '09': 'กันยายน',
      '10': 'ตุลาคม',
      '11': 'พฤศจิกายน',
      '12': 'ธันวาคม',
    };
    return date.slice(8, 10) + " " + month[date.slice(5,7)] + " " + (Number(date.slice(0, 4)) + 543);
  };
  obj.formatName = function(title, firstname, lastname) {
    return (firstname.includes("พระ"))
            ? firstname + " " + lastname + ", " + title
            : title + firstname + " " + lastname;
  };
  obj.formatNumber = function(number, fixed) {
    var str = Number(number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    return (fixed == 0) ? str.slice(0,-3) : str;
  };
  obj.formatPhoneNumber = function(number) {
    var str = number.replaceAll('-', '');
    return str.slice(0,3) + '-' + str.slice(3,6) + '-' + str.slice(6,10);
  };
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

  obj.getHTML404 = function(title, subtitle, desc) {
    var html = "";
    html += '<div class="row">';
      html += '<div class="col-md-12">';
        html += '<div class="error-template" style="margin-top:20px;">';
          if (title) html += '<h1>' + title + '</h1>';
          if (subtitle) html += '<h2>' + subtitle + '</h2>';
          if (desc) html += '<div class="error-details">' + desc + '</div>';
          html += '<div class="error-actions" style="margin-top:20px;">';
              html += '<a href="https://store.kumnum.com" class="btn btn-primary btn-lg">';
              html += '<i class="fa fa-home"></i> เว็บไซต์</a><a href="https://store.kumnum.com/shop.html" class="btn btn-default btn-lg"><i class="fa fa-book"></i> หน้าร้าน</a>';
          html += '</div>';
        html += '</div>';
      html += '</div>';
    html += '</div>';

    return html;
  };
  obj.hasClass = function (elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
  };
  obj.removeAllChildNodes = function (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  };
  obj.selectElement = function (id, valueToSelect) {
      let element = document.getElementById(id);
      element.value = valueToSelect;
  };

  return obj;
})();
