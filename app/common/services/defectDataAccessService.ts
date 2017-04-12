module app.common {
	interface IDefectDataAccessService {
		getDefectResource(): ng.resource.IResourceClass<IDefectResource>;
		
	}

	interface IHttpDefectDataAccessService {
		postCommentData(): ng.IHttpService;
		postDefectData(): ng.IHttpService;
	}

	interface IDefectResource
		extends ng.resource.IResource<app.domain.IDefect> {

	}


	export class DefectDataAccessService
		implements IDefectDataAccessService {

		static $inject = ["$resource","$http"];
		constructor(private $resource: ng.resource.IResourceService, private $http: ng.IHttpService ) {

		}

		getDefectResource(): ng.resource.IResourceClass<IDefectResource> {
			return this.$resource('http://localhost:3000/db');
		}

		postCommentData(id,data): ng.IPromise<any> {
			var baseURL = "http://localhost:3000/defectCommentDetails/" + id.id;
			//var config: ng.IRequestConfig = {method:"PUT",url:baseURL};
			var config: any = {method:"PUT",url:baseURL};
			//baseURL=baseURL+"defectCommentDetails/:id"
            //return this.$resource(baseURL+"defectCommentDetails/:id",null,  {'update':{method:'PUT' }});
			return this.$http.put(baseURL,data)
                   .then(response => response.data);
		}

		postDefectData(data): ng.IPromise<any> {
			var baseURL = "http://localhost:3000/defectCommentDetails";
		
			return this.$http.post(baseURL,data)
                   .then(response => response.data);
		}
		
	}
	angular
		.module("common.services")
		.service("defectDataAccessService",
			DefectDataAccessService);

}