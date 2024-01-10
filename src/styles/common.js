import styled, { createGlobalStyle } from 'styled-components';
import { setFlexStyle, setFlexOption, setPositionValue, setFontSize } from './styles';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
  }

  a {
    text-decoration: none;
    color: black;
  }

  html {
    height: 100%;
    font-size: 16px;
  }
`;

/*
##Div properties##
flexStyle, flexOption
position
width, height, margin, padding, border, borderRadius
color, fontSize
box-sizing
*/
export const Div = styled.div`
  //display & flex
  display: ${(props) => (props.flexOption || props.flexStyle ? 'flex' : props.display)};

  ${({ flexStyle }) => {
    return flexStyle && setFlexStyle(flexStyle);
  }}
  ${({ flexOption }) => {
    return flexOption && setFlexOption(flexOption);
  }} 

  //position
  position: ${(props) => props.position};

  ${({ positionValue }) => {
    return positionValue && setPositionValue(positionValue);
  }}

  //width, height, margin, padding, border, borderRadius
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin || '0px'};
  padding: ${(props) => props.padding || '0px'};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};

  //color, fontSize
  color: ${(props) => props.color};
  ${({ fontSize }) => {
    return fontSize && setFontSize(fontSize);
  }}

  //backgroundColor
  background-color: ${(props) => props.backgroundColor};

  //etc
  box-sizing: ${(props) => props.boxSizing || 'border-box'};
`;

export const Img = styled.img`
  //margin, padding, border, borderRadius
  margin: ${(props) => props.margin || '0px'};
  padding: ${(props) => props.padding || '0px'};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
`;

export const A = styled.a`
  text-decoration: none;
`;

export const Input = styled.input`
  outline: none;
`;

export const Button = styled.button``;
export const H1 = styled.h1``;
export const H2 = styled.h2``;
export const H3 = styled.h3``;
export const H4 = styled.h4``;
export const H5 = styled.h5``;
export const H6 = styled.h6``;
export const P = styled.p``;
