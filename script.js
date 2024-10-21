// Data Arrays
const activities = [
    // Locais
    {
        name: 'Parque Van Gogh',
        category: 'Locais',
        address: 'Estrada HBR 323 gleba, 12 - Fundão, Holambra - SP, 13829-899',
        description: 'Inspirado nas obras do famoso pintor, o Parque Van Gogh oferece um ambiente tranquilo, com belos jardins e réplicas de pinturas icônicas, ideal para quem busca relaxamento e um toque de cultura artística ao ar livre.',
        cost: 0.00
    },
    {
        name: 'Museu Histórico de Holambra',
        category: 'Locais',
        address: 'R. Dória Vasconcelos, 373 - Centro, Holambra - SP, 13825-000',
        description: 'Museu que explora a trajetória dos imigrantes holandeses que colonizaram Holambra. O espaço conta com exposições interativas e objetos históricos, preservando a memória e a cultura da cidade.',
        cost: 0.00
    },
    {
        name: 'Portal do Moinho',
        category: 'Locais',
        address: 'Av. das Tulípas, Holambra - SP, 13825-000',
        description: 'Símbolo icônico de Holambra, o Portal do Moinho é um dos principais cartões-postais da cidade. Sua arquitetura remete aos tradicionais moinhos holandeses, oferecendo uma bela vista panorâmica.',
        cost: 0.00
    },
    {
        name: 'Expoflora',
        category: 'Locais',
        address: 'Parque da Expoflora, Alameda Maurício de Nassau, Holambra - SP, 13825-000',
        description: 'A maior exposição de flores da América Latina, com diversas espécies de plantas e arranjos florais incríveis. O evento também conta com apresentações culturais e gastronômicas, sendo imperdível para amantes de flores.',
        cost: 50.00
    },
    {
        name: 'Deck do Amor',
        category: 'Locais',
        address: 'Alameda Maurício de Nassau, 54-84 - Secção A, Holambra - SP, 13825-000',
        description: 'Local romântico, ideal para casais tirarem fotos e apreciarem a paisagem ao redor. O deck é cercado por flores e possui um clima encantador, perfeito para celebrar o amor.',
        cost: 0.00
    },
    {
        name: 'Bloemen Park',
        category: 'Locais',
        address: 'Sítio Laguna - Estrada Municipal HBR-155, Holambra - SP, 13825-000',
        description: 'Magníficos campos de flores que se estendem por hectares, oferecendo uma experiência única para quem gosta de fotografias. O local é famoso por suas paisagens floridas e vibrantes.',
        cost: 0.00
    },
    {
        name: 'Macena Flores',
        category: 'Locais',
        address: 'R. Campo das Palmas, 1465-1641, Holambra - SP, 13825-000',
        description: 'Um destino popular para ensaios fotográficos, Macena Flores proporciona uma visita inesquecível com seus campos floridos e estufas, onde é possível conhecer o cultivo de diversas espécies de flores.',
        cost: 50.00
    },
    {
        name: 'Studio Sereno Holambra',
        category: 'Locais',
        address: 'HBR 155, Lote D7 - Alegre, Holambra - SP, 13825-000',
        description: 'Estúdio de fotografia ao ar livre com belos campos floridos. O local oferece paisagens perfeitas para capturar fotos memoráveis, especialmente durante a primavera.',
        cost: 0.00
    },
    {
        name: 'Grupo Ven Flor - Unidade Rubi',
        category: 'Locais',
        address: 'R. Campo das Palmas, 1166-1348, Holambra - SP, 13825-000',
        description: 'Esta unidade do Grupo Ven Flor é especializada no cultivo de plantas e flores. Os visitantes podem passear pelas estufas e aprender mais sobre as técnicas de cultivo.',
        cost: 0.00
    },
    {
        name: 'Magic Garden Holambra',
        category: 'Locais',
        address: 'Estrada HBR 323 gleba, 17 - Fundão, Holambra - SP, 13829-899',
        description: 'Um jardim encantado com esculturas de flores e campos coloridos, perfeito para um passeio fotográfico. O ambiente proporciona uma experiência única com suas criações florais artísticas.',
        cost: 0.00
    },
    // Comidas
    {
        name: 'Restaurante The Old Dutch',
        category: 'Comidas',
        address: 'Estr. do Fundão, 200 - Centro, Holambra - SP, 13825-000',
        description: 'Restaurante com autêntica culinária holandesa e alemã, oferecendo pratos tradicionais como o schnitzel e a sopa de ervilhas, em um ambiente que remete às tavernas europeias.',
        cost: 65.00
    },
    {
        name: 'Serrana Pizzaria e Restaurante',
        category: 'Comidas',
        address: 'R. Primavera, 1441 - Centro, Holambra - SP, 13825-000',
        description: 'Pizzaria e restaurante que oferece um cardápio variado, desde deliciosas pizzas até pratos caseiros brasileiros. Ideal para quem busca uma refeição em família com opções para todos os gostos.',
        cost: 80.00
    },
    {
        name: 'Dolce Flor Sorveteria e Doceria Holambra',
        category: 'Comidas',
        address: 'R. Solidagos, 125 - Morada das Flores, Holambra - SP, 13825-000',
        description: 'Uma sorveteria diferenciada que oferece sorvetes com sabores únicos, incluindo opções feitas à base de flores, proporcionando uma experiência refrescante e inusitada.',
        cost: 15.00
    },
    {
        name: 'Restaurante Sabor e Arte',
        category: 'Comidas',
        address: 'R. Rota dos Imigrantes, 450 - Secção A, Holambra - SP, 13825-000',
        description: 'Restaurante que serve pratos típicos da culinária brasileira, como arroz, feijão e parmegiana. Um ambiente acolhedor, ideal para quem busca uma refeição simples e saborosa.',
        cost: 40.00
    },
    {
        name: 'Ideia Comestível | Biscoitos Amanteigados',
        category: 'Comidas',
        address: 'R. Arália, 382 - Groot, Holambra - SP, 13826-078',
        description: 'Biscoitos amanteigados artesanais produzidos com receitas tradicionais. Perfeitos para presentear ou para saborear com um café da tarde.',
        cost: 15.00
    },
    {
        name: 'De Immigrant Gastro Café',
        category: 'Comidas',
        address: 'R. Dória Vasconcelos, 293 - Centro, Holambra - SP, 13825-000',
        description: 'Café da manhã gourmet com pães artesanais, queijos e delícias típicas da culinária holandesa. O ambiente é acolhedor e perfeito para começar o dia com uma refeição farta.',
        cost: 35.00
    },
    {
        name: 'Restaurante Holam Bistrô',
        category: 'Comidas',
        address: 'R. Campo do Pouso, 1162 - Centro, Holambra - SP, 13825-000',
        description: 'Bistrô elegante que combina a culinária alemã e holandesa com pratos refinados, como carnes selecionadas e risotos. Ideal para uma refeição especial em um ambiente sofisticado.',
        cost: 70.00
    },
    {
        name: 'Restaurante Villa Girassol',
        category: 'Comidas',
        address: 'R. Dória Vasconcelos, 220 - Centro, Holambra - SP, 13825-000',
        description: 'Oferecendo uma mistura de pratos italianos, carnes e frutos do mar, o Villa Girassol é conhecido pelo ambiente aconchegante e porções generosas. Uma ótima opção para jantares em família ou eventos especiais.',
        cost: 75.00
    },
    {
        name: 'A Casa do Lago do Holandês',
        category: 'Comidas',
        address: 'R. Camélias, 336 - Centro, Holambra - SP, 13825-000',
        description: 'Confeitaria gourmet que oferece doces refinados, incluindo bolos e tortas com sabores delicados e criativos. Um ponto perfeito para uma pausa doce no passeio por Holambra.',
        cost: 25.00
    },
    {
        name: 'Don Hamburgo',
        category: 'Comidas',
        address: 'Av. das Tulípas, n° 44 - Centro, Holambra - SP, 13825-000',
        description: 'Hamburgueria com um toque especial, servindo hambúrgueres artesanais e porções generosas. O local é ideal para quem quer uma refeição rápida e saborosa.',
        cost: 40.00
    },
    {
        name: 'Dona Maura Gastronomia',
        category: 'Comidas',
        address: 'R. Rota dos Imigrantes, 932 - Secção A, Holambra - SP, 13825-000',
        description: 'Com um ambiente acolhedor e pratos bem elaborados, Dona Maura oferece uma experiência gastronômica diferenciada, com pratos que misturam ingredientes frescos e técnicas de alta gastronomia.',
        cost: 65.00
    },
    {
        name: 'Restaurante Lago do Holandês',
        category: 'Comidas',
        address: 'Estr. do Fundão, 189 - Fundão, Holambra - SP, 13825-000',
        description: 'Restaurante à beira do lago que serve pratos refinados, com ênfase em frutos do mar e carnes premium. O local oferece uma vista encantadora e um ambiente sofisticado.',
        cost: 110.00
    },
    // Comércios de flores
    {
        name: 'Gardencenter Cidade das Flores',
        category: 'Comércios de flores',
        address: 'Rodovia SP-107, km 29,9 S/N, Holambra - SP, 13825-000',
        description: 'Um dos maiores centros de venda de flores e plantas de Holambra. O local oferece uma vasta gama de flores, plantas ornamentais e produtos de jardinagem.',
        cost: 0.00
    }
];

