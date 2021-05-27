window.onload=()=>{
    let cuentaRegresivaFecha= new Date('Jan 01, 2022 00:00:00').getTime();
    const timeBack=document.querySelector('#cuentaRegresiva');
    const newYear=document.querySelector('#cuentaRegresiva');

    //Creamos una funcion integrada a la variable tiempo
    let tiempo=setInterval(function(){
    //Obtenemos el dia actual    
    let ahora= new Date().getTime();
    
    //Identificamos la diferencia de tiempo (en milisegundos) entre el dia de hoy y nuestra fecha asignada
    let diferencia= cuentaRegresivaFecha - ahora;
    
    // Utilizamo Math.floor(), para convertir los milisegundos
    // obtenindos en la variable 'diferencia'; en dias-horas-minutos-segundos.

     let dias= Math.floor(diferencia/(1000*60*60*24));
     let horas= Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));
     let minutos= Math.floor((diferencia%(1000*60*60))/(1000*60));
     let segundos=Math.floor((diferencia%(1000*60))/1000);
    
     //Mostramos el calculo realizados en el id='cuentaRegresiva'
     timeBack.innerText=`${dias} D ${horas}H ${minutos}M ${segundos}S`;
     if(diferencia<0){clearInterval(tiempo); newYear.innerText='Ya es Jueves'};
    
    
    }, 1000);



}
