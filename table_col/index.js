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

//házi feladat

const form = document.createElement('form')
form.id = 'form_js'
document.body.appendChild(form)

const h2 = document.createElement('h2')
h2.innerText = 'Javascript form'
form.appendChild(h2)

/*const label1 = document.createElement('label')
label1.innerText = "Költő neve:"
label1.htmlFor = "kolto_nev"
form.appendChild(label1)*/
const label1F = CreateLabel("Költő neve:","kolto_nev")

/*const input1 = document.createElement('input')
input1.id = "kolto_nev"
input1.type = 'text'
form.appendChild(input1)*/
const input1F = CreateInput("kolto_nev",'text',"kolto_nev" )

/*const label2 = document.createElement('label')
label2.innerText = 'Korszak:'
label2.htmlFor = "korszak"
form.appendChild(label2)*/
const label2F = CreateLabel('Korszak:',"korszak")

/*const input2 = document.createElement('input')
input2.id = "korszak"
form.appendChild(input2)*/
const input2F = CreateInput("korszak",'text',"korszak")

/*const label3 = document.createElement('label')
label3.innerText = 'Szerelme:'
label3.htmlFor = "szerelem1"
form.appendChild(label3)*/
const label3F = CreateLabel('Szerelme:','szerelem1')

/*const input3 = document.createElement('input')
input3.id = "szerelem1"
form.appendChild(input3)*/
const input3F = CreateInput('szerelem1','text','szerelem1')

/*const label4 = document.createElement('label')
label4.innerText = 'Szerelme:'
label4.htmlFor = "szerelem1"
form.appendChild(label4)*/
const label4F = CreateLabel('Szerelme:','szerelem1')

/*const input4 = document.createElement('input')
input4.id = "szerelem2"
form.appendChild(input4)*/
const input4F = CreateInput('szerelem2','text','szerelem2')

const button  = document.createElement('button')
button.innerText = 'Hozzáadás'
form.appendChild(button)




function CreateLabel(labeltext, labelfor){

    const brb = Break()
    const label = document.createElement('label')
    label.innerText = labeltext
    label.htmlFor = labelfor
    form.appendChild(label)
    const br = Break()
}

function CreateInput(inputid,inputType,inputName){

    
    const input = document.createElement('input')
    input.id = inputid
    input.type = inputType
    input.name = inputName
    form.appendChild(input)
    const br = Break()
    

}

function Break(){

    const br = document.createElement('br')
    form.appendChild(br)
}

