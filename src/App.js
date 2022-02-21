import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function (valor) {
    setLinea1(valor.target.value)
  }
  const onChangeLinea2 = function (valor) {
    setLinea2(valor.target.value)
  }
  const onChangeImagen = function (valor) {
    setImagen(valor.target.value)
  }
  const onClickExportar = function (valor) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="TrollFace">trollface</option>
        <option value="YaoMingMeme">Yao Ming</option>
        <option value="derp">derp</option>
        <option value="challenge">challenge accepted</option>
        <option value="NoMeGusta">me gusta</option>
        <option value="cerealguy">cereal guy</option>
        <option value="forever-alone">forever alone</option>
        <option value="no">no</option>
        <option value="YUNO">y u no</option>
        <option value="okay">okay</option>
      </select>

      <input onChange={onChangeLinea1} type="text" placeholder="linea 1" /> <br />
      <input onChange={onChangeLinea2} type="text" placeholder="linea 2" /> <br />
      <button onClick={onClickExportar}>Exportar</button>

      <div className='meme' id="meme">
        <span>{linea1}</span> <br />
        <span>{linea2}</span> <br />
        <img src={"/img/" + imagen + ".png"} />
      </div>
    </div>
  );
}

export default App;
