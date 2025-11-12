
/**
 * @type {{from:string ,person:string ,piece:string ,piece2:?string ,person2:?string}[]}
 */
const arr = [
    {
        from:'Orosz',
        person:'Gogol',
        piece:'A köpönyeg',
        person2:'Csehov',
        piece2:'A csinovnyik halála'

    },
    {
        from:'Cseh',
        person:'Franz Kafka',
        piece:'Az átváltozás',

    },
    {
        from:'Magyar',
        person:'Örkény István',
        piece:'Egyperces Novellák',
        person2:'József Attila',
        piece2:'Klárisok'

    },
    {
        from:'Svájc',
        person:'Friedrich Dürrenmatt',
        piece:'A fizikusok',

    },
]

const table = document.createElement('table')
document.body.appendChild(table)


const thead = document.createElement('thead')
table.appendChild(thead)

const headarr = ['Nemzetiség','Szerző','Mű']
const htr = document.createElement('tr')
thead.appendChild(htr)

for(const a of headarr){

    const th = document.createElement('th')
    th.innerText = a
    htr.appendChild(th)

     
}

const tbody = document.createElement('tbody')
table.appendChild(tbody)
tbody.id = 'tbody'


for (const a of arr){

    const tr = document.createElement('tr')
    tbody.appendChild(tr)

    const td = document.createElement('td')
    td.innerText = a.from

    td.addEventListener("click",function(e){
        /**
         * @type {HTMLTableCellElement}
         */
        const i = e.target
        

        const row = i.parentElement
        const tbody = row.parentElement

        const marked = tbody.querySelector('.marked')

        if(marked !== Null){
            marked.classList.remove(marked)
        }
        marked.classList.add()

        i.classList.add('marked')


    })
    tr.appendChild(td)

    const td2 = document.createElement('td')
    td2.innerText = a.person
    tr.appendChild(td2)

    const td3 = document.createElement('td')
    td3.innerText = a.piece
    tr.appendChild(td3)

    if(a.person2 != undefined && a.piece2 != undefined){

        const ptr = document.createElement('tr')
        tbody.appendChild(ptr)

        const td4 = document.createElement('td')
        td4.innerText = a.person2
        ptr.appendChild(td4)

        const td5 = document.createElement('td')
        td5.innerText = a.piece2
        ptr.appendChild(td5)

        td.rowSpan = '2'
    }


}

const form = document.getElementById('htmlform')
form.addEventListener('submit', function(e){

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
     * @type {{from:string ,person:string ,piece:string ,piece2:?string ,person2:?string}}
     */
    const obj  = {}
    obj.from  = nvalue
    obj.a  = avalue
    obj.p = pvalue
    obj.a2 = a2value
    obj.p2 = p2value

    const tbody = document.getElementById('body')

    const tr = document.createElement('tr')
    tbody.appendChild(tr)

    const td = document.createElement('td')
    td.innerText = nvalue
    tr.appendChild(td)

    const td2 = document.createElement('td')
    td2.innerText = avalue
    tr.appendChild(td2)

    const td3 = document.createElement('td')
    td3.innerText = pvalue
    tr.appendChild(td3)

    if(a2value != '' && p2value != ''){

        const ptr = document.createElement('tr')
        tbody.appendChild(ptr)

        const td4 = document.createElement('td')
        td4.innerText = a2value
        ptr.appendChild(td4)

        const td5 = document.createElement('td')
        td5.innerText = p2value
        ptr.appendChild(td5)

        td.rowSpan = '2'
    }

    arr.push(obj)

    renderTableBody(arr)


})



const fr = document.createElement('form')
document.body.appendChild(fr)

const country = CreateFormFormat(fr,'nemzetiseg','Nemzetiség:')
const author = CreateFormFormat(fr,'szerzo1','Szerző:')
const title = CreateFormFormat(fr,'mu1','Mű:')
const author2 = CreateFormFormat(fr,'szerzo2','Szerző:')
const title2 = CreateFormFormat(fr,'mu2','Mű:')

/**
 * 
 * @param {*} form 
 * @param {string} id 
 * @param {string} labelcontent 
 */
function CreateFormFormat(form,id,labelcontent){

    const label = document.createElement('label')
    label.innerText = labelcontent
    label.htmlFor = id
        
    const input = document.createElement('input')
    input.id = id


    Break(form)
    form.appendChild(label)
    Break(form)
    form.appendChild(input)
    Break(form)


}
button('Hozzáadás',fr)

function Break(where){
    
    const br = document.createElement('br')
    where.appendChild(br)

}

function button(text,where){
    
    const button = document.createElement('button')
    button.innerText = text
    where.appendChild(button)

}



function renderTableBody(array){

    const innerbody = document.getElementById('tbody')
    innerbody.innerHTML = ""
    

    for (const a of array){


        const tr = document.createElement('tr')
        innerbody.appendChild(tr)

        const td = document.createElement('td')
        td.innerText = a.from

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
        tr.appendChild(td)

        const td2 = document.createElement('td')
        td2.innerText = a.person
        tr.appendChild(td2)

        const td3 = document.createElement('td')
        td3.innerText = a.piece
        tr.appendChild(td3)

        if(a.person2 != undefined && a.piece2 != undefined){

            const ptr = document.createElement('tr')
            innerbody.appendChild(ptr)

            const td4 = document.createElement('td')
            td4.innerText = a.person2
            ptr.appendChild(td4)

            const td5 = document.createElement('td')
            td5.innerText = a.piece2
            ptr.appendChild(td5)

            td.rowSpan = '2'
        }


    }

}
renderTableBody(arr)






