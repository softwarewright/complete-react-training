import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Navigation from './Navigation';

configure({ adapter: new Adapter()});

describe('<NavigationItems />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Navigation />);
    })

    it("should match snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    })

    it("should render log in when unauthenticated", () => {

        const navItems = wrapper.find('li');
        expect(navItems).toHaveLength(1)
        expect(navItems.contains('Login')).toBe(true)
    })

    it("should render Welcome when authenticated", () => {
        wrapper.setProps({ authenticated: true })

        const navItems = wrapper.find('li');
        expect(navItems).toHaveLength(1)
        expect(navItems.contains('Logged In, Welcome')).toBe(true)
    })
})