import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Fruits from './lists'

import apple from './fruits/apple.png'
import apricot from './fruits/apricot.png'
import avocado from './fruits/avocado.jpg'
import banana from './fruits/banana.png'
import blueberry from './fruits/blueberry.jpg'
import blackberry from './fruits/blackberry.png'
import cherry from './fruits/cherry.jpg'
import coconut from './fruits/coconut.png'
import cucumber from './fruits/cucumber.png'
import durian from './fruits/durian.jpg'
import dragonfruit from './fruits/dragonFruit.jpg'
import fig from './fruits/fig.jpg'
import gooseberry from './fruits/gooseberry.jpg'
import grape from './fruits/grape.jpg'
import guava from './fruits/guava.jpg'
import jackfruit from './fruits/jackfruit.jpg'
import plum from './fruits/plum.jpg'
import kiwifruit from './fruits/kiwi.jpg'
import kumquat from './fruits/kumquat.jpg'
import lime from './fruits/lime.jpg'
import mango from './fruits/mango.png'
import watermelon from './fruits/watermelon.png'
import mulberry from './fruits/mulberry.jpg'
import orange from './fruits/orange.jpg'
import papaya from './fruits/papaya.jpg'
import passionfruit from './fruits/passionFruit.png'
import peach from './fruits/peach.png'
import pear from './fruits/pear.jpg'
import persimmon from './fruits/persimmon.jpg'
import pineapple from './fruits/pineapple.jpg'

const data = [
  {img: apple , name: 'Apple'},
  {img: apricot , name: 'Apricot'},
  {img: avocado , name: 'Avocado'},
  {img: banana, name: 'Banana'},
  {img: blueberry , name: 'Blueberry'},
  {img: blackberry , name: 'Blackberry'},
  {img: cherry , name: 'Cherry'},
  {img: coconut , name: 'Coconut'},
  {img: cucumber , name: 'Cucumber'},
  {img: durian , name: 'Durian'},
  {img: dragonfruit , name: 'Dragonfruit'},
  {img: fig , name: 'Fig'},
  {img: gooseberry , name: 'Gooseberry'},
  {img: grape , name: 'Grape'},
  {img: guava , name: 'Guava'},
  {img: jackfruit , name: 'Jackfruit'},
  {img: plum , name: 'Plum'},
  {img: kiwifruit , name: 'Kiwifruit'},
  {img: kumquat , name: 'Kumquat'},
  {img: lime , name: 'Lime'},
  {img: mango , name: 'Mango'},
  {img: watermelon , name: 'Watermelon'},
  {img: mulberry , name: 'Mulberry'},
  {img: orange , name: 'Orange'},
  {img: papaya , name: 'Papaya'},
  {img: passionfruit , name: 'Passionfruit'},
  {img: peach , name: 'Peach'},
  {img: pear , name: 'Pear'},
  {img: persimmon , name: 'Persimmon'},
  {img: pineapple , name: 'Pineapple'},
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 className='list'>list of fruits</h1>
    <div className='box'>
   {
        data.map((value) => {
          return (
            <Fruits title={value} />
          )
        })
      }
    </div>
  </React.StrictMode>
);

