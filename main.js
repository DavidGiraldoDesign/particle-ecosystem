(function () {
    let body = document.querySelector("body");
    console.log("Hi!");

    body.innerHTML = `
                     <div id="title">
                         <p>Particle ecosystem</p>
                     </div>

                     <div id="square-holder"> 
                        <div id="square">
                            <h2 class="disable-select">Click and drag</h2>
                        </div>
                     </div>  

                     <div id="info">
                         <p>By Jose David GM - 09/2018</p>
                         <p>Visit
                         <a href="https://davidgiraldo.netlify.com/" target=" _blank"> davidgiraldo.netlify.com</a> 
                         </p>
                         <p>Follow me on 
                         <a href="https://www.behance.net/JoseDavidGiraldoM" target=" _blank">Behance</a> 
                         / <a href="https://www.instagram.com/_david.giraldo/" target=" _blank">Instagram<a></p>
                     </div>
                       
                        `;

})();