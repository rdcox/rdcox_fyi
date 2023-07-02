import { createClient } from "@supabase/supabase-js";

import { ExperienceItem } from "@/components/ExperienceItem";

export default async function Resume() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(!!url ? url : "", !!key ? key : "");

  // fetch about me info
  let { data: about } = await supabase.from("about").select().limit(1).single();

  // fetch contact info
  let { data: contact } = await supabase.from("contact").select();

  // fetch experience info and separate it by type: professional and education
  const { data: experience } = await supabase.from("experience").select();
  const professionalExperience = experience?.filter((exp) => exp.exp_type === "professional").sort((a, b) => {return b.end_year - a.end_year});
  const education = experience?.filter((exp) => exp.exp_type === "education");

  // fetch skill info
  const { data: skills } = await supabase.from("skills").select();

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
      <ul>
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