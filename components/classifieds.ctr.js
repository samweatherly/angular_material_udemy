(function() {
    "user strict";

    angular
        .module("ngClassifieds")
        .controller("classifiedsCtrl", function($scope) {
            $scope.name = {
                first: "Sam",
                last: "Weatherly"
            };
            $scope.message = "Hello World!!!";
        });
})();