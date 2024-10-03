import logo from './logo.svg';
import './App.css';
import Basic from './Basic';
import Userid from './Components/Userid';
import Password from './Components/Password';
import Variables from './Components/Variables';
import UseStateHook from './Components/UseStateHook';
import Factorial from './Components/Factorial';
import Tables from './Components/Tables';
import Prime from './Primenumbers';
import Grade from './Components/Gradecal';
import ReactProps from './Components/ReactProps';
import Bmi from './Components/Bmi';
import Exampleprops from './Components/Exampleprops';
import EventsExample from './Components/EventsExample';
import Eventhandler from './Components/Eventhandler';
import MouseEvents from './Components/MouseEvents';
import Mouseexample from './Components/Mouseexample';
import Mousehint from './Components/Mousehint';
import Mousewarning from './Components/Mousewarning';
import KeyBoardEvents from './Components/KeyBoardEvents';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoutingExample from './Components/RoutingExample';
import Randomnumber from './Components/Randomnumber';
import Agecalci from './Components/Agecalci';
import UseLocation from './Components/UseLocation';
import NavigateSender from './Components/NavigateSender';
import NavigateReciver from './Components/NavigateReciver';
import String from './Components/String';
import Removeduplicate from './Components/Removeduplicate';
import Vowels from './Components/Vowels';
import GuessTheNumber from './Components/Game';
import Game from './Components/Game';
import DateObj from './Components/DateObj';
import DateEx from './Components/DateEx';
import DateTask2 from './Components/DateTask2';
import DateTask3 from './Components/DateTask3';
import DateTask4 from './Components/DateTask4';
import StringTask from './Components/StringTask';
import RegExpExample from './Components/RegExpExample';
import RegExpTask from './Components/RegExpTask';
import RegExpTask1 from './Components/RegExpTask1';
import RegExpTask2 from './Components/RegExpTask2';
import RegExpTask3 from './Components/RegExpTask3';
import DialogueBoxes from './Components/DialogueBoxes';
import Save from './Components/Save';
import ErrorHandling from './Components/ErrorHandling';
import CookiesExample from './Components/CookiesExample';
import CookiesExp from './Components/CookiesExp';
import UseEffectHook from './Components/UseEffectHook';
import CountDown from './Components/CountDown';
import TimerExp from './Components/TimerExp';
import ApiUseEffect from './Components/ApiUseEffect';
import ApiExp from './Components/ApiExp';
import UseContextHook from './Components/UseContextHook';
import UsecontextExp from './Components/UsecontextExp';
import UseconextTask from './Components/UseconextTask';
import UseReducerHook from './Components/UseReducerHook';
import UsereducerExp from './Components/UsereducerExp';
import UseReducerTask from './Components/ListTask';
import ProductTask from './Components/ProductTask';
import UseMemoHook from './Components/UseMemoHook';
import DataTableComp from './Components/DataTableComp';
import DataTableTask from './Components/DataTableTask';
import DataTableTask1 from './Components/DataTableTask1';
import DataTableTask2 from './Components/DataTableTask2';
import DataTableClient from './Components/DataTableClient';
import EditClient from './Components/DataTableClient';
import Cart from './Components/Cart';
import FormValidation from './Components/FormValidation';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Basic/>}></Route>
        <Route path='/factorial' element={<Factorial/>}></Route> 
        <Route path='/prime' element={<Prime/>}></Route>
        <Route path='/grades' element={<Grade/>}></Route>
        <Route path='/bmi' element={<Bmi/>}></Route>
        <Route path='/Ramdomnumber' element={<Randomnumber/>}></Route>
        <Route path='/agecalci' element={<Agecalci/>}></Route>
        <Route path='/UseLocation' element={<UseLocation/>}></Route>
        <Route path='/KeyBoardEvents' element={<KeyBoardEvents />}></Route>
        <Route path="/RoutingExample" element={<RoutingExample />}></Route>
        <Route path="/NavigateSender" element={<NavigateSender/>}></Route>
        <Route path="/NavigateReciver" element={<NavigateReciver/>}></Route> 
        <Route path="/Removeduplicate" element={<Removeduplicate/>}></Route> 
        <Route path="/String" element={<String/>}></Route> 
        <Route path="/Vowels" element={<Vowels/>}></Route> 
        <Route path="/Game" element={<Game/>}></Route> 
        <Route path="/DateObj" element={<DateObj/>}></Route> 
        <Route path="/DateEx" element={<DateEx/>}></Route>
        <Route path="/DateTask2" element={<DateTask2/>}></Route>
        <Route path="/DateTask3" element={<DateTask3/>}></Route>
        <Route path="/DateTask4" element={<DateTask4/>}></Route>
        <Route path="/stringtask" element={<StringTask/>}></Route>
        <Route path="/RegExpExample" element={<RegExpExample/>}></Route>
        <Route path="/RegExpTask" element={<RegExpTask/>}></Route>
        <Route path="/RegExpTask1" element={<RegExpTask1/>}></Route>
        <Route path="/RegExpTask2" element={<RegExpTask2/>}></Route>
        <Route path="/example" element={<RegExpTask3/>}></Route> 
        <Route path="/Mousewarning" element={<Mousewarning/>}></Route> 
        <Route path="/DialogueBoxes" element={<DialogueBoxes/>}></Route> 
        <Route path="/Password" element={<Password/>}></Route> 
        <Route path="/Save" element={<Save/>}></Route> 
        <Route path="/ErrorHandling" element={<ErrorHandling/>}></Route> 
        <Route path="/CookiesExample" element={<CookiesExample/>}></Route> 
        <Route path="/CookiesExp" element={<CookiesExp/>}></Route> 
        <Route path="/UseEffectHook" element={<UseEffectHook/>}></Route> 
        <Route path="/EventsExample" element={<EventsExample/>}></Route> 
        <Route path="/CountDown" element={<CountDown/>}></Route> 
        <Route path="/TimerExp" element={<TimerExp/>}></Route> 
        <Route path="/ApiUseEffect" element={<ApiUseEffect/>}></Route> 
        <Route path="/ApiExp" element={<ApiExp/>}></Route>
        <Route path="/UseContextHook" element={<UseContextHook/>}></Route>
        <Route path="/UsecontextExp" element={<UsecontextExp/>}></Route>
        <Route path="/UsecontextTask" element={<UseconextTask/>}></Route>
        <Route path="/UseReducerHook" element={<UseReducerHook/>}></Route>
        <Route path="/UseReducerexp" element={<UsereducerExp/>}></Route>
        <Route path="/ListTask" element={<UseReducerTask/>}></Route>
        <Route path="/ProductTask" element={<ProductTask/>}></Route>
        <Route path="/UseMemoHook" element={<UseMemoHook/>}></Route>
        <Route path="/DataTableComp" element={<DataTableComp/>}></Route>
        <Route path="/DataTableTask" element={<DataTableTask/>}></Route>
        <Route path="/DataTableTask1" element={<DataTableTask1/>}></Route>
        <Route path="/add-client" element={<DataTableTask2/>}></Route>
        <Route path="/edit-client/:id" element={<EditClient/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/FormValidation" element={<FormValidation/>}></Route>
      </Routes>
      </BrowserRouter>
      
{/*       
    <UseReducerTask/> */}
     {/* <Basic/>
     <Userid/>
     <Password/>
     <Variables /> */}
     {/* <UseStateHook /> */}
     {/* <Factorial/> */}
     {/* <Tables/> */}
      {/* <Prime/> */}
      {/* <Grade/>
      <ReactProps /> */}
      {/* <Bmi/> */}
      {/* <Exampleprops /> */}
      {/* <EventsExample/> */}
      {/* <Eventhandler/> */}
      {/* <MouseEvents /> */}
      {/* <Mouseexample/> */}
      {/* <Mousehint/> */}
      
    {/* <Mousewarning/> */}
    {/* <KeyBoardEvents /> */}
    {/* <BrowserRouter>
        <Routes>
          <Route path='/KeyBoardEvents' element={<KeyBoardEvents />}></Route>
          <Route path="/" element={<RoutingExample />}></Route>
          <Route path="/Mousehint" element={<Mousehint />}></Route>
          <Route path="/MouseEvents" element={<MouseEvents />}></Route>

        </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;

