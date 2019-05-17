document.addEventListener('DOMContentLoaded', function(){
  var mail = document.getElementById('mail-us');
  if (mail) {
    mail.addEventListener('click', function(e){
      e.preventDefault();
      var mail = 'data-setups';
      var server = 'rokt.com';
      var href = mail + '@' + server;

      window.location.href = 'mailto:' + href;
    });
  }
});