//RICHIAMO CONTATAINER DI REF
const outputContainer = document.getElementById("container");
//RICHIAMO API DI REF
const endPoint = "https://lanciweb.github.io/demo/api/pictures/"

//RICHIAMO LIBRERIA AXIOS

axios.get(endPoint)
    .then(response => {
        const cards = response.data;
        console.log(cards);

        //CREAZIONE VARIABILE DI ACCUMULO
        let cardsOutput = "";

        //CICLO GLI ELEMENTI DI API
        cards.forEach(card => {

            //DESTRUTTURAZIONE OGGETTO
            const { url, title, date } = card;

            cardsOutput += `            
            <div class="card">
                <div class="chiodo">
                    <img src="./imgs/pin.svg" alt="chiodo">
                </div>
                <div class="img-card">
                    <img src="${url}" alt="">
                </div>
                <p>${title}</p>
                <data value="number">${date}</data>
            </div> `;
        });

        //STAMPIAMO IN PAGINA LE CARD ACUMULATE
        outputContainer.innerHTML = cardsOutput

    })
    .catch()
    .finally()

