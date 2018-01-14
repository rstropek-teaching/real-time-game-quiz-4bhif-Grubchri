{
    var playersign_1 = "X";
    var com1sign_1 = "O";
    var AITurn_1 = false;
    var btn0 = document.getElementById('0');
    btn0.addEventListener("click", function (e) { return changeValue(0); });
    var btn1 = document.getElementById('1');
    btn0.addEventListener("click", function (e) { return changeValue(1); });
    var btn2 = document.getElementById('2');
    btn0.addEventListener("click", function (e) { return changeValue(2); });
    var btn3 = document.getElementById('3');
    btn0.addEventListener("click", function (e) { return changeValue(3); });
    var btn4 = document.getElementById('4');
    btn0.addEventListener("click", function (e) { return changeValue(4); });
    var btn5 = document.getElementById('5');
    btn0.addEventListener("click", function (e) { return changeValue(5); });
    var btn6 = document.getElementById('6');
    btn0.addEventListener("click", function (e) { return changeValue(6); });
    var btn7 = document.getElementById('7');
    btn0.addEventListener("click", function (e) { return changeValue(7); });
    var btn8 = document.getElementById('8');
    btn0.addEventListener("click", function (e) { return changeValue(8); });
    function MAIN() {
        if (FullFields() === false) {
            ThreeWins();
            if (AITurn_1 === false) {
                KITurn();
            }
        }
        location.reload();
    }
    function changeValue(btnnumber) {
        if (document.getElementById('' + btnnumber).nodeValue === " ") {
            document.getElementById('' + btnnumber).nodeValue = playersign_1;
        }
        MAIN();
    }
    function KITurn() {
        AITurn_1 = true;
        var column = Math.floor(Math.random() * 4);
        var row = Math.floor(Math.random() * 4);
        while (AITurn_1 === true) {
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    if (i === row && j === column) {
                        var add = 0;
                        switch (i) {
                            case 1:
                                add = add + 3;
                                break;
                            case 2:
                                add = add + 6;
                                break;
                        }
                        var col = document.getElementById('' + (row + column)).nodeValue;
                        if (col.charAt(0) !== playersign_1 && col.charAt(0) !== com1sign_1) {
                            AITurn_1 = false;
                            col = com1sign_1;
                        }
                    }
                }
            }
        }
    }
    function FullFields() {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                var add = 0;
                switch (i) {
                    case 1:
                        add = add + 3;
                        break;
                    case 2:
                        add = add + 6;
                        break;
                }
                var column = document.getElementById('' + (j + add)).nodeValue;
                if (column.charAt(0) !== playersign_1 && column.charAt(0) !== com1sign_1) {
                    return false;
                }
            }
        }
        return true;
    }
    ;
    function ThreeWins() {
        var counter = 0;
        var ar;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                var add = 0;
                switch (i) {
                    case 1:
                        add = add + 3;
                        break;
                    case 2:
                        add = add + 6;
                        break;
                }
                ;
                ar[i][j] = document.getElementById('' + (j + add)).nodeValue;
            }
        }
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                //checking for left upper corner
                if (i === 0 && j === 0) {
                    if (ar[i][j] === ar[i + 1][j + 1]) {
                        if (ar[i][j] === ar[i + 2][j + 2]) {
                            if (ar[i][j] === "X") {
                                console.log('Player1 won');
                            }
                            else if (ar[i][j] === "O") {
                                console.log('Computer1 won');
                            }
                        }
                    }
                    if (ar[i][j] === ar[i + 1][j]) {
                        if (ar[i][j] === ar[i + 2][j]) {
                            if (ar[i][j] === "X") {
                                console.log('Player1 won');
                            }
                            else if (ar[i][j] === "O") {
                                console.log('Computer1 won');
                            }
                        }
                    }
                    if (ar[i][j] === ar[i][j + 1]) {
                        if (ar[i][j] === ar[i][j + 2]) {
                            if (ar[i][j] === "X") {
                                console.log('Player1 won');
                            }
                            else if (ar[i][j] === "O") {
                                console.log('Computer1 won');
                            }
                        }
                    }
                }
                //checking for right upper corner
                if (i === 0 && j === 2) {
                    if (ar[i][j] === ar[i + 1][j - 1]) {
                        if (ar[i][j] === ar[i + 2][j - 2]) {
                            if (ar[i][j] === "X") {
                                console.log('Player1 won');
                            }
                            else if (ar[i][j] === "O") {
                                console.log('Computer1 won');
                            }
                        }
                    }
                    if (ar[i][j] === ar[i + 1][j]) {
                        if (ar[i][j] === ar[i + 2][j]) {
                            if (ar[i][j] === "X") {
                                console.log('Player1 won');
                            }
                            else if (ar[i][j] === "O") {
                                console.log('Computer1 won');
                            }
                        }
                    }
                    if (ar[i][j] === ar[i][j - 1]) {
                        if (ar[i][j] === ar[i][j - 2]) {
                            if (ar[i][j] === "X") {
                                console.log('Player1 won');
                            }
                            else if (ar[i][j] === "O") {
                                console.log('Computer1 won');
                            }
                        }
                    }
                }
                //checking for left lower corner
                if (i === 2 && j === 0) {
                    if (ar[i][j] === ar[i - 1][j + 1]) {
                        if (ar[i][j] === ar[i - 2][j + 2]) {
                            if (ar[i][j] === "X") {
                                console.log('Player1 won');
                            }
                            else if (ar[i][j] === "O") {
                                console.log('Computer1 won');
                            }
                        }
                    }
                    if (ar[i][j] === ar[i - 1][j]) {
                        if (ar[i][j] === ar[i - 2][j]) {
                            if (ar[i][j] === "X") {
                                console.log('Player1 won');
                            }
                            else if (ar[i][j] === "O") {
                                console.log('Computer1 won');
                            }
                        }
                    }
                    if (ar[i][j] === ar[i][j + 1]) {
                        if (ar[i][j] === ar[i][j + 2]) {
                            if (ar[i][j] === "X") {
                                console.log('Player1 won');
                            }
                            else if (ar[i][j] === "O") {
                                console.log('Computer1 won');
                            }
                        }
                    }
                }
                //checking for right lower corner
                if (i === 2 && j === 2) {
                    if (ar[i][j] === ar[i - 1][j - 1]) {
                        if (ar[i][j] === ar[i - 2][j - 2]) {
                            if (ar[i][j] === "X") {
                                console.log('Player1 won');
                            }
                            else if (ar[i][j] === "O") {
                                console.log('Computer1 won');
                            }
                        }
                    }
                    if (ar[i][j] === ar[i - 1][j]) {
                        if (ar[i][j] === ar[i - 2][j]) {
                            if (ar[i][j] === "X") {
                                console.log('Player1 won');
                            }
                            else if (ar[i][j] === "O") {
                                console.log('Computer1 won');
                            }
                        }
                    }
                    if (ar[i][j] === ar[i][j - 1]) {
                        if (ar[i][j] === ar[i][j - 2]) {
                            if (ar[i][j] === "X") {
                                console.log('Player1 won');
                            }
                            else if (ar[i][j] === "O") {
                                console.log('Computer1 won');
                            }
                        }
                    }
                }
                //checking for center
                if (i === 1 && j === 1) {
                    //checking for left to right
                    if (ar[i][j] === ar[i][j - 1]) {
                        if (ar[i][j] === ar[i][j + 1]) {
                            if (ar[i][j] === "X") {
                                console.log('Player1 won');
                            }
                            else if (ar[i][j] === "O") {
                                console.log('Computer1 won');
                            }
                        }
                    }
                    //checking for up to down
                    if (ar[i][j] === ar[i - 1][j]) {
                        if (ar[i][j] === ar[i + 1][j]) {
                            if (ar[i][j] === "X") {
                                console.log('Player1 won');
                            }
                            else if (ar[i][j] === "O") {
                                console.log('Computer1 won');
                            }
                        }
                    }
                }
            }
        }
    }
    ;
}
;
