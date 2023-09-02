// import logo from './Images/logo.png';
import './App.css';
import FooterComponent from './Component/FooterComponent';
import MainBody1 from './Component/MainBody1';
import MainBody2 from './Component/MainBody2';
import MainBody3 from './Component/MainBody3';
import MainBody4 from './Component/MainBody4';
import MainHeader from './Component/MainHeader';

function App() {
  return (
    <div className="App">
     <MainHeader/>
     <MainBody1/>
     <MainBody2/>
     <MainBody3/>
     <MainBody4/>
     <FooterComponent/>
    </div>
  );
}

export default App;
