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

const th1 = document.createElement('th')
th1.innerText = 'Szerző neve'
tr.appendChild(th1)

const th2 = document.createElement('th')
th2.innerText = 'Korszak'
tr.appendChild(th2)

const th3 = document.createElement('th')
th3.innerText = 'Szerelmek'
th3.colSpan = "2"
tr.appendChild(th3)

const tbody = document.createElement('tbody')
table.appendChild(tbody)

for (const a of arr){

    const tr2 = document.createElement('tr')
    tbody.appendChild(tr2)

    const td1 = document.createElement('td')
    td1.innerText = a.name
    tr2.appendChild(td1)

    const td2 = document.createElement('td')
    td2.innerText = a.time
    tr2.appendChild(td2)
    
    const td3 = document.createElement('td')
    td3.innerText = a.interest1
    tr2.appendChild(td3)

    if(a.interest2 != null){
        const td4 = document.createElement('td')
        td4.innerText = a.interest2
        tr2.appendChild(td4)

    }
    else{
        td3.colSpan = "2"
    }
    


}
