import Page from "@/app/components/basePage";
import '../styles/utility.css';
// import Image from "next/image";

export default function AboutMe() {
  const careerHighlights = [
    "Building tooling for financial comparisons and validations at ASICS Apps to enable migrations away from complicated legacy systems",
    "️Streamlining and automating processes surrounding personalized recommendations for customers to free up developer time at Audiobooks.com",
    "️Building dynamic visualizations for student metrics across 100+ post-secondary institutions at Orbis Communications",
    "Enhancing UI/UX and ensuring WCAG 2.0 Level AA compliance for Outcome Campus Connect"
  ];
  const renderList = (items: string[]) => (
    <ul>
      {items.map((item, index) => (
        <li key={item + index}>{item}</li>
      ))}
    </ul>
  );

  return (<Page id="aboutme">
    <article>
      <div className="vertical-align">
        <p>
          I&#39;m an experienced full stack developer with a background in a variety of languages and frameworks,
          including
          Symfony, .NET, Vue and React, with expertise in AWS, SQL (MySQL, PostgreSQL), automation and
          software testing. Lately I&#39;ve been learning <a href="https://nextjs.org/">Next.js</a> and Typescript (both
          used to create this portfolio!).
        </p>
        <p>
          I’m currently working at <a href="https://www.raceroster.com/">Race Roster</a>, a leading platform connecting
          competitive race organizers to registrants. Previously, I worked at <a
          href="https://audiobooks.com">Audiobooks.com</a>
          focusing on improvements to customer tracking and automating product recommendations. I also worked on Outcome
          and <a href="https://outcomecampusconnect.com/">Outcome Campus Connect</a> as part of the UX team at
          <a href="https://orbiscommunications.com">Orbis Communications</a>, focusing on accessibility and
          usability for software used by 100+ post-secondary institutions across North America.
        </p>
        <p>
          Collaboration and adaptability have been key components of my professional journey, owed in part to several
          years pursuing a career in live theatre &#8212; I’m used to designing, implementing, documenting and
          troubleshooting
          new systems with both technical and non-technical stakeholders, changing my language and approach to make sure
          everyone is on the same page.
        </p>

      </div>
    </article>
    <article>
      <header>
        Some career highlights
      </header>
      {renderList(careerHighlights)}
    </article>
    <article>
      <header>
        Want to connect?
      </header>
      <ul>
        <li key="linkedin">Reach out on <a href="https://www.linkedin.com/in/evan-mulrooney-0930b6a1/">LinkedIn</a></li>
        <li key="github">Check out <a href="https://www.github.com/emulrooney">my Github</a></li>
      </ul>
    </article>
  </Page>)

}