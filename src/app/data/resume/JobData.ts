class JobData {
  title: string;
  company: string;
  location: string;
  duration: string;
  bullets: string[];
  tech: string[];

  constructor(title: string, company: string, location: string, duration: string, bullets: string[], tech: string[]) {
    this.title = title;
    this.company = company;
    this.location = location;
    this.duration = duration;
    this.bullets = bullets;
    this.tech = tech;
  }
}
export default JobData;