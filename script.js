var mainApp = angular.module("mainApp", []);

mainApp.controller('studentController', function($scope) {
   $scope.student = {
      firstName: "Avinash",
      lastName: "Chundu",
      fees:3000,
      subjects:[
         {name:'ISEM 500',grade:'A'},
         {name:'ISEM 501',grade:'A'},
         {name:'ISEM 540',grade:'B+'},
		 {name:'MGMT 510',grade:'A-'},
		 {name:'ISEM 565',grade:'A'}
      ],
      fullName: function() {
         var studentObject;
         studentObject = $scope.student;
         return studentObject.firstName + " " + studentObject.lastName;
      }
   };
});