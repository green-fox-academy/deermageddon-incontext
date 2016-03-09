'use strict';

export function initialize() {
  var baseElement = document.querySelector("body");
  var div = document.createElement("div");
  var btn_on = document.createElement("BUTTON");
  var btn_off = document.createElement("BUTTON");
  var t = document.createTextNode("On");
  var u = document.createTextNode("Off");
  div.appendChild(btn_on);
  div.appendChild(btn_off);
  btn_on.appendChild(t);
  btn_off.appendChild(u);
  document.body.appendChild(div);

  btn_on.addEventListener('click', function() {
    baseElement.classList.add("something");
  })

  btn_off.addEventListener('click', function() {
    baseElement.classList.remove("something");
  })

}
