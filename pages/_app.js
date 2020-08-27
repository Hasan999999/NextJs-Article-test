import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
const _app = ({Component,pageProps}) => {
  return (
        <Component {...pageProps}/>
  );
}

export default _app;

