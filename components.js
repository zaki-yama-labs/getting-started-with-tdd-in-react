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

  render() {
    return (
      <div>
        <InputArea />
        <BeerList />
      </div>
    );
  }
}
