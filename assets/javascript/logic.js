function copyEmail(element) {
  var myEmail = $("#emailMe").val();
  console.log(myEmail);
  // $("body").append(myEmail);
  // myEmail.val($(element).text()).select();
  // document.execCommand("copy");
  // myEmail.remove();
}

$("#emailMe").on("click", function(){
  copyEmail();
})