let PIECESLIST = {};
let MOVE = 0

// w: white; b: black
// k: king; q: queen
// n: knight; r: rock; b: bishop; p: pawn
// Cordnate system: [row, cel] (number)
class pieces {
    constructor(pos) {
        this.pos = pos;
        if (this.pos[0] <= 2) this.side = 'w'
        else this.side = 'b';

        if (this.pos[0] == 2 || this.pos[0] == 7) this.type = 'p'
        else {
            switch (this.pos[1]) {
                case 1:
                case 8:
                    this.type = 'r' //rock
                    break;
                case 2:
                case 7:
                    this.type = 'n' //knight
                    break;
                case 3:
                case 6:
                    this.type = 'b' //bishop
                    break;
                case 4:
                    this.type = 'q' //queen @ d col
                    break;
                case 5:
                    this.type = 'k' //king
                    break;
            }
        }
    }
    move(newPos) {
        try { if (PIECESLIST[newPos].side == this.side) return } catch (error) {};


        switch (this.type) {

            case 'k':
                if (Math.abs(this.pos[0] - newPos[0]) == 1 ||
                    Math.abs(this.pos[1] - newPos[1]) == 1) {} else return
                break;
            case 'q':
                if (Math.abs(this.pos[0] - newPos[0]) == Math.abs(this.pos[1] - newPos[1]) ||
                    (Math.abs(this.pos[0] - newPos[0]) == 0 && Math.abs(this.pos[1] - newPos[1]) != 0) ||
                    (Math.abs(this.pos[0] - newPos[0]) != 0 && Math.abs(this.pos[1] - newPos[1]) == 0)) {} else return
                break;
            case 'r':
                if ((Math.abs(this.pos[0] - newPos[0]) == 0 && Math.abs(this.pos[1] - newPos[1]) != 0) ||
                    (Math.abs(this.pos[0] - newPos[0]) != 0 && Math.abs(this.pos[1] - newPos[1]) == 0)) {} else return
                break;
            case 'b':
                if (Math.abs(this.pos[0] - newPos[0]) == Math.abs(this.pos[1] - newPos[1])) {} else return
                break;
            case 'n':
                if ((Math.abs(this.pos[0] - newPos[0]) == 1 && Math.abs(this.pos[1] - newPos[1]) == 2) ||
                    (Math.abs(this.pos[0] - newPos[0]) == 2 && Math.abs(this.pos[1] - newPos[1]) == 1)) {} else return
                break;
            case 'p':
                if (((this.pos[0] == 2 || this.pos[0] == 7) &&
                        Math.abs(this.pos[0] - newPos[0]) == 2 && this.pos[1] == newPos[1]) ||
                    (Math.abs(this.pos[0] - newPos[0]) == 1 && Math.abs(this.pos[1] - newPos[1]) == 1 &&
                        PIECESLIST[newPos] != undefined) ||
                    (Math.abs(this.pos[0] - newPos[0]) == 1 && this.pos[1] == newPos[1] &&
                        PIECESLIST[newPos] == undefined)) {} else return
                break;
        }
        // if correct
        cutObject(String(this.pos[0]) + String(this.pos[1]),
            String(newPos[0]) + String(newPos[1]));
    }
}

function cutObject(old, newO) {
    PIECESLIST[newO] = PIECESLIST[old];
    PIECESLIST[newO].pos[0] = parseInt(newO[0]);
    PIECESLIST[newO].pos[1] = parseInt(newO[1]);
    PIECESLIST[old] = undefined;
    chessBoardUpdate()
}


function piecesMove(pos) {
    if (document.getElementById('moveSelected').innerHTML == 'none') {
        document.getElementById('moveSelected').innerHTML = pos;
        return
    }
    // If start pos already made
    let oldPos = document.getElementById('moveSelected').innerHTML;
    // document.getElementById('moveSelected').innerHTML = oldPos + ' -> ' + pos;

    PIECESLIST[oldPos].move(pos);
    document.getElementById('moveSelected').innerHTML = 'none';
}