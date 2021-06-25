import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import styled from 'styled-components';

export function CustomFaceBookIcon(props) {
  const StyledFaceBookIcon = styled(FacebookIcon)`
    opacity: 50%;
    &:hover {
      color: hsl(0, 0%, 100%);
      opacity: 100%;
      cursor: pointer;
    }
  `;

  return (
    <StyledFaceBookIcon />
  );
}

export function CustomTwitterIcon(props) {
  const StyledTwitterIcon = styled(TwitterIcon)`
    opacity: 50%;
    &:hover {
      color: hsl(0, 0%, 100%);
      opacity: 100%;
      cursor: pointer;
    }
  `;

  return (
    <StyledTwitterIcon />
  );
}

export function CustomPinterestIcon(props) {
  const StyledPinterestIcon = styled(PinterestIcon)`
    opacity: 50%;
    &:hover {
      color: hsl(0, 0%, 100%);
      opacity: 100%;
      cursor: pointer;
    }
  `;

  return (
    <StyledPinterestIcon />
  );
}

export function CustomInstagramIcon(props) {
  const StyledInstagramIcon = styled(InstagramIcon)`
    opacity: 50%;
    &:hover {
      color: hsl(0, 0%, 100%);
      opacity: 100%;
      cursor: pointer;
    }
  `;

  return (
    <StyledInstagramIcon />
  );
}
