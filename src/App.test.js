import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, render, mount } from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

 describe('<App />', ()=>{

		it('test snapsot', () => {
		let component = shallow(<App />);
		expect(component).toMatchSnapshot();
		})

		it('test props', () => {
		let component = shallow(<App testProps='testing prop' />);
		expect(component.find('#testProps').text()).toEqual('testing prop');
		})

		

		it('test state', () => {
		let initialState = {
						inputText:'',
					   test:'state tests',
				 	   func(param){
			 		      return param;
						    }
						  }
		let component = shallow(<App testProps='testing props' />);
		component.setState(initialState)
		expect(component.state()).toEqual(initialState);
		})

		it('test button is disabled', () => {
		let component = shallow(<App />);
		expect(component.find('button').prop('disabled')).toBeTruthy();
		})

		it('test input value', () => {
		let component = shallow(<App />);
		expect(component.find('input').prop('value')).toEqual('initial');
		})

})









 //npm install jest enzyme jest-cli@20.0.4 enzyme-adapter-react-16 axios-mock-adapter --save-dev