import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

function CustomButton(props) {
  const StyledButton = styled(Button)`
    background-color: ${props.background};
    border: 3px solid ${props.border};
    border-radius: 30px;
    color: ${props.color};
    font-family: 'Barlow';
    font-size: 16px;
    font-weight: 600;
    text-transform: none;
    width: ${props.width};
    &:hover {
      background-color: ${props.backgroundHover};
      color: ${props.colorHover};
      text-decoration: ${props.decorationHover};
      cursor: pointer;
    }
  `;

  return (
    <StyledButton>
      {props.content}
    </StyledButton>
  );
}

export default CustomButton;
