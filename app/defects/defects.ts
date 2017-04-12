module app.domain {
	export interface IDefect {
		defectId: number;
		summary: string;
		description: string;
		createdOn: Date;
		
	}

	export class Defect implements IDefect {

		constructor(public defectId: number,
					public summary: string,
					public description: string,
					public createdOn: Date,
					) {
		}

	}
}