import EducationData from "@/app/data/resume/educationData";
import "../styles/utility.css";

export default function Education(data: EducationData) {

  const formatBullets = (bullets: string[]) => (
    <ul>
      {bullets.map((item, index) => (
        <li key={item + "education" + index}>{item}</li>
      ))}
    </ul>
  );

  return (<div className="resume-item" key={data.institution}>
    <div className="duration">
      <h4>{data.duration}</h4>
    </div>
    <div className="content">
      <h5>{data.institution}</h5>
      <h6>{data.credential}, <em>{data.program}</em></h6>
      {
        data.bullets?.length > 0
          ? formatBullets(data.bullets)
          : ""
      }
    </div>
  </div>);
}