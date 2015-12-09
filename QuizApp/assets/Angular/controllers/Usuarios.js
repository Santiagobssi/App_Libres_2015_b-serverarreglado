app.controller('UsuariosController',['$scope',function($scope){

    
    //$scope.agregarUsuario=function agregarUsuario(){

//}

    $scope.agregarUsuario=agregarUsuario;
    
  
    function agregarUsuario(){
    
    
    
    }
    
    $http({
        method:'POST',
        url:'localhost:1337/Usuarios'
    
    }).then(function RespuestaSiIngresoElUsuario(respuesta)){
            },function RespuestasSiNoIngresoElUsuario(respuesta){
    });

}]);