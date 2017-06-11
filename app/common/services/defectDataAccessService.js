var app;
(function (app) {
    var common;
    (function (common) {
        var DefectDataAccessService = (function () {
            function DefectDataAccessService($resource, $http) {
                this.$resource = $resource;
                this.$http = $http;
            }
            DefectDataAccessService.prototype.getDefectResource = function () {
                return this.$resource('http://localhost:3000/db');
            };
            DefectDataAccessService.prototype.postCommentData = function (id, data) {
                var baseURL = "http://localhost:3000/defectCommentDetails/" + id.id;
                //var config: ng.IRequestConfig = {method:"PUT",url:baseURL};
                var config = { method: "PUT", url: baseURL };
                //baseURL=baseURL+"defectCommentDetails/:id"
                //return this.$resource(baseURL+"defectCommentDetails/:id",null,  {'update':{method:'PUT' }});
                return this.$http.put(baseURL, data)
                    .then(function (response) { return response.data; });
            };
            DefectDataAccessService.prototype.postDefectData = function (data) {
                var baseURL = "http://localhost:3000/defectCommentDetails";
                return this.$http.post(baseURL, data)
                    .then(function (response) { return response.data; });
            };
            return DefectDataAccessService;
        }());
        DefectDataAccessService.$inject = ["$resource", "$http"];
        common.DefectDataAccessService = DefectDataAccessService;
        angular
            .module("common.services")
            .service("defectDataAccessService", DefectDataAccessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=defectDataAccessService.js.map