import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import LaunchFunction from '../components/Launch/app'
import LaunchDetFunction from '../components/LaunchDet/app'
import Navbar from '../components/navbar/navbar'

Enzyme.configure({ adapter: new Adapter() })

let wrapper = shallow(<App />)

describe('App' , () => {
    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
      });
})