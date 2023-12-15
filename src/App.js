import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import MyMovieSearch from './component/movieSearch/MyMovieSearch'
import MyCalculator from "./component/calculator/MyCalculator";
import MyWeather from "./component/weather/MyWeather";
import MyTable from "./component/table/MyTable";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Layout/>}>
          <Route index element = {<MyMovieSearch/>}/>
          <Route path='weather' element = {<MyWeather/>}/>
          <Route path='table' element = {<MyTable/>}/>
          <Route path='calculate' element = {<MyCalculator/>}/> 
        </Route>
      </Routes>
    </>
  );
}

export default App;
