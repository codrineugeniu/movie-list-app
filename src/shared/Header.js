import React, {useState} from 'react';
import { searchMovies } from '../shared/API';

import { Button} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {useStyles} from './HeaderCss'


export const SearchBox = (props) => {
  const [term, setTerm] = useState('');
  const [movies, setMovies] = useState([]);


const HeaderSearchAppBar = (props) => {
  const classes = useStyles();
  const [term, setTerm] = useState('');
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Movie 📽️ List
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search for a movie"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
          onKeyDown={(e) => {
            return e.key === 'Enter'
              ? searchMovies(term).then((res) => setMovies(res.data.results))
              : null;
          }}
            />
            <Button
          variant="contained"
          color="primary"
          onClick={() =>
            searchMovies(term).then((res) => setMovies(res.data.results))
          }
        >
          Search
        </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
 export default HeaderSearchAppBar

// import React from 'react'
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
// } from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu'

// const Header = () => {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <IconButton edge="start" color="inherit" aria-label="menu">
//           <MenuIcon />
//         </IconButton>
//         <Typography variant="h6">movie🎥List</Typography>
//       </Toolbar>
//     </AppBar>
//   )
// }

// export default Header
