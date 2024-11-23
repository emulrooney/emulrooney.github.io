import ProjectDataUrl from "@/app/data/projects/projectDataUrl";
import ProjectDataImage from "@/app/data/projects/projectDataImage";

type ProjectData = {
  title: string;
  context: string;
  descriptionTitle: string;
  descriptionBody: string;
  urls: ProjectDataUrl[];
  images: ProjectDataImage[];
  self: ProjectData;
};

export default ProjectData;