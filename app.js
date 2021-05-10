// Дэлгэцтэй ажиллах контроллер
var uiController = (function() {
  
  var DOMstrings = {
    inputType : ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn : ".add__btn"
  }

  return {
    getInput : function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
        addBtn : document.querySelector(DOMstrings.addBtn).value
      };
    },

      getDOMstrings: function() {
        return DOMstrings;
      }

  };
  })();

  //санхүүтэй ажиллах
  var financeController = (function() {
    var Income = function(id, description, value ){
      this.id = id;   
      this.description = description;
      this.value = value;  
  };
  
  var Expence = function(id, description, value )  {
      this.id = id;   
      this.description = description;
      this.value = value;  
  };

  var data = {
    allItems: {
        inc: [],
        exp: []
    },

    totals: {
        inc: 0,
        exp: 0
    }
}
  })();

  //холбогч контроллер
  var appController = (function(uiController, financeController) {

    var DOM = uiController.getDOMstrings();

    var ctrlAddItem = function() {
        //1.орлуулах өгөгдлийг дэлгэцээс олж авах
        console.log(uiController.getInput());
        //2.олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална
        //3.олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана 
        //4.төсвийг тооцно
        //5.эцсийн үлдэглэл
    };

    document.querySelector(DOM.addBtn).addEventListener("click", function() {
      ctrlAddItem();
    });
    document.addEventListener("keypress", function(event) {
      if (event.key === 13 || event.which === 13) {
        ctrlAddItem();
      }
    } );
  })(uiController, financeController);
