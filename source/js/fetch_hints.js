export function placeHints() {
  var source = "https://deermageddon.herokuapp.com/hints"
  var target_url = document.location.pathname

  fetch(`${source}?target_url=${target_url}`, {
	method: 'get'
  // mode: 'no-cors'
  }).then(function(response) {
    return response.json();
  }).then(function (j) {
    let helpPoints = new HelpPoints(j)
    helpPoints.create()
    helpPoints.render()
  }).catch(function(err) {
    console.log(err);
  })
}

class HelpPoints {

  constructor(hint_obj){
    this.hint_obj = hint_obj
    this.hint_container = document.createElement("div");
  }

  create(){
    this.hint_container.setAttribute('id', 'hint-container')
    document.body.appendChild(this.hint_container)
    this._listen()
  }

  render(){
    this.hint_container.innerHTML = ""
    this._createHelpPoints()
  }

  _listen(){
    this.hint_container.addEventListener('click', function () {
      if (event.target.className === 'throb-heart') {
        event.target.classList.add('visible')
      }else if (event.target.className === 'text-box-close') {
        event.target.parentNode.previousElementSibling.classList.remove('visible')
      }
    })
  }

  _createHelpPoints(){
    for (let i = 0; i < this.hint_obj.length; i++) {
      let pulsate_parent = document.createElement("div")
      pulsate_parent.setAttribute("id", `pulsate-parent${i}`);
      pulsate_parent.setAttribute("class", "pulsate-parent");

      let [left, top] = this._calcParentPos(this.hint_obj[i].target_selector)
      pulsate_parent.setAttribute("style", `left:${left}px; top:${top}px;`);
      pulsate_parent.innerHTML = `<div class="throbber"></div>
                                  <div class="throb-heart"></div>
                                  <div class="text-box">
                                    <div class="text-box-close">X</div>
                                    <p>${this.hint_obj[i].hint}</p>
                                    <p><a href="http://deermageddon.herokuapp.com/articles/${this.hint_obj[i].id}" target="_blank">Read more...</a></p>
                                  </div>`

      let text_box = document.createElement("div")
      text_box.setAttribute("class", "pulsate-parent");
      this.hint_container.appendChild(pulsate_parent)
    }
  }

  _calcParentPos(selector){
    let hint_pos = document.querySelector(selector).getBoundingClientRect()
    let left = hint_pos.left + window.scrollX + hint_pos.width
    let top = hint_pos.top + window.scrollY//+ 10
    return [left, top]
  }
}
