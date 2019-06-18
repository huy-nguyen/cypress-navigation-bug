import React from 'react';
import Link from './Link'
import Content from './Content'

const App: React.FC = () => {
  return (
    <>
      <nav>
        <Link href='/'>Link Home</Link>
        <Link href='/one'>Link One</Link>
        <Link href='/two'>Link Two</Link>
      </nav>
      <Content/>
    </>
  );
}

export default App;
