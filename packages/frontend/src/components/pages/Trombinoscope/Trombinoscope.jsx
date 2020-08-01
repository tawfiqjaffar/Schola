import React, { Component } from 'react';
import getAllMyClasses from '../../../api/methods/classes';
import Pictures from './Pictures';

class Trombinoscope extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [],
    };
  }

  componentDidMount() {
    this.getClassesPicture();
  }

  async getClassesPicture() {
    const test = [
      {
        userId: 1,
        path: '/apple-touch-icon.png',
        username: 'Augustin',
      },
      {
        userId: 2,
        path: '/assets/Anisse.png',
        username: 'Gaston',
      },
      {
        userId: 3,
        path: '/assets/Taw.png',
        username: 'Steven',
      },
      {
        userId: 4,
        path: '/assets/Kevin.png',
        username: 'Rolland',
      },
      {
        userId: 1,
        path: '/assets/Mateo.png',
        username: 'Augustin',
      },
      {
        userId: 2,
        path: '/assets/Hamza.png',
        username: 'Gaston',
      },
      {
        userId: 3,
        path: '/assets/Alan.png',
        username: 'Steven',
      },
      {
        userId: 4,
        path: '/assets/41080.jpg',
        username: 'Rolland',
      },
      {
        userId: 1,
        path: '/apple-touch-icon.png',
        username: 'Augustin',
      },
      {
        userId: 2,
        path: '/assets/logo.png',
        username: 'Gaston',
      },
      {
        userId: 3,
        path: '/assets/logo.png',
        username: 'Steven',
      },
      {
        userId: 4,
        path: '/assets/logo.png',
        username: 'Rolland',
      },
      {
        userId: 1,
        path: '/apple-touch-icon.png',
        username: 'Augustin',
      },
      {
        userId: 2,
        path: '/assets/logo.png',
        username: 'Gaston',
      },
      {
        userId: 3,
        path: '/assets/logo.png',
        username: 'Steven',
      },
      {
        userId: 4,
        path: '/assets/logo.png',
        username: 'Rolland',
      },
    ];
    const res = await getAllMyClasses();
    // res.data.picture; ?
    // init res with json for test
    this.setState((state) => ({ ...state, classes: test }));
  }

  createCardFromClasses() {
    const { classes } = this.state;
    return classes.map((data) => <Pictures data={data} />);
  }

  render() {
    return (
      <div className="trombinoscope picture-list">
        {this.createCardFromClasses()}
      </div>
    );
  }
}

export default Trombinoscope;
