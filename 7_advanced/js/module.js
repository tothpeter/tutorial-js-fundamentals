+function(){
  'use strict';

  var utils = (function utils(){
    function trimExtension(filename) {
      return filename.toLowerCase().replace(/\.{1}[a-z]+$/, '');
    }

    function trimExtensions(filenames) {
      var trimmed = [];

      for (var i = 0, len = filenames.length; i < len; i++) {
        trimmed.push(trimExtension(filenames[i]));
      }

      return trimmed;
    }

    function trimFileExtension(filename) {
      if (typeof filename === 'string') {
        return trimExtension(filename);
      }

      return trimExtensions(filename);
    }

    return {
      trimExtension: trimFileExtension,
    }
  }());

  var aFileName = 'somefile.a.js';
  var fileNames = ['somefile.a.js', 'somefile2.a.js'];

  console.log(utils.trimExtension(aFileName));
  console.log(utils.trimExtension(fileNames));
}();