const container = document.querySelector('#container');
const btn = document.querySelector('#grid-number');
const cardContent = document.querySelector('#card-content');

function makeRows(rows,cols){
    const removeCell = Array.from(document.querySelectorAll('.box'));
    removeCell.forEach(key => key.remove());

    cardContent.setAttribute('style', `grid-template-columns: repeat(${rows}, 2fr); grid-template-rows: repeat(${rows}, 2fr);`);
for(i = 0; i < (rows * cols); i++){
let cell = document.createElement('div');
cardContent.appendChild(cell).className="box";
//cell.style.width = `${cardContent.clientWidth / 16}`;
//cell.style.height = `${cardContent.clientWidth / 16}`;
}
const cell = Array.from(document.querySelectorAll('.box'));
cell.forEach(key => key.addEventListener('mouseover', hoverMouse));
}

function hoverMouse(e){
    e.target.classList.add('shed');
}

function removeGrid(e){

}

container.appendChild(cardContent);
makeRows(16,16);

btn.addEventListener('click', () => {
    const squares = parseInt(prompt("Please enter number of squares per side (Between 1 and 100)"));
    if (squares < 1 || squares > 100 || isNaN(squares)){
        alert("You Have Entered an invalid choice");
    }else{
        makeRows(squares,squares);
    }
  });