// JavaScript Document
$(document).ready(function() {
    var position=0;  //최초위치
    //var movesize=150; //이미지 하나의 너비
    var movesize=$('.notice_content ul li').outerWidth(true); //400
    //console.log(movesize);
    var timeonoff;
   
    $('.notice_content ul').after($('.notice_content ul').clone());
 
    function moveG() {
        position-=movesize;  // 150씩 감소
        $('.notice_content').animate({left:position}, 'fast',function(){
           if(position<=-4400){
               position=-1200;
               $('.notice_content').css('left',-1200);
            }
        }).clearQueue();  
    }

   timeonoff= setInterval(moveG, 3000);
  
    
        //슬라이드 겔러리를 한번 복제
 
  $('.button').click(function(e){
     e.preventDefault();

   clearInterval(timeonoff);
     
     if($(this).is('.ship_r')){  //이전버튼 클릭
         
          position-=movesize;  // 150씩 감소
         $('.notice_content').animate({left:position}, 'fast',function(){
            if(position<=-4400){
                position=-1200;
                $('.notice_content').css('left',-1200);
             }
         }).clearQueue();  

     }else if($(this).is('.ship_l')){  //다음버튼 클릭
        if(position>=0){
            $('.notice_content').css('left',-3200);
            position=-3200;
        }
 
            position+=movesize; // 150씩 증가
            $('.notice_content').animate({left:position}, 'fast',
                function(){							
                    if(position>=0){
                        $('.notice_content').css('left',-3200);
                        position=-3200;
                    }
                }).clearQueue();
  
      }
   });
});

