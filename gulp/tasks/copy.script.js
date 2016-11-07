/**
 * Created by Lena on 07.11.2016.
 */
'use strict';

module.exports = function() {
    $.gulp.task('copy:script', function() {
        return $.gulp.src('./source/php/*.php')
            .pipe($.gulp.dest($.config.root + '/assets/php'));
    });
};
