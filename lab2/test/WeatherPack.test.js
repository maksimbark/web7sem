import React from 'react';
import WeatherPack from '../src/components/WeatherPack';
import renderer from 'react-test-renderer';
import mock from '../src/fixtures'


it('отображается корректно', () => {
    const tree = renderer.create(
        <WeatherPack serverInfo={mock}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});


