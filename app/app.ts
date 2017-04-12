module app {
	var main = angular.module("defectManagement",
		["ngRoute",
			"common.services"
			]);

	main.config(routeConfig);

	routeConfig.$inject = ["$routeProvider"];
	function routeConfig($routeProvider: ng.route.IRouteProvider): void {

		$routeProvider
			.when("/defectList",
				{
					templateUrl: "/app/defects/defectListView.html",
					controller: "DefectListCtrl as vm"
				})
			.when("/createNewDefect",
				{
					templateUrl: "/app/defects/createNewDefect.html",
					controller: "CommentDetailCtrl as vm"
				})
			.when("/recentDefects",
				{
					templateUrl: "/app/defects/recentDefects.html",
					controller: "CommentDetailCtrl as vm"
				})
			.when("/recentDefects/:id",
				{
					templateUrl: "/app/defects/commentDetailView.html",
					controller: "CommentDetailCtrl as vm"
				})
			.otherwise("/recentDefects");
	}
}