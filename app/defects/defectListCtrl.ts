module app.defectList {
	interface IDefectListModel {
		title: string;
		showImage: boolean;
		defects: Object;
        
	}

	class DefectListCtrl implements IDefectListModel {
		title: string;
		showImage: boolean;
        defects: Object;
		static $inject = ["defectDataAccessService"];
		constructor(private defectDataAccessService: app.common.DefectDataAccessService) {
            var vm=this;
			this.title = "Product List";
			this.showImage = false;
            this.defects = Object;
            this.title = "Defects Sumary";
			defectDataAccessService.getDefectResource().get(function(data){
				vm.defects = data.defectCommentDetails;
			});
		}

		
	}
	angular
		.module("defectManagement")
		.controller("DefectListCtrl",
			DefectListCtrl);
}