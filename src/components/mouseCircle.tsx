import { useEffect } from 'react';

const MouseCircle = () => {
  useEffect(() => {
    let mousePosX = 0
    let mousePosY = 0
    const mouseCircle = document.getElementById('mouse-circle');

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    }

    const delay = 3;
    let revisedMousePosX = 0;
    let revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay; 

        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        if (mouseCircle) mouseCircle.style.top = revisedMousePosY + 'px';
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        if (mouseCircle) mouseCircle.style.left = revisedMousePosX + 'px';
    }
    delayMouseFollow();

    return () => {
      // Cleanup: Remove the event listener when the component is unmounted
      document.onmousemove = null;
    };
  }, []);

  return <div id="mouse-circle"></div>;
};

export default MouseCircle;
