document.addEventListener("DOMContentLoaded", () => {
  form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    createTask(e.target.newTaskDescription.value)
    //task reset
    task.reset()

  })
});

function createTask(list) {
  let ul = document.querySelector('#tasks')
  let btn = document.createElement('button')
  btn.addEventListener('click', justDelete)
  btn.textContent = 'x'
  ul.textContent = `${list} `
  ul.appendChild(btn)


}

function justDelete(e) {
  e.target.parentNode.remove()
}
