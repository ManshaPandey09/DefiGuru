/* coupon copy */
function copyCode(button) {
  var code = button.parentNode.querySelector('.code').innerHTML;
  navigator.clipboard.writeText(code).then(function() {
    alert("Code copied to clipboard: " + code);
  }, function(err) {
    alert("Failed to copy code: ", err);
  });
}





/* side bar mobile view */
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}