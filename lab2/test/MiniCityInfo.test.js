import React from 'react';
import { shallow } from '../src/enzyme';
import { shallowToJson  } from 'enzyme-to-json';
import { MiniCityInfo } from '../src/components/MiniCityInfo';
import mock from '../src/fixtures'

it('Error отображается корректно', () => {
    var serverInfo = {
        isErrored: true,
        city: "Moscow",
        data: mock
    };

    const miniCity = shallow(
        <MiniCityInfo serverInfo = {serverInfo} />
    );
    expect(shallowToJson(miniCity)).toMatchSnapshot();
});

it('Loading отображается корректно', () => {
    var serverInfo = {
        isErrored: false,
        city: "Moscow",
        data: mock
    };

    const miniCity = shallow(
        <MiniCityInfo serverInfo = {serverInfo} />
    );
    expect(shallowToJson(miniCity)).toMatchSnapshot();
});

it('Loaded отображается корректно', () => {
    var serverInfo = {
        isLoaded: true,
        isErrored: false,
        city: "Moscow",
        data: mock
    };

    const miniCity = shallow(
        <MiniCityInfo serverInfo = {serverInfo} />
    );
    expect(shallowToJson(miniCity)).toMatchSnapshot();
});