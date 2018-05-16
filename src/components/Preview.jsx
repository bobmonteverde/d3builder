import React from 'react';

const D3_CDN = 'https://d3js.org/d3.v5.min.js';

const Preview = ({ js, css, html }) => (
  <div className="z-3 w-100 h-100">
    <iframe
      //ref='preview'
      title="Viz Preview"
      className="bn w-100 h-100"
      sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals allow-popups-to-escape-sandbox"
      srcDoc={`<style>${css}</style>${html}<script src='${D3_CDN}'></script><script>try { ${js} } catch(e) {/* console.log('1', e) */ }</script>`}
    />
  </div>
);

export default Preview;
