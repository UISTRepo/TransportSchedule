/**
 * Created by tunte on 26-Nov-14.
 */
app.service('ApiService', ['$http', function($http) {
    return {
        getData: function() {
            return $http.get(serverName + '/api').then(function(result) {
                return result.data;
            });
        },

        addData: function(input) {
            return $http.post(serverName + '/api', input).then(function(result) {
                return result.data;
            });
        }
    }
}]);