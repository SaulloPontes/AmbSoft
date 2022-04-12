

function contagem(){

    var quantidadeDeNotas = Number(prompt('quantidade de notas:'))
    var nota
    var contadorDeNotasMaiorQue50 = 0
    var valorInicialDaQuantidadeDeNotas = 0

    while(valorInicialDaQuantidadeDeNotas<quantidadeDeNotas){
    nota = Number(prompt('nota:'))
    if(nota>=50){
        contadorDeNotasMaiorQue50++
    }
    valorInicialDaQuantidadeDeNotas++
    }

    alert('número de alunos que passaram no exame:'+contadorDeNotasMaiorQue50)

}



function fibonacci(){
    var termos=[]
    var quantidadeDeNumerosEmSequencia = Number(prompt('quantidade de termos:'))
    var primeiroTermo = 0
    var segundoTermo = 1
    var terceiroTermo 

    termos.push(primeiroTermo)
    termos.push(segundoTermo)

    for(var inicioTerceiroTermo = 3;inicioTerceiroTermo<=quantidadeDeNumerosEmSequencia;inicioTerceiroTermo++ ){
        terceiroTermo = primeiroTermo + segundoTermo
        termos.push(terceiroTermo)
        primeiroTermo = segundoTermo
        segundoTermo = terceiroTermo
    }
    alert(termos)
   
}

//----------------------------

function numeroPrimo(){
    var avaliarNumeroSeEprimo = Number(prompt('qual numero?:')) 
    var contador = 0;
    for(var numeroInicial = 1;numeroInicial<= avaliarNumeroSeEprimo;numeroInicial++){
        if(avaliarNumeroSeEprimo%numeroInicial==0){
            contador++
        }
    }
    if(contador==2){
        alert('primo');
    }else{
        alert('não é primo');
    }
}



//quicksort
function quicksort(array) {
    if (array.length == 0) return [];
    if (array.length==1) return array;
    var pivot = array[0];
    var head = array.filter( n => n < pivot);
    var equal = array.filter( n => n === pivot);
    var tail = array.filter( n => n > pivot);

    return quicksort(head).concat(equal).concat(quicksort(tail));
}

function addArray(){

    var xxx =[]
    var num 
    alert('digite um numero menor do que 0 para sair')
    while(true){
       
        num = Number(prompt('numero:'))
        if(num<0){
            break
        }
        xxx.push(num)
    }

    if(xxx.length==0){
        alert('não tem numeros no array')
    }else{
        var zzz = quicksort(xxx)
        alert(zzz)
    }
  
}

//quicksort


function somatorio(){
    var quantidadeDeNumero = Number(prompt("quantos numeros?:"))
    while(quantidadeDeNumero<0){
        alert('digite um numero maior que zero')
        quantidadeDeNumero = Number(prompt("quantos numeros?: "))
    }
    var somatorio =  0
    var solicitarNumero
    for(var primeiroNumero = 1;primeiroNumero<=quantidadeDeNumero;primeiroNumero++){
        solicitarNumero = Number(prompt('numero para ser somado:'))
        somatorio = somatorio + solicitarNumero
        alert('somatorio:'+somatorio)
    }
}

//mdc



var MDC = (num) =>{
    
    var calculo
    var x = 2
    var array =[]
    var cont = 0

    while(true){
    for(var i = 1;i<=num;i++){
        if(num%i==0){
            cont++
        }
    }
    if(cont==2){
        array.push(1,num)
        return array
        break;
    }else{
      calculo = num % x
      if(calculo==0){
        array.push(x)
        num = num / x
        if(num==1){
          return array
          break;
        }
        x=2
      }else{
        x++
      }
    }
    }
  }

  function comparaMDC(){


    
  var xx = MDC(Number(prompt('numero 1')))
  var zz = MDC(Number(prompt('numero 2')))
  var o =[]
  var k=[]
  var vezes =1
  alert('divisores: '+xx)
  alert('divisores: '+zz)

  for(var c of xx){

   var xyx = o.filter((xyx)=>{  
    return xyx == c
   })
   if(xyx.length==0){
     o.push(c)
   }
  }

  for(var hj of zz){
    var uuu = k.filter((uuu)=>{
      return uuu ==hj
    })
    if(uuu.length==0){
      k.push(hj)
    }
  }

  
   
    var vezes=[]

    
    
    for(var xxxx of o){

      for(var zzzz of k){
        if(zzzz==xxxx){
          vezes.push(zzzz)
          
        }
      }

    }
    
   
    
    var multi = 1
  

   if(vezes.length==0){
      multi ='não tem divisores em comum'
   }else{
      for(var ui of vezes){
        multi = multi * ui
      }
   }

   if(vezes.length==1){
    alert('mdc:'+multi*multi)
   }else{
   alert('mdc:'+multi)
   }
   


  }
