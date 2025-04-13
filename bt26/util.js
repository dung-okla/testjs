const bindRow = (rootE, data) =>{

    rootE.innerHTML += ` <div class="todo">
    <p>${data.title}</p>
    <div class="action">
        <img src="pen.svg" alt="">
        <img src="trash.svg" alt="">
    </div>`
}

const bindRows =(rootE, rows) =>{
    rows.map(row => bindRow(rootE, row))
}
export{
    bindRows
}