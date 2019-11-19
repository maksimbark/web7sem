import React from 'react';
import { shallow } from '../src/enzyme';
import { shallowToJson  } from 'enzyme-to-json';
import App  from '../src/components/App';

it('App отображается корректно', () => {
    const fullApp = shallow(
        <App />
    );
    expect(shallowToJson(fullApp)).toMatchSnapshot();
});
