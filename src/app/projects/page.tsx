import Page from "@/app/components/basePage";
import "../styles/utility.css";
import ProjectsCard from "@/app/projects/projectsCard";
import YamlObjectParser from "@/app/data/yamlObjectParser";
import {ProjectData} from "@/app/data/projects/projectData";

export default function Projects() {
  const professionalDataPath = "src/app/data/projects/professionalData.yaml";
  const sideProjectDataPath = "src/app/data/projects/sideProjectData.yaml";
  const gameDevDataPath = "src/app/data/projects/gameDevProjectData.yaml";

  const getProjectData = (
    dataPath: string
  ): ProjectData[] => {
    const parser = new YamlObjectParser(dataPath);
    return parser.getResults<ProjectData>();
  }

  return (<Page id="projects">
      <ProjectsCard title="Professional"
                    category="professional"
                    description="These are the main codebases and products I&#39;ve worked on as a professional software developer."
                    data={getProjectData(professionalDataPath)}
      />
      <ProjectsCard title="Side projects"
                    category="sideprojects"
                    description="In addition, I&#39;ve done a few side projects, generally in the name of staying current and picking up
        skills outside
        what I&#39;m expected to know in my day job. These are generally driven by curiosity; mostly around whatever tech I'm using,
      but also surrounding whatever problem space I&#39;m working in."
                    data={getProjectData(sideProjectDataPath)}
      />
      <ProjectsCard title="Game development"
                    category="games"
                    description="I&#39;m really interested in games as a creative outlet. Making something fun and engaging is an entirely different
      skill-set from programming that provides a nice change of pace from my professional work."
                    data={getProjectData(gameDevDataPath)}
      />
  </Page>)
}