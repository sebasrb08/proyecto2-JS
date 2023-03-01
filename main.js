const boton =document.getElementById('boton')
const valor2=document.getElementById('valor')

const temp=document.getElementsByClassName('temp')
const result=document.getElementsByClassName('resultado')
const mercurio=document.querySelector('.termometro_mercurio')



boton.addEventListener('click',()=>{
    if (isNaN(valor2.value) || valor2.value=='') {
        alert('oye eso no es un numero')
    }else{
    celsius=(valor2.value - 32)*5/9
    farenheit=(valor2.value *9/5 )+32
    }
    // console.log(celsius)
    // console.log(farenheit)

    if(temp[0].checked){
        relleno=celsius*100/100
        result[0].innerHTML=(celsius.toFixed(2))
    }else if(temp[1].checked){
        relleno=farenheit*100/100
        result[0].innerHTML=(farenheit.toFixed(2))
    }else{
        alert('no se selecciono ningun boton')
    }
    if(relleno>100){
        mercurio.style.height=`100%`
    }else if(relleno<=100 && relleno>0){
        mercurio.style.height=`${relleno}%`
    
     }else {
        mercurio.style.height='0'
     }
    
})