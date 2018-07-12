/*
    * Auteur:         Devon Thomassen
    * Datum + tijd:   11-7-2018 05:58
    * Bestandsnaam:   script.js
*/
angular.module('app', [])
    .controller('myCtrl', function ($scope) {
        $scope.title = "Project voor stage bedrijf met AngularJS";
        $scope.player1 = "Player1"
        $scope.player2 = "Player2"
        $scope.symbolX = {
            name: 'The symbol X',
            value: 'X'
        }
        $scope.symbolO = {
            name: 'The symbol O',
            value: 'O'
        }
    });

