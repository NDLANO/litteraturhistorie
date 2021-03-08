/**
 * Returns all routes that contains a string. Can be used to search for
 * for example books.
 * 
 * @param {vue router object} router
 * @param {string} stringToFind
 */
function getRoutesWithString(router, stringToFind) {
  const routes = router.options.routes.filter(route => {
    return route.path.includes(stringToFind)
  });
  return routes;
}

export default {
  getRoutesWithString,
}