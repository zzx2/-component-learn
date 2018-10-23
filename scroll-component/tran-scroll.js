$(function(){
  $.fn.transcroll=function(options){
    options=$.extends(
        {
         selectName:null, //滑动部分的选择器名字
         clickselect:null,
         afterload:null,
         leaveload:null
        },options)
   var screenwith=window.innerWidth;
   var screenHeight=window.innerHeight;
   var index=1;
   $.fn.transcroll.moveTo=function(){

   }

   $(options.selectName).on("mousewheel",function(event,delta){
      event.preventDefault();
      if(delta>0){
          scrollup();
          laterload();
      }else 
      if(delta<0){
          scrolldown();
          laterload();
      }
   })
   //鼠标滚动控制
   function srollup(){
       if(index||index>0){
       --index;
       }
       $(options.selectName).css("transform","translate(-"+index*screenwith+"px,0)")
       $(".fp-section").eq(index).addClass("active").siblings().removeClass("active")
   }
   // 向右滑动
   function srolldown(){
       if(index||index<$(options.selectName).length){
       ++index;
       }
       $(options.selectName).css("transform","translate(-"+index*screenwith+"px,0)")
       $(".fp-section").eq(index).addClass("active").siblings().removeClass("active")
   }
   //向左滑动 
   window.onresize=function(){
      $(options.selectName).children().css("width",screenwith+"px");
  }
  // 重置模块宽度

  $(options.clickselect).each(function(){
      var cindex=$(this).index();
      $(this).click(function(event){
        $(options.selectName).css("transform","translate(-"+cindex*screenwith+"px,0)")
        $(this).addClass("active").siblings().removeClass("active")
        laterload();
        event.preventDefault();
      })
  })
  $(options.selectName).chliren().each(function(){
      $(this).addClass("leaveload")
  })
 // 点击滑动   
  }
  
  var laterload=setTimeout(function(){
      if($(".fp-section.active")){
       options.afterload.call(this,index); //执行函数
      }
      $(".fp-section.active").promise().done(function(){
         if($(".fp-section")){
             options.leaveload.call(this,index)
         } 
          
      })
      clearTimeout(laterload);
      
  },2000)
    
  
  
  
 }

)