import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import NotFound from '../NotFound'
import Form from '../../components/ListNews/Form'
import ListNews from '../ListNews'


export class Main extends Component {
  render() {
    return (
    <main>
      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<NotFound />} path={"/*"} />
        <Route element={<ListNews />} path={"/listnews"} />
        <Route element={<Form />} path={"/form"} />
      </Routes>
    </main>
    )
  }
}


export default Main;
