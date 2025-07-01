const hoursElement = document.querySelector(".hours");
const dateElement = document.querySelector(".date");
/**
*@param {Date} date
 */
function formatTime(date){
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const isAM = date.getHours < 12;
    return `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")} ${isAM ? "AM" : "PM"}`;
}
/**
 *@param {Date} date
 */
function formatDate(date){
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
}

setInterval(() => {
    const now = new Date();
    hoursElement.textContent = formatTime(now);
    dateElement.textContent = formatDate(now);
},200);

const time_info = document.getElementById("time_info");
const hoverTarget = document.getElementById("time");

hoverTarget.addEventListener('mouseenter', () => {
    time_info.style.display = 'flex';
    time_info.style.justifyContent = 'center';
    time_info.style.alignItems = 'center';
});
hoverTarget.addEventListener('mouseleave', () => {
    time_info.style.display = 'none';
})

const start_popup = document.getElementById("start_popup");
const clickTargetStart = document.getElementById("start");

clickTargetStart.addEventListener('click', () => {
    const isVisible = start_popup.style.display === 'flex';

    if (isVisible) {
        start_popup.style.display = 'none';
        clickTargetStart.classList.remove('active');
    } else {
        start_popup.style.display = 'flex';
        clickTargetStart.classList.add('active');
    }
});

const notewindow = document.getElementById("noteWindow");
const noteicon = document.getElementById("noteIcon");
const startnote=document.getElementById("about_me_start");
const closebtn = document.getElementById("closeBtn");

noteicon.addEventListener("click", () => {
    notewindow.style.display = "flex";
});

startnote.addEventListener("click", () => {
    notewindow.style.display = "flex";
});
closebtn.addEventListener("click", () => {
    notewindow.style.display = "none";
});

const contactwindow = document.getElementById("contact");
const contacticon = document.getElementById("contact_icon");
const contactstart=document.getElementById("contact_start");
const conclosebtn = document.getElementById("contactcloseBtn");

contacticon.addEventListener("click", () => {
    contactwindow.style.display = "flex";
});
contactstart.addEventListener("click", () => {
    contactwindow.style.display = "flex";
});
conclosebtn.addEventListener("click", () => {
    contactwindow.style.display = "none";
});

const galwindow = document.getElementById("gallery");
const galicon = document.getElementById("gallery_icon");
const galstart=document.getElementById("gallery_start");
const galclosebtn = document.getElementById("gallerycloseBtn");

galicon.addEventListener("click", () => {
    galwindow.style.display = "flex";
});
galstart.addEventListener("click", () => {
    galwindow.style.display = "flex";
});
galclosebtn.addEventListener("click", () => {
    galwindow.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
    const didYouKnow = document.getElementById("did_you_know");

    setTimeout(() => {
        didYouKnow.style.display = "flex";
    }, 1000);

    const closeBtn = document.querySelector(".closeBtn");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            didYouKnow.style.display = "none";
        });
    }
});
const folderwindow = document.getElementById("folder");
const foldericon = document.getElementById("folder_icon");
const folderstart=document.getElementById("folder_start");
const folclosebtn = document.getElementById("foldercloseBtn");

foldericon.addEventListener("click", () => {
    folderwindow.style.display = "flex";
});
folderstart.addEventListener("click", () => {
    folderwindow.style.display = "flex";
});
folclosebtn.addEventListener("click", () => {
    folderwindow.style.display = "none";
});

function copyEmail() {
    const emailText = document.getElementById("email").innerText;

    navigator.clipboard.writeText(emailText).then(() => {
        alert("Copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy!", err);
    });
}

