roll = document.getElementById('rollButton');
roll.addEventListener('click', rollTheDice);

function rollTheDice(){
    diceSelector = document.getElementById('diceSelect').value;
    numOfDice = document.getElementById('numOfDice').value;
    rollResult = document.getElementById('output');
    // D4 Rolls
    if (diceSelector == 'd4' && numOfDice == '1'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(4));
    }
    if (diceSelector == 'd4' && numOfDice == '2'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(4)) + ' ' + Math.ceil(Math.random() * Math.floor(4));
    }
    if (diceSelector == 'd4' && numOfDice == '3'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(4)) + ' ' + Math.ceil(Math.random() * Math.floor(4))  + ' ' + Math.ceil(Math.random() * Math.floor(4));
    }
    if (diceSelector == 'd4' && numOfDice == '4'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(4)) + ' ' + Math.ceil(Math.random() * Math.floor(4))  + ' ' + Math.ceil(Math.random() * Math.floor(4))  + ' ' + Math.ceil(Math.random() * Math.floor(4));
    }
    // D6 Rolls
    if (diceSelector == 'd6'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(6));
    }
    if (diceSelector == 'd6' && numOfDice == '2'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(6)) + ' ' + Math.ceil(Math.random() * Math.floor(6));
    }
    if (diceSelector == 'd6' && numOfDice == '3'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(6)) + ' ' + Math.ceil(Math.random() * Math.floor(6))  + ' ' + Math.ceil(Math.random() * Math.floor(6));
    }
    if (diceSelector == 'd6' && numOfDice == '4'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(6)) + ' ' + Math.ceil(Math.random() * Math.floor(6))  + ' ' + Math.ceil(Math.random() * Math.floor(6))  + ' ' + Math.ceil(Math.random() * Math.floor(6));
    }
    // D8 Rolls
    if (diceSelector == 'd8'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(8));
    }
    if (diceSelector == 'd8' && numOfDice == '2'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(8)) + ' ' + Math.ceil(Math.random() * Math.floor(8));
    }
    if (diceSelector == 'd8' && numOfDice == '3'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(8)) + ' ' + Math.ceil(Math.random() * Math.floor(8))  + ' ' + Math.ceil(Math.random() * Math.floor(8));
    }
    if (diceSelector == 'd8' && numOfDice == '4'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(8)) + ' ' + Math.ceil(Math.random() * Math.floor(8))  + ' ' + Math.ceil(Math.random() * Math.floor(8))  + ' ' + Math.ceil(Math.random() * Math.floor(8));
    }
    // D10 Rolls
    if (diceSelector == 'd10'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(10));
    }
    if (diceSelector == 'd10' && numOfDice == '2'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(10)) + ' ' + Math.ceil(Math.random() * Math.floor(10));
    }
    if (diceSelector == 'd10' && numOfDice == '3'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(10)) + ' ' + Math.ceil(Math.random() * Math.floor(10))  + ' ' + Math.ceil(Math.random() * Math.floor(10));
    }
    if (diceSelector == 'd10' && numOfDice == '4'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(10)) + ' ' + Math.ceil(Math.random() * Math.floor(10))  + ' ' + Math.ceil(Math.random() * Math.floor(10))  + ' ' + Math.ceil(Math.random() * Math.floor(10));
    }
    // D12 Rolls
    if (diceSelector == 'd12'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(12));
    }
    if (diceSelector == 'd12' && numOfDice == '2'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(12)) + ' ' + Math.ceil(Math.random() * Math.floor(12));
    }
    if (diceSelector == 'd12' && numOfDice == '3'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(12)) + ' ' + Math.ceil(Math.random() * Math.floor(12))  + ' ' + Math.ceil(Math.random() * Math.floor(12));
    }
    if (diceSelector == 'd12' && numOfDice == '4'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(12)) + ' ' + Math.ceil(Math.random() * Math.floor(12))  + ' ' + Math.ceil(Math.random() * Math.floor(12))  + ' ' + Math.ceil(Math.random() * Math.floor(12));
    }
    // D20 Rolls (Need to add a bonus string for critical hits)
    if (diceSelector == 'd20'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(20));
    }
    if (diceSelector == 'd20' && numOfDice == '2'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(20)) + ' ' + Math.ceil(Math.random() * Math.floor(20));
    }
    if (diceSelector == 'd20' && numOfDice == '3'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(20)) + ' ' + Math.ceil(Math.random() * Math.floor(20))  + ' ' + Math.ceil(Math.random() * Math.floor(20));
    }
    if (diceSelector == 'd20' && numOfDice == '4'){
        rollResult.innerHTML = 'You rolled: ' + Math.ceil(Math.random() * Math.floor(20)) + ' ' + Math.ceil(Math.random() * Math.floor(20))  + ' ' + Math.ceil(Math.random() * Math.floor(20))  + ' ' + Math.ceil(Math.random() * Math.floor(20));
    }
}