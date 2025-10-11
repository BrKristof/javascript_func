

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

for (const a of arr){

    const tr = document.createElement('tr')
    tbody.appendChild(tr)

    const td = document.createElement('td')
    td.innerText = a.from
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