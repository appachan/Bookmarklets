(function() {
  let url = location.href;
  if (url.match("https://([^\.]*\.)wikipedia\.org/wiki/.+")) {
    url = url.replace("https", "http");
    url = url.replace("wikipedia", "dbpedia");
    url = url.replace("/wiki/", "/resource/");
    url = url.replace("/en\.", "");
    console.log(">> open: " + url);
    window.open(url).document;
  } else {
    console.log(">> unmatched: " + url);
  }
})();
