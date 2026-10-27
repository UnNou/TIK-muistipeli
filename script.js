
// Korttipakka, 30 paria (60 korttia yhteensä)
const allPairs = [
    { type: 'aihe', text: 'Python', matchId: 1, color: '#C84B31' }, { type: 'fakta', text: 'Suosittu koodauskieli tekoälyssä', matchId: 1, color: '#C84B31' },
    { type: 'aihe', text: 'HTML & CSS', matchId: 2, color: '#E38B29' }, { type: 'fakta', text: 'Nettisivujen rakenne ja tyylit', matchId: 2, color: '#E38B29' },
    { type: 'aihe', text: 'SQL', matchId: 3, color: '#2D4263' }, { type: 'fakta', text: 'Hakee ja tallentaa tietoa tietokantaan', matchId: 3, color: '#2D4263' },
    { type: 'aihe', text: 'Cyber Security', matchId: 4, color: '#4E6C50' }, { type: 'fakta', text: 'Suojaa järjestelmiä hakkeroinnilta', matchId: 4, color: '#4E6C50' },
    { type: 'aihe', text: 'UI/UX', matchId: 5, color: '#785380' }, { type: 'fakta', text: 'Tekee sovelluksista helppokäyttöisiä', matchId: 5, color: '#785380' },
    { type: 'aihe', text: 'Pilvipalvelut', matchId: 6, color: '#3A6B35' }, { type: 'fakta', text: 'Ohjelmat pyörivät pilvessä (AWS)', matchId: 6, color: '#3A6B35' },
    { type: 'aihe', text: 'Tekoäly (AI)', matchId: 7, color: '#A0522D' }, { type: 'fakta', text: 'Oppii datasta ja auttaa koodauksessa', matchId: 7, color: '#A0522D' },
    { type: 'aihe', text: 'Bugi (Bug)', matchId: 8, color: '#5C3317' }, { type: 'fakta', text: 'Virhe koodissa, joka korjataan', matchId: 8, color: '#5C3317' },
    { type: 'aihe', text: 'Agile / Scrum', matchId: 9, color: '#2E8B57' }, { type: 'fakta', text: 'Projektinhallintaa nopeissa sykleissä', matchId: 9, color: '#2E8B57' },
    { type: 'aihe', text: 'JavaScript', matchId: 10, color: '#D4AC0D' }, { type: 'fakta', text: 'Tekee verkkosivuista interaktiivisia', matchId: 10, color: '#D4AC0D' },
    { type: 'aihe', text: 'Frontend', matchId: 11, color: '#16A085' }, { type: 'fakta', text: 'Käyttäjälle näkyvä visuaalinen osa', matchId: 11, color: '#16A085' },
    { type: 'aihe', text: 'Backend', matchId: 12, color: '#2980B9' }, { type: 'fakta', text: 'Palvelimella pyörivä taustalogiikka', matchId: 12, color: '#2980B9' },
    { type: 'aihe', text: 'Git & GitHub', matchId: 13, color: '#8E44AD' }, { type: 'fakta', text: 'Koodin versiohallinta ja tiimityö', matchId: 13, color: '#8E44AD' },
    { type: 'aihe', text: 'API (Rajapinta)', matchId: 14, color: '#C0392B' }, { type: 'fakta', text: 'Sallii järjestelmien keskustella keskenään', matchId: 14, color: '#C0392B' },
    { type: 'aihe', text: 'Docker', matchId: 15, color: '#D35400' }, { type: 'fakta', text: 'Paketoi ohjelman toimivaksi säiliöksi', matchId: 15, color: '#D35400' },
    { type: 'aihe', text: 'Linux', matchId: 16, color: '#1B4F72' }, { type: 'fakta', text: 'Palvelimien ja kehittäjien käyttöjärjestelmä', matchId: 16, color: '#1B4F72' },
    { type: 'aihe', text: 'Tietokanta', matchId: 17, color: '#117A65' }, { type: 'fakta', text: 'Tallentaa datan pysyvästi talteen', matchId: 17, color: '#117A65' },
    { type: 'aihe', text: 'Palomuuri', matchId: 18, color: '#78281F' }, { type: 'fakta', text: 'Suodattaa haitallista verkkoliikennettä', matchId: 18, color: '#78281F' },
    { type: 'aihe', text: 'Product Owner', matchId: 19, color: '#512E5F' }, { type: 'fakta', text: 'Päättää mitä tuotteeseen kehitetään', matchId: 19, color: '#512E5F' },
    { type: 'aihe', text: 'Data-analyysi', matchId: 20, color: '#1B6CA8' }, { type: 'fakta', text: 'Etsii isosta datasta hyödyllisiä trendejä', matchId: 20, color: '#1B6CA8' },
    { type: 'aihe', text: 'Mobiilisovellus', matchId: 21, color: '#835388' }, { type: 'fakta', text: 'Ohjelmisto puhelimille ja tableteille', matchId: 21, color: '#835388' },
    { type: 'aihe', text: 'Saavutettavuus', matchId: 22, color: '#BA4A00' }, { type: 'fakta', text: 'Palvelu toimii myös erityisryhmille', matchId: 22, color: '#BA4A00' },
    { type: 'aihe', text: 'Prototyyppi', matchId: 23, color: '#B03A2E' }, { type: 'fakta', text: 'Kokeiluversio tuotteesta testausta varten', matchId: 23, color: '#B03A2E' },
    { type: 'aihe', text: 'Pelikehitys', matchId: 24, color: '#1E8449' }, { type: 'fakta', text: 'Pelimoottoreiden ja logiikan koodausta', matchId: 24, color: '#1E8449' },
    { type: 'aihe', text: 'Business Intelligence', matchId: 25, color: '#2471A3' }, { type: 'fakta', text: 'Muuttaa datan päätöksenteon tueksi', matchId: 25, color: '#2471A3' },
    { type: 'aihe', text: 'Full Stack', matchId: 26, color: '#626567' }, { type: 'fakta', text: 'Osaa sekä etu- että taustajärjestelmät', matchId: 26, color: '#626567' },
    { type: 'aihe', text: 'JSON', matchId: 27, color: '#7E5109' }, { type: 'fakta', text: 'Yleinen tiedonsiirtomuoto ohjelmissa', matchId: 27, color: '#7E5109' },
    { type: 'aihe', text: 'DevOps', matchId: 28, color: '#154360' }, { type: 'fakta', text: 'Yhdistää koodauksen ja IT-infran', matchId: 28, color: '#154360' },
    { type: 'aihe', text: 'IT-Tradenomi', matchId: 29, color: '#4A235A' }, { type: 'fakta', text: 'Yhdistää teknologian ja liiketoiminnan', matchId: 29, color: '#4A235A' },
    { type: 'aihe', text: 'Haalarit', matchId: 30, color: '#900C3F' }, { type: 'fakta', text: 'Opiskelijayhteisön ja tapahtumien tunnus', matchId: 30, color: '#900C3F' }
];

