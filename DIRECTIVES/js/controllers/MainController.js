app.controller('MainController', ['$scope', function ($scope) {
    $scope.move = {
        icon: 'img/sky.jpg',
        title: 'MOVE',
        developer: 'MOVE, Inc.',
        price: 0.99
    };

    $scope.shutterbugg = {
        icon: 'img/skew.jpg',
        title: 'Shutterbugg',
        developer: 'Chico Dusty',
        price: 2.99
    };

    $scope.gameboard = {
        icon: 'img/stadium.jpg',
        title: 'Gameboard',
        developer: 'Armando P.',
        price: 1.99
    };

    $scope.apps = [{
            icon: 'img/sky.jpg',
            title: 'MOVE',
            developer: 'MOVE, Inc.',
            price: 0.99
        },
        {
            icon: 'img/skew.jpg',
            title: 'Shutterbugg',
            developer: 'Chico Dusty',
            price: 2.99
        },
        {
            icon: 'img/stadium.jpg',
            title: 'Gameboard',
            developer: 'Armando P.',
            price: 1.99
        },
        {
            icon: 'img/pyramid.jpg',
            title: 'Forecast',
            developer: 'Forecast',
            price: 1.99
        }
    ];
}]);