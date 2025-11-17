/**
 * @type {CountryWriters[]}
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

const formArr  = [
    {
        id:'nemzetiseg',
        labelcontent:'Nemzetiség:'
    },
    {
        id:'szerzo1',
        labelcontent:'Szerző:'
    },
    {
        id:'mu1',
        labelcontent:'Mű:'
    },
    {
        id:'szerzo2',
        labelcontent:'Másik Szerző:'
    },
    {
        id:'mu2',
        labelcontent:'Mű:'
    },
]

const table = document.createElement('table')
document.body.appendChild(table)


const headarr = ['Nemzetiség','Szerző','Mű']
const th = headCreate(table,headarr)

const tbody = document.createElement('tbody')
table.appendChild(tbody)
tbody.id = 'tbody'


const form = document.getElementById('htmlform')
form.addEventListener('submit', htmlFormEventListener)

// ide kell majd egy tomb amibe a bekerendo adatokat taroljuk

const fr = document.createElement('form')
document.body.appendChild(fr)

const country = CreateFormFormat(fr,'nemzetiseg','Nemzetiség:')
const author = CreateFormFormat(fr,'szerzo1','Szerző:')
const title = CreateFormFormat(fr,'mu1','Mű:')
const author2 = CreateFormFormat(fr,'szerzo2','Szerző:')
const title2 = CreateFormFormat(fr,'mu2','Mű:')

fr.addEventListener('submit', function(e){

    e.preventDefault()

    /**
     * @type {HTMLFormElement}
     */
    const js_form = e.target

    /**
     * @type {HTMLInputElement}
     */
    const nationality = js_form.querySelector('#nemzetiseg')
        /**
     * @type {HTMLInputElement}
     */
    const author = js_form.querySelector('#szerzo1')
        /**
     * @type {HTMLInputElement}
     */
    const piece = js_form.querySelector('#mu1')
        /**
     * @type {HTMLInputElement}
     */
    const author2 = js_form.querySelector('#szerzo2')
        /**
     * @type {HTMLInputElement}
     */
    const piece2 = js_form.querySelector('#mu2')
    
    /**
     * @type {string}
     */
    const nvalue = nationality.value
        /**
     * @type {string}
     */
    const avalue = author.value
        /**
     * @type {string}
     */
    const pvalue = piece.value
        /**
     * @type {string}
     */
    const avalue2 = author2.value
        /**
     * @type {string}
     */
    const pvalue2 = piece2.value



    /**
     * @type {CountryWriters}
     */
    const obj  = {}
    if(validateFields(obj.from,obj.person,obj.piece)){
            
        obj.from = nvalue
        obj.person = avalue
        obj.piece = pvalue
        obj.person2 = pvalue2
        obj.piece2 = pvalue2


        arr.push(obj)

        renderTableBody(arr)
    }

})



button('Hozzáadás',fr)
renderTableBody(arr)











