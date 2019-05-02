import React, { Suspense } from 'react';

const Loading = ({
  fallback = (<div className="spinner"></div>),
  delayMs = 0,
  children
}) => (
  <Suspense delayMs={delayMs} fallback={fallback}>
    {children}
  </Suspense>
);

export default Loading;
