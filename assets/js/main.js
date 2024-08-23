const cards_flip = document.querySelectorAll(".flip-card .flip-card-inner");

cards_flip.forEach( (card)=>{
    card.addEventListener( 'click', function() {
      card.classList.toggle('rotated');
    });
});