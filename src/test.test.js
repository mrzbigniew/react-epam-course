import React from 'react';
import renderer from 'react-test-renderer';

import { TestComponent } from './test';

test('Test element class change when hovered', () => {
    const component = renderer.create(
        <TestComponent>
            Some text
        </TestComponent>
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();

    tree.props.onMouseLeave();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.onMouseLeave();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
