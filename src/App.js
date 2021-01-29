import React, { Component } from 'react';
import moment from 'moment';
import events from './mock/events';
import './App.css';

import Header from './components/Header';
import Body from './components/Body';
import Navigate from './components/Navigate';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: null,
      month: null,
      amountDays: 0,
      mountEvents: null
    };
  }

  componentDidMount() {
    const date = window.location.pathname.split('/');
    const currentDay = new Date();

    return this.validateDate(date[1], date[2])
      ? this.setDate(parseInt(date[1]), parseInt(date[2]))
      : this.setDate(currentDay.getFullYear(), currentDay.getMonth() + 1);
  }

  setDate = (year, month) => {
    const days = new Date(year, month, 0).getDate();
    const firstDay = new Date(`${year}-${month}-1`);
    const lastDay = new Date(`${year}-${month}-${days}`);
    const newEvents = {};

    events.data.forEach((event) => {
      const eventStart = new Date(event.when.start_time * 1000);
      const eventEnd = new Date(event.when.end_time * 1000);

      if (eventStart >= firstDay && eventEnd <= lastDay) {
        newEvents[eventStart.getDate()] = {
          ...newEvents[eventStart.getDate()],
          [event.id]: event
        };
      }
    });

    this.setState({
      year, month, amountDays: days, mountEvents: newEvents
    });
  }

  nextMonth = () => {
    const { year, month } = this.state;
    return month === 12 ? this.setDate(year + 1, 1) : this.setDate(year, month + 1);
  }

  prevMonth = () => {
    const { year, month } = this.state;
    return month === 1 ? this.setDate(year - 1, 12) : this.setDate(year, month - 1);
  }

  validateDate = (year, month) => {
    return moment(`${year}/${month}`, 'YYYY/M', true).isValid();
  }

  render() {
    const {
      mountEvents, year, month, amountDays
    } = this.state;

    return (
      <div className="container">
        <Navigate year={year} month={month} nextMonth={this.nextMonth} prevMonth={this.prevMonth} />
        <Header />
        <Body year={year} month={month} events={mountEvents} amountDays={amountDays} />
      </div>
    );
  }
}

export default Calendar;
