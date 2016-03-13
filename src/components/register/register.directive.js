/**
 * Created by Zach on 3/11/16.
 */
app.directive('validateForm', [ function(){
  return {
    restrict: 'A',
    controller: "RegisterCtrl",
    link: function(scope, el){

      el.on("click", function(){
        $('input').each(function(d){
          if($(this).val().length > 0){
            scope.Ctrl.errorMessage = "";
          }
          else{
            scope.Ctrl.errorMessage = "No " + $(this).attr('name') + " has been entered or is invalid!";
            return false;
          }
        });
      });
    }
  };
}]);
