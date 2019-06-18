import React from 'react';


const triggerPopState = () => {
  const popStateEvent = new PopStateEvent('popstate');
  window.dispatchEvent(popStateEvent);
}

const Link: React.FC<{href: string}> = ({href, children}) => {

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState(null, '', href);
    triggerPopState();
  }
  return (
    <a
      href={href}
      style={{display: 'block'}}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

export default Link;
