// var thumbUp = document.getElementsByClassName("fa-thumbs-up");
// var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash-o");
var submit = document.getElementById('submit')
var edit = document.getElementById('fa-pencil')
const pOne = document.getElementById('pOne')
const pTwo = documennt.getElementById('pTwo')

Array.from(edit).forEach(function(element) {
  element.addEventListener('click', function(){
    
    fetch('matchHistory',{
      method: 'put',
      headers: {'Content-Type' : 'applicaiton/json'},
      body: JSON.stringify({
        'pOne': pOne,
        'pTwo': pTwo
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(thumbUp).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    fetch('messages', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'msg': msg,
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(thumbDown).forEach(function(element) {
element.addEventListener('click', function(){
const name = this.parentNode.parentNode.childNodes[1].innerText
const msg = this.parentNode.parentNode.childNodes[3].innerText
const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
fetch('messages', {
  method: 'put',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    'name': name,
    'msg': msg
  })
})
.then(response => {
  if (response.ok) return response.json()
})
.then(data => {
  console.log(data)
  window.location.reload(true)
})
});
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const pOne = this.parentNode.parentNode.childNodes[1].innerText
        const pTwo = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'pOne': pOne,
            'pOne': pTwo
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});