// Itinerário Padrão baseado no roteiro que você forneceu
const defaultItinerary = {
    1: [
        { name: 'Macena Flores', time: '08:00' },
        { name: 'Studio Sereno Holambra', time: '09:45' },
        { name: 'Bloemen Park', time: '11:00' },
        { name: 'Dona Maura Gastronomia', time: '12:45' },
        { name: 'Museu Histórico de Holambra', time: '14:15' },
        { name: 'Parque Van Gogh', time: '15:30' },
        { name: 'Deck do Amor', time: '16:45' }
    ],
    2: [
        { name: 'Magic Garden Holambra', time: '08:00' },
        { name: 'Grupo Ven Flor - Unidade Rubi', time: '09:45' },
        { name: 'Gardencenter Cidade das Flores', time: '11:00' },
        { name: 'Restaurante Sabor e Arte', time: '12:15' },
        { name: 'Portal do Moinho', time: '13:45' },
        { name: 'Ideia Comestível | Biscoitos Amanteigados', time: '14:30' },
        { name: 'Dolce Flor Sorveteria e Doceria Holambra', time: '15:15' },
        { name: 'A Casa do Lago do Holandês', time: '16:00' },
        { name: 'Expoflora', time: '16:45' } // Opcional, se estiver aberta
    ]
};

