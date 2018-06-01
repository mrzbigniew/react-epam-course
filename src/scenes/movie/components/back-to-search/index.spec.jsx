import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import MockRouter from 'react-mock-router';
import { Route } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import BackToSearch from './index';

jest.mock('../../../../components/button', () => 'Button');

describe('BackToSearch', () => {
    it('should render', async () => {
        const history = {
            goBack: jest.fn()
        };
        const component = renderer.create(
            <MockRouter>
                <Route render={(props) => (
                    <BackToSearch {...Object.assign(props, history)} />
                )} />
            </MockRouter>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    describe('#wrapper', () => {
        const history = {
            goBack: jest.fn()
        };

        it('clicking on button should trigger history goBack method', () => {
            const context = {
                router: {
                    route: {
                        location: '',
                        match: {
                            url: '',
                            params: {},
                            path: ''
                        }
                    },
                    history: {
                        path: '',
                        createHref: jest.fn(),
                        push: jest.fn(),
                        replace: jest.fn(),
                        goBack: jest.fn()
                    }
                }
            }

            const wrapper = mount(
                <Route render={(props) => (
                    <BackToSearch {...props} />
                )} />, { context });

            console.log(wrapper.find('.btn').debug());

            wrapper.find('.btn').at(0).simulate('click');

            expect(context.router.history.goBack).toBeCalled();
        });

    });
});
