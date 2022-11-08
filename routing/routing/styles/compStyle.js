import styled from "styled-components";
let Height = "calc(100vh - clamp(54px, 8vw, 84px) - 62px)";

export const Spacer = styled.div`
  height: 40vw;
`;

export const Wrapper = styled.div`
  width: 80vw;
  min-height: ${Height};
  margin-left: 5vw;
  margin-right: 5vw;
  z-index: 1;
`;

export const Divider = styled.div`
  width: 70vw;
  margin-left: 5vw;
  margin-right: 5vw;
  z-index: 1;
`;

export const Interdiv = styled.div`
  width: 30vw;
  margin-top: 2vw;
  margin-left: 5vw;
  margin-bottom: 2vw;
`;
