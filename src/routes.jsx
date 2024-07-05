import AnimationDelay from "./views/Animation-Delay/Animation-Delay";
import AnimationPlayPause from "./views/Animation-PlayPause/Animation-PlayPause";
import AspectRatio from "./views/Aspect-Ratio/Aspect-Ratio";
import AutoFollowImageBorder from "./views/AutoFollow-ImageBorder/AutoFollow-ImageBorder";
import BlackWhiteBallLoading from "./views/BlackWhite-Ball-Loading/BlackWhite-Ball-Loading";
import BlendMode from "./views/Blend-Mode/Blend-Mode";
import BorderHighlight from "./views/Border-Highlight/Border-Highlist";
import BrokenEffect from "./views/Broken-Effect/Broken-Effect";
import BubbleAnimation from "./views/Bubble-Animation/Bubble-Animation";
import CSSReflection from "./views/CSS-Reflection/CSS-Reflection";
import CSSTextOverflow from "./views/CSS-Text-Overflow/CSS-Text-Overflow";
import CardFlip from "./views/Card-Flip/Card-Flip";
import CardTilt from "./views/Card-Tilt/Card-Tilt";
import CircleHover from "./views/Circle-Hover/Circle-Hover";
import CircleImage from "./views/Circle-Image/Circle-Image";
import CrossoverText from "./views/Crossover-text/Crossover-text";
import Debounce from "./views/Debounce/Debounce";
import DragNDrop from "./views/Drag-n-Drop/DragNDrop";
import Flip from "./views/FLIP/Flip";
import FireText from "./views/Fire-Text/Fire-Text";
import FrameAnimation from "./views/Frame-Animation/Frame-Animation";
import FullWidthHeightImage from "./views/Full-WidthHeight-Image/Full-WidthHeight-Image";
import GSAP from "./views/GSAP/GSAP";
import GradientBackground from "./views/Gradient-Background/Gradient-Background";
import HighlightSearch from "./views/Highlight-Search/Highlight-Search";
import ImageBorder from "./views/Image-Border/Image-Border";
import ImagePopOnMouseEnter from "./views/Image-Pop-OnMouseEnter/Image-Pop-OnMouseEnter";
import InfiniteScroll from "./views/Infinite-Scroll/Infinite-Scroll";
import IntersectionObservers from "./views/Intersection-Observer/Intersection-Observer";
import ItalicButton from "./views/Italic-Button/Italic-Button";
import JSCSSVariable from "./views/JS-CSS-Variable/JS-CSS-Variable";
import LazyLoadingImage from "./views/Lazy-Loading-Image/Lazy-Loading-Image";
import MacDocker from "./views/Mac-Docker-Effect/Mac-Docker";
import MovingBall from "./views/Moving-Ball/Moving-Ball";
import NumberDelimeter from "./views/Number-Delimeter/Number-Delimeter";
import Parabola from "./views/Parabola/Parabola";
import PermissionDevelopment from "./views/Permission-Development/Permission-Development";
import PhotoWall from "./views/Photo-Wall/Photo-Wall";
import PlaneCursor from "./views/Plane-Cursor/Plane-Cursor";
import RainCode from "./views/Rain-Code/Rain-Code";
import RandomCanvasTree from "./views/Random-Canvas-Tree/Random-Canvas-Tree";
import Recording from "./views/Recording/Recording";
import ReduxSample from "./views/Redux/ReduxSample";
import RotateSlideShow from "./views/Rotate-SlideShow/Rotate-SlideShow";
import RoundImageWithText from "./views/Round-Image-With-Text/Round-Image-With-Text";
import SASSColorButton from "./views/SASS-Color-Button/SASS-Color-Button";
import StrokeAnimation from "./views/Stroke-Animation/Stroke-Animation";
import SudokuImage from "./views/Sudoku-Image/Sudoku-Image";
import TypeWritter from "./views/TypeWritter/TypeWritter";
import VideoFrame from "./views/Video-Frame/Video-Frame";

const Routes = [
  { url: '/redux-sample', element: ReduxSample, name: 'Redux'},
  { url: '/parabola', element: Parabola, name: 'Parabola Animation'},
  { url: '/css-animation-play-pause', element: AnimationPlayPause, name: 'Control Animation State With CSS'},
  { url: '/css-animation-delay', element: AnimationDelay, name: 'Control Animation With Input Range'},
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
  { url: '/full-width-height-image', element: FullWidthHeightImage, name: 'Image with full width or height when screen size change'},
  { url: '/round-image-with-text', element: RoundImageWithText, name: 'Round Image With Text'},
  { url: '/circle-image', element: CircleImage, name: 'Image Rotation'},
  { url: '/fire-text', element: FireText, name: 'Text with Fire Effect'},
  { url: '/card-tilt', element: CardTilt, name: 'Card Tilt Effect'},
  { url: '/moving-ball', element: MovingBall, name: 'Moving Ball on Mouseclick(WEB Animation)'},
  { url: '/gsap', element: GSAP, name: 'GSAP'},
  { url: '/black-white-ball-loading', element: BlackWhiteBallLoading, name: 'Black White Ball Loading'},
  { url: '/rain-code', element: RainCode, name: 'Rain Code'},
  { url: '/circle-hover', element: CircleHover, name: 'Circle Hover Effect'},
  { url: '/broken-effect', element: BrokenEffect, name: 'Image Broken Effect'},
  { url: '/border-highlight', element: BorderHighlight, name: 'Border Highlight Effect'},
  { url: '/auto-follow-image-border', element: AutoFollowImageBorder, name: 'Auto Follow Image Border'},
  { url: '/infinite-scroll', element: InfiniteScroll, name: 'Infinite Scroll'},
  { url: '/photo-wall', element: PhotoWall, name: 'Photo Wall'},
  { url: '/bubble-animation', element: BubbleAnimation, name: 'Bubble Animation'},
  { url: '/blend-mode', element: BlendMode, name: 'Blend Mode'},
  { url: '/video-frame', element: VideoFrame, name: 'Video Frame'},
  { url: '/sudoku-image', element: SudokuImage, name: 'Sudoku Image'},
  // { url: '/image-pop-on-mouse-enter', element: ImagePopOnMouseEnter, name: 'Image Pop On Mouse Enter'},
  { url: '/mac-docker', element: MacDocker, name: 'Mac Docker Effect'},
  { url: '/typewritter', element: TypeWritter, name: 'TypeWritter'},
  { url: '/intersection-observer', element: IntersectionObservers, name: 'Intersection Observer'},
]

export default Routes;