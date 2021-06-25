import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

function LearnMoreButton(props) {
  const StyledButton = styled(Button)`
    color: 'hsl(212, 27%, 19%)';
    font-family: 'Fraunces';
    font-size: 12px;
    font-weight: 900;
    text-decoration: underline;
    text-decoration-color: ${props.lineColor};
    text-decoration-thickness: 5px;
    &:hover {
      background-color: transparent;
      cursor: pointer;
      text-decoration: underline;
      text-decoration-color: ${props.lineColorHover};
      text-decoration-thickness: 5px;
    }
  `;

  return (
    <StyledButton>
      Learn More
    </StyledButton>
  );
}

export default LearnMoreButton;
