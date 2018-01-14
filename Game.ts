{
let playersign ="X";
let com1sign="O";
let AITurn=false;

let btn0=document.getElementById('0');
btn0.addEventListener("click",(e:Event)=>changeValue(0));
let btn1=document.getElementById('1');
btn0.addEventListener("click",(e:Event)=>changeValue(1));
let btn2=document.getElementById('2');
btn0.addEventListener("click",(e:Event)=>changeValue(2));
let btn3=document.getElementById('3');
btn0.addEventListener("click",(e:Event)=>changeValue(3));
let btn4=document.getElementById('4');
btn0.addEventListener("click",(e:Event)=>changeValue(4));
let btn5=document.getElementById('5');
btn0.addEventListener("click",(e:Event)=>changeValue(5));
let btn6=document.getElementById('6');
btn0.addEventListener("click",(e:Event)=>changeValue(6));
let btn7=document.getElementById('7');
btn0.addEventListener("click",(e:Event)=>changeValue(7));
let btn8=document.getElementById('8');
btn0.addEventListener("click",(e:Event)=>changeValue(8));



function MAIN (){

    if(FullFields() === false){
        ThreeWins();
        if(AITurn === false){
            KITurn();
        }
    }

    location.reload();

}

function changeValue(btnnumber){
    if(document.getElementById(''+btnnumber).nodeValue === " "){
        document.getElementById(''+btnnumber).nodeValue = playersign;
    }
    MAIN();
}

function KITurn(){
     AITurn=true;

    let column =Math.floor(Math.random()*4);
    let row =Math.floor(Math.random()*4);

    while(AITurn === true){

        for(let i=0;i<3;i++){

            for(let j=0;j<3;j++){
                if(i === row && j === column){
                    let add=0;
    
                    switch(i){
                        case 1: add=add+3;break;
                        case 2: add=add+6;break;
                    }
        
                    let col = document.getElementById(''+(row+column)).nodeValue;
                    
                    if(col.charAt(0) !== playersign && col.charAt(0) !== com1sign){
                        AITurn=false;
                        col=com1sign;
                    }
                }
        
            }
    
        }

    }

}

function FullFields (){
    
    for(let i=0;i<3;i++){

        for(let j=0;j<3;j++){
            
            let add=0;

            switch(i){
                case 1: add=add+3;break;
                case 2: add=add+6;break;
            }

            let column = document.getElementById(''+(j+add)).nodeValue;
            
            if(column.charAt(0) !== playersign && column.charAt(0) !== com1sign){
                return false;
            }

        }

    }

    return true;
};

    function ThreeWins(){
        let counter=0;

        let ar : String[][];

        for(let i=0;i<3;i++){
            for( let j=0;j<3;j++){

                let add =0;
                switch(i){
                    case 1: add=add+3;break;
                    case 2: add=add +6;break;
                };

                ar[i][j]=document.getElementById(''+(j+add)).nodeValue;
            }
        }


        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){

                //checking for left upper corner

                if(i===0 && j===0){

                    if(ar[i][j]===ar[i+1][j+1]){
                        if(ar[i][j] === ar[i+2][j+2]){
                            if(ar[i][j] === "X"){
                                console.log('Player1 won');
                            }else if(ar[i][j] === "O"){
                                console.log('Computer1 won');
                            }
                        }
                    }

                    if(ar[i][j]===ar[i+1][j]){
                        if(ar[i][j]===ar[i+2][j]){
                            if(ar[i][j] === "X"){
                                console.log('Player1 won');
                            }else if(ar[i][j] === "O"){
                                console.log('Computer1 won');
                            }
                        }
                    }

                    if(ar[i][j] === ar[i][j+1]){
                        if(ar[i][j] === ar[i][j+2]){
                            if(ar[i][j] === "X"){
                                console.log('Player1 won');
                            }else if(ar[i][j] === "O"){
                                console.log('Computer1 won');
                            }
                        }
                    }

                }

                //checking for right upper corner

                if(i === 0 && j===2){
                    if(ar[i][j]===ar[i+1][j-1]){
                        if(ar[i][j] === ar[i+2][j-2]){
                            if(ar[i][j] === "X"){
                                console.log('Player1 won');
                            }else if(ar[i][j] === "O"){
                                console.log('Computer1 won');
                            }
                        }
                    }

                    if(ar[i][j]===ar[i+1][j]){
                        if(ar[i][j]===ar[i+2][j]){
                            if(ar[i][j] === "X"){
                                console.log('Player1 won');
                            }else if(ar[i][j] === "O"){
                                console.log('Computer1 won');
                            }
                        }
                    }

                    if(ar[i][j] === ar[i][j-1]){
                        if(ar[i][j] === ar[i][j-2]){
                            if(ar[i][j] === "X"){
                                console.log('Player1 won');
                            }else if(ar[i][j] === "O"){
                                console.log('Computer1 won');
                            }
                        }
                    }
                }

                //checking for left lower corner

                if(i === 2 && j===0){
                    if(ar[i][j]===ar[i-1][j+1]){
                        if(ar[i][j] === ar[i-2][j+2]){
                            if(ar[i][j] === "X"){
                                console.log('Player1 won');
                            }else if(ar[i][j] === "O"){
                                console.log('Computer1 won');
                            }
                        }
                    }

                    if(ar[i][j]===ar[i-1][j]){
                        if(ar[i][j]===ar[i-2][j]){
                            if(ar[i][j] === "X"){
                                console.log('Player1 won');
                            }else if(ar[i][j] === "O"){
                                console.log('Computer1 won');
                            }
                        }
                    }

                    if(ar[i][j] === ar[i][j+1]){
                        if(ar[i][j] === ar[i][j+2]){
                            if(ar[i][j] === "X"){
                                console.log('Player1 won');
                            }else if(ar[i][j] === "O"){
                                console.log('Computer1 won');
                            }
                        }
                    }
                }

                //checking for right lower corner

                if(i === 2 && j===2){
                    if(ar[i][j]===ar[i-1][j-1]){
                        if(ar[i][j] === ar[i-2][j-2]){
                            if(ar[i][j] === "X"){
                                console.log('Player1 won');
                            }else if(ar[i][j] === "O"){
                                console.log('Computer1 won');
                            }
                        }
                    }

                    if(ar[i][j]===ar[i-1][j]){
                        if(ar[i][j]===ar[i-2][j]){
                            if(ar[i][j] === "X"){
                                console.log('Player1 won');
                            }else if(ar[i][j] === "O"){
                                console.log('Computer1 won');
                            }
                        }
                    }

                    if(ar[i][j] === ar[i][j-1]){
                        if(ar[i][j] === ar[i][j-2]){
                            if(ar[i][j] === "X"){
                                console.log('Player1 won');
                            }else if(ar[i][j] === "O"){
                                console.log('Computer1 won');
                            }
                        }
                    }
                }

                //checking for center

                if(i === 1 && j === 1){

                    //checking for left to right
                    if(ar[i][j] === ar[i][j-1]){
                        if(ar[i][j] === ar[i][j+1]){
                            if(ar[i][j] === "X"){
                                console.log('Player1 won');
                            }else if(ar[i][j] === "O"){
                                console.log('Computer1 won');
                            }
                        }
                    }

                    //checking for up to down
                    if(ar[i][j] === ar[i-1][j]){
                        if(ar[i][j] === ar[i+1][j]){
                            if(ar[i][j] === "X"){
                                console.log('Player1 won');
                            }else if(ar[i][j] === "O"){
                                console.log('Computer1 won');
                            }
                        }
                    }

                }


            }
        }

    };
};
