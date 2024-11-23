class SkillCategoryData {
  title: string;
  className: string;
  items: string[];

  constructor(title: string, className: string, items: string[]) {
    this.title = title;
    this.className = className
    this.items = items;
  }
}
export default SkillCategoryData;