let descuentoArray = [10,15,20,30]

const precie = document.getElementById('precio');
const boton = document.getElementById('btn');
const primerDescuento = document.getElementById('d1');
const segundoDescuento = document.getElementById('d2');
const tercerDescuento = document.getElementById('d3');
const cuartoDescuento = document.getElementById('d4');
const pa = document.getElementById('pagar');

Cambiar = (e) =>{
    e.preventDefault();
    if(precie.value &&  d1.checked || d2.checked || d3.checked || d4.checked){
        if(precie.value > 0 && d1.checked){
            let nDes = (precie.value * descuentoArray[0]) / 100;
            let descuento = (precie.value * (100 - descuentoArray[0])) / 100;

            pa.innerHTML = `<br> El valor del descuento es de ${nDes}  <br>  El valor a total a pagar es de ${descuento} `;
            
        }else if(precie.value > 0 && d2.checked){
            let nDes = (precie.value * descuentoArray[1]) / 100;
            let descuento = (precie.value * (100 -  descuentoArray[1])) / 100;


            pa.innerHTML = `<br> El valor del descuento es de ${nDes }  <br>  El valor a total a pagar es de ${descuento}`;

        }else if(precie.value > 0 && d3.checked){
            let nDes = (precie.value * descuentoArray[2]) / 100;
            let descuento = (precie.value * (100 - descuentoArray[2])) / 100;


            pa.innerHTML = `El valor del descuento es de ${nDes} <br>  El valor a total a pagar es de ${descuento}`;
        }else if(precie.value > 0 && d4.checked){
            let nDes = (precie.value * descuentoArray[3]) / 100;
            let descuento = (precie.value * (100 - descuentoArray[3])) / 100;


            pa.innerHTML = `<br> El valor del descuento es de ${nDes} <br> El valor a total a pagar es de ${descuento}`;
        }else{
            pa.innerHTML = "El precio no puede ser negativo o igual a 0 <br> Puede que no haya cheado uno de los cupones"
        }
    }else{
        pa.innerHTML = "Uno a varios campos estan vacios o no ha chequeado ningun cupo";
    }

}

boton.addEventListener('click', Cambiar);