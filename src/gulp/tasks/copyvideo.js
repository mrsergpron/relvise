export const copyvideo = () => {
  return app.gulp
    .src(app.path.src.video)
    .pipe(app.gulp.dest(app.path.build.video));
};
