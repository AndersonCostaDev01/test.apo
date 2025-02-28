import styled from "styled-components";

export const DivCut = styled.div`
  background-image: linear-gradient(122deg, #004999 0%, #ffffff 80%);

  @media (min-width: 1024px) {
    clip-path: url(#corte-01-desktop);
    top: 0;
    width: 1000px;
    height: 500px;
  }
  @media (max-width: 1024px) {
    clip-path: url(#corte-01-mobile);
    top: 15px;
    left: -50px;
    width: 400px;
    height: 250px;
  }
`;
