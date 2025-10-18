const arr = [
    {
        name: 'Balassi Bálint',
        time:'reformáció',
        interest1:'Losonczy Anna',
        interest2:'Dobó Krisztina',
    },
    {
        name: 'Csokonai Vitéz Mihály',
        time: 'felvilágosodá',
        interest1: 'Vajda Juliána',
    },
    {
        name: 'Petőfi Sándor',
        time: 'magyar romantika',
        interest1: 'Mednyánszky Berta',
        interest2: 'Szendrey Júlia',
    },
    {
        name: 'Ady Endre',
        time: '20. század',
        interest1: 'Léda',
        interest2: 'Csinszka',
    }

]



const table = document.createElement('table')

document.body.appendChild(table)

const thead = document.createElement('thead')
table.appendChild(thead)

const tr = document.createElement('tr')
thead.appendChild(tr)


th = CreateCellElement('th','Szerző neve', tr)
th2 = CreateCellElement('th','Korszak',tr)
th3 = CreateCellElement('th','Szerelmek',tr)

const tbody = document.createElement('tbody')
table.appendChild(tbody)

for (const a of arr){

    const tr2 = document.createElement('tr')
    tbody.appendChild(tr2)

    td = CreateCellElement('td',a.name, tr2)
    td2 = CreateCellElement('td',a.time, tr2)
    td3 = CreateCellElement('td',a.interest1, tr2)

    if(a.interest2 != undefined){

        td4 = CreateCellElement('td',a.interest2, tr2)

    }
    else{
        td3.colSpan = "2" // return cell 
        th3.colSpan = "2"
    }
    


}

/**
 * @param {string} celltype 
 * @param {string} cellcontent 
 * @param {HTMLTableRowElement} cellrow
 * @returns {HTMLTableCellElement}
 */
function CreateCellElement(celltype,cellcontent,cellrow){

    const cell = document.createElement(celltype)
    cell.innerText = cellcontent
    cellrow.appendChild(cell)

    return cell // visszatér az adott cellával igy tudjuk formázni/módosítani
}
