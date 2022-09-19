$(document).ready(function(){  //문서가 준비된 다음에 실행하여라
  $('.allBtn').click(function(){
    $('nav').animate({left:0},400,'swing');
  });

  $('nav button').click(function(){
    $('nav').animate({left:-300},200);
  });

  $(window).resize(function(){ //데스크탑 레이아웃 깨짐방지 
    $('nav').removeAttr('style');
  });
});