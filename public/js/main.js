// Récupération des éléments du HTML

// Boutton ajouter
let ajouter = document.querySelector('.box-header form .col-sm-3 button')
ajouter.type = 'button'
ajouter.parentElement.classList.add('d-flex') // !!!!! AJOUTER STYLE BOUTTON , de boutstrap par exemple , une couleure

// Récupération de la liste non-ordonnées qui contiendra les <li> (= chaque li contient une tâche)
let ul = document.getElementById('list all')
// Arrière plan, la div qui contient ul
let bg = document.getElementsByClassName('box-body')[0]
bg.style.backgroundColor = 'ghostwhite'

// Récupérer les bouttons filtres
let toDo = document.querySelectorAll('#filtre button')[0]
let done = document.querySelectorAll('#filtre button')[1]
let deleted = document.querySelectorAll('#filtre button')[2]
let all = document.querySelectorAll('#filtre button')[3]

console.log(toDo)

// display & position des bouttons filtres
deleted.style.display = 'none'
toDo.parentElement.classList.add('d-flex')
toDo.parentElement.style.justifyContent = 'flex-end'

// Contenu texte Bouttons filtres
toDo.textContent = 'À faire'
done.textContent = 'Terminé'
all.textContent = 'Tous'

// Style des bouttons filtres
toDo.classList.add()
done.classList.add()
all.classList.add()

// Event sur le boutton ajouter + les icones-bouttons de chaque tâche
ajouter.addEventListener('click', ()=>{
    // INPUT
    let input = document.querySelectorAll('.box-header form input')[0]
    if (input.value != ''){        
        // LI
        let li = document.createElement('li')
        li.style.backgroundColor = 'gold'
        li.classList.add('rounded-left', 'p-3', 'font-weight-bold', 'd-flex', 'justify-content-between', 'align-items-center')
        ul.appendChild(li)
        // TEXT
        let texte = document.createElement('span')
        texte.textContent = `${input.value}`
        li.appendChild(texte)
        // DIV contenant les icones
        let div = document.createElement('div')
        div.style.display = 'flex'
        div.classList.add('col-3', 'justify-content-between', 'align-items-center')
        li.appendChild(div)
        // ICONES
        let icone1 = document.createElement('i'), icone2 = document.createElement('i'), icone3 = document.createElement('i'), icone4 = document.createElement('i')
        icone1.setAttribute('class' ,'fas fa-check')
        icone1.setAttribute('type' ,'button')
        icone2.setAttribute('class' ,'fas fa-hourglass-half')
        icone2.setAttribute('type' ,'button')
        icone3.setAttribute('class', 'fas fa-pen')
        icone3.setAttribute('type' ,'button')
        icone4.setAttribute('class', 'fas fa-trash')
        icone4.setAttribute('type' ,'button')
        div.append(icone1, icone2, icone3, icone4)
        input.value = ''
        // ICONES EVENTS
        icone1.addEventListener('click', ()=>{
            li.style.backgroundColor = 'springgreen'
        })
        icone2.addEventListener('click', ()=>{
            li.style.backgroundColor = 'gold'
        })
        icone3.addEventListener('click', ()=>{
            li.style.backgroundColor = 'darkgrey'
            texte.style.display = 'none'
            div.style.display = 'none'
            let inputx = document.createElement('input')
            let save = document.createElement('i')
            save.setAttribute('class', 'fas fa-save ml-5 mr-5')
            save.setAttribute('type', 'button')
            li.append(inputx, save)
            inputx.value = texte.innerText
            save.addEventListener('click', () => {
                // inputx.value
                if (inputx.value != '' && inputx != texte.innerText) {
                    texte.innerText = `${inputx.value}`
                }
                inputx.remove()
                save.style.display = 'none'
                texte.style.display = 'initial'
                div.style.display = 'flex'
                setTimeout( () => {
                    li.classList.add('animated', 'wobble')
                }, 100)
                setTimeout( () => {
                    li.style.backgroundColor = 'gold'
                    li.classList.remove('animated', 'wobble')
                }, 500)
            })
            
        })
        icone4.addEventListener('click', ()=>{
            if (li.style.backgroundColor != 'red') {
                let color = li.style.backgroundColor
                li.style.backgroundColor = 'red'
                li.classList.add('animated', 'tada')
                if (confirm(`Veuillez confirmer la suppression de la tâche suivante :\n\n> ${texte.innerText}`)) {
                    li.remove()
                } else {
                    li.style.backgroundColor = `${color}`
                }
            }
        })
        li.classList.remove('animated', 'wobble')
        console.log(li.style.backgroundColor)
    } else {
        input.value = 'Ajouter votre tâche ici'
    }
})

// Events des filres

toDo.addEventListener('click', () => {
    console.log(ul.children.style)
    // for (let i in ul) {
    //     console.log(ul[i])
        
    // }

})