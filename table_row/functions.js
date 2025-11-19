/**
 * @typedef {{from:string ,person:string ,piece:string ,piece2:?string ,person2:?string}} CountryWriters
 */
/**
 * @typedef 
 */

/**
 * 
 * @param {HTMLFormElement} form 
 * @param {string} id 
 * @param {string} labelcontent 
 */
// létrehoz egy form input-label fieldet + spant amit berak egy divbe és hozzáfűzi a megadott formhoz
function CreateFormWithFormat(form,id,labelcontent){

    const div = document.createElement('div')

    const span = document.createElement('span') //létrehoz egy span taget
    span.classList.add('error') //ellátja a spant egy error osztállyal
    

    const label = document.createElement('label')
    label.innerText = labelcontent
    label.htmlFor = id
        
    const input = document.createElement('input')
    input.id = id

    // hozzáadja a divet a formhoz fomázva
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
 * @param {HTMLBodyElement} where 
 */
// létrehoz egy break-et a megadott helyen
function Break(where){
    
    const br = document.createElement('br')
    where.appendChild(br)

}

/**
 * 
 * @param {string} text 
 * @param {} where 
 */
// létrehoz egy gombot a megadott szöveggel és a megadott taghez hozzáfűzi
function button(text,where){
    
    const button = document.createElement('button')
    button.innerText = text
    where.appendChild(button)

}

/**
 * 
 * @param {string[]} array 
 */
//bekér egy tömböt amiböl létrehozza a táblázat törzsét
function renderTableBody(array){

    const innerbody = document.getElementById('tbody')
    innerbody.innerHTML = "" // ha már lenne benne valami kiüríti
    
    //végigmegy a tömb elemein ezzel létrehozza a body-t
    for (const a of array){

        renderTableRow(innerbody,a) //itt hozzuk letre a sorokat, a for-on beluli valoto kerul a CountryWriters helyére és a cikluson belül lévő body a tbody helyére

    }

}

/**
 * 
 * @param {HTMLTableElement} tbody 
 * @param {CountryWriters} CountryWriters 
 */
// bekér a html-body változóját és bekére az adatokat táróló tömb egy elemét
// CountryWriters ami eltárolja az adatokak 
function renderTableRow(tbody,CountryWriters)
{

    const tr = document.createElement('tr')
    tbody.appendChild(tr)

    const td = createCell('td',CountryWriters.from,tr)
    //bevezetjuk a createCell fügvényt amit létrehozza a sor első elemét aminek a szövege a CountryWriters első típusa
    // a pont utan megadjuk neki melyik értéket kérje el az elemek közül
 
    // annyi a lényege hogy ha rákattintok egy elemre a táblázatból akkor megkapja a marked osztályt
    td.addEventListener("click",function(e){
        /**
         * @type {HTMLTableCellElement}
         */
        const i = e.target
                
        const row = i.parentElement
        const tbody = row.parentElement //ez ahhoz kell hogy megtalálja a marked osztállyal rendelkező elemeket az egész táblázat body-ában

        const marked = tbody.querySelector('.marked')

        //ha az elem nem rendelkezik marked osztállyal akkor ad neki
        if(!marked){
            i.classList.add('marked') // itt 
        }
        
    })

    const td2 = createCell('td',CountryWriters.person,tr)
    const td3 = createCell('td',CountryWriters.piece,tr)

    //mivel nem minden esetben van 4. és 5. elem a táblázatban ezért szükséges ezt lekezelni nehogy undefined-ot kapjunk + egy új sort hoz létre amibe teszi ezt a két elemet
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
 * @param {"td" | "th"} celltype 
 * @param {string} cellcontent 
 * @param {HTMLTableRowElement} parentrow 
 * 
 * @returns {HTMLTableCellElement}
 */
// letrehoz egy cellát és visszatér vele
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
//létrehozza a táblázat fejlécét egy listából és hozzáfűzi a megadott táblázathoz
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
    const n = form.querySelector('#nationality')
    /**
     * @type {string}
     */
    const nvalue = n.value

    /**
     * @type {HTMLInputElement}
     */
    const a = form.querySelector('#author')
        /**
     * @type {string}
     */
    const avalue = a.value

    /**
     * @type {HTMLInputElement}
     */
    const p = form.querySelector('#mu1')
        /**
     * @type {string}
     */
    const pvalue = p.value

    /**
     * @type {HTMLInputElement}
     */
    const a2 = form.querySelector('#author2')
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
    if(validateFields(nvalue,avalue,pvalue)){
        
        obj.from  = nvalue
        obj.a  = avalue
        obj.p = pvalue
    }

    obj.a2 = a2value != ""? a2value : undefined
    obj.p2 = p2value != "" ? p2value : undefined


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

    const form = inputField1.form
    const error = form.querySelectorAll('.error') // elérjük a form-ot és egy listába szedjük össze az error osztállyal rendelkező elemeket

    // az error osztállyal rendelkező elemek tartalmát üressé teszük
    for(const e of error){

        e.innerText = ""
    }

    let valid = true

        
    if(validateField(inputField1,'1. Mező kitöltése kötelező') == false){

        valid = false
    }
    if(validateField(inputField2,'2. Mező kitöltése kötelező') == false){

        valid = false
    }
    if(validateField(inputField3,'3. Mező kitöltése kötelező') == false){

        valid = false
    }



    return valid

}

/**
 * 
 * @param {HTMLInputElement} htmlinputfield 
 * @param {string} rmessage 
 * @returns 
 */
// megvizsgálja hogy az input bemeneti értéke nem üres és visszatér egy boolean változóval
function validateField(htmlinputfield,rmessage){

    const r = true
    if(htmlinputfield == ""){

        const div = htmlinputfield.parentElement;
        const span = div.querySelector('.error')
        span.innerText = rmessage

        r = false

    }

    return r
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

        CreateFormWithFormat(form_js,a.id,a.labelcontent)

    }

    const butt = button('hozzáad',form_js)

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
    table.appendChild(tbody)
}