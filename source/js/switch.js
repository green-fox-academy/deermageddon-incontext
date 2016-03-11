'use strict';

export function initialize() {
  var baseElement = document.querySelector("body");
  var div = document.createElement("div");
  div.classList.add("switch")
  var in_div = document.createElement("div");
  in_div.classList.add("onoffswitch")
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("onoffswitch-checkbox");
  checkbox.id = "example1";
  var label = document.createElement("label");
  label.classList.add("onoffswitch-label");
  label.htmlFor = "example1";
  var span_inner = document.createElement("span");
  span_inner.classList.add("onoffswitch-inner");
  var span_switch = document.createElement("span");
  span_switch.classList.add("onoffswitch-switch");
  div.appendChild(in_div);
  in_div.appendChild(checkbox);
  in_div.appendChild(label);
  label.appendChild(span_inner);
  label.appendChild(span_switch);
  document.body.appendChild(div);

  checkbox.addEventListener('change', function() {
    baseElement.classList.toggle("enable-help");
  })
}
