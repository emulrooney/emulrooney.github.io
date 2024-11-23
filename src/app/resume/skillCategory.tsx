import SkillCategoryData from "@/app/data/resume/skillCategoryData";

export default function SkillCategory(data: SkillCategoryData) {
  return (<li key={data.title} className={"resume-skill"}>
    <strong className={"resume-skill-title " + data.className}>{data.title}:</strong>
    <ul>
      {data.items.map((item, index) => {
        return (<li key={item + "skillcategory" + index}>{item}</li>);
      })}
    </ul>
  </li>
)
}