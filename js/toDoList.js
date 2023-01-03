const input = document.getElementById('agregar');
const btn = document.getElementById('boton');
const elements = document.querySelector('ul');
const nada = document.getElementById('nothing');


btn.addEventListener('click', event =>{
    event.preventDefault();
    let texto = input.value;

    if(texto != ""){
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = texto;

        elements.appendChild(li);
        li.appendChild(p);
        li.appendChild(Elminite());

        input.value = "";
        nada.style.display = "none";
    }
})


function Elminite(){
    const btndelete = document.createElement('button');

    btndelete.textContent = "X";
    btndelete.className = "btndel";

    btndelete.addEventListener('click', (e) =>{
        const item = e.target.parentElement;
        elements.removeChild(item);

        const items = document.querySelectorAll('li');

        if(items.length === 0){
            nada.style.display = "block";
        }
    });

    return btndelete;
}