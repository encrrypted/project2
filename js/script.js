// var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
// var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//   return new bootstrap.Popover(popoverTriggerEl)
// })
// var toastTrigger = document.getElementById('liveToastBtn')
// var toastLiveExample = document.getElementById('liveToast')
// if (toastTrigger) {
//   toastTrigger.addEventListener('click', function () {
//     var toast = new bootstrap.Toast(toastLiveExample)

//     toast.show()
//   })
// }
// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl)
// })
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

ScrollReveal().reveal('.info', { delay: 200});
ScrollReveal().reveal('#services1', { delay: 200, origin:'bottom', distance:'50px'});
ScrollReveal().reveal('#services2', { delay: 400, origin:'bottom', distance:'50px'});
ScrollReveal().reveal('#services3', { delay: 600, origin:'bottom', distance:'50px'});
ScrollReveal().reveal('#imageBox1', { delay: 200, origin:'bottom', distance:'20px'});
ScrollReveal().reveal('#imageBox2', { delay: 300, origin:'bottom', distance:'20px'});
ScrollReveal().reveal('#imageBox3', { delay: 400, origin:'bottom', distance:'20px'});
ScrollReveal().reveal('#imageBox4', { delay: 500, origin:'bottom', distance:'20px'});
ScrollReveal().reveal('#imageBox5', { delay: 600, origin:'bottom', distance:'20px'});
ScrollReveal().reveal('#imageBox6', { delay: 700, origin:'bottom', distance:'20px'});
ScrollReveal().reveal('#imageBox7', { delay: 800, origin:'bottom', distance:'20px'});
ScrollReveal().reveal('#imageBox8', { delay: 900, origin:'bottom', distance:'20px'});
ScrollReveal().reveal('#team1', { delay: 200, origin:'right', distance:'60px'});
ScrollReveal().reveal('#team2', { delay: 400, origin:'right', distance:'60px'});
ScrollReveal().reveal('#team3', { delay: 600, origin:'right', distance:'60px'});
ScrollReveal().reveal('#team4', { delay: 900, origin:'right', distance:'60px'});
ScrollReveal().reveal('#cont', { delay: 200, origin:'top'});
ScrollReveal().reveal('#cont2', { delay: 200, origin:'top'});