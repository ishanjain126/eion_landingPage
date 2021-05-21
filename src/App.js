import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
// import FAQ from "./components/pages/FAQ";
// import ReactGA from 'react-ga';


function App() {

  // ReactGA.initialize('UA-000000-01', {
  //   debug: true,
  //   titleCase: false,
  //   gaOptions: {
  //     userId: 123
  //   }
  // });
  // ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className="App">

      <Router>
        <Switch>
            {/* <Route path="/faq" component={FAQ} /> */}
            <Route path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
