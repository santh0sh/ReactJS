// npm install react-test-renderer --save-dev
// npm install redux-mock-store
// npm install enzyme --save-dev
import React from 'react'
//import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'

import {Home} from '../components/Home'
// Snapshot for Home React Component
describe('H O M E --- Snapshot',()=>{
    it('Capturing Snapshot of Home', () => {
        const renderedValue =  renderer.create(<Home output="0"/>).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });


});

//*******************************************************************************************************
/*
describe('*** H O M E --- Shallow Render REACT COMPONENTS',()=>{
    let wrapper
     const output = 0

    beforeEach(()=>{
        wrapper = shallow(<Home output={output}/>)
        
    })

    it('+++ render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });

    it('+++ contains header - h2', () => {
        expect(wrapper.contains(<h2>using React and Redux</h2>))
           .toBe(true)
    });
    it('+++ h2 header value ', () => {
        expect(wrapper.find('h2').get(0).props.children).toBe("using React and Redux")
    });
    it('+++ contains input1', () => {
        expect(wrapper.find('input').at(0)
                .equals(<input type="text" placeholder="Input 1" ref="input1"></input>))
                .toBe(true)
    });
    it('+++ contains input2', () => {
        expect(wrapper.find('input').at(1)
                .equals(<input type="text" placeholder="Input 2" ref="input2"></input>))
                .toBe(true)
    });
     it('+++ contains output', () => {
        expect(wrapper.find('input[placeholder="Output"]').prop('value')).toEqual(output)
    });
    it('+++ contains button with id="add"', () => {
        expect(wrapper.find('button#add').type()).toEqual('button')
    });
    it('+++ contains button with id="subtract"', () => {
        expect(wrapper.find('button#subtract').type()).toEqual('button')
    });
});

//*******************************************************************************************************
describe('>>>H O M E --- REACT-REDUX (Shallow + passing the {store} directly)',()=>{
    const initialState = {output:100}
    const mockStore = configureStore()
    let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<ConnectedHome store={store} /> )  
    })

    it('+++ render the connected(SMART) component', () => {
       expect(container.length).toEqual(1)
    });

    it('+++ check Prop matches with initialState', () => {
       expect(container.prop('output')).toEqual(initialState.output)
    });

});

//*******************************************************************************************************
describe('>>>H O M E --- REACT-REDUX (Mount + wrapping in <Provider>)',()=>{
    const initialState = {output:10}
    const mockStore = configureStore()
    let store,wrapper

    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = mount( <Provider store={store}><ConnectedHome /></Provider> )
    })

    it('+++ contains header - h2', () => {
        expect(wrapper.contains(<h2>using React and Redux</h2>)).toBe(true)
    });

    it('+++ render the connected(SMART) component', () => {
       expect(wrapper.find(ConnectedHome).length).toEqual(1)
    });

    it('+++ check Prop matches with initialState', () => {
       expect(wrapper.find(Home).prop('output')).toEqual(initialState.output)
    });

    it('+++ check action on dispatching ', () => {
        let action
        store.dispatch(addInputs(500))
        store.dispatch(subtractInputs(100))
        action = store.getActions()
        expect(action[0].type).toBe("ADD_INPUTS")
        expect(action[1].type).toBe("SUBTRACT_INPUTS")
    });

});
//*******************************************************************************************************
describe('>>>H O M E --- REACT-REDUX (actual Store + reducers) more of Integration Testing',()=>{
    const initialState = {output:10}
    let store,wrapper

    beforeEach(()=>{
        store = createStore(calculatorReducers)
        wrapper = mount( <Provider store={store}><ConnectedHome /></Provider> )
    })

    it('+++ check Prop matches with initialState', () => {
        store.dispatch(addInputs(500))
       expect(wrapper.find(Home).prop('output')).toBe(500)
    });

});
//***********************************************************
*/