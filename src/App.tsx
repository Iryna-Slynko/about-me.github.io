import React, {Component} from 'react';
import ReactGA from 'react-ga';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Data from './Data'
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
library.add(fab, fas);
interface IState {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resumeData: any;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
class App extends Component<any, IState> {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: Data(),
    };
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
