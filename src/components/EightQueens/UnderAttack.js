
export function underAttack(position) {
    let attacked = [];
    let positionArray = Object.keys(position);
    Object.keys(position).forEach(function(square) {
        let paths = getQueenPaths(square);
        if (positionArray.some(r => paths.indexOf(r) >= 0)) {
            attacked.push(square);
        }
    });

    return attacked;
}

export function attackedSquares(position) {
    let attackedSquares = [];
    Object.keys(position).forEach(function(square) {
        getQueenPaths(square).forEach(function(square) {
            if (attackedSquares.indexOf(square) === -1) {
                attackedSquares.push(square);
            }
        });
    });

    return attackedSquares;
}

export function getQueenPaths(square) {
    const col = square.substr(0,1); 
    const row = parseInt(square.substr(1,1)); 

    let queenPaths = [];
    let i;

    for (i = 1; i <= 8; i++) { 
        if (i !== row) {
            queenPaths.push([col] + i);
        }
    }

    for (i = 1; i <= 8; i++) { 
        if (numberToAlpha(i) !== col) {
            queenPaths.push(numberToAlpha(i) + row);
        }
    }

    if (col !== 'h' && row !== 8) { 
        let colWalk = col;
        let rowStart = row + 1;
        for (let rowWalk = rowStart; rowWalk <= 8; rowWalk++) {
            colWalk = incrementAlpha(colWalk);
            if (colWalk === 'i') {
                break;
            }
            queenPaths.push(colWalk + rowWalk);
        }
    }

    if (col !== 'a' && row !== 8) { 
        let colWalk = col;
        let rowStart = row + 1;
        for (let rowWalk = rowStart; rowWalk <= 8; rowWalk++) {
            colWalk = decrementAlpha(colWalk);
            if (colWalk === '`') { 
                break;
            }
            queenPaths.push(colWalk + rowWalk);
        }
    }

    if (col !== 'h' && row !== 1) { 
        let colWalk = col;
        let rowStart = row - 1;
        for (let rowWalk = rowStart; rowWalk >= 1; rowWalk--) {
            colWalk = incrementAlpha(colWalk);
            if (colWalk === 'i') {
                break;
            }
            queenPaths.push(colWalk + rowWalk);
        }
    }

    if (col !== 'a' && row !== 1) { 
        let colWalk = col;
        let rowStart = row - 1;
        for (let rowWalk = rowStart; rowWalk >= 1; rowWalk--) {
            colWalk = decrementAlpha(colWalk);
            if (colWalk === '`') {
                break;
            }
            queenPaths.push(colWalk + rowWalk);
        }
    }

    return queenPaths;
}

export function numberToAlpha(number) {
    switch (number) {
        case 1: return 'a';
        case 2: return 'b';
        case 3: return 'c';
        case 4: return 'd';
        case 5: return 'e';
        case 6: return 'f';
        case 7: return 'g';
        case 8: return 'h';
        default: return ''; 
    }
}

export function incrementAlpha(alpha) {
    return String.fromCharCode(alpha.charCodeAt(0) + 1);
}

export function decrementAlpha(alpha) {
    return String.fromCharCode(alpha.charCodeAt(0) - 1);
}