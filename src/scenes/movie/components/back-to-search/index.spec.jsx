import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import BackToSearch from './index';

jest.mock('../../../../components/button', () => 'Button');

describe('BackToSearch', () => {
    it('should render', async () => {
        const component = renderer.create(<BackToSearch />);

        expect(component.toJSON()).toMatchSnapshot();
    });

    describe('wrapper', () => {
        let wrapper = null;

        beforeEach(() => {
            wrapper = shallow(<BackToSearch />);
        });

        it('should render element with back-to-search class', () => {
            expect(wrapper.hasClass('back-to-search')).toBeTruthy();
        });

        it('should call callback function', () => {
            const originalConsoleLog = console.log;
            const mockFoo = jest.fn();
            console.log = mockFoo;
            wrapper.simulate('click');
            console.log = originalConsoleLog;
            expect(mockFoo).toHaveBeenCalled();
        });
    });
});
