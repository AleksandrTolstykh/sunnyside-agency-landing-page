import React from 'react';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    width: '100%',
    display: 'block',
    marginTop: '5px',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '10px',
  }
})(MenuItem);

const StyledMenuIcon = withStyles({
  root: {
    color: 'hsl(0, 0%, 100%)',
  }
})(MenuIcon);

const StyledCloseIcon = withStyles({
  root: {
    color: 'hsl(0, 0%, 100%)',
  }
})(CloseIcon);

const useStyles = makeStyles({
  block: {
    display: 'block',
  },
  hidden: {
    display: 'none',
  },
});

function NavigationMenu() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box component='div'>
      <IconButton aria-controls='menu' aria-haspopup='true' onClick={handleClick}>
        <StyledMenuIcon className={anchorEl ? classes.hidden : classes.block} />
        <StyledCloseIcon className={anchorEl ? classes.block : classes.hidden} />
      </IconButton>
      <StyledMenu
        id='menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <CustomButton
            content='About'
            background='hsl(0, 0%, 100%)'
            backgroundHover='hsl(0, 0%, 100%)'
            border='hsl(0, 0%, 100%)'
            color='hsl(232, 10%, 55%)'
            colorHover='hsl(232, 10%, 55%)'
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <CustomButton
            content='Services'
            background='hsl(0, 0%, 100%)'
            backgroundHover='hsl(0, 0%, 100%)'
            border='hsl(0, 0%, 100%)'
            color='hsl(232, 10%, 55%)'
            colorHover='hsl(232, 10%, 55%)'
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <CustomButton
            content='Projects'
            background='hsl(0, 0%, 100%)'
            backgroundHover='hsl(0, 0%, 100%)'
            border='hsl(0, 0%, 100%)'
            color='hsl(232, 10%, 55%)'
            colorHover='hsl(232, 10%, 55%)'
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <CustomButton
            content='CONTACT'
            background='hsl(51, 100%, 49%)'
            backgroundHover='hsl(51, 100%, 49%)'
            border='transparent'
            color='hsl(212, 27%, 19%)'
            colorHover='hsl(212, 27%, 19%)'
          />
        </StyledMenuItem>
      </StyledMenu>
    </Box>
  );
}

export default NavigationMenu;
