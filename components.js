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
  render() {
    return (
      <div>
        <InputArea />
        <BeerList />
      </div>
    );
  }
}
