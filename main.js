// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import Dropdown from 'bootstrap/js/dist/dropdown'
// popper.js 패키지 설치 필요
import Modal from 'bootstrap/js/dist/modal'

var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
dropdownElementList.map(function (dropdownToggleEl) {
  return new Dropdown(dropdownToggleEl)
})

new Modal(document.querySelector('#exampleModal'), {
  backdrop: 'static'
})