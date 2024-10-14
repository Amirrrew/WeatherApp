import React from 'react';
import './App.css';
import Main from './components/Main';
import Hours from './components/Hours';
import MoreInfo from './components/Moreinfos';
import MoreDays from './components/MoreDays';


function App() {
  return (
    <div className='body overflow-hidden'>
      <div className='flex flex-wrap gap-5'>
        <div>
          <Main></Main>
          <Hours></Hours>
        </div>
        <div className='flex flex-wrap gap-5'>
          <MoreInfo></MoreInfo>
          <MoreDays></MoreDays>
        </div>
      </div>
    </div>
  );
}

export default App;
