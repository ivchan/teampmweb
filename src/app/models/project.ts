export class Project {
  public projectKey: string;
  public projectName: string;
  public projectCode: string;
  public description: string;
  public startDate: Date;
  public endDate: Date;

  constructor() {
    this.projectKey = '';
    this.projectCode = '';
    this.projectName = '';
    this.description = '';
    this.startDate = new Date();
    this.endDate = new Date();
  }
}
