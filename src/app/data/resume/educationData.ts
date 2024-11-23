class EducationData {
  institution: string;
  credential: string;
  duration: string;
  program: string;
  bullets: string[];

  constructor(institution: string, credential: string, duration: string, program: string, bullets: string[]) {
    this.institution = institution;
    this.credential = credential;
    this.duration = duration;
    this.program = program;
    this.bullets = bullets;
  }
}
export default EducationData;