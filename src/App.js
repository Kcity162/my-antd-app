
import 'antd/dist/reset.css';
import './App.css';
import SplitPane, { Pane } from 'react-split-pane';
import React from 'react';
import { HotTable } from '@handsontable/react';
import 'handsontable/dist/handsontable.full.css';
import { Space } from 'antd';



function App() {
  return (
    <div className="App">

     
      <SplitPane split="horizontal" minSize={200} maxSize={500} defaultSize="50%">
      <div>
        {/* Your first panel content */}
        <h1>Grpath here</h1>
      </div>
      <div>
        {/* Your second panel content */}
        <Space>

        <HotTable data={[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 16, 18, 19, 20, 21, 22, 23], [1, 2, 3], [1, 2, 3], [4, 5, 6], [4, 5, 6], [1, 2, 3], [4, 5, 6], [4, 5, 6], [1, 2, 3], [4, 5, 6], [4, 5, 6], [1, 2, 3], [4, 5, 6], [4, 5, 6], [1, 2, 3], [4, 5, 6], [4, 5, 6], [1, 2, 3], [4, 5, 6], [4, 5, 6]]} colHeaders={true} rowHeaders={true} width="auto" height="400" />
        </Space>
        
      </div>

      
    </SplitPane>
    

    </div>
    
  );
}

export default App;