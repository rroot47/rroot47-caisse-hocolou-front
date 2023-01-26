// Récupération des boutons de menu et du contenu du tableau de bord
var buttons = document.querySelectorAll('.menu-button');
var dashboardContent = document.getElementById('dashboard-content');

// Ajout d'un écouteur d'événement "click" sur chaque bouton de menu
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    // Récupération du contenu à afficher pour ce bouton
    var contentId = this.getAttribute('data-content-id');
    var content = document.getElementById(contentId);

    //Cache les autres divs
    var divs = document.querySelectorAll('#dashboard-content > div');
    for(var i = 0; i < divs.length; i++){
      divs[i].style.display = "none";
    }
    // Affiche le div correspondant
    content.style.display = "block";
  });
}
