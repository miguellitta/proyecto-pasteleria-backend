async function getUser() {
  try {
    const response = await axios.get(
      "https://randomuser.me/api/?results=3&seed=56d27f4a53bd5441&inc=name,id,picture"
    );
   
    res = response.data.results;

    res.forEach((person) => {
      document.getElementById(
        "results"
      ).innerHTML += `<div class="clients-container">
      
     <img src='${person.picture.large}' class='img-rounded' alt="Foto de Eva Martin"/>
     <span>${person.name.first} ${person.name.last}</span>
     
     <div class="clients-quote">
                <blockquote>
                    <p class="quote-p">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aspernatur quaerat consectetur facere"</p>
                </blockquote>
            </div>

   </div>`;
    });
  } catch (error) {
    console.error(error);
  }
}

// async function getProducts() {
//   try {
//     const response = await axios.get("json/products.json");
//     products = response.data.pasteleria;
//     products.forEach((product) => {
//       document.getElementById("card-list-id").innerHTML += `<div class="card">
//                 	<div class="card-img-container">
//                 <img src="${product.imagen}" alt="imagen" />
//             </div>
//             <div class="card-title">
//                 <h2>${product.productos}</h2>
//                 <p>$${product.precio}</p>
//             </div>
//           <button class="btn-card">Comprar</button>  
//         </div>`;
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// getProducts();

async function getQuotes() {
    try {
        const response = await axios.get("json/quotes.json")
        // console.log(response)
        // console.log(response.data.quotes)
        res = response.data.quotes;
        res.forEach(quote => {
            document.getElementById("results").innerHTML += `<div class="clients-quote">
            <blockquote>
                <p class="quote-p">${quote.q}</p>
            </blockquote>
        </div>`
        }); 
    } catch (error) {
        console.log(error);
    }
}

//   const quotes = [
//     [{
//         q: "No puedo olvidar el sabor de cheesecake, definitivamente lo mejor que probe"
//     } ],

//     [ {
//         q: "Los mejores macarons de Argentina, sin duda"
//     }],

//     [ {
//         q: "Durante mi estadia probe el red velvet y me hizo recordar a mi infancia"
//     }]
// ]

// getQuotes(); Falta encontrar problemassss

getUser();


async function getProducts() {
  try {
    const URL = "https://miguellitta.pythonanywhere.com/";

    const response = await axios.get(URL + "productos");
    products = response.data;
    products.forEach((product) => {
      document.getElementById("card-list-id").innerHTML += `<div class="card">
                	<div class="card-img-container">
                <img src="views/img/alfajor.png" alt="imagen" />
            </div>
            <div class="card-title">
                <h2>${product.descripcion}</h2>
                <p>$${product.precio}</p>
            </div>
              <button class="btn-card">Agregar</button> 
          </div>`;
    });
  } catch (error) {
    console.error(error);
  }
}

getProducts();


