import Job from "@/app/resume/job";
import React, {ReactNode} from "react";
import JobData from "@/app/data/resume/JobData";
import YamlObjectParser from "../data/YamlObjectParser";
import SkillCategoryData from "@/app/data/resume/SkillCategoryData";
import SkillCategory from "@/app/resume/skillCategory";
import EducationData from "@/app/data/resume/EducationData";
import Education from "@/app/resume/education";
import '../styles/components/resume-skills.css';
import Page from "@/app/components/basePage";

const jobDataPath = "src/app/data/resume/JobData.yaml";
const skillDataPath = "src/app/data/resume/SkillCategoryData.yaml";
const educationDataPath = "src/app/data/resume/EducationData.yaml";

/**
 *
 * @param dataPath path to file holding information for
 * @param Component
 */
const getData = <T, U extends (props: T) => ReactNode>(
  dataPath: string,
  Component: U
): ReactNode[] => {
  const parser = new YamlObjectParser(dataPath);
  const data = parser.getResults<T>();
  const results : ReactNode[] = [];

  data.forEach(datum => {
    results.push(Component(datum));
  });

  return results;
}

export default function Resume() {
    return (
      <Page id="resume">
        <article>
          <header>Experience</header>
          {getData<JobData, typeof Job>(jobDataPath, Job)}
        </article>
        <article>
          <header>Education</header>
          {getData<EducationData, typeof Education>(educationDataPath, Education)}
        </article>
        <article>
          <header>Skills and technologies</header>
          {getData<SkillCategoryData, typeof SkillCategory>(skillDataPath, SkillCategory)}
        </article>
      </Page>);
}