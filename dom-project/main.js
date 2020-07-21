// On submit click
const submit = document.getElementById('submit')
const items = document.getElementById('items')
const filter = document.getElementById('filter')

submit.addEventListener('click', addElement)
items.addEventListener('click', removeElement)
filter.addEventListener('keyup', filterItems)

function addElement(e) {
    e.preventDefault()
    
    const item = document.getElementById('item').value

    const li = document.createElement('li')
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(item))

    const button = document.createElement('button')
    button.className = 'btn btn-danger btn-sm float-right delete'
    button.id = 'delBtn'
    button.appendChild(document.createTextNode('X'))

    li.appendChild(button)
    items.appendChild(li)
}

function removeElement(e) {
    if (e.target.classList.contains('delete')) {
        items.removeChild(e.target.parentElement)
    }
}

function filterItems(e) {
    let text = e.target.value.toLowerCase()
    let itemsArray = Array.from(items.getElementsByTagName('li'))
    
    itemsArray.forEach(function(item) {
        let itemName = item.firstChild.textContent.toLowerCase()
        if(itemName.indexOf(text) != -1) {
            item.style.display = 'block'
        }
        else {
            item.style.display = 'none'
        }
    })
}


