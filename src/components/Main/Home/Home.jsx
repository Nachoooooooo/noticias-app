import React, { Component } from "react";
import myGifhome from '../../../assets/giftarea.gif'


class Home extends Component {
  render() {
    return (
      <div style={{ backgroundImage: `url("https://wallpapercave.com/wp/wp3396925.jpg")` }}>
        <img id="gifhome" src={myGifhome} alt="gif" />
        <h1>EJERCICIO NEWS</h1>
        <a href="/listnews">
        <button id="reload-button">LIST NEWS</button>
        <p id="letras">"PULSA PARA VER NOTICIAS"</p>
      </a>
      </div>
    )
  }

}

export default Home
