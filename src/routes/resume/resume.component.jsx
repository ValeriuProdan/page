import {
  JobContainer,
  JobsContainer,
  Details,
  LogoContainer,
  SummaryContainer,
  Summary,
  HeaderContainer,
} from "./resume.styles";

import JOBS_DATA from "./jobs.data";
import { Fragment } from "react";

const Resume = () => {
  return (
    <Fragment>
      <HeaderContainer>
        These are the companies and projects that I have been working until now.
      </HeaderContainer>
      <JobsContainer>
        {JOBS_DATA.map((resume) => (
          <JobContainer>
            <SummaryContainer>
              <LogoContainer to={resume.LogoToLink}>
                <img
                  src={resume.Logo}
                  style={{ width: 80, height: 80, borderRadius: 10 }}
                  alt="Company logo"
                />
              </LogoContainer>
              <Summary>
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
    </Fragment>
  );
};

export default Resume;
