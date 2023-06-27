import { createClient } from "@supabase/supabase-js";

export default async function Index() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(!!url ? url : "", !!key ? key : "");

  // fetch about me info
  let { data: about } = await supabase.from("about").select().limit(1).single();

  // fetch contact info
  let { data: contact } = await supabase.from("contact").select();

  // fetch experience info and separate it by type: professional and education
  const { data: experience } = await supabase.from("experience").select();
  const professionalExperience = experience?.filter((exp) => exp.exp_type === "professional");
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
          <li key={exp.id} className="experience">
            <div className="company-container">
              <div className="company-name">
                <p>{exp.organization}</p>
              </div>
              <div  className="location">
                <p>{exp.city}, {exp.state}, {exp.country}</p>
              </div>
            </div>
            <div className="job-container">
              <div className="job-title">
                <p className="job-title">{exp.role}</p>
              </div>
              <div className="date-range">
                <p>{exp.start_month} {exp.start_year} - {exp.end_month} {exp.end_year}</p>
              </div>
            </div>
            <ul>
              {exp.points.map((bullet: string) => (
                <li className="bullet-point">{bullet}</li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
      
      <h2>Education</h2>
      <ul>
        {education?.map((exp: any) => (
          <li key={exp.id} className="experience">
            <div className="company-container">
              <div className="company-name">
                <p>{exp.organization}</p>
              </div>
              <div  className="location">
                <p>{exp.city}, {exp.state}, {exp.country}</p>
              </div>
            </div>
            <div className="job-container">
              <div className="job-title">
                <p className="job-title">{exp.role}</p>
              </div>
              <div className="date-range">
                <p>{exp.start_month} {exp.start_year} - {exp.end_month} {exp.end_year}</p>
              </div>
            </div>
            <ul>
              {exp.points.map((bullet: string) => (
                <li className="bullet-point">{bullet}</li>
              ))}
            </ul>
          </li>
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