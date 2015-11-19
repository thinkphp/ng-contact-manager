contactManager.controller('AppCtrl',

  function AppCtrl ($scope) {

    $scope.contacts = [{
      name: 'Adrian Statescu',
      phone: '888-777-333',
      email: 'adrian@mergesort.com',
      address: [
        'Sunset Beach',
        'Mountain View, CA 94043'
      ]
    },{
      name: 'Andrew Canada',
      phone: '888-777-333',
      email: 'andrew@mergesort.com',
      address: [
        'Sunset Beach',
        'Mountain View, CA 94043'
      ]
    },{
      name: 'Ernest Hemingway',
      phone: '888-777-111',
      email: 'ernest@yahoo.com',
      address: [
        'Batranul si marea',
        'Mountain View, CA 123456'
      ]
    }];

  });


contactManager.controller('AddCtrl',

  function AddCtrl($scope, $location) {

    $scope.contact = {};

    $scope.add = function () {

      $scope.contacts.push($scope.contact);

      $location.url('/');

    };

});


contactManager.controller('EditCtrl',

  function EditCtrl($scope, $routeParams, $location) {
    $scope.contact = $scope.contacts[$routeParams.id];
    $scope.edit = function () {
      $scope.contacts[$routeParams.id] = $scope.contact;
      $location.url('/');
    };

  });

contactManager.controller('InfoCtrl',

  function InfoCtrl($scope, $routeParams) {

    $scope.contact = $scope.contacts[$routeParams.id];

});

contactManager.controller('RemoveCtrl',

  function RemoveCtrl($scope, $routeParams, $location) {

    $scope.contact = $scope.contacts[$routeParams.id];

    $scope.remove = function () {
      $scope.contacts.splice($routeParams.id, 1);
      $location.url('/');
    };

    $scope.back = function () {
      $location.url('/');
    };

});