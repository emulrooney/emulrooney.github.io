'use client';

import Image from "next/image";
import ProjectData from "@/app/data/projects/projectData";
import ProjectsCardDisplayer from "@/app/projects/projectsCardDisplayer";
import {useState} from "react";
import ProjectDataUrl from "@/app/data/projects/projectDataUrl";
import {Browsers, GameController, GithubLogo, Video} from "@phosphor-icons/react";
import "../styles/components/project-card.css";

export interface ProjectsCardInterface {
  title: string,
  description: string,
  category: string,
  data: ProjectData[];
}

export default function ProjectsCard({title, description, category, data} : ProjectsCardInterface) {
  const [currentlyShowing, setCurrentlyShowing] = useState(0);

  const updateCurrentlyShowing = (index: number) => {
    setCurrentlyShowing(index);
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <GithubLogo />
      case 'Video':
        return <Video />
      case 'Play it':
        return <GameController />
      default:
        return <Browsers />
    }
  }

  const getDisplayName = (datum: ProjectData): string => {
    return datum.context.length > 0 ? datum.title + " @ " + datum.context : datum.title;
  }

  return <article>
    <header><h3>{title}</h3></header>
    <p><em>{description}</em></p>
    <details className="mobile-only dropdown">
      <summary>{getDisplayName(data[currentlyShowing])}</summary>
      <ul>
        {
          data.map((datum: ProjectData, i: number) => {
            const d = datum as ProjectData;

            return <li key={getDisplayName(d) + category + "-m"}>
              <a
                className={(currentlyShowing == i ? "active" : "")}
                onClick={() => updateCurrentlyShowing(i)}
              >
                { getDisplayName(d) }
              </a>
            </li>
          })
        }
      </ul>
    </details>

    <ul className="desktop-only list-style-none flex flex-row flex-wrap flex-gap">
      {
        data.map((datum: ProjectData, i: number) => {
          return <li key={getDisplayName(datum) + category + "-d"}>
            <button
              className={"link-button no-wrap " + (currentlyShowing == i ? "active" : "")}
              onClick={() => updateCurrentlyShowing(i)}
            >
            {getDisplayName(datum)}</button>
          </li>
        })
      }
    </ul>
    <ProjectsCardDisplayer currentlyShowing={currentlyShowing}>
      {
        data.map((datum: ProjectData) => {
          const urls = datum.urls?.map((projectUrl: ProjectDataUrl) => {
            return <li key={"project-url-" + projectUrl.url}>
              <a className="project-url" href={projectUrl.url}>
                {getIcon(projectUrl.icon)}
                {projectUrl.text}
              </a>
            </li>
          });

          return <li key={getDisplayName(datum) + category + "-display"}>
            <figure>
              <div className="project-big-image">
                <Image className="width-100"
                       src={"/projects/" + category + "/" + datum.images[0].url} alt={datum.images[0].alt}
                       width="750"
                       height="1000"
                />
              </div>
              <figcaption>
                <h4>{datum.descriptionTitle}</h4>
                <p>{datum.descriptionBody}</p>
              </figcaption>
              <div>
                <ul className="flex flex-gap list-style-none ">
                  {urls}
                </ul>
              </div>
            </figure>
          </li>
        })
      }
    </ProjectsCardDisplayer>
  </article>
}