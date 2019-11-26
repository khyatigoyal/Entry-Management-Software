import React from 'react';

class MyDateTime extends React.Component {
  constructor() {
    super();

    var today = new Date(),
      date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate();

    this.state = {
      date: date
    };
  }

  render() {
    return <div className='date'>{this.state.date}</div>;
  }
}

export default MyDateTime;
