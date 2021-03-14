import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
   return (<ContentLoader
      speed={2}
      width={280}
      height={412}
      viewBox="0 0 280 430"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
   >
      <rect x="0" y="239" rx="5" ry="5" width="240" height="26" />
      <rect x="0" y="274" rx="5" ry="5" width="240" height="84" />
      <rect x="0" y="378" rx="5" ry="5" width="89" height="30" />
      <circle cx="110" cy="110" r="110" />
      <rect x="120" y="365" rx="25" ry="25" width="120" height="44" />
   </ContentLoader>)
}

export default LoadingBlock
