const scriptURL = 'https://script.google.com/macros/s/AKfycbwUD6jzs_lMuxGIhdzFwyFSyHZqsbWWTse0WLuJvv8T99AQUDuAjR0ikdv6Fjkf1dc_fw/exec'
const form = document.getElementById("form")
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Message sent successfully"
      setTimeout(function () {
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items : 2,
    }
  );
});

const icon = document.getElementById('arrow-icon');

  window.addEventListener('scroll', function() {
        if (window.scrollY > 200) { 
            icon.style.display = 'block';
        } else {
            icon.style.display = 'none';
        }
    });
