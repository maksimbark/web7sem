import React from 'react';
import { shallow } from '../src/enzyme';
import { shallowToJson  } from 'enzyme-to-json';
import LargeCityInfo from '../src/components/LargeCityInfo';
import serverInfo from '../src/fixtures'

it('Loading отображается корректно', () => {
    const largeCity = shallow(<LargeCityInfo />);
    expect(shallowToJson(largeCity)).toMatchSnapshot();
});

it('Connection Problems отображается корректно', () => {
    const largeCity = shallow(<LargeCityInfo />);
    largeCity.setState({connectProblems: true});
    expect(shallowToJson(largeCity)).toMatchSnapshot();
});

it('Loaded отображается корректно', () => {
    const largeCity = shallow(<LargeCityInfo />);
    largeCity.setState({isLoaded: true, serverInfo: serverInfo});
    expect(shallowToJson(largeCity)).toMatchSnapshot();
});

it('Loaded with problems отображается корректно', () => {
    const largeCity = shallow(<LargeCityInfo />);
    largeCity.setState({isLoaded: true, serverInfo: serverInfo, problems: true});
    expect(shallowToJson(largeCity)).toMatchSnapshot();
});
