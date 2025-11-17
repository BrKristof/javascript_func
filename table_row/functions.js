/**
 * @typedef {{from:string ,person:string ,piece:string ,piece2:?string ,person2:?string}} CountryWriters
 */

/**
 * 
 * @param {HTMLFormElement} form 
 * @param {string} id 
 * @param {string} labelcontent 
 */
function CreateFormFormat(form,id,labelcontent){

    const div = document.createElement('div')

    const span = document.createElement('span')
    span.classList.add('error')
    

    const label = document.createElement('label')
    label.innerText = labelcontent
    label.htmlFor = id
        
    const input = document.createElement('input')
    input.id = id

    form.appendChild(div)
    Break(div)
    div.appendChild(label)
    Break(div)
    div.appendChild(input)
    Break(div)
    div.appendChild(span)


}

/**
 * 
 * @param {*} where 
 */
function Break(where){
    
    const br = document.createElement('br')
    where.appendChild(br)

}

/**
 * 
 * @param {string} text 
 * @param {} where 
 */
function button(text,where){
    
    const button = document.createElement('button')
    button.innerText = text
    where.appendChild(button)

}

/**
 * 
 * @param {string[]} array 
 */
function renderTableBody(array){

    const innerbody = document.getElementById('tbody')
    innerbody.innerHTML = ""
    

    for (const a of array){

        renderTableRow(innerbody,a) //itt hozzuk letre a sorokat, a for-on beluli valoto kerul a CountryWriters helyére és a cikluson belül lévő body a tbody helyére

    }

}

/**
 * 
 * @param {HTMLTableElement} tbody 
 * @param {*} CountryWriters 
 */
function renderTableRow(tbody,CountryWriters)// CountryWriters ami eltárolja az adatokak 
{

    const tr = document.createElement('tr')
    tbody.appendChild(tr)

    const td = createCell('td',CountryWriters.from,tr)

    td.addEventListener("click",function(e){
    /**
     * @type {HTMLTableCellElement}
     */
    const i = e.target
            
    const row = i.parentElement
    const tbody = row.parentElement

    const marked = tbody.querySelector('.marked')

    if(marked != Null){
        marked.classList.remove(marked)
    }
    marked.classList.add()

    i.classList.add('marked')

    })

    const td2 = createCell('td',CountryWriters.person,tr)
    const td3 = createCell('td',CountryWriters.piece,tr)

    if(CountryWriters.person2 != undefined && CountryWriters.piece2 != undefined){

        const ptr = document.createElement('tr')
        tbody.appendChild(ptr)

        const td4 = createCell('td',CountryWriters.person2,ptr)
        const td5 = createCell('td',CountryWriters.piece2,ptr)

        td.rowSpan = '2'
    }
}

/**
 * 
 * letrehoz egy cellát és visszatér vele
 * 
 * @param {"td" | "th"} celltype 
 * @param {string} cellcontent 
 * @param {HTMLTableRowElement} parentrow 
 * 
 * @returns {HTMLTableCellElement}
 */
function createCell(celltype,cellcontent,parentrow){

    const cell = document.createElement(celltype)
    cell.innerText = cellcontent
    parentrow.appendChild(cell)

    return cell
}

/**
 * @param {HTMLTableElement} table 
 * @param {string[]} header_list 
 */
function headCreate(table,header_list){
    
    const thead = document.createElement('thead')
    table.appendChild(thead)

    const tr = document.createElement('tr')
    for(const a of header_list){

        const th = createCell('th',a,tr)
        tr.appendChild(th)
    }
    thead.appendChild(tr)
    
    table.appendChild(thead)

}

function htmlFormEventListener(e){

    e.preventDefault()
    /**
     * @type {HTMLFormElement}
     */
    const form = e.target

    /**
     * @type {HTMLInputElement}
     */
    const n = form.querySelector('#nemzetiseg')
    /**
     * @type {string}
     */
    const nvalue = n.value

    /**
     * @type {HTMLInputElement}
     */
    const a = form.querySelector('#mu1')
        /**
     * @type {string}
     */
    const avalue = a.value

    /**
     * @type {HTMLInputElement}
     */
    const p = form.querySelector('#nemzetiseg')
        /**
     * @type {string}
     */
    const pvalue = p.value

    /**
     * @type {HTMLInputElement}
     */
    const a2 = form.querySelector('#szerzo2')
        /**
     * @type {string}
     */
    const a2value = a2.value

    /**
     * @type {HTMLInputElement}
     */
    const p2= form.querySelector('#mu2')
        /**
     * @type {string}
     */
    const p2value = p2.value


    /**
     * @type {CountryWriters}
     */
    const obj  = {}
    obj.from  = nvalue
    obj.a  = avalue
    obj.p = pvalue
    obj.a2 = a2value
    obj.p2 = p2value

    const tbody = document.getElementById('body')

    renderTableRow(tbody,obj)
}

/**
 * 
 * @param {HTMLInputElement} inputField1 
 * @param {HTMLInputElement} inputField2 
 * @param {HTMLInputElement} inputField3 
 */
function validateFields(inputField1,inputField2,inputField3){

    const valid = true
    if(inputField1.value == ""){
        
        const parentDiv = inputField1.parentElement;
        const error = parentDiv.querySelector('.error')
        error.innerText = 'Mező kitöltése kötelező'

        valid = false
    }
    if(inputField2.value == ""){
        
        const parentDiv = inputField1.parentElement;
        const error = parentDiv.querySelector('.error')
        error.innerText = 'Mező kitöltése kötelező'

        valid = false
    }
    if(inputField3.value == ""){
        
        const parentDiv = inputField1.parentElement;
        const error = parentDiv.querySelector('.error')
        error.innerText = 'Mező kitöltése kötelező'

        valid = false
    }


    return valid

}

/**
 * 
 * @param {string} id 
 * @param {string[]} array 
 */
function generateForm(id,array){

    const form_js = document.createElement('form')
    form_js.id = id

    for(const a of array){

        CreateFormFormat(id,a.id,a.labelcontent)
    }

    const button = button(id,form)

    return form

}

/**
 * 
 * @param {string[]} array 
 * @param {string} tbodyId 
 */
function generateTable(array,tbodyId){

    const table = document.createElement('table')

    headCreate(table,array)
    const tbody = document.createElement('tbody')
    tbody.id = tbodyId

    
    document.body.appendChild(table)
}