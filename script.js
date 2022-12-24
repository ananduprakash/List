const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const topTeams = [
'Brazil',
'Argentina',
'France',
'Belgium',
'England',
'Netherlands',
'Croatia',
'Italy',
'Portugal',
'Spain'
];

//Store list items
const listItems = [];

let dragStartIndex;

createList();

//Insert list items into DOM
function createList(){
    [...topTeams]
    .map(a => ({ value:a, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((team, index) => {
        const listItem = document.createElement('li');

        listItem.setAttribute('data-index', index);

        listItem.innerHTML=`
            <span class="number">${index + 1}</span>
            <div class="draggable" draggable="true">
                <p class="team-name">${team}</p>
                <i class="fas fa-grip-lines"></i>
            </div>
        `;

        listItems.push(listItem);

        draggable_list.appendChild(listItem);
    });
}