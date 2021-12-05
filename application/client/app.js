'use strict';

var app = angular.module('application', []);

app.controller('AppCtrl', function($scope, appFactory){
   $("#success_init").hide();
   $("#success_qurey").hide();
   $("#success_invoke").hide();
   $scope.initAB = function(){
       appFactory.initAB($scope.abstore, function(data){
           if(data == "")
           $scope.init_ab = "success";
           $("#success_init").show();
       });
   }
   $scope.queryAB = function(){
       appFactory.queryAB($scope.walletid, function(data){
           $scope.query_ab = data;
           $("#success_qurey").show();
       });
   }
   $scope.invokeAB = function(){
       appFactory.invokeAB($scope.abstore, function(data){
           $scope.invoke_ab =data;
           $("#success_invoke").show();
    });
}
});
app.factory('appFactory', function($http){
      
    var factory = {};
 
    factory.initAB = function(data, callback){
        $http.get('/init?a='+data.a+'&aval='+data.aval+'&b='+data.b+'&bval='+data.bval+'&c='+data.c+'&cval='+data.cval).success(function(output){
            callback(output)
        });
    }
    factory.queryAB = function(a, callback){
        $http.get('/query?a='+a).success(function(output){
            callback(output)
        });
    }
    factory.invokeAB = function(data, callback){
        $http.get('/invoke?a='+data.a+'&b='+data.b+'&c='+data.c+'&x='+data.x).success(function(output){
            callback(output)
        });
    }
    return factory;
 });
 