var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for(let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for(let tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.left = "200";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzRp-CLVY03Kv7UKMdsmdk8OJ-jXfVXgdUA1t1sLvMJh7YR836QMiSgEjAsVM4jPZfn/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent successfully"
      setTimeout(function(){
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})