import styled from "styled-components";

import { Link } from 'react-router-dom';

export const JobsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const JobContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 20px
`;

export const SummaryContainer = styled.div`
display: flex;
flex-direction: row;
`;
export const Summary = styled.div`

`;

export const Details = styled.div`
padding: 5px 20px
`;

export const LogoContainer = styled(Link)`
  margin: 0 20px
`;