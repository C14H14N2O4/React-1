import './App.css';
import Month from './Month.js'


function App() {

  return (  
    <div className="app">
      <Month name="jan" days="31"/>
      <Month name="feb " days="29"/>
      <Month name="mar" days="31"/>
      <Month name="apr " days="30"/>
      <Month name="may" days="31"/>
      <Month name="jun " days="30"/>
      <Month name="jul" days="31"/>
      <Month name="aug " days="31"/>
      <Month name="sep" days="30"/>
      <Month name="oct " days="31"/>
      <Month name="nov" days="30"/>
      <Month name="dec " days="31"/>
    </div>
  );
}

export default App;