// Variáveis
let itinerary = {
    1: [],
    2: []
};
let totalCost = 0.00;

// Elementos do DOM
const activityList = document.getElementById('activityList');
const itineraryDay1 = document.getElementById('itineraryDay1');
const itineraryDay2 = document.getElementById('itineraryDay2');
const totalCostDisplay = document.getElementById('totalCost');
const resetButton = document.getElementById('resetButton'); // Adicione este botão no seu HTML

// Elementos do Modal
let selectedActivityIndex = null;
const timeModal = document.getElementById('timeModal');
const modalForm = document.getElementById('modalForm');
const modalDaySelect = document.getElementById('modalDaySelect');
const modalTimeInput = document.getElementById('modalTimeInput');
const confirmBtn = document.getElementById('confirmBtn');
const closeModalBtn = document.querySelector('.close');

// Eventos para o Modal
closeModalBtn.addEventListener('click', closeModal);
confirmBtn.addEventListener('click', confirmModal);
window.addEventListener('click', (event) => {
    if (event.target == timeModal) {
        closeModal();
    }
});

// Evento para o Botão de Reset
resetButton.addEventListener('click', () => {
    resetToDefaultItinerary();
});

// Funções
function displayActivities() {
    activityList.innerHTML = '';
    activities.forEach((activity, index) => {
        const activityItem = document.createElement('div');
        activityItem.classList.add('activity-item');
        activityItem.setAttribute('data-index', index);

        activityItem.innerHTML = `
            <h4>${activity.name}</h4>
            <p>${activity.description}</p>
            <span class="cost">Custo: R$${activity.cost.toFixed(2)}</span>
        `;

        // Verificar se a atividade está selecionada
        if (isActivityInItinerary(activity.name)) {
            activityItem.classList.add('selected');
        }

        // Evento para abrir o modal
        activityItem.addEventListener('click', () => {
            openModal(index);
        });

        activityList.appendChild(activityItem);
    });
}

function isActivityInItinerary(activityName) {
    return Object.values(itinerary).some(dayActivities =>
        dayActivities.some(activity => activity.name === activityName)
    );
}

function openModal(activityIndex) {
    selectedActivityIndex = activityIndex;
    timeModal.style.display = 'block';
}

function closeModal() {
    timeModal.style.display = 'none';
    selectedActivityIndex = null;
}

function confirmModal() {
    const selectedDay = parseInt(modalDaySelect.value);
    const selectedTime = modalTimeInput.value;
    if (selectedActivityIndex !== null) {
        addActivityToItinerary(selectedActivityIndex, selectedDay, selectedTime);

        closeModal();
    }
}

function addActivityToItinerary(activityIndex, day, time) {
    const activity = activities[activityIndex];

    // Verificar se a atividade já está no itinerário daquele dia
    if (!itinerary[day].some(item => item.name === activity.name)) {
        itinerary[day].push({
            ...activity,
            time: time
        });

        totalCost += activity.cost;
        updateItineraryDisplay();
        updateTotalCost();
        saveItineraryToLocalStorage();
    }
    updateActivitySelectionVisual(activity.name);
}

