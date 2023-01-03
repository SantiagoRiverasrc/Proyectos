window.addEventListener('load', ()=>{
    const pantalla = document.querySelector('.pantalla')
    const botones = document.getElementsByClassName('btn');

    const numeros = Array.from(botones);

    numeros.forEach((data)=>{
        data.addEventListener('click', ()=>{
            calcu(data, pantalla);
        })
    })
})

function calcu(button, pantal){
    switch (button.innerHTML){
        case 'C':
            borrar(pantal)
        break;
        case '=':
            calcular(pantal)
        break;
        default:
            actualizar(pantal, button)
        break;
    }
}

function calcular(p){
    p.innerHTML = eval(p.innerHTML)
}

function actualizar(p, b){
    if(p.innerHTML == 0){
        p.innerHTML = '';
    }

    p.innerHTML += b.innerHTML;
}

function borrar(p){
    p.innerHTML = '0';
}