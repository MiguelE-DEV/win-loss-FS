// var thumbUp = document.getElementsByClassName("fa-thumbs-up");
// var thumbDown = document.getElementsByClassName("fa-thumbs-down");
// var trash = document.getElementsByClassName("fa-trash-o");
// var edit = document.getElementsByClassName('fa-pencil')
// var pOne = document.getElementById('pOne')
// var pTwo = document.getElementById('pTwo')

document.querySelectorAll('.fa-trash-o').forEach(element => {
  element.addEventListener('click', (e)=>{
    console.log(e.target.parentElement.parentElement.children[0].innerText, e.target.parentElement.parentElement.children[4].innerText)
    let _id = e.target.parentElement.parentElement.children[6].innerText
    let pOne = e.target.parentElement.parentElement.children[0].innerText
    fetch('newDelete', {
      method: 'delete',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({
        'pOne': pOne,
        '_id': _id
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      window.location.reload(true)
    })
  })
})

document.querySelectorAll('.fa-pencil').forEach(element => {
  element.addEventListener('click', (e)=>{
    console.log(e.target.parentElement.parentElement)
    // let pOne = e.target.parentElement.parentElement.children[0].innerText
    // let pTwo = e.target.parentElement.parentElement.children[2].innerText
    let id = e.target.parentElement.parentElement.children[6].innerText
    let win = prompt('Change amount of wins',e.target.parentElement.parentElement.children[3].innerText)
    let loss = prompt('Change amount of losses',e.target.parentElement.parentElement.children[5].innerText)
    fetch('changeHistory', {
      method: 'put',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({
        'win':win,
        'loss':loss,
        '_id':id
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      window.location.reload(true)
    })
  })
})

// Array.from(trash).forEach(function(element) {
//   element.addEventListener('click', function(){
//     const pOne = this.parentNode.parentNode.childNodes[1].innerText
//     const pTwo = this.parentNode.parentNode.childNodes[3].innerText
//     fetch('messages', {
//       method: 'delete',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         'pOne': pOne,
//         'pOne': pTwo
//       })
//     }).then(function (response) {
//       window.location.reload()
//     })
//   });
// });

// Array.from(edit).forEach(function(element) {
//   element.addEventListener('click', function(){
//     console.log(e.target.parentElement.parentElement.children)
//     var edit = document.getElementsByClassName('fa-pencil')
//     var pOne = prompt('1.) Enter new Item name', e.target.parentElement.parentElement.children[0].innerText)
//     var pTwo  = prompt('1.) Enter new Item name', e.target.parentElement.parentElement.children[0].innerText)
//     fetch('matchHistory',{
//       method: 'put',
//       headers: {'Content-Type' : 'applicaiton/json'},
//       body: JSON.stringify({
//         'pOne': pOne,
//         'pTwo': pTwo
//       })

//     })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true)
//     })
//   });
// });



