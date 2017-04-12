var app;
(function (app) {
    var defectList;
    (function (defectList) {
        var DefectListCtrl = (function () {
            function DefectListCtrl(defectDataAccessService) {
                this.defectDataAccessService = defectDataAccessService;
                var vm = this;
                this.title = "Product List";
                this.showImage = false;
                this.defects = Object;
                this.title = "Defects Sumary";
                defectDataAccessService.getDefectResource().get(function (data) {
                    vm.defects = data.defectCommentDetails;
                });
            }
            return DefectListCtrl;
        }());
        DefectListCtrl.$inject = ["defectDataAccessService"];
        angular
            .module("defectManagement")
            .controller("DefectListCtrl", DefectListCtrl);
    })(defectList = app.defectList || (app.defectList = {}));
})(app || (app = {}));
