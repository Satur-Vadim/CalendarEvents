import React from 'react';
import PropTypes from 'prop-types';

const Body = ({
  year, month, events, amountDays 
}) => {
  const renderEvents = (day) => {
    const content = [];

    Object.entries(events[day]).forEach(([key, event]) => {
      content.push(<li key={key}>{event.title}</li>);
    });
    return content;
  };
    
  const renderDays = () => {
    const firstDay = new Date(`${year}-${month}-1`).getDay();
    const content = [];
    let day = 1;

    for (let i = 1; day <= amountDays; i += 1) {
      if (firstDay < i) {
        content.push(
          <li key={i}>
            <span>{day}</span>
            <ul className="events-list">
              {events && events[day] ? renderEvents(day) : null}
            </ul>
          </li>
        );
        day += 1;
      } else {
        content.push(
          <li key={i} />
        );
      }
    }
    return content;
  };

  return (
    <div className="content">
      <ul>
        {renderDays()}
      </ul>
    </div>
  );
};

Body.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
  events: PropTypes.shape(),
  amountDays: PropTypes.number,
};

Body.defaultProps = {
  year: null,
  month: null,
  amountDays: 0,
  events: {}
};

export default Body;
