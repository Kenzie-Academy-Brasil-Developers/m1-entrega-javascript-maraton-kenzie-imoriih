const competidores = ["Rafael", " Manoel"," Daniel"]

function position(competidores){
    let daniel = competidores.indexOf(" Daniel")

    if(daniel != 0){
     let frenteDoDaniel = competidores.indexOf(' Daniel') - 1
     let posicaoDaniel = competidores.indexOf(' Daniel')
     competidores[posicaoDaniel] = competidores[frenteDoDaniel]
     competidores[frenteDoDaniel] = " Daniel"
     daniel = competidores.indexOf(" Daniel")
    }
    
    if(daniel != 0){
     let frenteDoDaniel = competidores.indexOf(' Daniel') - 1
     let posicaoDaniel = competidores.indexOf(' Daniel')
     competidores[posicaoDaniel] = competidores[frenteDoDaniel]
     competidores[frenteDoDaniel] = " Daniel"
     return `${competidores.concat(" este é o podio")}`
    }else{
      return `${competidores[0]} é o vencedor.}`     
    }
  }
  

console.log(position(competidores))