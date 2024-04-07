
import 'antd/dist/reset.css';
import logo from './logo.svg';
import './App.css';
import SplitPane, { Pane } from 'react-split-pane';
import React from 'react';
import { Button } from 'antd';
import { Card, Space } from 'antd';

function App() {
  return (
    <div className="App">

<SplitPane split="horizontal">
            <Pane minSize="20%">This Pane has a minimum size of 20%</Pane>
            <Pane/>
          </SplitPane>

    </div>
    
  );
}

export default App;