import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { InputArea, BeerList, BeerListContainer } from './components';

describe('BeerListContainer', () => {
  it('should rencer InputArea and BeerList', () => {
    const wrapper = shallow(<BeerListContainer/>);
    expect(wrapper.containsAllMatchingElements([
      <InputArea />,
      <BeerList />
    ])).to.equal(true);
  });

  it ('should start with an empty list', () => {
    const wrapper = shallow(<BeerListContainer/>);
    expect(wrapper.state('beers')).to.eql([]);
  });

  it('adds items to the list', () => {
    const wrapper = shallow(<BeerListContainer/>);
    wrapper.instance().addItem('Sam Adams');
    expect(wrapper.state('beers')).to.eql(['Sam Adams'])
  });

  it('passes addItem to InputArea', () => {
    const wrapper = shallow(<BeerListContainer/>);
    const inputArea = wrapper.find(InputArea);
    const addItem = wrapper.instance().addItem;

    expect(inputArea.prop('onSubmit')).to.eql(addItem);
  });

  it('passes a bound addItem function to InputArea', () => {
    const wrapper = shallow(<BeerListContainer/>);
    const inputArea = wrapper.find(InputArea);
    inputArea.prop('onSubmit')('Sam Adams');
    expect(wrapper.state('beers')).to.eql(['Sam Adams']);
  });
});

describe('InputArea', () => {
  it('should contain an input and a button', () => {
    const wrapper = shallow(<InputArea/>);
    expect(wrapper.containsAllMatchingElements([
      <input/>,
      <button>Add</button>
    ])).to.equal(true);
  });
});
