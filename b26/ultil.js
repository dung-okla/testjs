const bindRow = (rootE, data) =>{

    rootE.innerHTML += `  <div class="job-items">
    <div>${data}</div>
    <div class="job-action">
        <button>update</button>
        <button>delete</button>
    </div>
</div>`
}

const bindRows =(rootE, rows) =>{
    rows.map(row => bindRow(rootE, row))
}
export{
    bindRows
}