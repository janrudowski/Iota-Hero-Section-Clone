import React from 'react';

const Chevron = React.forwardRef((props, ref) => (
  <div
    className={`chevron chevron-${props.direction}`}
    onClick={props.clickHandler}
  >
    <div className='chevron-circle'>
      <svg
        version='1.1'
        className={props.class}
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 100 100'
        fill='#181e32'
      >
        <circle
          className={props.circleClass}
          stroke={props.stroke}
          cx='50'
          cy='50'
          r='48'
          stroke-width={props.strokeWidth}
        />
        <circle
          className={props.circleClass}
          stroke={props.animationStroke}
          stroke-width={props.strokeWidth}
          cx='50'
          cy='50'
          r='48'
          stroke-dasharray='360'
          stroke-linecap='round'
          transform='rotate(-90 ) translate(-100 0)'
        >
          {props.animate && (
            <animate
              ref={ref}
              attributeName='stroke-dashoffset'
              values='360;0'
              dur={props.duration}
              repeatCount='indefinite'
            ></animate>
          )}
        </circle>
      </svg>
      <img src={`images/chevron-${props.direction}.svg`} alt='chevron' />
    </div>
  </div>
));

export default Chevron;
