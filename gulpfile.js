var gulp = require('gulp'),
  atomshell = require('gulp-atom-shell'),
  os = require('os');


gulp.task('make', function () {
  var prop = {
    version: '0.26.0',
    platform: os.platform()
  }
  if (os.platform() === 'darwin') {
    prop.darwinIcon = 'icon.icns';    
  }
  else {
    // properties related to windows executables    
  }  
  return gulp.src('**/*')
      .pipe(atomshell(prop))
      .pipe(atomshell.zfsdest('../Calc_App1.zip'))
      .on('end', function() { console.log('Your app package is ready.') })
});