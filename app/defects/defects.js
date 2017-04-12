var app;
(function (app) {
    var domain;
    (function (domain) {
        var Defect = (function () {
            function Defect(defectId, summary, description, createdOn) {
                this.defectId = defectId;
                this.summary = summary;
                this.description = description;
                this.createdOn = createdOn;
            }
            return Defect;
        }());
        domain.Defect = Defect;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
