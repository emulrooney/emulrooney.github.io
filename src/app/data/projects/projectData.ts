export class ProjectData {
  title: string;
  context: string;
  descriptionTitle: string;
  descriptionBody: string;
  imagePaths: string[];
  imageAlts: string[];
  self: ProjectData;

  constructor(title: string, context: string, descriptionTitle: string, descriptionBody: string, imagePaths: string[], imageAlts: string[]) {
    this.self = this;
    this.title = title;
    this.context = context;
    this.descriptionTitle = descriptionTitle;
    this.descriptionBody = descriptionBody;
    this.imagePaths = imagePaths;
    this.imageAlts = imageAlts;
  }
}