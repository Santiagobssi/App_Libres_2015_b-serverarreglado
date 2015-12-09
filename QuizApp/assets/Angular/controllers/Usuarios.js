app.controller('UsuariosController',['$scope','$http',function($scope,$http){

    
    //$scope.agregarUsuario=function agregarUsuario(){

//}
    console.log("Entr}o al controlador Usuario");
/*
    $scope.agregarUsuario=agregarUsuario;
    $scope.nombre="";
        $scope.apellido="";
        $scope.correo="";
        $scope.password="";
        $scope.fecha="";*/
  
    function agregarUsuario(){
    
        console.log("Entro a agregar Usuario",nombre);
        console.log("Apellido",apellido);
        console.log("Correo",correo);
        console.log("Password",password);
        console.log("Fecha",fecha);
    
    
    }
    
   /* $http({
        method:'POST',
        url:'localhost:1337/Usuarios'
    
    }).then(function RespuestaSiIngresoElUsuario(respuesta){
            },
function RespuestasSiNoIngresoElUsuario(respuesta){
    });
*/
}]);