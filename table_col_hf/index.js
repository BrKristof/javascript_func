/**
 * @type {{theme:string, time:string, scientist1:string, scientist2?:string}[]}
 */

const arr = [
    {
        theme: 'Optika',
        time: 'XI. szazad',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX-XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
]

//letrehoz egy elemet a memóriában
const table = document.createElement('table')
//hozzáfűz egy elemet a vmihez
document.body.appendChild(table)

const thead = document.createElement('thead')
table.appendChild(thead)

const tr = document.createElement('tr')
thead.appendChild(tr)

const th = document.createElement('th')
th.innerText = "Fizika terület"
tr.appendChild(th)
const th2 = document.createElement('th')
th2.innerText = "Időszak"
tr.appendChild(th2)
const th3 = document.createElement('th')
th3.innerText = "Képviselők"
th3.colSpan = "2";
tr.appendChild(th3)

const tbody = document.createElement('tbody')
table.appendChild(tbody)



for(const a of arr){
    const tr2 = document.createElement('tr')
    tbody.appendChild(tr2)
    const td = document.createElement('td')
    td.innerText = a.theme
    tr2.appendChild(td)
    const td2 = document.createElement('td')
    tr2.appendChild(td2)
    td2.innerText= a.time
    const td3 = document.createElement('td')
    td3.innerText = a.scientist1
    tr2.appendChild(td3)

}





