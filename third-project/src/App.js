import logo from './logo.svg';
import './App.css';
import {product} from './Product'
import Price from './Price'
import Image from './Image'
import Description from './Description'
import Name from './Name'
import CardDetails from './CardDetails'
function App() {
  return (
    <div className="App"   >
  {/* <Price data={product}/>
  <Image data={product}/>
  <Description data={product}/>
  <Name data={product}/> */}
  <div style={{ padding: '2cm' }}>
  <CardDetails  data={product} />
  </div>
 {/* <CardDetails  style={{}}  data={product} /> */}
 
    </div>
  );
}

export default App;
