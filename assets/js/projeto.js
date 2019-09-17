document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let value2 = params['key2']

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
    coDesReplace('.nav',data)
    coDesReplace('.nav1',data)
    
    context = data['portfolio'][value2]['projetos'][value]
    
    coDesReplace('.titles', context)
    coDesReplace('.img_position',value)
    coDesReplace('.section_menu', context)



  })
})
