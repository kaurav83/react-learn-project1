export default store => next => action => {
    console.log('logger.js', 'state before', store.getState());
    console.log('logger.js', 'dispatching', action);
    next(action);
    console.log('logger.js', 'state after', store.getState());
}