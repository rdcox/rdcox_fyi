import { Page, View, Document, StyleSheet, pdf } from '@react-pdf/renderer';
import { ExperienceItem } from './ExperienceItem';
import { getResumeData } from '@/lib/resume-data';

const styles = StyleSheet.create({
    resume: {
        display: 'flex',
        justifyContent: 'center'
    },
    header: {
      textAlign: 'center'
    },
    contactInfo: {
      display: 'flex',
      justifyContent: 'space-around'
    },
    contactInfoItem: {
      padding: '0.5em',
      fontSize: 'small',
    },
    aboutMe: {
      marginBottom: '1em'
    },
    experience: {
      display: 'flex',
      flexDirection: 'column'
    },
    companyContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    companyName: {
      width: 'auto',
      fontSize: 'large',
      fontWeight: 'bold'
    },
    location: {
      fontSize: 'smaller',
      display: 'flex',
      alignItems: 'flex-end'
    },
    jobContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: '1em',
      fontStyle: 'oblique'
    },
    dateRange: {
      fontSize: 'smaller'
    }
  });

  export default async function ResumeDoc() {
    const { about, contact, experience, skills } = await getResumeData();

    const professionalExperience = experience?.
                                    filter((exp) => exp.exp_type === "professional").
                                    sort((a, b) => {
                                        return b.end_year - a.end_year
                                    });
    const education = experience?.filter((exp) => exp.exp_type === "education");

    return (
        <Document>
            <Page size="A4" style={styles.resume}>
                <View>
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
                </View>
            </Page>
        </Document>
    )
  }

