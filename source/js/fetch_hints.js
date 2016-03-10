export function placeHints() {
  var target_url = document.location.pathname
  var source = "http://localhost:3000/hints"
  fetch(`${source}?target_url=${target_url}`, {
	method: 'get'
  // mode: 'no-cors'
  }).then(function(response) {
    return response.json();
  }).catch(function(err) {
    console.log(err);
  }).then(function (j) {
    // var target_selector = j
    // console.log(target_selector);
    var hint_container = document.createElement("div");

    hint_container.addEventListener('click', function () {
      if (event.target.className === 'throb-heart') {
      // var delID = event.target.getAttribute('id');

      event.target.classList.add('visible')
      // console.log('it works');
    }else if (event.target.className === 'text-box-close') {
      event.target.parentNode.previousElementSibling.classList.remove('visible')
      // event.target.classList.remove('visible')
    }
    })

    for (let i = 0; i < j.length; i++) {
      var pulsate_parent = document.createElement("div")
      pulsate_parent.setAttribute("id", `pulsate-parent${i}`);
      pulsate_parent.setAttribute("class", "pulsate-parent");

      var [left, top] = calcParentPos(j[i].target_selector)
      console.log(left)
      pulsate_parent.setAttribute("style", `left:${left}px; top:${top}px;`);
      pulsate_parent.innerHTML = `<div class="throbber"></div>
                                  <div class="throb-heart"></div>
                                  <div class="text-box">
                                    <div class="text-box-close">X</div>
                                    ${j[i].hint}
                                  </div>`

      var text_box = document.createElement("div")
      text_box.setAttribute("class", "pulsate-parent");
      text_box.textContent = j[i].hint

      hint_container.appendChild(pulsate_parent)
    }

    document.body.appendChild(hint_container)

  });

  function calcParentPos(selector) {
    var hint_pos = document.querySelector(selector).getBoundingClientRect()
    var left = hint_pos.left + window.scrollX + hint_pos.width
    var top = hint_pos.top + window.scrollY//+ 10
    return [left, top]
  }

}
