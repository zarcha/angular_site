/**
 * Created by Zach on 3/9/16.
 */
app.controller('MainCtrl', function($scope, $timeout){
  $scope.count = 0;
  $scope.count2 = 0;

  $timeout(function(){
    $scope.count += 1;
  }, 2000);
});
