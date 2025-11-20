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

const object  = {
    header : ["Nemzetiség", "Szerző", "Mű"],
    formfields: [
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
}


generateTable(object.header,'tbody')
renderTableBody(arr)


const form = document.getElementById('htmlform')
form.addEventListener('submit', htmlFormEventListener)

// ide kell majd egy tomb amibe a bekerendo adatokat taroljuk

const fr = generateForm('fr',object.formfields)
document.body.appendChild(fr)



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

            
    obj.from = nvalue
    obj.person = avalue
    obj.piece = pvalue

    obj.person2 = avalue2 !== "" ? avalue : undefined
    obj.piece2 = pvalue2 !== "" ? pvalue2 : undefined

    if(!validateFields( obj.from ,obj.person,obj.piece)){
        return
    }



    arr.push(obj)

    renderTableBody(arr)

})




















