import React, { Component } from 'react';

export class InputArea extends Component {
  render() {
    return <input />;
  }
}

export class BeerList extends Component {
  render() {
    return <ul />;
  }
}

export class BeerListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: []
    }
  }

  addItem(name) {
    // do nothing for now
    this.setState({
      beers: [].concat(this.state.beers).concat([name])
    });
  }

  render() {
    return (
      <div>
        <InputArea />
        <BeerList />
      </div>
    );
  }
}
