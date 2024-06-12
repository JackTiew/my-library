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
import NumberDelimeter from './views/Number-Delimeter/Number-Delimeter';
import PermissionDevelopment from './views/Permission-Development/Permission-Development';
import LazyLoadingImage from './views/Lazy-Loading-Image/Lazy-Loading-Image';
import ImageBorder from './views/Image-Border/Image-Border';
import DragNDrop from './views/Drag-n-Drop/DragNDrop';
import SASSColorButton from './views/SASS-Color-Button/SASS-Color-Button';
import CSSTextOverflow from './views/CSS-Text-Overflow/CSS-Text-Overflow';
import JSCSSVariable from './views/JS-CSS-Variable/JS-CSS-Variable';
import RandomCanvasTree from './views/Random-Canvas-Tree/Random-Canvas-Tree';
import FrameAnimation from './views/Frame-Animation/Frame-Animation';
import GradientBackground from './views/Gradient-Background/Gradient-Background';
import PlaneCursor from './views/Plane-Cursor/Plane-Cursor';
import CrossoverText from './views/Crossover-text/Crossover-text';
import CSSReflection from './views/CSS-Reflection/CSS-Reflection';
import Debounce from './views/Debounce/Debounce';
import CardFlip from './views/Card-Flip/Card-Flip';

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
        <Route path="/number-delimeter" element={<NumberDelimeter />} />
        <Route path="/permission-development" element={<PermissionDevelopment />} />
        <Route path="/lazy-loading-image" element={<LazyLoadingImage />} />
        <Route path="/image-border" element={<ImageBorder />} />
        <Route path="/drag-n-drop" element={<DragNDrop />} />
        <Route path="/sass-color-button" element={<SASSColorButton />} />
        <Route path="/css-text-overflow" element={<CSSTextOverflow />} />
        <Route path="/js-css-variable" element={<JSCSSVariable />} />
        <Route path="/random-canvas-tree" element={<RandomCanvasTree />} />
        <Route path="/frame-animation" element={<FrameAnimation />} />
        <Route path="/gradient-background" element={<GradientBackground />} />
        <Route path="/plane-cursor" element={<PlaneCursor />} />
        <Route path="/crossover-text" element={<CrossoverText />} />
        <Route path="/css-reflection" element={<CSSReflection />} />
        <Route path="/debounce" element={<Debounce />} />
        <Route path="/card-flip" element={<CardFlip />} />

        <Route path='/*' element={<Navigate to='/home' replace />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
