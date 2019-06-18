import React, { useEffect, useState } from 'react'

const Content = () => {
  const [pathname, setPathname] = useState<string>(window.location.pathname);
  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    }
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [])

  let output: React.ReactElement<any>;
  if (pathname === '/') {
    output = (<div>Content of home route </div>)
  } else if (pathname === '/one') {
    output = (<div>Content of route /one</div>)
  } else if (pathname === '/two') {
    output = (<div>Content of route /two</div>)
  } else {
    output = (<div>Content of unknown route</div>)
  }
  return (
    <main>{output}</main>
  )
}

export default Content;
