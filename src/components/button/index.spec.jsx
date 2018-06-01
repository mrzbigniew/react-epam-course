import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Button from './index';

describe('Button', () => {
    it('renders gracefully', () => {
        const onClick = jest.fn();
        const component = renderer.create(<Button onClick={onClick} label={`label`} className={`btn`} />);

        expect(component.toJSON()).toMatchSnapshot();
    });

    describe('wraper', () => {
        let wrapper;
        let props;

        beforeEach(() => {
            props = {
                label: 'button',
                onClick: jest.fn(),
                className: 'btn btn-primary'
            };
        });

        beforeEach(() => {
            wrapper = shallow(<Button {...props} />);
        });

        it('is a button', () => {
            expect(wrapper.is('button')).toBeTruthy();
        });

        it('have correct class', () => {
            expect(wrapper.hasClass(props.className)).toBeTruthy();
        });

        it('have correct label', () => {
            expect(wrapper.text()).toEqual(props.label);
        });

        it('run onClick function when clicked', () => {
            wrapper.simulate('click');
            expect(props.onClick.mock.calls).toHaveLength(1);
        });
    });

});
