import { useState, useEffect, useRef } from 'react';

function WindowAPP({initialX = 5, initialY = 5, initialWidth = 500, initialHeight = 500, app}){
    const [x, setX] = useState(initialX);
    const [y, setY] = useState(initialY);
    const [width, setWidth] = useState(initialWidth);
    const [height, setHeight] = useState(initialHeight);

    const [isDragging, setIsDragging] = useState(false);

    const windowSize = useRef(null);
    

    const handleMouseDown = (event) => {
        setIsDragging(true);
        event.preventDefault();
    }

    const handleMouseUp = (event) => {
        setIsDragging(false);
        setIsExpanding(false);
    }

    const handleMouseMove = (event) => {
        if(isDragging){           
            setX(event.clientX);
            setY(event.clientY);
        }

        if(isExpanding){           
            setWidth(event.clientX - x);
            setHeight(event.clientY - y);
        }
    }

    const handleTouchStart = (event) => {
        setIsDragging(true);
    }

    const handleTouchEnd = (event) => {
        setIsDragging(false);
    }

    const handleTouchMove = (event) => {
        if(isDragging){
            setX(event.touches[0].clientX);
            setY(event.touches[0].clientY);
        }
    }

    const [isExpanding, setIsExpanding] = useState(false);

    const handleMouseDownExpand = (event) => {
        setIsExpanding(true);
        console.log("Mouse down expand");
        event.preventDefault();
    }

    useEffect(() => {
        console.log(isExpanding)
    }, [isExpanding]);

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        }
    });

    function handleMinize(){
        windowSize.current.style.display = 'none';
    }

    return (
        <div className="window-app" style={{top: y, left: x, width: width, height: height}} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} ref={windowSize}>
            <div className='window-component'>
                <div className="window-app-title-bar" onMouseDown={handleMouseDown} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove}>
                    <div className="window-app-title-bar-icon">
                    	<img src={app.icon} alt={app.name}/>
                    </div>                
                    <div>{ app.name }</div>
                    <div className="window-app-title-bar-buttons">
                        <div className="window-app-title-bar-button" onClick={handleMinize}>_</div>
                        <div className="window-app-title-bar-button">X</div>
                    </div>
                </div>
                <div className="separation-x-bar"/>
                <div className="window-app-content">
                    <iframe src='https://nervesscat.web.app/' title='NervessCat' className='window-app-iframe'/>
                </div>
            </div>
            <button className='expand-window' onMouseDown={handleMouseDownExpand}>┛</button>
        </div>

    );
}

export default WindowAPP;