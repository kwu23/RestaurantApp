'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
    $scope.quantity = 1;
    $scope.pricePho = 12;
    $scope.addPho = function(){
        $scope.quantity = $scope.quantity+1;
        $scope.pricePho = $scope.pricePho + 12;
    };
    $scope.subtractPho = function(){
        if($scope.quantity !== 0){
            $scope.quantity = $scope.quantity-1;
            $scope.pricePho = $scope.pricePho - 12;
        }
    };
  }
]);
