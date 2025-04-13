const bindRow = (rootE, data) => {
    rootE.innerHTML += `
        <div class="todo" data-icon=${data.id}>
            <p>${data.title}</p>
            <div class="action">
                <img src="pen.svg" alt="" class="put" data-id=${data.id}>
                <img src="trash.svg" alt="" class="delete" data-id=${data.id}>
            </div>
        </div>
    `;
};

const bindRows = (rootE, rows) => {
    rows.forEach((row) => bindRow(rootE, row));
};

export { bindRows };
