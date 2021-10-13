import React, {useState} from 'react'; 

const Demo = () => {
    let x = "before";
    const[y, sety] = useState("Y before");
    return (
        <div>
            <input type="text" value={x}/> <input type="button" onClick={x = "after"}/>
            <input type="text" value={y}/> <input type="button" onClick={() => sety("after Y")}/>
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
        </div>
    )
}


export default Demo