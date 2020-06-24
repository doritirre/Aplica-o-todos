const listElement = document.querySelector("main ul")
const inputElement = document.querySelector("main input")
const btnElement = document.querySelector("main button")

const todos = [
    "Fazer café",
    "Estudar",
    "Criar site"
]

function renderTodos() {
    listElement.innerHTML = ''
    for(todo of todos) {
        var todoElement = document.createElement('li')
        var textElement = document.createTextNode(todo)
        var linkElement = document.createElement('a')
        var pos = todos.indexOf(todo)
        
        var textLink = document.createTextNode('Excluir')
        linkElement.setAttribute('href', '#')
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')')
        linkElement.appendChild(textLink)        
        todoElement.appendChild(textElement)
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)
    }
}

renderTodos()

function addTodo() {
    var text = inputElement.value
    todos.push(text)
    inputElement.value = ''
    renderTodos()
}

btnElement.onclick  = addTodo

function deleteTodo(pos) {
    todos.splice(pos, 1)
    renderTodos()
}