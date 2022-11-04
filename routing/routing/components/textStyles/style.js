import styled, { keyframes } from "styled-components";
import { CgSpinnerTwo } from "react-icons/cg";
export const H1 = styled.span`
  font-family: "Gotu";
  font-size: 96px;

  color: ${(props) => props.color || "#1B4965"};
  -webkit-text-stroke: ${(props) => props.stroke || ""};
`;

export const H2 = styled.span`
  font-family: "Gotu";
  font-size: clamp(40px, 5vw, 72px);
  color: ${(props) => props.color || "#1B4965"};
  white-space: ${(props) => props.wrap || "normal"};
  -webkit-text-stroke: ${(props) => props.stroke || ""};
`;

export const H3 = styled.div`
  font-family: "Gotu";
  font-size: 64px;
  color: ${(props) => props.color || "#1B4965"};
`;

export const H4 = styled.span`
  font-family: "Gotu";
  font-size: clamp(32px, 4vw, 48px);
  color: ${(props) => props.color || "#1B4965"};
  white-space: ${(props) => props.wrap || "normal"};
  -webkit-text-stroke: ${(props) => props.stroke || ""};
`;

export const H5 = styled.span`
  font-family: "Gotu";
  font-size: ${(props) => props.fontsize || "clamp(24px, 4vw, 36px)"};
  color: ${(props) => props.color || "#1B4965"};
  white-space: ${(props) => props.wrap || "normal"};
`;

export const H6 = styled.span`
  font-family: "Gotu";
  font-size: ${(props) => props.fontsize || "clamp(18px,2vw,24px)"};
  color: ${(props) => props.color || "#1B4965"};
  white-space: ${(props) => props.wrap || "normal"};
  line-height: 30px;
`;

export const H7 = styled.div`
  font-family: "Gotu";
  font-size: 18px;
  color: ${(props) => props.color || "#1B4965"};
`;

export const Text = styled.span`
  font-family: "Oxygen";
  font-size: 18px;
  line-height: 30px;
  color: ${(props) => props.color || "#1B4965"};
  white-space: ${(props) => props.wrap || "normal"};
  @media screen and (max-width: 500px) {
    ${(props) => {
      if (props.responsive) {
        return `
                font-size : 15px ;
                line-height : 21px;
            `;
      }
    }}
  }
`;

export const SmallText = styled.span`
  font-family: "Oxygen";
  font-size: 14px;

  padding: ${(props) => props.padding || 0};
  color: ${(props) => props.color || "#1B4965"};
  white-space: ${(props) => props.wrap || "normal"};
  @media screen and (max-width: 500px) {
    ${(props) => {
      if (props.responsive) {
        return `
                font-size : 13px ;
                line-height : 20px;
            `;
      }
    }}
  }
`;
export const SmallBoldText = styled.span`
  font-family: "Oxygen";
  font-size: 13px;
  font-weight: bold;
  line-height: 16px;
  color: ${(props) => props.color || "#1B4965"};
  white-space: ${(props) => props.wrap || "normal"};
`;

export const TextBold = styled.span`
  font-family: "Oxygen";
  font-size: 18px;
  line-height: 30px;

  color: ${(props) => props.color || "#1B4965"};
  font-weight: 700;
`;
export const TextLabel = styled.div`
  font-family: "Oxygen";
  font-size: 12px;
  font-weight: ${(props) => props.fontweight || "400"};
  color: ${(props) => props.color || "#A89D9C"};
`;

export const TextLink = styled.a`
  font-family: "Oxygen";
  font-size: 18px;
  color: ${(props) => props.color || "#1B4965"};
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
`;
export const TextTableTitle = styled.div`
  font-family: "Oxygen";
  font-size: 15px;
  color: ${(props) => props.color || "#88C1A3"};
  font-weight: 700;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled(CgSpinnerTwo)`
  width: 30px;
  height: 30px;
  animation: ${rotate} 1s linear infinite;
  color: ${(props) => props.color || "#1B4965"};
`;

export const LoadingBigIcon = styled(CgSpinnerTwo)`
  width: 50px;
  height: 50px;
  animation: ${rotate} 1s linear infinite;
  color: ${(props) => props.color || "#1B4965"};
`;
