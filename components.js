import React, { Component } from 'react';

export class InputArea extends Component {
  render() {
    return (
      <div>
        <input />
        <button>Add</button>
      </div>
    );
  }
}
InputArea.PropTypes = {
  onSubmit: React.PropTypes.func.isRequired
};

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
    this.addItem = this.addItem.bind(this);
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
        <InputArea onSubmit={this.addItem} />
        <BeerList />
      </div>
    );
  }
}
