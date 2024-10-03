import React ,{useState} from 'react'

function Mouseexample() {

    const initialStyle = {
        color: 'black',
        backgroundColor: 'lightgray',
        padding: '10px',
        textAlign: 'center',
        
      };

      const hoverStyle = {
        color: 'white',
        backgroundColor: 'blue',
        padding: '10px',
        textAlign: 'center',
      };
      const [style, setStyle] = useState();

      function handleOver(){
        setStyle(hoverStyle );
      }

      function handleOut(){
        setStyle(initialStyle)
      }

  return (
    <div 
    style={style}
    onMouseOver={handleOver} onMouseOut={handleOut}>
      <h1>React allows us to create reusable UI components.</h1>
    </div>
  )
}

export default Mouseexample
