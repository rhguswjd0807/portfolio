$(window).on('scroll',function(){ 
  var scroll = $(window).scrollTop();
  var ani_h = $('.ani').offset().top-400;
  //console.log(ani_h);

  if(scroll>ani_h){
      $('.ani img:eq(0)').addClass('current');
  }
  if(scroll>ani_h+150){
     $('.ani img:eq(1)').addClass('current');
  }
  if(scroll>ani_h+300){
     $('.ani img:eq(2)').addClass('current');
  }
  if(scroll>ani_h+450){
     $('.ani img:eq(3)').addClass('current');
  }
});