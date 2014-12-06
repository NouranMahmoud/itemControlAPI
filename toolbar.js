var oojs = (function(oojs){

  var createToolbarItems = function(itemElements){
    var items = [];
    [].forEach.call(itemElements, function(el, index, array){
      item ={
        el : el,
        enable : function(){
          return this.el.classList.remove('disabled');
        },
        disable : function(){
          return this.el.classList.add('disabled');
        },
        isDisabled : function(){
          return this.el.classList.contains('disabled');
        },
        activate : function (){
          if(this.isDisabled()){
            return;
          }

          this.el.classList.add('active');
        },
        deactivate : function (){
          if(this.isDisabled()){
            return;
          }
          this.el.classList.remove('active');
        },
        isActive : function(){
          return this.el.classList.contains('active');
        },
        toggleActive : function(){
          if(this.isActive){
            this.activate();
          }else{
            this.deactivate();
          }
        }

      };
      items.push(item);
    });
    return items;
  };

  oojs.createToolbar = function(elementId){
    var element = document.getElementById(elementId);
    var items = element.querySelectorAll(".toolbar-item");

    // if(!element){
    //   element = document.createElement("DIV");
    //   element.id = elementId;

    // }
    return {
      items : createToolbarItems(items)
    };
  };

  return oojs;
}(oojs || {}));
