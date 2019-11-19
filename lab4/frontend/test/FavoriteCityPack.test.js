import React from 'react';
import { shallow } from '../src/enzyme';
import { shallowToJson  } from 'enzyme-to-json';
import { FavoriteCityPack } from '../src/components/FavoriteCityPack';
import mock from '../src/fixtures'

it('отображается корректно', () => {
    var serverInfo = {
        isErrored: true,
        city: "Moscow",
        data: mock
    };

    const FavCity = shallow(
        <FavoriteCityPack items = {[serverInfo, serverInfo]} newCityValue = "Sochi" />
    );
    expect(shallowToJson(FavCity)).toMatchSnapshot();
});
