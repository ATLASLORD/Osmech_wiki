function changeURL(section) {
    // Changer l'URL sans recharger la page
    history.pushState(null, '', `#${section}`);

    // Afficher le contenu correspondant à la section
    var content = document.getElementById('content');
    switch(section) {
        case 'gold_00021':
            content.innerHTML = '<p>Contenu pour le bouton 1</p>';
            break;
        case 'gold_00022':
            content.innerHTML = '<p>Contenu pour le bouton 2</p>';
            break;
        case 'gold_00023':
            content.innerHTML = '<p>Contenu pour le bouton 3</p>';
            break;
        case 'gold_00024':
            content.innerHTML = '<p>Contenu pour le bouton 4</p>';
            break;
        case 'gold_00025':
            content.innerHTML = '<p>Contenu pour le bouton 5</p>';
            break;
        case 'gold_00026':
            content.innerHTML = '<p>Contenu pour le bouton 6</p>';
            break;
        case 'gold_00027':
            content.innerHTML = '<p>Contenu pour le bouton 7</p>';
            break;
        case 'gold_00028':
            content.innerHTML = '<p>Contenu pour le bouton 8</p>';
            break;
        case 'gold_00029':
            content.innerHTML = '<p>Contenu pour le bouton 9</p>';
            break;
        case 'gold_00037':
            content.innerHTML = '<p>Contenu pour le bouton 10</p>';
            break;
        case 'gold_00000':
            content.innerHTML = '<p>Contenu pour le bouton 11</p>';
            break;
        case 'gold_00001':
            content.innerHTML = '<p>Contenu pour le bouton 12</p>';
            break;
        case 'gold_00003':
            content.innerHTML = '<p>Contenu pour le bouton 13</p>';
            break;
        case 'gold_00004':
            content.innerHTML = '<p>Contenu pour le bouton 14</p>';
            break;
        case 'gold_00005':
            content.innerHTML = '<p>Contenu pour le bouton 15</p>';
            break;
        case 'gold_00006':
            content.innerHTML = '<p>Contenu pour le bouton 16</p>';
            break;
        case 'gold_00007':
            content.innerHTML = '<p>Contenu pour le bouton 17</p>';
            break;
        case 'gold_00008':
            content.innerHTML = '<p>Contenu pour le bouton 18</p>';
            break;
        case 'gold_00009':
            content.innerHTML = '<p>Contenu pour le bouton 19</p>';
            break;
        case 'gold_00010':
            content.innerHTML = '<p>Contenu pour le bouton 20</p>';
            break;
        case 'gold_00011':
            content.innerHTML = '<p>Contenu pour le bouton 21</p>';
            break;
        case 'gold_00002':
            content.innerHTML = '<p>Contenu pour le bouton 22</p>';
            break;
        case 'gold_00012':
            content.innerHTML = '<p>Contenu pour le bouton 23</p>';
            break;
        case 'gold_00013':
            content.innerHTML = '<p>Contenu pour le bouton 24</p>';
            break;
        case 'gold_00014':
            content.innerHTML = '<p>Contenu pour le bouton 25</p>';
            break;
        case 'gold_00015':
            content.innerHTML = '<p>Contenu pour le bouton 26</p>';
            break;
        case 'gold_00016':
            content.innerHTML = '<p>Contenu pour le bouton 27</p>';
            break;
        case 'gold_00017':
            content.innerHTML = '<p>Contenu pour le bouton 28</p>';
            break;
        case 'gold_00018':
            content.innerHTML = '<p>Contenu pour le bouton 29</p>';
            break;
        case 'gold_00019':
            content.innerHTML = '<p>Contenu pour le bouton 30</p>';
            break;
        case 'gold_00020':
            content.innerHTML = '<p>Contenu pour le bouton 31</p>';
            break;
        case 'gold_00030':
            content.innerHTML = '<p>Contenu pour le bouton 32</p>';
            break;
        case 'gold_00031':
            content.innerHTML = '<p>Contenu pour le bouton 33</p>';
            break;
        case 'gold_00032':
            content.innerHTML = '<p>Contenu pour le bouton 34</p>';
            break;
        case 'gold_00033':
            content.innerHTML = '<p>Contenu pour le bouton 35</p>';
            break;
        case 'gold_00034':
            content.innerHTML = '<p>Contenu pour le bouton 36</p>';
            break;
        case 'gold_00035':
            content.innerHTML = '<p>Contenu pour le bouton 37</p>';
            break;
        case 'gold_00036':
            content.innerHTML = '<p>Contenu pour le bouton 38</p>';
            break;
        default:
            content.innerHTML = '<p>Contenu par défaut</p>';
    }
}

// Gérer les boutons de navigation du navigateur
window.onpopstate = function(event) {
    var section = location.hash.replace('#', '');
    changeURL(section);
}

// Initialiser le contenu en fonction de l'URL actuelle
window.onload = function() {
    var section = location.hash.replace('#', '');
    changeURL(section);
}
