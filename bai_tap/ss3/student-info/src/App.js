import React, {Component} from 'react';

import StudentInfo from "./components/StudentInfo";

class App extends Component {
  render() {
    return (
        <div>
          <StudentInfo name = {'Minh Thông'} age = {'22'} address = {'Hòa Vang'} />
        </div>
    );
  }
}

export default App;
