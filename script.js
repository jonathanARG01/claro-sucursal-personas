$(document).ready(function () {

    const swiper_beneficios = new Swiper(".swiper_beneficios", {
        spaceBetween: 20,
        center: true,
        loop: true,
        breakpoints: {
            1200: { slidesPerView: 4 },
            992: { slidesPerView: 3 },
            560: { slidesPerView: 2 },
            0: { slidesPerView: 1 }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });


    let copyButton = document.getElementById("copy");

    copyButton.addEventListener("click", function() {
        let textToCopy = document.querySelector('.box-code span').textContent.trim();
    
        navigator.clipboard.writeText(textToCopy).then(function() {
            console.log("Texto copiado al portapapeles:", textToCopy);
            let copiedText = document.querySelector(".copiado");
            copiedText.style.opacity = 1;
    
            setTimeout(function() {
                copiedText.style.opacity = 0;
            }, 3000);
        }).catch(function(err) {
            console.error("Error al intentar copiar al portapapeles:", err);
        });
    });

    
});
