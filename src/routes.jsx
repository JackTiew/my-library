import AnimationDelay from "./views/Animation-Delay/Animation-Delay";
import AnimationPlayPause from "./views/Animation-PlayPause/Animation-PlayPause";
import AspectRatio from "./views/Aspect-Ratio/Aspect-Ratio";
import CSSReflection from "./views/CSS-Reflection/CSS-Reflection";
import CSSTextOverflow from "./views/CSS-Text-Overflow/CSS-Text-Overflow";
import CardFlip from "./views/Card-Flip/Card-Flip";
import CrossoverText from "./views/Crossover-text/Crossover-text";
import Debounce from "./views/Debounce/Debounce";
import DragNDrop from "./views/Drag-n-Drop/DragNDrop";
import Flip from "./views/FLIP/Flip";
import FrameAnimation from "./views/Frame-Animation/Frame-Animation";
import GradientBackground from "./views/Gradient-Background/Gradient-Background";
import HighlightSearch from "./views/Highlight-Search/Highlight-Search";
import ImageBorder from "./views/Image-Border/Image-Border";
import ItalicButton from "./views/Italic-Button/Italic-Button";
import JSCSSVariable from "./views/JS-CSS-Variable/JS-CSS-Variable";
import LazyLoadingImage from "./views/Lazy-Loading-Image/Lazy-Loading-Image";
import NumberDelimeter from "./views/Number-Delimeter/Number-Delimeter";
import Parabola from "./views/Parabola/Parabola";
import PermissionDevelopment from "./views/Permission-Development/Permission-Development";
import PlaneCursor from "./views/Plane-Cursor/Plane-Cursor";
import RandomCanvasTree from "./views/Random-Canvas-Tree/Random-Canvas-Tree";
import Recording from "./views/Recording/Recording";
import ReduxSample from "./views/Redux/ReduxSample";
import RotateSlideShow from "./views/Rotate-SlideShow/Rotate-SlideShow";
import SASSColorButton from "./views/SASS-Color-Button/SASS-Color-Button";
import StrokeAnimation from "./views/Stroke-Animation/Stroke-Animation";

const Routes = [
  { url: '/redux-sample', element: ReduxSample, name: 'Redux'},
  { url: '/parabola', element: Parabola, name: 'Parabola Animation'},
  { url: '/css-animation-play-pause', element: AnimationPlayPause, name: 'Control Animation State With CSS'},
  { url: '/css-animation-delay', element: AnimationDelay, name: 'Control Animation With Animation Delay'},
  { url: '/rotate-slideshow', element: RotateSlideShow, name: 'Rotate Slide Show'},
  { url: '/number-delimeter', element: NumberDelimeter, name: 'Number Delimeter'},
  { url: '/permission-development', element: PermissionDevelopment, name: 'Permission Development'},
  { url: '/lazy-loading-image', element: LazyLoadingImage, name: 'Lazy Loading Image'},
  { url: '/image-border', element: ImageBorder, name: 'Image Border'},
  { url: '/drag-n-drop', element: DragNDrop, name: 'Drag N Drop'},
  { url: '/sass-color-button', element: SASSColorButton, name: 'SASS Color Button'},
  { url: '/css-text-overflow', element: CSSTextOverflow, name: 'Control Text Overflow With CSS'},
  { url: '/js-css-variable', element: JSCSSVariable, name: 'Control CSS With JS'},
  { url: '/random-canvas-tree', element: RandomCanvasTree, name: 'Draw Random Tree with Canvas'},
  { url: '/frame-animation', element: FrameAnimation, name: 'Running Animation in Frame'},
  { url: '/gradient-background', element: GradientBackground, name: 'Gradient Background'},
  { url: '/plane-cursor', element: PlaneCursor, name: 'Plane Cursor'},
  { url: '/crossover-text', element: CrossoverText, name: 'Crossover Text'},
  { url: '/css-reflection', element: CSSReflection, name: 'CSS Reflection'},
  { url: '/debounce', element: Debounce, name: 'Debounce Funtion'},
  { url: '/card-flip', element: CardFlip, name: 'Card Flip Effect'},
  { url: '/recording', element: Recording, name: 'Recording Video and Microphone'},
  { url: '/aspect-ratio', element: AspectRatio, name: 'Aspect Ratio'},
  { url: '/stroke-animation', element: StrokeAnimation, name: 'Stroke Animation'},
  { url: '/italic-button', element: ItalicButton, name: 'Italic Button'},
  { url: '/highlight-search', element: HighlightSearch, name: 'Highlight Search'},
  { url: '/flip', element: Flip, name: 'FLIP'},
]

export default Routes;