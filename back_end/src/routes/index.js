import userRoute from './user';
const apiRouter = function(app) {
  app.use('/api/user', userRoute);
}

export default apiRouter;