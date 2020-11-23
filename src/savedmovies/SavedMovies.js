import React from 'react';
const savedMovies = (props) => {
  return (
    <div>
      {props.savedMovies && props.savedMovies.length > 0
        ? props.savedMovies.length + 'saved movies'
        : 'No saved movies'}
    </div>
  );
};
export default savedMovies;
