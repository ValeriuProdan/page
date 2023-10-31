import {
  JobContainer,
  JobsContainer,
  Details,
  LogoContainer,
  SummaryContainer,
  Summary,
} from "./resume.styles";

import JOBS_DATA from "./jobs.data";

const Resume = () => {
  return (
    <JobsContainer>
      <h2>Resume</h2>
      {JOBS_DATA.map((resume) => (
        <JobContainer>
          <SummaryContainer>
            <LogoContainer to={resume.LogoToLink}>
              <img src={resume.Logo} style={{ width: 70 }} alt="Company logo" />
            </LogoContainer>
            <Summary>
              {" "}
              <div>{resume.Company}</div>
              <div>{resume.Title}</div>
              <div>{resume.Duration}</div>
            </Summary>
          </SummaryContainer>

          <Details>
            {resume.Details.map((text) => (
              <span>{text}</span>
            ))}
          </Details>
        </JobContainer>
      ))}
    </JobsContainer>
  );
};

export default Resume;
