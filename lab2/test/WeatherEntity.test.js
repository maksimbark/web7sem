import React from 'react';
import WeatherEntity from '../src/components/WeatherEntity';
import renderer from 'react-test-renderer';


const data = {
    type: 'Влажность',
    value: '123' + ' %'
};

it('отображается корректно', () => {
    const tree = renderer.create(
        <WeatherEntity data={data}/>
        ).toJSON();
    expect(tree).toMatchSnapshot();

});


