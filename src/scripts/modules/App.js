import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.txt = 'YO';
    console.log(this.txt);
  }

  render() {
    const { name } = this.props;

    return (
      <div>
        <button onClick={this.clickHandler}>
          <h1>{`${name} is testing.`}</h1>
        </button>
      </div>
    );
  }
}

export default App;
