(function() {
  let url = location.href;
  if (url.match("http://([^\.]*\.)?dbpedia\.org/page/.+")) {
    url = url.replace("http", "https");
    url = url.replace("dbpedia", "wikipedia");
    url = url.replace("/page/", "/wiki/");
    console.log(">> open: " + url);
    window.open(url).document;
  } else {
    console.log(">> unmatched: " + url);
  }
})();
