const ing = document.getElementById('ingreso');
const res = document.getElementById('resultado');
const btn = document.getElementById('boton');


function probarNumero(){
    if(ing.value){
        if(isNaN(ing.value) == false){
            if(ing.value%2 == 0){
                res.innerText = "Es Par";
            }else{
                res.innerText = "Es Impar"
            }
        }else{
            res.innerText = "No se puede texto, solo numeros";
        }
    }else{
        res.innerText = "Esta vacio, Ingrese algo";
    }
}

btn.addEventListener('click', probarNumero);