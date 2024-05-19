import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

import { store } from './store/store';
import './index.css';

import ReduxSample from './views/Redux/ReduxSample';
import Parabola from './views/Parabola/Parabola';
import Home from './views/Home';
import AnimationPlayPause from './views/Animation-PlayPause/Animation-PlayPause';
import AnimationDelay from './views/Animation-Delay/Animation-Delay';
import RotateSlideShow from './views/Rotate-SlideShow/Rotate-SlideShow';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/redux-sample" element={<ReduxSample />} />
        <Route path="/parabola" element={<Parabola />} />
        <Route path="/css-animation-play-pause" element={<AnimationPlayPause />} />
        <Route path="/css-animation-delay" element={<AnimationDelay />} />
        <Route path="/rotate-slideshow" element={<RotateSlideShow />} />

        <Route path='/*' element={<Navigate to='/home' replace />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
