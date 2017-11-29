$(function(){
  $("form#one").submit(function(event){
    event.preventDefault();
    function tps() {
      // inputTps = $("input#tps").val();
      // return  inputTps / 3;
      return $("input#tps").val() / 3;
    };
    // $("#sucessTps").text(tps(parseInt($("input#tps").val())));
    $(this).append(tps());
  });
  $("form#two").submit(function(event){
    event.preventDefault();
    function gal() {
      return $("input#gal").val() * 3.785;
    }
    $(this).append(gal());
  });
  $("form#three").submit(function(event){
    event.preventDefault();
    function oz() {
      return $("input#oz").val() * 29.574;
    }
    $(this).append(oz());
  });
});
