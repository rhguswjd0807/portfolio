// JavaScript Document

$(document).ready(function(){
    var cnt=$('.tap_menu ul li').size();  //탭메뉴 개수 ***
    $('.content_area section').hide(); // 첫번째 탭 내용만 열어라
    $('.content_area section:eq(0)').show(); // 첫번째 탭 내용만 열어라
    //$('.tap_menu ul li:eq(0) a').addClass('current'); //첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
      
    $('.tap_menu li a').click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
          
          var ind = $(this).index('.tap_menu li a');  // 클릭시 해당 index를 뽑아준다
          //console.log(ind);

          $('.content_area section').hide();//모든 탭내용을 안보이게...
          $('.content_area section:eq('+ind +')').show(); //클릭한 해당 탭내용만 보여라
          $('.tap_menu ul li a').removeClass('current'); //모든 탭메뉴를 비활성화
          $(this).addClass('current'); // 클릭한 해당 탭메뉴만 활성화

     });
   

  });

