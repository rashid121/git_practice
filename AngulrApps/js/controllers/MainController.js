app.controller('MainController', ['$scope', function ($scope) {
    // Controller manage the apps data
    $scope.title = 'Top Sellers in Books';
    $scope.promo = "New version of Angularjs";
    /*
      $scope.product = {
          name: 'The Book of Trees',
          price: 19,
          pubdate: new Date('2014', '03', '08')
      };

      */
    $scope.products = [
        {
            likes: 0,
            dislikes: 0,
            name: 'The Book of Trees',
            price: 19,
            pubdate: new Date('2014', '03', '08'),
            cover: 'img/skew.jpg'
        },

        {
            likes: 0,
            dislikes: 0,
            name: 'Program or be Programmed',
            price: 8,
            pubdate: new Date('2013', '08', '01'),
            cover: 'img/sky.jpg'
        },
        {
            likes: 0,
            dislikes: 0,
            name: 'The Book of Trees',
            price: 19,
            pubdate: new Date('2014', '03', '08'),
            cover: 'img/stadium.jpg'
        },

        {
            likes: 0,
            dislikes: 0,
            name: 'Program or be Programmed',
            price: 8,
            pubdate: new Date('2013', '08', '01'),
            cover: 'img/pyramid.jpg'
        }
    ];

    $scope.plusOne = function (index) {
        $scope.products[index].likes += 1;
    };

    $scope.minusOne = function (index) {
        $scope.products[index].dislikes += 1;
    };
}]);