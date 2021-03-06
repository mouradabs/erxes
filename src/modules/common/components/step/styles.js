import styled from 'styled-components';
import { colors, dimensions } from 'modules/common/styles';

const StepContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  > *:nth-child(n + 2) {
    margin-left: 5px;
  }
`;

const StepWrapper = styled.div`
  margin: ${dimensions.coreSpacing}px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StepItem = styled.div`
  transition: all 0.3s;
  width: ${props => (props.show ? '100%' : '70px')};
  box-shadow: 0 0 4px ${colors.colorShadowGray};
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${dimensions.unitSpacing / 2}px;
  padding: ${dimensions.unitSpacing}px ${dimensions.coreSpacing}px;
  background: ${colors.colorWhite};

  > *:nth-child(n + 2) {
    margin-left: ${dimensions.unitSpacing}px;
  }
`;

const FullStep = styled.div`
  background: ${colors.colorWhite};
  height: 100%;
  width: 100%;
  transition: all 0.3s;
  display: ${props => (props.show ? 'block' : 'none')};
`;

const StepHeaderContainer = styled.div`
  height: 55px;
  padding: 0 ${dimensions.coreSpacing}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.bgLight};
  border-bottom: 1px solid ${colors.borderPrimary};
`;

const StepHeader = styled.div`
  display: flex;
  align-items: center;
`;

const StepImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  > img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const StepHeaderTitle = styled.div`
  margin-left: ${dimensions.unitSpacing}px;
`;

const StepContent = styled.div`
  width: 100%;
  height: calc(100% - 55px);
  overflow: hidden;
`;

const ShortStep = styled.div`
  width: 70px;
  height: 100%;
  background: ${colors.bgLight};
  cursor: pointer;
  display: ${props => (props.show ? 'flex' : 'none')};
  align-items: center;
  padding: ${dimensions.unitSpacing}px 0;
  flex-direction: column;
  border-radius: 5px;
`;

const InlineForm = styled.div`
  display: flex;
  flex-direction: row;

  > *:not(:first-child) {
    margin-left: ${dimensions.unitSpacing}px;
  }
`;

const FlexItem = styled.div`
  display: flex;
  height: 100%;
  border-right: 1px solid ${colors.borderPrimary};
  flex: ${props => (props.count ? props.count : 1)};
  ${props => {
    if (props.overflow) {
      return `
        overflow: ${props.overflow};
      `;
    }
  }};
  ${props => {
    if (props.v) {
      return `
        align-items: ${props.v};
      `;
    }
  }};
  ${props => {
    if (props.h) {
      return `
        justify-content: ${props.h};
      `;
    }
  }};
  ${props => {
    if (props.direction) {
      return `
        flex-direction: ${props.direction};
      `;
    }
  }};
`;

const FlexPad = FlexItem.extend`
  padding: ${dimensions.coreSpacing}px;
  border-right: 1px solid ${colors.borderPrimary};
`;

const LeftItem = styled.div`
  overflow: auto;
  flex: 1;
  min-width: 43.33333%;
  padding: ${dimensions.coreSpacing}px;
  opacity: ${props => props.deactive && '0.3'};
  cursor: ${props => props.deactive && 'not-allowed'};

  input:disabled {
    cursor: not-allowed;
  }
`;

const Preview = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${colors.borderPrimary};
  padding: ${props => !props.fullHeight && '20px'};
  background: url('/images/previews/preview.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: ${props => props.fullHeight && '100%'};
  overflow: auto;
`;

export {
  StepContainer,
  StepItem,
  FullStep,
  StepHeaderContainer,
  StepHeader,
  StepImg,
  StepHeaderTitle,
  StepContent,
  ShortStep,
  StepWrapper,
  TitleContainer,
  InlineForm,
  FlexItem,
  FlexPad,
  LeftItem,
  Preview
};
