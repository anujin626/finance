// Дэлгэцтэй ажиллах контроллер
var uiController = (function() {
  
  })();

  //санхүүтэй ажиллах
  var financeController = (function() {})();

  //холбогч контроллер
  var appController = (function(uiController, financeController) {
    var ctrlAddItem = function() {
        //1.орлуулах өгөгдлийг дэлгэцээс олж авах
        console.log("дэлгэцээс өгөгдлөө авах хэсэг");
        //2.олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална
        //3.олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана 
        //4.төсвийг тооцно
        //5.эцсийн үлдэглэл
    };

    document.querySelector(".add__btn").addEventListener("click", function() {
      ctrlAddItem();
    });
    document.addEventListener("keypress", function(event) {
      if (event.key === 13 | | event.which === 13) {
        ctrlAddItem();
      }
    } );
  })(uiController, financeController);
