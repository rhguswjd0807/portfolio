
var winh = $(window).height();
//스크롤 처리시 헤더 배경처리
$(window).on('scroll',function(){ 
  var scroll = $(window).scrollTop();
  winh = $(window).height()-115;
  
  if(scroll>winh){ 
      $('#headerArea').css('background','rgba(15,14,30,.7)'); 
  }else{
    $('#headerArea').css('background','rgba(255,225,255,0)'); 
  }
});  


//top 클릭시 상단 스무스 이동
$('.topMove').click(function(e){
  e.preventDefault();
  $("html,body").stop().animate({"scrollTop":0},1000); 
});



// 네비
var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
    
$(".menu_ham").click(function(e) { //메뉴버튼 클릭시
    e.preventDefault();
    var documentHeight =  $(document).height(); //전체 페이지의 높이
    $("#gnb").css('height',documentHeight); //gnb의 높이를 전체 페이지 높이와 동일...

   if(op==false){
     $("#gnb").fadeIn('slow');
     $('#headerArea').addClass('mn_open');
     op=true;
   }else{
     $("#gnb").fadeOut('fast');
     $('#headerArea').removeClass('mn_open');
     op=false;
   }

});

var current=0; // 0(해상도가 모바일), 1(소형테블릿이상)

$(window).resize(function(){ 
   var screenSize = $(window).width();  //가로 해상도
   if( screenSize > 768){  //소형테블릿 이상이면
     $("#gnb").show();
     $('#gnb').height('auto');
     current=1; //소형테블릿이상
   }
   if(current==1 && screenSize <= 768){
     $("#gnb").hide();
     $('#gnb').height(winh);
      current=0; //모바일
   }
 }); 