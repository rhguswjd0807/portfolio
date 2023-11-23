$(document).ready(function() {
   var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
 	
   $(".menu_ham").click(function() { //메뉴버튼 클릭시
       
       var documentHeight =  $(document).height();
       $("#gnb").css('height',documentHeight); 

      if(op==false){
        $("#gnb").animate({right:0,opacity:1}, 'fast');
        $('#headerArea').addClass('mn_open');
        op=true;
      }else{
        $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
        $('#headerArea').removeClass('mn_open');
        op=false;
      }

   });
   
   
    //2depth 메뉴 교대로 열기 처리 
    var onoff=[false,false,false,false];
    var arrcount=onoff.length;
    
    console.log(arrcount);
    
    $('#gnb .depth1 h3 a').click(function(){
        var ind=$(this).parents('.depth1').index();
        
        console.log(ind);
        
       if(onoff[ind]==false){
        //$('#gnb .depth1 ul').hide();
        $(this).parents('.depth1').find('ul').slideDown('slow');
        $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');
         for(var i=0; i<arrcount; i++) onoff[i]=false; 
         onoff[ind]=true;
           
         $('.depth1 span').text('+');   
         $(this).find('span').text('-');   
            
       }else{
         $(this).parents('.depth1').find('ul').slideUp('fast'); 
         onoff[ind]=false;   
           
         $(this).find('span').text('+');     
       }
    });    
  
    
     //패밀리사이트 처리
      
	$('.family .arrow').toggle(function(e){
    e.preventDefault();
$('.family .aList').fadeIn('slow');	
$(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
},function(e){
    e.preventDefault();
$('.family .aList').fadeOut('fast');	
$(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');	
});

$('.sub_nav .arrow').toggle(function(e){
  e.preventDefault();
$('.sub_nav .aList').fadeIn('fast');	
$(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');	
},function(e){
  e.preventDefault();
$('.sub_nav .aList').fadeOut('fast');	
$(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
});

//top이동
$('.topMove').hide();
$(window).on('scroll',function(){
  var scroll = $(window).scrollTop();

  if(scroll>300){
    $('.topMove').fadeIn('slow');
  }else{
    $('.topMove').fadeOut('fast');
  }
  });

$('.topMove').click(function(e){
e.preventDefault();
//상단으로 스르륵 이동합니다.

$("html,body").stop().animate({"scrollTop":0},1000);
});


  });

  

