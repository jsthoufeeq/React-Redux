import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ItemComponent from './itemComponent';

describe('item component', () => {
    configure({adapter: new Adapter()});
    test('it starts', () => {
        //todo: create a shallow cpomponent of itemComponent
        //test its functionality
        const wrapper = shallow(<ItemComponent />);
        console.log('wrapper', wrapper);
    })
})