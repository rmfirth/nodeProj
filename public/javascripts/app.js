var app = window.angular.module('app', []);

app.factory('commentTracker', commentTracker);
app.controller('mainCtrl', mainCtrl);

function commentTracker($http) {
    var REQUEST_ROOT = 'comments';
    return {
        get: function() {
            return $http
                .get(REQUEST_ROOT)
                .then(function (resp) {
                    return resp.data;
                })
        }
    }
}

function mainCtrl ($scope, commentTracker, $http) {
    $scope.comments = [];


    $scope.addComment = function () {
        var formData = {
            text: $scope.commentText,
            uid: $scope.userID
        };
        var commentURL = 'comments';
        $scope.commentText = '';
        $http({
            url: commentURL,
            method: "POST",
            data: formData
        }).success(function(data, status, headers, config) {
            console.log("Post worked");
            $scope.comments = data;
        }).error(function(data, status, headers, config) {
            console.log("post failed");
        });
    };

    commentTracker.get()
        .then(function(data) {
            $scope.comments = data;
    });
}