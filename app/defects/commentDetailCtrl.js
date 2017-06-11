var app;
(function (app) {
    var defectCommentDetail;
    (function (defectCommentDetail) {
        var CommentDetailCtrl = (function () {
            function CommentDetailCtrl($routeParams, defectDataAccessService) {
                this.$routeParams = $routeParams;
                this.defectDataAccessService = defectDataAccessService;
                var vm = this;
                this.title = "Product List";
                this.showImage = false;
                this.defects = [];
                this.title = "Defects Sumary";
                defectDataAccessService.getDefectResource().get(function (data) {
                    vm.defects = data.defectCommentDetails;
                });
                this.whichDetails = $routeParams.id - 1;
                this.newComment = { commentOn: null, commentBy: null, comment: null };
                this.newDefect = { defectId: null, summary: null, status: null, severity: null, assignedTo: null, detectedBy: null, description: null, detectedOn: "", comments: [] };
            }
            CommentDetailCtrl.prototype.addComment = function ($routeParams, defectDataAccessService) {
                this.currentDefect = this.$routeParams.id;
                var defectDetails = this.defects;
                var todaysDate = new Date();
                this.newComment.commentOn = todaysDate.toLocaleDateString();
                defectDetails[this.currentDefect - 1].comments.push(this.newComment);
                //$scope.updateId = $scope.currentDefect-1;
                var newdata = defectDetails[this.currentDefect - 1];
                this.defectDataAccessService.postCommentData({ id: this.currentDefect }, newdata).then(function (response) {
                    var postresponse = response;
                    console.log(postresponse);
                }).catch(function (reason) {
                    console.log("something went wrong!");
                });
                this.newComment = { commentOn: null, commentBy: null, comment: null };
            };
            CommentDetailCtrl.prototype.addNewDefect = function (defectDataAccessService) {
                var currdate = new Date();
                this.newDefect.detectedOn = currdate.toLocaleDateString();
                //allDefectDetails.push($scope.newProduct);
                this.defects.push(this.newDefect);
                this.defectDataAccessService.postDefectData(this.newDefect).then(function (response) {
                    console.log(response);
                }, function (error) {
                    console.log(error);
                });
                this.newDefect = { defectId: null, summary: null, status: null, severity: null, assignedTo: null, detectedBy: null, description: null, detectedOn: "", comments: [] };
            };
            return CommentDetailCtrl;
        }());
        CommentDetailCtrl.$inject = ["$routeParams", "defectDataAccessService"];
        angular
            .module("defectManagement")
            .controller("CommentDetailCtrl", CommentDetailCtrl);
    })(defectCommentDetail = app.defectCommentDetail || (app.defectCommentDetail = {}));
})(app || (app = {}));
//# sourceMappingURL=commentDetailCtrl.js.map