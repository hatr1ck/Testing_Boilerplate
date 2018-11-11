import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './component';
import axios from 'axios';
import { shallow, render, mount } from 'enzyme';
import enzymeToJSON from 'enzyme-to-json';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });
import MockAdapter from 'axios-mock-adapter';

describe('Comp', () => {
			it('test snapsot', () => {
		let component = shallow(<Comp />);
		expect(component).toMatchSnapshot();
		})

  describe('when the button is clicked', () => {
    const spy = jest.spyOn(Comp.prototype, 'getData');
    const component = shallow(<Comp />);
    const mockData = {name:"TownResponce" };

beforeEach(() => {
	//mocking API
      const mock = new MockAdapter(axios);
       mock.onGet("http://api.openweathermap.org/data/2.5/weather?q=Kiev&APPID=abce00147b0566534c2aa99ed56b6cd5")
        .reply(200, mockData);

      component.find('.btn').simulate('click');
    });


    it('calls the `getData` function', () => {
      expect(spy).toHaveBeenCalled();
    });


    it('sets the `state.rate` to the bitcoin exchange rate that we    get from the GET request', () => {
       expect(component.state().rate).toEqual(mockData.name);
    });

  });

 	 describe('new tests', ()=>{

   it('was the function called?', () => {
   		let spy = jest.fn()
   		const component = shallow(<Comp foo={spy} />);
   		component.find('.btn1').simulate('click')
        expect(spy).toHaveBeenCalled();
    });


   it('Change state by input', ()=>{
      let component = shallow(<Comp/>)
      component.find('.input').simulate('change', {target:{value:'test value'}})
      expect(component.state().inputValue).toEqual('test value')
    })


   it('props passing', () => {
   		const component = shallow(<Comp sex={10} />);
   		expect(component.find('.btn').text()).toEqual("10");;
    });

		})
});
