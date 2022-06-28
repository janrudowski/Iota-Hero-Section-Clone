import { React, useEffect, useRef } from 'react';
export default function Slide(props) {
  const videoRef = useRef(null);
  const isActive = props.isActive;
  useEffect(() => {
    if (isActive) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [isActive]);
  const title = props.title.split(' ');
  const titles = title.map((titlePart) => {
    return titlePart.split('').map((el) => {
      return (
        <span
          className={`${isActive ? 'title-letters-in' : 'title-letters-out'}`}
          style={{ animationDuration: `${Math.random() + 1}s` }}
        >
          {el}
        </span>
      );
    });
  });
  console.log(titles);
  return (
    <div className={`hero ${props.isActive ? 'hero-active' : 'hero-out'}`}>
      <video
        ref={videoRef}
        src={props.src}
        type='video/webm'
        autoPlay
        muted
        loop
      />
      <div
        className={`hero-title ${
          isActive ? 'hero-title-active' : 'hero-title-hidden'
        }`}
      >
        <h1>
          <span>{titles[0]}</span>
          <strong>
            {titles[1]}{' '}
            <div
              className={`circle ${
                isActive ? 'circle-active' : 'circle-hidden'
              }`}
            ></div>
          </strong>
        </h1>
      </div>
      <div className={`hero-text ${isActive ? 'square-in' : 'square-out'}`}>
        <p>{props.text}</p>
      </div>
      <div
        className={`hero-square ${isActive ? 'square-in' : 'square-out'}`}
      ></div>{' '}
      <div className='hero-divider-line'></div>
    </div>
  );
}
