import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_API;
state = {
  progress:0
}
setprogress=(progress)=>{
this.setState({progress:progress})
}
  render() {
    return (
      <div>
        <BrowserRouter>
     <Navbar/>
     <LoadingBar
        color='#0275d8'
        height={3}
        progress={this.state.progress}
      />
     <Routes>
       <Route exact path="/" element={<News apikey={this.apikey} setprogress={this.setprogress} key="general" pagesize={5} country="in" category="general"/>} />
       <Route exact path="/entertainment" element={<News apikey={this.apikey} setprogress={this.setprogress} key="entertainment" pagesize={5} country="in" category="entertainment"/>} />
       <Route exact path="/technology" element={<News apikey={this.apikey} setprogress={this.setprogress} key="technology" pagesize={5} country="in" category="technology"/>} />
       <Route exact path="/sports" element={<News apikey={this.apikey} setprogress={this.setprogress} key="sports" pagesize={5} country="in" category="sports"/>} />
       <Route exact path="/health" element={<News apikey={this.apikey} setprogress={this.setprogress} key="health" pagesize={5} country="in" category="health"/>} />
       <Route exact path="/science" element={<News apikey={this.apikey} setprogress={this.setprogress} key="science" pagesize={5} country="in" category="science"/>} />
       <Route exact path="/business" element={<News apikey={this.apikey} setprogress={this.setprogress} key="business" pagesize={5} country="in" category="business"/>} />
       <Route exact path="/general" element={<News apikey={this.apikey} setprogress={this.setprogress} key="general" pagesize={5} country="in" category="general"/>} />
      
     </Routes>
     </BrowserRouter>
     </div>

    )
  }
}



