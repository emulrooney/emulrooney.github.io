import fs from 'fs';
import YAML from 'yaml';

/**
 * Simple class allowing parsing yaml files into a generic type
 */
class YamlObjectParser {

  /**
   * Yaml file destination. Pathed from root; ie `"src/app/data/JobData.yaml"`
   */
  source: string;

  constructor(source: string) {
    this.source = source;
  }

  /**
   * Parse a file into the generic type.
   */
  getResults<Type>(): Type[] {
    const file = fs.readFileSync(this.source, 'utf8');
    const parsedData = Object.values(YAML.parse(file));
    const results: Type[] = [];

    parsedData.forEach((item: unknown) => {
      const o = item as Type;
      results.push(o);
    });

    return results;
  }
}

export default YamlObjectParser;