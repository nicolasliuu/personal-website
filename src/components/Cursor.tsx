import { useEffect } from 'react';
import { TweenMax } from 'gsap';

const Cursor: React.FC = () => {
  useEffect(() => {
    const $bigBall = document.querySelector('.cursor__ball--big');
    const $smallBall = document.querySelector('.cursor__ball--small');
    const $hoverables = document.querySelectorAll('.hoverable');

    const onMouseMove = (e: MouseEvent) => {
      if ($bigBall && $smallBall) {
        TweenMax.to($bigBall, .4, {
          x: e.pageX - 15,
          y: e.pageY - 15
        });
        TweenMax.to($smallBall, .1, {
          x: e.pageX - 5,
          y: e.pageY - 7
        });
      }
    };

    const onMouseHover = () => {
      if ($bigBall) {
        TweenMax.to($bigBall, .3, {
          scale: 4
        });
      }
    };

    const onMouseHoverOut = () => {
      if ($bigBall) {
        TweenMax.to($bigBall, .3, {
          scale: 1
        });
      }
    };

    document.body.addEventListener('mousemove', onMouseMove);
    $hoverables.forEach(hoverable => {
      hoverable.addEventListener('mouseenter', onMouseHover);
      hoverable.addEventListener('mouseleave', onMouseHoverOut);
    });

    return () => {
      document.body.removeEventListener('mousemove', onMouseMove);
      $hoverables.forEach(hoverable => {
        hoverable.removeEventListener('mouseenter', onMouseHover);
        hoverable.removeEventListener('mouseleave', onMouseHoverOut);
      });
    };
  }, []);

  return (
    <div className="cursor">
      <div className="cursor__ball cursor__ball--big">
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
        </svg>
      </div>
      <div className="cursor__ball cursor__ball--small">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" stroke-width="0"></circle>
        </svg>
      </div>
    </div>
  );
};

export default Cursor;
