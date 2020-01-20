import React, { Component } from 'react';
import Routes from './routes';



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      appName: "Router Practice"
    }
  }
  render() {
    return (
      <div>
<Routes name={this.state.appName}/>
      </div>
   );
 }
}
export default App;