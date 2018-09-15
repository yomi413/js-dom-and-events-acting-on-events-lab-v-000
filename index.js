function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  let input = document.querySelector('input')
  return input.value
}

function addNewElementAsLi() {
  let employeeName = retrieveEmployeeInformation()
  let employeeList = document.querySelector('.employee-list')

  return employeeList.insertAdjacentHTML('beforeend', `<li>${employeeName}</li>`)
}

function addNewLiOnClick() {
  let input = document.querySelector('input[type="submit"]')

  input.addEventListener('click', function(e) {
    addNewElementAsLi()
    document.querySelector('input[name="name"]').value = ""
  })
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a')
  let ul = document.querySelector('ul')

  link.addEventListener('click', function(e) {
    ul.innerHTML = ""
  })
}
