import styled from "styled-components";

import { Link } from "react-router-dom";

export const JobsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const JobContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 0px;
  padding: 10px 0px;
  font-size: 20px;
  max-width: 900px;
  border-radius: 20px;
  background: #b5b5b5;
`;

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Summary = styled.div``;

export const Details = styled.div`
  padding: 20px 20px;
`;

export const LogoContainer = styled(Link)`
  margin: 0 20px;
`;

export const HeaderContainer = styled.div`
  padding: 20px 30px;
  font-size: 30px;
`;
