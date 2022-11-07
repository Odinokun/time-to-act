'use strict';

module.exports = function() {

  $.gulp.task('js:foundation', function() {
    return $.gulp.src($.path.jsFoundation)
      //конкатенация js
      .pipe($.gp.concat('foundation.js'))
      //минификация js
      .pipe($.uglifyEs())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })

};
