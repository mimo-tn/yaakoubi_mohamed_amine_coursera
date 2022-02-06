(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope){
    $scope.Lunch="";
    $scope.result="";
    $scope.Lunchsplit=function(){
      $scope.Lunchsplited=$scope.Lunch.split(',');
      if($scope.Lunchsplited!=""){
        if($scope.Lunchsplited.length<4){
          $scope.result="Enjoy!";
        }else{
          $scope.result="Too Much";
        }
      }else{
        $scope.result="Please enter data first";
      }
    };

    };
})();