const folderWindow= document.getElementById("folder");
const noteWindow = document.getElementById("noteWindow");
const galleryWindow = document.getElementById("gallery");
const contactWindow = document.getElementById("contact");
const mineWindow= document.getElementById("minesweeperWindow");
makeDraggable(folderWindow,"folder_header")
makeDraggable(noteWindow, "noteTitleBar");
makeDraggable(galleryWindow, "gallery_header");
makeDraggable(contactWindow, "contact_header");
makeDraggable(mineWindow,"minesweeperTitleBar")
function makeDraggable(elmnt, headerId) {
    const header = document.getElementById(headerId);
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if (header) {
        header.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        let newTop = elmnt.offsetTop - pos2;
        let newLeft = elmnt.offsetLeft - pos1;

        const topLimit = 10;
        const bottomLimit = 55;
        const leftLimit = 5;
        const rightLimit = 5;

        const maxTop = window.innerHeight - elmnt.offsetHeight - bottomLimit;
        const maxLeft = window.innerWidth - elmnt.offsetWidth - rightLimit;

        if (newTop < topLimit) newTop = topLimit;
        if (newTop > maxTop) newTop = maxTop;
        if (newLeft < leftLimit) newLeft = leftLimit;
        if (newLeft > maxLeft) newLeft = maxLeft;

        elmnt.style.top = newTop + "px";
        elmnt.style.left = newLeft + "px";
    }
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

const hobbieswindow = document.getElementById("hobbies_id");
const hobbiesicon = document.getElementById("hob_select");
const hobclosebtn = document.getElementById("back_hobbies");
const foldercontent = document.getElementById("folder_content");

hobbiesicon.addEventListener("click", () => {
    hobbieswindow.style.display = "flex";
    foldercontent.style.display = "none";
});

hobclosebtn.addEventListener("click", () => {
    hobbieswindow.style.display = "none";
    foldercontent.style.display = "flex";
});

const petswindow = document.getElementById("pets_id");
const petsicon = document.getElementById("pets_select");
const petsclosebtn = document.getElementById("back_pets");

petsicon.addEventListener("click", () => {
    petswindow.style.display = "flex";
    foldercontent.style.display = "none";
});

petsclosebtn.addEventListener("click", () => {
    petswindow.style.display = "none";
    foldercontent.style.display = "flex";
});

const game = document.getElementById('game');
const width = 10;
const height = 10;
const mineCount = 10;
const cells = [];
let gameOver = false;

function createBoard() {
    game.innerHTML = '';
    cells.length = 0;
    gameOver = false;

    game.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    game.style.gridTemplateRows = `repeat(${height}, 1fr)`;

    const minePositions = generateMines();

    for (let i = 0; i < width * height; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;

        if (minePositions.includes(i)) {
            cell.dataset.mine = 'true';
        }

        cell.addEventListener('click', revealCell);
        cell.addEventListener('contextmenu', flagCell);
        game.appendChild(cell);
        cells.push(cell);
    }
}

function generateMines() {
    const mines = new Set();
    while (mines.size < mineCount) {
        const index = Math.floor(Math.random() * width * height);
        mines.add(index);
    }
    return Array.from(mines);
}

function revealCell(e) {
    if (gameOver) return;

    const cell = e.target;
    const index = parseInt(cell.dataset.index);

    if (cell.classList.contains('revealed') || cell.classList.contains('flagged')) {
        return;
    }

    if (cell.dataset.mine === 'true') {
        cell.classList.add('mine');
        cell.innerText = '💣';
        revealAllMines();
        gameOver = true;
        setTimeout(() => {
            alert('Game Over! You hit a mine.');
        }, 50);
    } else {
        cell.classList.add('revealed');
        const count = countAdjacentMines(index);
        if (count > 0) {
            cell.innerText = count;
            cell.classList.add(`num-${count}`);
        } else {
            revealAdjacent(index);
        }
    }
    checkWin();
}

function flagCell(e) {
    e.preventDefault();
    if (gameOver) return;

    const cell = e.target;
    if (cell.classList.contains('revealed')) return;

    cell.classList.toggle('flagged');
    cell.innerText = cell.classList.contains('flagged') ? '🚩' : '';
}

function countAdjacentMines(index) {
    const neighbors = getNeighbors(index);
    return neighbors.filter(i => cells[i].dataset.mine === 'true').length;
}

function getNeighbors(index) {
    const neighbors = [];
    const x = index % width;
    const y = Math.floor(index / width);

    for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
            if (dx === 0 && dy === 0) continue;

            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                neighbors.push(ny * width + nx);
            }
        }
    }
    return neighbors;
}

function revealAdjacent(startIndex) {
    const queue = [startIndex];
    const visited = new Set();

    while (queue.length > 0) {
        const currentIndex = queue.shift();

        if (visited.has(currentIndex)) continue;
        visited.add(currentIndex);

        const cell = cells[currentIndex];

        if (cell.dataset.mine === 'true' || cell.classList.contains('revealed') || cell.classList.contains('flagged')) {
            continue;
        }

        cell.classList.add('revealed');

        const count = countAdjacentMines(currentIndex);
        if (count > 0) {
            cell.innerText = count;
            cell.classList.add(`num-${count}`);
        } else {
            const neighbors = getNeighbors(currentIndex);
            for (let neighborIndex of neighbors) {
                if (!visited.has(neighborIndex)) {
                    queue.push(neighborIndex);
                }
            }
        }
    }
}


function revealAllMines() {
    cells.forEach(cell => {
        if (cell.dataset.mine === 'true') {
            cell.classList.add('mine');
            cell.innerText = '💣';
        }
    });
}

function checkWin() {
    if (gameOver) return;

    let revealedCount = 0;
    let totalCells = width * height;

    cells.forEach(cell => {
        if (cell.classList.contains('revealed') && cell.dataset.mine !== 'true') {
            revealedCount++;
        }
    });

    if (revealedCount === (totalCells - mineCount)) {
        gameOver = true;
        revealAllMines();
        setTimeout(() => {
            alert('Congratulations! You won!');
        }, 50);
    }
}

window.addEventListener('DOMContentLoaded', createBoard);

const minewindow = document.getElementById("minesweeperWindow");
const mineicon = document.getElementById("mine_icon");
const startmine=document.getElementById("mine_start");
const mineclosebtn = document.getElementById("closeGameBtn");

mineicon.addEventListener("click", () => {
    minewindow.style.display = "flex";
});
startmine.addEventListener("click", () => {
    minewindow.style.display = "flex";
});
mineclosebtn.addEventListener("click", () => {
    minewindow.style.display = "none";
});