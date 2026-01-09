//RICHIAMO CONTATAINER DI REF
const outputContainer = document.getElementById("container");
//RICHIAMO API DI REF
const endPoint = "https://lanciweb.github.io/demo/api/pictures/"
//RICHIAMO OVER DI RIFERIMENTO
const overlay = document.querySelector(".over");
//RICHIAMO IMG OVER DI RIFERIMENTO
const overlayImg = overlay.querySelector("img");
//RICHIAMO BOTTONE OVER DI RIFERIMENTO
const overlayBtn = document.querySelector("button");

//EVENTO BTN
overlayBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
});


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

        //RICHIAMO TUTTE LE CARD PER L'EVENTO 
        const allCards = document.querySelectorAll(".card");
        
        //VERIFICA ARRAY CARDS
        console.log(allCards);

        //PER OGNI CARTA AGGIUNGO L'EVENTO IN ASCOLTO ATTIVATO DAL CLICK
        console.log(cards);
        
        allCards.forEach (card => {
            card.addEventListener("click", () =>{
                //SELEZIONO L'IMMAGINE DELLA CARD ATTIVATA DAL CLICK
                const imgCardActive = card.querySelector(".img-card img");
                //ASSOCIO L'IMG CORRISPETTIVA A QUELLA DELL'OVER(EGUAGLIO)
                overlayImg.src = imgCardActive.src;
                //RENDO VISIBILE IMG OVERLAY ATTRAVERSO ACTIVE 
                overlay.classList.add("active");
            });
        });

    })
    .catch()
    .finally()
