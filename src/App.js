import './App.css';
import Demo from './components/demo';
import useData from './components/helpers/useData'
import {React, useEffect, useState }from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ReferenceArea,
  ResponsiveContainer,
} from "recharts";

const App = () => {
  
  const {data, updateData, getOrigionalData} = useData([])
  const [downClick, setDownClick] = useState(0); 
  const [upClick, setUpClick] = useState(0); 
  const [mouseMove, setMouseMove] = useState(0); 
  const [isHighlighted, setHighlighted] = useState(false);

  useEffect(() => {
    if(downClick != 0 && mouseMove != 0){
      console.log('Mouse Up!')
      updateData(downClick, mouseMove)
    }
}, [upClick])



    return (
      <div style={{ width: '100%' }}>
        <Demo />
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
            onMouseDown= {(e) => {
              setDownClick(e.activeLabel);
              setHighlighted(true);
            }}
            onMouseMove = {(e) => {
              setMouseMove(e.activeLabel);
            }}
            onMouseUp = {(e) => {
              setUpClick(e.activeLabel);
              setHighlighted(false);
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="minute" />
            <YAxis dataKey="activity" />
            <Tooltip />
            <Area type="monotone" dataKey="activity" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="temp" stroke="#8884d8" fill="#8884d8" />
            
            {downClick != 0 && mouseMove != 0 && isHighlighted== true ? (
            <ReferenceArea
              x1={downClick}
              x2={mouseMove}
              strokeOpacity={0.3}
            />
          ) : null}
          </AreaChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={200}>
        <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="minute" />
            <YAxis dataKey="temp" type="number" domain={['dataMin', 'dataMax']}/>
            <Tooltip />
            <Area type="monotone" dataKey="temp" stroke="#8884d8" fill="#8884d8" />
            {downClick != 0 && mouseMove != 0 && isHighlighted== true ? (
            <ReferenceArea
              x1={downClick}
              x2={mouseMove}
              strokeOpacity={0.3}
            />
          ) : null}
          </AreaChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="minute" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="activity" stroke="#82ca9d" fill="#82ca9d" />
            {downClick != 0 && mouseMove != 0 && isHighlighted== true ? (
            <ReferenceArea
              x1={downClick}
              x2={mouseMove}
              strokeOpacity={0.3}
            />
          ) : null}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }


export default App;