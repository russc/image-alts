"use strict";

var alts = {},
    images = document.querySelectorAll("img"),
    url = window.location.href;
    console.log('images', images);

$.get("alt-text.json", function (res) {
  res.map(function (item) {
    if (!alts[item.PageURL]) {
      alts[item.PageURL] = {};
    }
    alts[item.PageURL][item.ImageURL] = { alt: item.AltText };
  });
}).then(function () {
  console.log(alts);
  images.forEach(function (curr) {
    if (curr.alt === "" && alts[url] !== undefined && alts[url][curr.src] !== undefined) {
      console.log(alts[url], alts[url][curr.src].alt);
      curr.setAttribute("alt", alts[url][curr.src].alt);
    }
  });
});