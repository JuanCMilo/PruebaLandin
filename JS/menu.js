

var dropdownButton = document.querySelector('.dropdown-button');
var dropdownContent = document.querySelector('.dropdown-content');


dropdownButton.addEventListener('click', function() {
  dropdownContent.classList.toggle('show');
});

window.addEventListener('click', function(event) {
  if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
    dropdownContent.classList.remove('show');
  }
});
