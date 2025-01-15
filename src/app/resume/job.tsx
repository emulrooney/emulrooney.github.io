import JobData from "@/app/data/resume/jobData";
import "../styles/utility.css";
import "../styles/components/resume-item.css";

export default function Job(data: JobData) {

  const getTechMapping = (tech : string) => {
    switch (tech.toLowerCase()) {
      case "php":
      case "c#":
      case "javascript":
      case "typescript":
      case "python":
        return "tech-list-language";
      case "symfony":
      case ".net core":
      case "vue":
      case "react":
      case "fastapi":
      case "pyramid":
        return "tech-list-framework";
      case "mysql":
      case "postgresql":
      case "microsoft sql server":
        return "tech-list-database";
      default: //all others - no class needed
        return "";
    }
  };


  const formatBullets = (bullets: string[]) => (
    <ul>
      {bullets.map((item, index) => (
        <li key={item + "bullet" + index}>{item}</li>
      ))}
    </ul>
  );

  const formatTech = (bullets: string[]) => (
    <ul className="tech-list">
      {bullets.map((item, index) => (
        <li className={getTechMapping(item)} key={item + "tech" + index}>{item}</li>
      ))}
    </ul>
  );

  return (<div className="resume-item" key={data.company + data.duration}>
    <div className="duration">
      <h4>{data.duration}</h4>
    </div>
    <div className="content">
      <h5>{data.title} @ {data.company}</h5>
      <h6>{data.location}</h6>
      { formatBullets(data.bullets) }
      { formatTech(data.tech) }
    </div>
  </div>);
}