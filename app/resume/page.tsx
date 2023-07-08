import { ExperienceItem } from "@/components/ExperienceItem";
import { getResumeData } from "@/lib/resume-data";

export default async function Resume() {
  const { about, contact, experience, skills } = await getResumeData();

  const professionalExperience = experience?.
  filter((exp) => exp.exp_type === "professional").
  sort((a, b) => {
    return b.end_year - a.end_year
  });
  const education = experience?.filter((exp) => exp.exp_type === "education");

  return (
    <div className="main-container">
    <div className="bumper"></div>
    <div className="resume">
      
      <div className="header">
        <h1>{about.name}</h1>
        <p>{about.tag} | {about.subTag}</p>
        <ul className="contact-info">
          {contact?.map((inf: any) => (
            <li>{String(inf.value).includes("http") ? <a href={inf.value} target="_blank">{inf.name}</a> : inf.value}</li>
          ))}
        </ul>
      </div>

      <div className="about-me">
        <h2>About Me</h2>
        <p>{about.aboutMe}</p>
      </div>
      
      <h2>Professional Experience</h2>
      <ul data-test-id="professional-experience">
        {professionalExperience?.map((exp: any) => (
          <ExperienceItem exp={exp}></ExperienceItem>
        ))}
      </ul>
      
      <h2>Education</h2>
      <ul>
        {education?.map((exp: any) => (
          <ExperienceItem exp={exp}></ExperienceItem>
        ))}
      </ul>
      
      <h2>Skills</h2>
      <ul>
        {skills?.length ? skills.map((skill: any) => (
          <li>{skill.name}</li>
          )) : <p>{"No skills :("}</p>}
      </ul>
    </div>
    <div className="bumper"></div>
    </div>
  );
}