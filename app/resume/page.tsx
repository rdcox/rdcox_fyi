import { ExperienceItem } from "@/components/ExperienceItem";
import { supabase } from "@/lib/supabase";

async function getAboutMe() {
  let { data: about } = await supabase.from("about").select().limit(1).single();
  return about;
}

async function getContactInfo() {
  let { data: contact } = await supabase.from("contact").select();
  return contact;
}

async function getExperiences() {
  const { data: experience } = await supabase.from("experience").select();
  return experience;
}

async function getSkills() {
  const { data: skills } = await supabase.from("skills").select();
  return skills;
}

export default async function Resume() {
  const aboutMeProm = getAboutMe();
  const contactProm = getContactInfo();
  const experienceProm = getExperiences();
  const skillsProm = getSkills();
  const [about, contact, experience, skills] = await Promise.all([aboutMeProm, contactProm, experienceProm, skillsProm]);

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
        <p>{about.tag} | {about.sub_tag}</p>
        <ul className="contact-info">
          {contact?.map((inf: any) => (
            <li>{String(inf.value).includes("http") ? <a href={inf.value} target="_blank">{inf.name}</a> : inf.value}</li>
          ))}
        </ul>
      </div>

      <div className="about-me">
        <h2>About Me</h2>
        <p>{about.about_me}</p>
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