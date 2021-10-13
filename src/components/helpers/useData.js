import React, {useState} from 'react'; 


function makeData() {
    let tempData = [];
    for (let i = 0; i <= 1440; i++) {
          const activitydata = Math.floor(Math.random() * 400);
          const tempdata =  Math.floor(Math.random() * (104 - 92 + 1) + 92)
          let datapoint = {minute: i,
          activity: activitydata,
          temp: tempdata}
      
          tempData.push(datapoint);
    
        }
        return tempData;
      }

const useData = () => {

const [data, setData] = useState(makeData());
const [origionalData, setOrigionalData,] = useState(data)

const getOrigionalData = () => {
return [];
}
const updateData = (downClick, mouseMove) => {
    let zoomData = origionalData;
    console.log(downClick, mouseMove)
    zoomData = zoomData.slice(downClick - 1, mouseMove);
    setData(zoomData);
    console.log(zoomData)
    //return zoomData;
}
return {data, updateData, getOrigionalData};
}


export default useData;