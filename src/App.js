import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">


        <Test/>


    </div>
  );
}




function Test(){

  const layerNames = ['Subprocess', 'Process', 'Zone', 'Area', 'Business Unit']

  let wrappers = (depth=5, layers, text='') => {
    if (depth > 1){
      depth -= 1
      let x = []
      for (let i=0; i<Math.floor(Math.random() * 4) + 1; i++){ 
        x.push(wrappers(depth, layers, i)) 
      }
      layers = <Wrapper text={`${layerNames[depth]} ${text}`}> {x} </Wrapper>
    }
    else{
      let x = []
      for (let i=0; i<Math.floor(Math.random() * 1) + 2; i++){ x.push(<Item text={'Subprocess '+i}/>) }
      layers = x
    }

    return layers
  }

  

  return <div>{wrappers()}</div>
}


function Item(props){
  return <div className='item'><p>{props.text}</p></div>
}

function Col(props){
  return <div className='col'>{props.children}</div>
}


function Wrapper(props){
  return( 
    <div className='wrapper'>
      <Col>
        <Item text={props.text}/>
      </Col>
      <Col>
        {props.children}
      </Col>
    </div>
  )
}


export default App;
