
import 'antd/dist/reset.css';
import './App.css';
import SplitPane, { Pane } from 'react-split-pane';
import React from 'react';
import { HotTable } from '@handsontable/react';
import 'handsontable/dist/handsontable.full.css';
import { Space } from 'antd';
import Plot from 'react-plotly.js';



function App() {
  return (
    <div className="App">

     
      <SplitPane split="horizontal" minSize={200} maxSize={500} defaultSize="50%">
      <div>
        {/* Your first panel content */}
        
        <Plot 
        data={[
          {
            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            y: [2, 9, 2, 2, 3, 2, 2, 2, 16, 2, 2, 2, 3, 2, 2, 12, 13, 2, 2, 1],
            type: 'scatter',
            mode: 'lines+markers',
            name: 'Demand (MWh)',
            marker: {color: 'red'},
          }, 

          {
            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            y: [2, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 1],
            type: 'lines',
            mode: 'lines+markers',
            name: 'Corrected',
            marker: {color: 'green'},

          },
   
        
        ]}
        layout={ {width: 1300, height: "auto", autosize: true, margin: {
          l: 50,
          r: 50,
          b: 150,
          t: 50,
          pad: 4
        }, legend: {
          orientation: 'h',  // Sets the legend to a horizontal orientation
          x: 0.5,  // Centers the legend beneath the chart
          xanchor: 'center',  // Ensures the center of the legend aligns with the x position
          y: -0.2,  // Adjusts the vertical position to place it under the chart
          yanchor: 'bottom'  // Anchors the legend from its top edge
        }} }
        
        
      />
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