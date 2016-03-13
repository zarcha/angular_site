/**
 * Created by Zach on 3/10/16.
 */
app.controller('RegisterCtrl', function() {
  var me = this;

  me.register = function () {
    if(me.answer != null) {
      if (me.answer.toLowerCase() == "brent") {

      }else{
        me.errorMessage = "No answer has been entered or is invalid!";
      }
    }
  };
});
