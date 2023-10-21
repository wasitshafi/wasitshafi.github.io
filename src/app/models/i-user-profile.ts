//  Do watch https://www.youtube.com/watch?v=qA65QjWCl60 for types naming conventions

interface ITemplate1 {
	id: string;
	description: string;
}

export interface IAchievementAndResponsibility extends ITemplate1 {}

export interface IAwardsAndCertification extends ITemplate1 {}

export interface ICodingAndSocialProfile {
	id: string;
	platformName: string;
	username: string;
	profileURL: string;
}

export interface IEducation {
	university: string;
	universityWebsiteURL: string;
	degree: string;
	score: string;
	scoreType: string;
	endDate: string;
}

interface IProjectFeature extends ITemplate1 {}
export interface IPersonalProject {
	projectTitle: string;
	startDate: string;
	endDate: string;
	sourceCodeURL: string;
	liveProjectURL: string;
	projectFeatures: IProjectFeature;
}

interface IProficient extends ITemplate1 {}

interface IFamiliar extends ITemplate1 {}

export interface ISkill {
	proficient: IProficient;
	familiar: IFamiliar;
}

interface ICompanyDetail {
	city: string;
	companyName: string;
	companyWebsiteUrl: string;
	country: string;
}

interface IWorkContribution extends ITemplate1 {}

export interface IWorkExperience {
	companyDetails: ICompanyDetail;
	endDate: string;
	isCurrentlyWorking: string;
	role: string;
	startDate: string;
	workContributions: IWorkContribution;
}
