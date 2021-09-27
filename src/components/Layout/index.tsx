import React, { PropsWithChildren } from 'react';

import Header from './Header';

const Layout = ({ children }: PropsWithChildren<{}>) => (
  <>
    <Header />
    <div>{children}</div>
  </>
);

export default Layout;
