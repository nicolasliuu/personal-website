import { useEffect } from 'react';

const MouseCircle = () => {
  useEffect(() => {
    let mousePosX = 0;
    let mousePosY = 0;
    const mouseCircle = document.getElementById('mouse-circle');

    document.onmousemove = (e) => {
      mousePosX = e.pageX;
      mousePosY = e.pageY;
    };

    const delay = 3;
    let revisedMousePosX = 0;
    let revisedMousePosY = 0;

    function delayMouseFollow() {
      requestAnimationFrame(delayMouseFollow);

      revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
      revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

      if (mouseCircle) {
        mouseCircle.style.top = `${revisedMousePosY}px`;
        mouseCircle.style.left = `${revisedMousePosX}px`;
      }
    }
    delayMouseFollow();

    const handleMouseEnter = () => {
      if (mouseCircle) {
        mouseCircle.style.width = '96px';
        mouseCircle.style.height = '96px';
        mouseCircle.style.margin = '-48px 0px 0px -48px';
      }
    };

    const handleMouseLeave = () => {
      if (mouseCircle) {
        mouseCircle.style.width = '52px';
        mouseCircle.style.height = '52px';
        mouseCircle.style.margin = '-32px 0px 0px -32px';
      }
    };

    const hoverables = document.querySelectorAll('.hoverable');
    hoverables.forEach((hoverable) => {
      hoverable.addEventListener('mouseenter', handleMouseEnter);
      hoverable.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      // Cleanup: Remove the event listener when the component is unmounted
      document.onmousemove = null;
      hoverables.forEach((hoverable) => {
        hoverable.removeEventListener('mouseenter', handleMouseEnter);
        hoverable.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return <div id="mouse-circle"></div>;
};

export default MouseCircle;
