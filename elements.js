function chessBoardBuild() {
    //backend init
    for (let l1 = 1; l1 <= 2; l1++) {
        for (let l2 = 1; l2 <= 8; l2++) {
            PIECESLIST[String(l1) + String(l2)] = new pieces([l1, l2]);
            let peice = PIECESLIST[String(l1) + String(l2)];
            document.getElementById(String(l1) + String(l2)).innerHTML = peice.side + peice.type;
        }
    }
    for (let l1 = 7; l1 <= 8; l1++) {
        for (let l2 = 1; l2 <= 8; l2++) {
            PIECESLIST[String(l1) + String(l2)] = new pieces([l1, l2]);
            let peice = PIECESLIST[String(l1) + String(l2)];
            document.getElementById(String(l1) + String(l2)).innerHTML = peice.side + peice.type;
        }
    }

    //font end build
    for (let l1 = 1; l1 <= 8; l1++) {
        for (let l2 = 1; l2 <= 8; l2++) {
            if ((l1 + l2) % 2 == 0) {
                document.getElementById(`${l1}${l2}`).style.backgroundColor = 'var(--primary-2)';
            }
        }
    }
}

function chessBoardUpdate() {
    let l1, l2;
    for (l1 = 1; l1 <= 8; l1++) {
        for (l2 = 1; l2 <= 8; l2++) {
            if (PIECESLIST[String(l1) + String(l2)] != undefined) {
                let side = PIECESLIST[String(l1) + String(l2)].side;
                let type = PIECESLIST[String(l1) + String(l2)].type;
                document.getElementById(String(l1) + String(l2)).innerHTML = side + type;
            } else document.getElementById(String(l1) + String(l2)).innerHTML = '';
        }
    }
}