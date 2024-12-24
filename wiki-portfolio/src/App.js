import React from 'react';
import About from './components/About';  // Adjust if the path is different
import Header from './components/Header'; // Assuming you already have this
import Experience from './components/Experience'
import Education from './components/Education'

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Education/>
      <Experience/>
    </div>
  );
};

export default App;
