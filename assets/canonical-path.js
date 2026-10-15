(function () {
  if (location.protocol !== "http:" && location.protocol !== "https:") return;
  var path = location.pathname;
  if (!/\/index\.html$/i.test(path)) return;
  location.replace(path.replace(/\/index\.html$/i, "/") + location.search + location.hash);
})();
