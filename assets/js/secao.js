document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let strlink = "projeto.html?key2="+value+"&key={{@key}}"
  let link = document.querySelector(".link_title")
  link.href = strlink

  let db = coDesConnect('https://dicnotas.firebaseio.com/')

  db.download('/', function(data) {

    /*
      NUNCA, JAMAIS, EM HIPÓTESE ALGUMA faça
      replace em múltiplas tags se alguma
      estiver dentro de outra! Veja o HTML
      e note que não é o caso das abaixo.

      É sério. Se fizer isso, você realmente
      vai se arrepender. Você foi avisado.
    */
    context = data['portfolio'][value]
    coDesReplace('.nav',data)
    coDesReplace('.nav1',data)
    coDesReplace('.img_place',context)
    coDesReplace('.titles',context)
    coDesReplace('.legenda_trab',context)

    
    coDesReplace('.section_menu', context)


  })
})
