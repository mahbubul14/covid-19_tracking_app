import React from 'react';
import Proptypes from 'prop-types';

const Query = ({ handleChange }) => (
  <form className="form">
    <span className="search-by" />
    <input className="input-search" type="text" placeholder="Enter country name ..." onChange={handleChange} />
  </form>
);

Query.propTypes = {
  handleChange: Proptypes.func.isRequired,
};

export default Query;
