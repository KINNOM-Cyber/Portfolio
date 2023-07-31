const listIndicator = document.querySelector(".list__indicator")
const inputForm = document.querySelector(".input-form")
const todosListDiv = document.querySelector("div.todos__list")

inputForm.addEventListener("submit", handleFormSubmit)

function handleFormSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const input = formData.get("todos-input")
    const list = document.createElement("div")
    const checkBoxInput = document.createElement("input")
    const checkBoxInputs = Array.from(document.querySelectorAll('input[type="checkbox"][class="checkbox__list-input"]'));
    const label = document.createElement("label")

    list.classList.add('list')
    inputForm.reset()
    e.target.querySelector("input").blur()

    if (!input.length > 1) {
        alert("Your input must not be empty")
    } else {
        // console.log(checkBoxInputs)
        const index = checkBoxInputs.length++

        label.innerHTML = `${input}<div class="through-divider"></div>`
        label.classList.add('list-label')
        label.setAttribute('for', `checkbox-list-input_${index}`)
        label.dataset.isComplete = false
        label.dataset.index = index

        checkBoxInput.type = 'checkbox'
        checkBoxInput.classList.add('checkbox__list-input')
        checkBoxInput.id = `checkbox-list-input_${index}`
        checkBoxInput.addEventListener("input", checkboxChecked)

        list.replaceChildren(checkBoxInput, label)
        todosListDiv.append(list)

        localStorage.pushArrayItem("todos", { title: input, index: index, isComplete: false })
    }
    checkboxChecked()
}

function checkboxChecked(e) {
    const checkBoxInputs = Array.from(document.querySelectorAll('input.checkbox__list-input'))
    const checkeds = checkBoxInputs.filter((cb) => cb.checked)

    if (checkBoxInputs.length < 1) {
        todosListDiv.textContent = 'No thing here'
    } else {
        if (todosListDiv.firstChild && todosListDiv.firstChild.textContent === 'No thing here') {
            todosListDiv.firstChild.remove()
        }
        listIndicator.textContent = `Complete ${checkeds.length}/${checkBoxInputs.length}`
    }

    if (e) {
        const target = e.target
        const index = parseInt(target.id.split("_")[1])
        const label = document.querySelector(`.list-label[for=checkbox-list-input_${index}]`)

        const checkIsComplete = label.dataset.isComplete
        if (checkIsComplete == 'true') {
            label.dataset.isComplete = false
            localStorage.editObjectInArray("todos", { title: label.textContent, index, isComplete: true }, { isComplete: false })
        } else {
            label.dataset.isComplete = true
            localStorage.editObjectInArray("todos", { title: label.textContent, index, isComplete: false }, { isComplete: true })
        }
    }
}

function loadTodolist() {
    let lists = localStorage.getItem("todos")
    lists = JSON.parse(lists)

    if (!lists || lists.length < 1) {
        return checkboxChecked()
    } else {
        lists.forEach((list, index) => {
            console.log(list, index)
            const listDiv = document.createElement("div")
            const label = document.createElement("label")
            const checkBoxInput = document.createElement("input")

            listDiv.classList.add('list')
            label.innerHTML = `${list.title}<div class="through-divider"></div>`
            label.classList.add('list-label')
            label.setAttribute('for', `checkbox-list-input_${index}`)
            label.dataset.isComplete = list.isComplete
            label.dataset.index = index

            checkBoxInput.type = 'checkbox'
            checkBoxInput.classList.add('checkbox__list-input')
            checkBoxInput.id = `checkbox-list-input_${index}`
            checkBoxInput.addEventListener("input", checkboxChecked)

            if (list.isComplete) {
                checkBoxInput.checked = true
            }

            listDiv.replaceChildren(checkBoxInput, label)
            todosListDiv.append(listDiv)
        })

        checkboxChecked()
    }

}

loadTodolist()

Storage.prototype.getArray = function (arrayName) {
    var thisArray = [];
    var fetchArrayObject = this.getItem(arrayName);
    if (typeof fetchArrayObject !== 'undefined') {
        if (fetchArrayObject !== null) {
            thisArray = JSON.parse(fetchArrayObject)
        }
        return thisArray
    }
}

Storage.prototype.pushArrayItem = function (arrayName, arrayItem) {
    var existingArray = this.getArray(arrayName)
    existingArray.push(arrayItem)
    this.setItem(arrayName, JSON.stringify(existingArray))
}

Storage.prototype.deleteArray = function (arrayName) {
    this.removeItem(arrayName)
}

Storage.prototype.deleteObjectInArrayByIndex = function (arrayName, index) {
    var existingArray = this.getArray(arrayName)
    var findArray = existingArray.find((el) => el.index == index)
    var filterdArray = existingArray.filter((el) => el != findArray)
    this.setItem(arrayName, JSON.stringify(filterdArray))
}

Storage.prototype.editObjectInArray = function (arrayName, arrayItem, object = {}) {
    var existingArray = this.getArray(arrayName)
    var findArray = existingArray[arrayItem.index]
    var newObject = {}

    if (typeof object === 'object') {
        newObject = Object.assign(findArray, object)
    }

    existingArray[arrayItem.index] = newObject

    this.setItem(arrayName, JSON.stringify(existingArray))
}