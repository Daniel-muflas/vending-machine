
import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

export const NotFoundPage: FC = () => {
	return <CurrentPageInfo />
}


function CurrentPageInfo() {
  const location = useLocation();

  return (
    <div>
      <h2>Not found page, but it is the current Page Information</h2>
      <p>Pathname: {location.pathname}</p>
      <p>Search: {location.search}</p>
    </div>
  );
}