
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Navbar from './navbar'
Enzyme.configure({ adapter: new Adapter() })

let wrapper = shallow(<Navbar />)

describe('App' , () => {
    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toBeTruthy()
      });
    it('should render a image' , () =>{
        expect(wrapper.find('img').length).toEqual(1);
    })
})