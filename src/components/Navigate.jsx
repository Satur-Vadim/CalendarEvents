import React from 'react';
import PropTypes from 'prop-types';

const Navigate = ({
  nextMonth, prevMonth, year, month 
}) => {
  return (
    <div>
      <button type="button" onClick={() => prevMonth()}>Prev</button>
      <button type="button" onClick={() => nextMonth()}>Next</button>
      <div>{year}</div>
      <div>{month}</div>
    </div>
  );
};

Navigate.propTypes = {
  nextMonth: PropTypes.func.isRequired,
  prevMonth: PropTypes.func.isRequired,
  year: PropTypes.number,
  month: PropTypes.number,
};

Navigate.defaultProps = {
  year: null,
  month: null,
};

export default Navigate;
