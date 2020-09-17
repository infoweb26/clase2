'use strict';

let sct_cards = document.querySelector('#seccion_cards');

const mostrar_cards = () =>{

    personas.forEach(obj_persona =>{

        let card = document.createElement('div');
        card.classList.add('card');

        let foto = document.createElement('img');
        foto.classList.add('foto');
        foto.src = obj_persona.photo;

        let nombre = document.createElement('h2');
        nombre.innerText = `${obj_persona.name}-${obj_persona.last_name}`;
        nombre.classList.add('nombre');

        let correo = document.createElement('output');
        correo.innerText= `Correo:${obj_persona.email}`;
        correo.classList.add('correo');

        let puesto = document.createElement('output');
        puesto.innerText= `Puesto: ${obj_persona.job}`;
        puesto.classList.add('puesto');

        let boton_perfil = document.createElement('button');
        boton_perfil.innerText= 'Ver perfil';
        boton_perfil.classList.add('boton');

        card.appendChild(foto);
        card.appendChild(nombre);
        card.appendChild(correo);
        card.appendChild(puesto);
        card.appendChild(boton_perfil);

        sct_cards.appendChild(card);






    })

}

mostrar_cards();
