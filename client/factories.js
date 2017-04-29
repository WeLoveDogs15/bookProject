
angular.module("FinalExam.factories", [])

    .factory('Book', ['$resource', function($resource) {
        return $resource("http://localhost:8000/api/books/:id", {id: "@id"});
    }]);