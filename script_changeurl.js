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
    if (section) {
        changeURL(section);
    } else {
        // Définir un contenu par défaut si aucun fragment d'URL n'est présent
        document.getElementById('content').innerHTML = `
            <p>Veuillez sélectionner une option</p>
            <button type="button" onclick="changeURL('gold_00021')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00021.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00022')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00022.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00023')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00023.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00024')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00024.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00025')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00025.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00026')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00026.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00027')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00027.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00028')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00028.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00029')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00029.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00037')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00037.png" alt="button">
            </button>
            <div class="supertitle3"><br><hr> BOTS </div>
            <button type="button" onclick="changeURL('gold_00000')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00000.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00001')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00001.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00003')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00003.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00004')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00004.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00005')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00005.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00006')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00006.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00007')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00007.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00008')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00008.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00009')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00009.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00010')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00010.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00011')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00011.png" alt="button">
            </button>
            <div class="supertitle3"><br><hr> VEHICLES </div>
            <button type="button" onclick="changeURL('gold_00002')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00002.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00012')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00012.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00013')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00013.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00014')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00014.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00015')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00015.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00016')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00016.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00017')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00017.png" alt="button">
            </button>
            <div class="supertitle3"><br><hr> AIR </div>
            <button type="button" onclick="changeURL('gold_00018')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00018.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00019')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00019.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00020')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00020.png" alt="button">
            </button>
            <div class="supertitle3"><br><hr> STRUCTURES </div>
            <button type="button" onclick="changeURL('gold_00030')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00030.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00031')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00031.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00032')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00032.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00033')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00033.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00034')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00034.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00035')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00035.png" alt="button">
            </button>
            <button type="button" onclick="changeURL('gold_00036')">
                <img src="https://raw.githubusercontent.com/ATLASLORD/Img_Storage/main/pa_wiki/unit_name/gold/name_00036.png" alt="button">
            </button>
        `;
    }
}
