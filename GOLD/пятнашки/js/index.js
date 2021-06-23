let area = document.getElementById('area');
let move;

area.addEventListener('click', function (event) {
    move = event.target.innerHTML;
    event.target.innerHTML = 'x';

    if (winner()){
        event.target.innerHTML = '.';
    } else {
        event.target.innerHTML = move;
        console.log(move);
    }

});

function winner() {
    let arrItems = document.getElementsByClassName("area__item");
    let emptyBoxPosition;
    let k = 1;

    const winnerCombination = [
        '1','2','3','4',
        '5','6','7','8',
        '9','10','11','12',
        '13','14','15','.',
    ];

    for(let i = 0; i < arrItems.length; i++){
        if(arrItems[i].innerHTML === '.'){
            emptyBoxPosition = i;
        }
    }

    for(let i = 0; i < arrItems.length; i++){

        if (arrItems[i].innerHTML === 'x') {
            if (i+1 === emptyBoxPosition || i-1 === emptyBoxPosition || i+4 === emptyBoxPosition || i-4 === emptyBoxPosition){
                if (emptyBoxPosition !== 4 && i !== 4 || emptyBoxPosition !== 3 && i !== 3){
                    if (emptyBoxPosition !== 8 && i !== 8 || emptyBoxPosition !== 7 && i !== 7) {
                        if (emptyBoxPosition !== 12 && i !== 12 || emptyBoxPosition !== 11 && i !== 11) {
                            arrItems[emptyBoxPosition].innerHTML = move;

                            for(let z = 0; z < winnerCombination.length; z++){
                                if(arrItems[z].innerHTML === winnerCombination[z]){
                                    k++;
                                    console.log(k);
                                    if (k === 14){
                                        alert("Congrats your win!!!");
                                        location.reload();
                                    }
                                } else {
                                    break;
                                }

                            }
                            k = 1;
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
}