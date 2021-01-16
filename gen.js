for (let l1 = 8; l1 >= 1; l1--) {
    console.log(`<tr><th>${l1}</th>`)
    for (let l2 = 1; l2 <= 8; l2++) {
        console.log(`<td><button id="${l1}${l2}" onclick="piecesMove('${l1}${l2}')"></button></td>`)
    }
    console.log('</tr>')
}