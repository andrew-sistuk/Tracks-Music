// import css from './Tracks.module.css';

import { fetchTracks, selectPageIndex, selectPageSize, useAppDispatch } from 'myRedux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DataTable, columns } from 'components';
import { Link } from 'react-router-dom';

export function Tracks() {
  const dispatch = useAppDispatch();
  const pageIndex = useSelector(selectPageIndex);
  const pageSize = useSelector(selectPageSize);

  useEffect(() => {
    dispatch(fetchTracks({ pageIndex, pageSize }));
  }, [dispatch, pageIndex, pageSize]);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="h-16 px-4 border-b flex items-center justify-between">
        <Link to={'/'}>
          <h1 data-testid="tracks-header" className="text-xl font-semibold">Music Tracks</h1>
        </Link>
      </header>
      <main className="flex-1 container mx-auto py-10">
        <DataTable />
      </main>
    </div>
  );
}