const grid = document.getElementById('game-grid');
const restartBtn = document.getElementById('restart-btn');
const timerDisplay = document.getElementById('timer');
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const startGameBtn = document.getElementById('start-game-btn');
const playerNameInput = document.getElementById('player-name-input');
const currentPlayerNameDisplay = document.getElementById('current-player-name');
const highScoresList = document.getElementById('high-scores-list');
const cursorMascot = document.getElementById('cursor-mascot');

let flippedCards = [];
let matchedPairs = 0;
let timer = 0;
let timerInterval;
let isLocked = false;
let currentPlayer = '';

const TOTAL_PAIRS = 6;

let highScores = [];

try {
    highScores = JSON.parse(localStorage.getItem('tikoMemoryHighScores')) || [];
} catch {
    highScores = [];
}

// kielletyt käyttäjänimet
const bannedWords = [
    'vittu', 'vittu', 'perkele', 'saatana', 'paska',
    'kusipaa', 'kusipää', 'pillu', 'kyrpa', 'kyrpä',
    'huora', 'narttu', 'runkkari', 'mulukku',
    'fuck', 'fucker', 'fucking', 'shit', 'bullshit',
    'bitch', 'asshole', 'bastard', 'motherfucker',
    'dickhead', 'cunt', 'whore', 'slut'
];

function normalizeName(name) {
    return name
        .toLocaleLowerCase('fi')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '');
}

function containsBannedWord(name) {
    const normalizedName = normalizeName(name);
    return bannedWords.some(word =>
        normalizedName.includes(normalizeName(word))
    );
}