function removeActivityFromItinerary(day, activityIndex) {
    const activity = itinerary[day][activityIndex];
    if (activity) {
        totalCost -= activity.cost;
        itinerary[day].splice(activityIndex, 1);

        updateItineraryDisplay();
        updateTotalCost();
        saveItineraryToLocalStorage();

        updateActivitySelectionVisual(activity.name);
    }
}

function updateActivitySelectionVisual(activityName) {
    const activityIndex = activities.findIndex(activity => activity.name === activityName);
    const activityItem = document.querySelector(`.activity-item[data-index='${activityIndex}']`);

    if (activityItem) {
        if (isActivityInItinerary(activityName)) {
            activityItem.classList.add('selected');
        } else {
            activityItem.classList.remove('selected');
        }
    }
}

function updateItineraryDisplay() {
    // Limpar conteúdo anterior
    itineraryDay1.innerHTML = '<h3>Dia 1</h3>';
    itineraryDay2.innerHTML = '<h3>Dia 2</h3>';

    // Ordenar atividades por horário para cada dia
    for (let day = 1; day <= 2; day++) {
        itinerary[day].sort((a, b) => a.time.localeCompare(b.time));
    }

    // Exibir atividades para o Dia 1
    itinerary[1].forEach((activity, index) => {
        const activityDisplay = document.createElement('div');
        activityDisplay.classList.add('activity-display');

        activityDisplay.innerHTML = `
            <h4>${activity.name}</h4>
            <p>${activity.description}</p>
            <p class="time">Horário: <strong>${activity.time}</strong></p>
            <p class="cost">Custo: <strong>R$ ${activity.cost.toFixed(2)}</strong></p>
            <button class="remove-btn" data-day="1" data-index="${index}">Remover</button>
        `;

        itineraryDay1.appendChild(activityDisplay);
    });

    // Exibir atividades para o Dia 2
    itinerary[2].forEach((activity, index) => {
        const activityDisplay = document.createElement('div');
        activityDisplay.classList.add('activity-display');

        activityDisplay.innerHTML = `
            <h4>${activity.name}</h4>
            <p>${activity.description}</p>
            <p class="time">Horário: <strong>${activity.time}</strong></p>
            <p class="cost">Custo: <strong>R$ ${activity.cost.toFixed(2)}</strong></p>
            <button class="remove-btn" data-day="2" data-index="${index}">Remover</button>
        `;

        itineraryDay2.appendChild(activityDisplay);
    });

    // Adicionar eventos aos botões de remover
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const day = parseInt(button.getAttribute('data-day'));
            const index = parseInt(button.getAttribute('data-index'));
            removeActivityFromItinerary(day, index);
        });
    });
}

function updateTotalCost() {
    totalCost = 0.00;
    for (let day = 1; day <= 2; day++) {
        itinerary[day].forEach(activity => {
            totalCost += activity.cost;
        });
    }
    totalCostDisplay.innerHTML = `Custo Total Estimado por Pessoa: <strong>R$ ${totalCost.toFixed(2)}</strong>`;
}

// Funções para LocalStorage
function saveItineraryToLocalStorage() {
    localStorage.setItem('itinerary', JSON.stringify(itinerary));
}

function loadItineraryFromLocalStorage() {
    const storedItinerary = localStorage.getItem('itinerary');
    if (storedItinerary) {
        itinerary = JSON.parse(storedItinerary);
    } else {
        // Se não houver itinerário salvo, carregar o padrão
        resetToDefaultItinerary();
    }
    updateItineraryDisplay();
    updateTotalCost();
}

// Resetar para o Itinerário Padrão
function resetToDefaultItinerary() {
    // Limpar itinerário atual
    itinerary = {
        1: [],
        2: []
    };

    // Carregar atividades padrão
    for (let day in defaultItinerary) {
        defaultItinerary[day].forEach(defaultActivity => {
            const activityIndex = activities.findIndex(activity => activity.name === defaultActivity.name);
            if (activityIndex !== -1) {
                const activity = activities[activityIndex];
                itinerary[day].push({
                    ...activity,
                    time: defaultActivity.time
                });
            }
        });
    }

    // Salvar no LocalStorage
    saveItineraryToLocalStorage();

    // Atualizar UI
    updateItineraryDisplay();
    updateTotalCost();
    displayActivities(); // Atualizar visuais de seleção da lista de atividades
}

// Inicializar
window.addEventListener('load', () => {
    loadItineraryFromLocalStorage();
    displayActivities();
});
