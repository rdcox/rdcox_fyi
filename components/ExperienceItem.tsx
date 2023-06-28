export type ExperienceItemProps = {
    exp: any;
}

export function ExperienceItem({ exp }: ExperienceItemProps) {
    return (
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
    )
}