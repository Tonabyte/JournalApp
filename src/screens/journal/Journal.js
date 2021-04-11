import React from 'react';

import SideBar from '../../components/siderBar/SideBar'
import EmptyView from '../../components/presenter/EmptyView';
import Note from '../notes/Note';

const Journal = () => {
  return (
    <div className="journal__main-content">
      <SideBar />

      <main>
        {/* <EmptyView /> */}
        <Note />
      </main>
    </div>
  )
}

export default Journal;
