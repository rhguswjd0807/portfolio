
$(document).ready(function() {

   var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
   var on_off=false;  //false(안오버)  true(오버)
   
       $('#headerArea').mouseenter(function(){
          // var scroll = $(window).scrollTop();
           $(this).css('background','rgba(255, 255, 255, 1)');
           $('.dropdownmenu li a.depth1').css('color','#333'); 
            //헤더영역의 텍스트 색상과 로고이미지 경로 등을 교체
           on_off=true;
       });
   
      $('#headerArea').mouseleave(function(){
           var scroll = $(window).scrollTop();  //스크롤의 거리
           
           if(scroll<smh-50 ){
               $(this).css('background','rgba(255, 255, 255, .5)').css('border-bottom','none'); 
               $('.dropdownmenu li a.depth1').css('color','#333');
           }else{
               $(this).css('background','rgba(255, 255, 255, 1)'); 
               $('.dropdownmenu li a.depth1').css('color','#333');
           }
          on_off=false;    
      });
   
      $(window).on('scroll',function(){//스크롤의 거리가 발생하면
           var scroll = $(window).scrollTop();  
           //스크롤의 거리를 리턴하는 함수
           //console.log(scroll);

           if(scroll>smh-50){//스크롤이 비주얼의 높이-header높이 까지 내리면
               $('#headerArea').css('background','rgba(255, 255, 255, 1)').css('border-bottom','1px solid #ccc');
               $('.dropdownmenu li a.depth1').css('color','#333');
           }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
              if(on_off==false){
                   $('#headerArea').css('background','rgba(255, 255, 255, .5)').css('border-bottom','none');
                   $('.dropdownmenu li a.depth1').css('color','#333');
              }
           }; 
           
        });

  
    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
          $('#headerArea').animate({height:450},'fast').clearQueue();
       },function() {
          $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
          $('#headerArea').animate({height:200},'fast').clearQueue();
     });
    
     //1depth 효과
     $('ul.dropdownmenu li.menu').hover(
       function() { 
           $('.depth1',this).css('color','orange');
       },function() {
          $('.depth1',this).css('color','#333');
     });
     

     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({height:450},'fast').clearQueue();
     });

    $('ul.dropdownmenu li.m5 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:200},'normal').clearQueue();
    });

    //top버튼 스크롤 처리
    $(window).on('scroll',function(){ 
        var scroll = $(window).scrollTop(); 
    
        if(scroll>1000){ 
            $('.top_move').fadeIn('slow'); 
        }else{
            $('.top_move').fadeOut('fast');
        }
      });


      $('.top_move').click(function(e){

        e.preventDefault();
     
        $("html,body").stop().animate({"scrollTop":0},500);
     
     })

     //패밀리사이트 처리
      
	$('.select .arrow').toggle(function(e){
        e.preventDefault();
		$('.select .aList').fadeIn('slow');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
	},function(e){
        e.preventDefault();
    $('.select .aList').fadeOut('fast');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');	
	});
});
