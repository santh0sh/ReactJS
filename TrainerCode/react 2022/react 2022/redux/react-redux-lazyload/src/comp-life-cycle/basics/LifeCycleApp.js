import React, { Component } from 'react';
// npm install bricks.js@1.8.0
// npm install masonry-layout@4.2.2
// npm install uuid@3.3.2

import uuid from 'uuid/v4'; 

import { initializeGrid, layoutInitialGrid } from './grid';
import { ErrorButton, ErrorBoundary } from './errors';

const randomInt = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

const createBlocks = number => {
  const blocks = [];
  for (let i = 0; i < number; i++) {
    blocks.push({
      id: uuid(),
      height: randomInt(100, 200),
    });
  }
  return blocks;
};

class Grid extends Component {
  //Use of Constructor: Setting up state, creating refs and method binding.
  //Mounting for intialization of state
  constructor(props) {
    super(props);
    this.state = {
      blocks: [],
      count:0,
      value: props.initialValue,
       };
    
    this.grid = React.createRef();
  }

//When mounting, getDerivedStateFromProps is the last method called before rendering. 
//Use it to set state according to the initial props. 

  static getDerivedStateFromProps(props, state) {
    console.log(`Current block size is ${state.blocks.length}`); 

    if (state.blocks.length > 0) {
      return {};// return null
    }
    return { blocks: createBlocks(props.numberOfBlocks) };// update the state
  }

  // make ajax calls here or initialize layout for the grid
  componentDidMount() {
    this.bricks = initializeGrid(this.grid.current);
    layoutInitialGrid(this.bricks);

    this.interval = setInterval(() => {
      this.addBlocks();
    }, 4000);
  }

  addBlocks = () => {
    const newBlocks = createBlocks(5);
    this.setState(prevState => ({
      blocks: prevState.blocks.concat(newBlocks),
    }));
  };

  shouldComponentUpdate(nextProps, nextState) {
    // Only update if bricks change  true or false  (default is true)  (used to improve performance)
    return nextState.blocks.length > this.state.blocks.length;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // invoked before updating DOM as last change to control UI behaviour like scrolling ...
    // after this componentDidUpdate is invoked  by passing returned object of this method
    // which can be accessed in third parameter as snapshot

    if (prevState.blocks.length < this.state.blocks.length) {
      const grid = this.grid.current;
      const isAtBottomOfGrid =
        window.innerHeight + window.pageYOffset === grid.scrollHeight;

      return { isAtBottomOfGrid };
    }

    return null;
  }

  // Final DOM updates takes place here 
  componentDidUpdate(prevProps, prevState, snapshot) {
   // Now, our changes have been committed to the DOM.
    this.bricks.pack(); //relayout the grid

    if (snapshot.isAtBottomOfGrid) {
      window.scrollTo({
        top: this.grid.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  // Invoked at the time of removing component from virtual DOM
  // Your component is going to go away. Maybe forever. It’s very sad.
  componentWillUnmount() {
    // Cleaning up any leftover debris from your component.

    clearInterval(this.interval);
  }

  //render jsx by returning DOM 
  render() {
    return (
      <div className="wrapper">
        <div className="error">
          <ErrorBoundary>
            <ErrorButton />
          </ErrorBoundary>
        </div>

        <div className="Grid" ref={this.grid}>
          {this.state.blocks.map(block => (
            <div
              key={block.id}
              style={{ height: block.height }}
              className="grid-item"
            />
          ))}
        </div>
      </div>
    );
  }
}

class LifeCycleApp extends Component {
  render() {
    return <Grid numberOfBlocks={2} />;
  }
}

export default LifeCycleApp;
