
document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://dicnotas.firebaseio.com/')

  db.download('/', function(data) {
    console.log(data)
    coDesReplace('.section_menu', data)

  })

  
})
