const paisesGallery$$ = document.querySelector(".gallery");
const paisesURL = 'https://data-base-comidas.vercel.app/paises';
/* const miInput$$ = document.querySelector('') */


const getPaises = async () => {
  const paisesAPI = await fetch(paisesURL);
  const PaisesJSON = await paisesAPI.json();

  let nombre = [];
  for (i = 0; i < PaisesJSON.pais.length; i++) {
    const cardDiv$$ = document.createElement('div');
    const titulo$$ = document.createElement('h2');
    const image$$ = document.createElement('img');

        titulo$$.textContent = PaisesJSON.pais[i].nombre;
        image$$.src = PaisesJSON.pais[i].imagen;
        image$$.alt = PaisesJSON.pais[i].imagen;

        cardDiv$$.appendChild(titulo$$);
        cardDiv$$.appendChild(image$$);

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
            cardDiv$$.appendChild(comidaDiv$$)



        }

        paisesGallery$$.appendChild(cardDiv$$)
  }

};
getPaises();

/* const paintPaises = (paises) => {
  const paisesHTML = paises. */
