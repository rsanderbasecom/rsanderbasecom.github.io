document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById('usrform');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    var vname = document.getElementById('fname');
    var sname = document.getElementById('lname');
    var email = document.getElementById('email');
    var msg = document.getElementById('message');

    if (vname.value == '' || sname.value == '' || email.value == '') {
      alert("Form bitte vollständig ausfüllen!");
    } else {
      alert("Erfolgreich gesendet!");
    }
  });
});
