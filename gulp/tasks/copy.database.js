'use strict';

module.exports = function() {
  $.gulp.task('copy:db', function() {
    return $.gulp.src('./database/**/*.*')
      .pipe($.gulp.dest($.config.root + '/database'));
  });
};
