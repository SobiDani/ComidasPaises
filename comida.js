const paisesGallery$$0 = document.querySelector(".gallery");
const paisesGallery$$1 = document.querySelector(".gallery2");
const paisesGallery$$2 = document.querySelector(".gallery3");
const paisesGallery$$3 = document.querySelector(".gallery4");
const paisesGallery$$4 = document.querySelector(".gallery5");
const paisesGallery$$5 = document.querySelector(".gallery6");
const paisesGallery$$6 = document.querySelector(".gallery7");
const paisesGallery$$7 = document.querySelector(".gallery8");
const paisesGallery$$8 = document.querySelector(".gallery9");
const paisesGallery$$9 = document.querySelector(".gallery10");
const paisesGallery$$10 = document.querySelector(".gallery11");
const paisesGallery$$11 = document.querySelector(".gallery12"); 

const paisesURL = 'https://data-base-comidas.vercel.app/paises';


const getPaises = async () => {
  const paisesAPI = await fetch(paisesURL);
  const PaisesJSON = await paisesAPI.json();

  let nombre = [];
  for (i = 0; i < PaisesJSON.pais.length; i++) {
    const cardDiv$$ = document.createElement('div');
    const comidaCardDiv$$ = document.createElement('div');
    const titulo$$ = document.createElement('h2');
    const image$$ = document.createElement('img');

        titulo$$.textContent = PaisesJSON.pais[i].nombre;
        image$$.src = PaisesJSON.pais[i].imagen;
        image$$.alt = PaisesJSON.pais[i].imagen;

        for (let y = 0; y < PaisesJSON.pais[i].comidas.length; y++) {
            const comidaDiv$$ = document.createElement('div');
            const comidaTitulo$$ = document.createElement('h2');
            const platoTitulo$$ = document.createElement('h3');
            const comidaImage$$ = document.createElement('img');
            const comidaDecripcion$$ = document.createElement('p');
            const comidaIngredientes$$ = document.createElement('p');

            comidaTitulo$$.textContent = PaisesJSON.pais[i].comidas[y].nombre
            platoTitulo$$.textContent = PaisesJSON.pais[i].comidas[y].plato
            comidaImage$$.src = PaisesJSON.pais[i].comidas[y].imagen
            comidaDecripcion$$.textContent = PaisesJSON.pais[i].comidas[y].descripcion
            comidaIngredientes$$.textContent = PaisesJSON.pais[i].comidas[y].ingredientes

            comidaDiv$$.appendChild(comidaTitulo$$);
            comidaDiv$$.appendChild(platoTitulo$$);
            comidaDiv$$.appendChild(comidaImage$$);
            comidaDiv$$.appendChild(comidaDecripcion$$);
            comidaDiv$$.appendChild(comidaIngredientes$$);
            comidaCardDiv$$.appendChild(comidaDiv$$)

            comidaDecripcion$$.classList.add(`texto`)
            comidaIngredientes$$.classList.add(`texto`)
            comidaDiv$$.classList.add(`comida`)
            comidaDiv$$.classList.add(`comida${i}${y+1}`)

        }

        if(i % 2 == 0){
            cardDiv$$.classList.add(`paisIzquierda`)
            cardDiv$$.appendChild(image$$);
            /*cardDiv$$.appendChild(titulo$$); */
        }
        else{
            cardDiv$$.classList.add(`paisDerecha`)
            /* cardDiv$$.appendChild(titulo$$); */
            cardDiv$$.appendChild(image$$);
            
        }

        cardDiv$$.classList.add(`pais${i+1}`)
        cardDiv$$.classList.add(`headline`)
        cardDiv$$.setAttribute("id",`idPais${i+1}`);
        cardDiv$$.classList.add(`pais`)
        comidaCardDiv$$.classList.add(`comidaCard`)

        cardDiv$$.appendChild(comidaCardDiv$$)

        if(i == 0){
            paisesGallery$$0.appendChild(cardDiv$$)
        }
        else if(i == 1){
            paisesGallery$$1.appendChild(cardDiv$$)
        }
        if(i == 2){
            paisesGallery$$2.appendChild(cardDiv$$)
        }
        if(i == 3){
            paisesGallery$$3.appendChild(cardDiv$$)
        }
        if(i == 4){
            paisesGallery$$4.appendChild(cardDiv$$)
        }
        if(i == 5){
            paisesGallery$$5.appendChild(cardDiv$$)
        }
        if(i == 6){
            paisesGallery$$6.appendChild(cardDiv$$)
        }
        if(i == 7){
            paisesGallery$$7.appendChild(cardDiv$$)
        }
        if(i == 8){
            paisesGallery$$8.appendChild(cardDiv$$)
        }
        if(i == 9){
            paisesGallery$$9.appendChild(cardDiv$$)
        }
        if(i == 10){
            paisesGallery$$10.appendChild(cardDiv$$)
        }
        if(i == 11){
            paisesGallery$$11.appendChild(cardDiv$$)
        }

        
        
       
  }

};
getPaises();

ScrollReveal().reveal('.headline');