function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${String(minutes).padStart(2, '0')}.${String(seconds).padStart(2, '0')}`;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function updateLeaderboardUI() {
    highScoresList.innerHTML = '';

    if (highScores.length === 0) {
        const li = document.createElement('li');
        li.className = 'empty-score';
        li.textContent = 'Ei tuloksia vielä. Ole ensimmäinen!';
        highScoresList.appendChild(li);
        return;
    }

    highScores.sort((a, b) => a.time - b.time);

    highScores.slice(0, 10).forEach(entry => {
        const li = document.createElement('li');
        const nameSpan = document.createElement('span');
        const timeSpan = document.createElement('span');

        nameSpan.className = 'score-name';
        nameSpan.textContent = entry.name;

        timeSpan.className = 'score-time';
        timeSpan.textContent = formatTime(entry.time);

        li.appendChild(nameSpan);
        li.appendChild(timeSpan);
        highScoresList.appendChild(li);
    });
}

playerNameInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        startGameBtn.click();
    }
});

startGameBtn.addEventListener('click', () => {
    const name = playerNameInput.value.trim();

    if (!name) {
        alert('Jou! Unohdit kirjata nimesi!');
        return;
    }

    if (containsBannedWord(name)) {
        alert('Valitse asiallinen nimimerkki.');
        return;
    }

    currentPlayer = name;
    currentPlayerNameDisplay.textContent = currentPlayer;

    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';

    startNewGame();
});

function startNewGame() {
    grid.innerHTML = '';
    matchedPairs = 0;
    flippedCards = [];
    isLocked = false;

    clearInterval(timerInterval);
    timer = 0;
    timerDisplay.textContent = timer;
    restartBtn.style.display = 'none';

    const uniqueMatchIds = [...new Set(allPairs.map(item => item.matchId))];
    shuffleArray(uniqueMatchIds);

    const selectedIds = uniqueMatchIds.slice(0, TOTAL_PAIRS);
    const gameCards = [];

    selectedIds.forEach(id => {
        const pairItems = allPairs.filter(item => item.matchId === id);
        gameCards.push(...pairItems);
    });

    shuffleArray(gameCards);

    gameCards.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.matchId = item.matchId;
        card.dataset.cardColor = item.color;
        card.dataset.cardText = item.text;
        card.textContent = '?';

        card.addEventListener('click', () => flipCard(card));
        grid.appendChild(card);
    });

    timerInterval = setInterval(() => {
        timer++;
        timerDisplay.textContent = timer;
    }, 1000);
}

function flipCard(card) {
    if (isLocked) return;
    if (card.classList.contains('flipped')) return;
    if (card.classList.contains('matched')) return;

    card.classList.add('flipped');
    card.textContent = card.dataset.cardText;
    card.style.backgroundColor = card.dataset.cardColor;

    flippedCards.push(card);

    if (flippedCards.length === 2) {
        checkForMatch();
    }
}

function checkForMatch() {
    const [card1, card2] = flippedCards;
    const isMatch = card1.dataset.matchId === card2.dataset.matchId;

    if (isMatch) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        flippedCards = [];
        matchedPairs++;

        if (matchedPairs === TOTAL_PAIRS) {
            clearInterval(timerInterval);

            highScores.push({
                name: currentPlayer,
                time: timer
            });

            localStorage.setItem(
                'tikoMemoryHighScores',
                JSON.stringify(highScores)
            );

            updateLeaderboardUI();
            restartBtn.style.display = 'inline-block';
        }
    } else {
        isLocked = true;

        setTimeout(() => {
            card1.classList.remove('flipped');
            card1.textContent = '?';
            card1.style.backgroundColor = '#1e293b';

            card2.classList.remove('flipped');
            card2.textContent = '?';
            card2.style.backgroundColor = '#1e293b';

            flippedCards = [];
            isLocked = false;
        }, 1000);
    }
}

restartBtn.addEventListener('click', () => {
    startScreen.style.display = 'block';
    gameScreen.style.display = 'none';
    playerNameInput.value = '';
});

// Devin salasana
const ADMIN_PASSWORD = 'Tyhjenna';
// leaderboard tyhjennys: Ctrl + Shift + L
document.addEventListener('keydown', event => {
    if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'l') {
        event.preventDefault();

        const password = prompt('Anna ylläpitosalasana:');

        if (password === null) return;

        if (password === ADMIN_PASSWORD) {
            if (confirm('Tyhjennetäänkö kaikki Hall of Fame -tulokset?')) {
                highScores = [];
                localStorage.removeItem('tikoMemoryHighScores');
                updateLeaderboardUI();
                alert('Tulostaulukko on tyhjennetty.');
            }
        } else {
            alert('Väärä salasana');
        }
    }
});

updateLeaderboardUI();

// maskotti hiiri
window.addEventListener('mousemove', event => {
    cursorMascot.style.left = `${event.clientX}px`;
    cursorMascot.style.top = `${event.clientY}px`;
});
