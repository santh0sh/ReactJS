What is render props?


The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.

Render props are simply props of a component where we can pass functions. These functions need to return elements, which will be used in rendering the components.

class NameWrapper extends Component {
  state = { 
     name: 'Dan Abramov' 
  };
  render() {
    return this.props.render(this.state.name);
  }
}
const Name = () => (
  <NameWrapper render={name => <h2>Hi, {name}!</h2>} />
);


The babel version of JSX looks like this:

const App = () => {
  return (
    <SomeParent>
      <SomeChild/>
    </SomeParent>
  );
}

