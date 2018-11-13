function showdia(option){
  this.option={
      dia_name:"",//弹窗类名
      dia_close_name:"",//关闭按钮类名
      dia_button:""//弹窗按钮
  }
  this.option=option;
  var dia={
      click_name:[],
      click_close_name:[],
      init:function(){
          this.cover();
          this.clickshow([option.dia_button,"cover"])
          this.clickclose([option.dia_close_name,"cover"])

      },
      cover:function(){
          var coverdiv=document.createElement("div");
          coverdiv.classList.add("cover")
          document.body.appendChild(coverdiv)
          var nodeStyle = document.createElement('style');
          nodeStyle.setAttribute('type', 'text/css');
          nodeStyle.innerHTML =".cover{position: fixed;left: 0;top: 0;background: black;opacity: .7;width: 100%;height: 100%;display:none;z-index:990}"
          document.getElementsByTagName('head')[0].appendChild(nodeStyle)
      },
      clickshow:function(click_name){
        var diana=document.getElementsByClassName(option.dia_name)[0];
        var covername=document.getElementsByClassName("cover")[0];
         this.click_name=click_name
         console.log(this.click_name)
         click_name.forEach(function(item){
             document.getElementsByClassName(item)[0].addEventListener("click",function(){
                  diana.style.display="block";
                  covername.style.display="block";
             })
         })
         
      },
      clickclose:function(click_close_name){
        var diana=document.getElementsByClassName(option.dia_name)[0];
        var covername=document.getElementsByClassName("cover")[0];
        this.click_close_name=click_close_name
        click_close_name.forEach(function(item){
            document.getElementsByClassName(item)[0].addEventListener("click",function(){
                diana.style.display="none";
                covername.style.display="none";
           })
      })
    }

  }
  dia.init()
}