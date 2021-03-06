module app.defectCommentDetail {
	interface IDefectListModel {
		title: string;
		showImage: boolean;
		defects: Object;
        
	}

    interface IDefectParams extends ng.route.IRouteParamsService {
		id: number;
	}

	class CommentDetailCtrl implements IDefectListModel {
		title: string;
		showImage: boolean;
		
        defects: any[];
        currentDefect: number;
        newComment: any;
		newDefect: any;
        whichDetails: number;
		static $inject = ["$routeParams", "defectDataAccessService"];
		constructor(private $routeParams: IDefectParams, private defectDataAccessService: app.common.DefectDataAccessService) {
            var vm=this;
			this.title = "Product List";
			this.showImage = false;
            this.defects = [];
            this.title = "Defects Sumary";
			defectDataAccessService.getDefectResource().get(function(data){
				vm.defects = data.defectCommentDetails;
			});
            this.whichDetails = $routeParams.id-1;
            this.newComment = {commentOn:null,commentBy:null,comment:null};
			this.newDefect = {defectId:null,summary:null,status:null,severity:null,assignedTo:null,detectedBy:null,description:null,detectedOn:"",comments:[]};
		}
        
        addComment($routeParams: IDefectParams, defectDataAccessService: app.common.DefectDataAccessService): void {
			
			this.currentDefect = this.$routeParams.id;
                var defectDetails = this.defects;
                var todaysDate = new Date();
                this.newComment.commentOn = todaysDate.toLocaleDateString();
                defectDetails[this.currentDefect -1].comments.push(this.newComment);

                //$scope.updateId = $scope.currentDefect-1;
                var newdata = defectDetails[this.currentDefect-1];
                this.defectDataAccessService.postCommentData({id:this.currentDefect},newdata).then(response => {
					var postresponse = response;
					console.log(postresponse);
				}).catch( reason => {
					console.log("something went wrong!");
				});
                this.newComment = {commentOn:null,commentBy:null,comment:null};
		}

		addNewDefect(defectDataAccessService: app.common.DefectDataAccessService): void {
			
			var currdate = new Date();
                this.newDefect.detectedOn = currdate.toLocaleDateString();
                //allDefectDetails.push($scope.newProduct);
                this.defects.push(this.newDefect);
                this.defectDataAccessService.postDefectData(this.newDefect).then((response) => {
                    	console.log(response);
                	}, function(error){
                    	console.log(error);
                });
				this.newDefect = {defectId:null,summary:null,status:null,severity:null,assignedTo:null,detectedBy:null,description:null,detectedOn:"",comments:[]};

		}

		
	}
	angular
		.module("defectManagement")
		.controller("CommentDetailCtrl",
			CommentDetailCtrl);
}