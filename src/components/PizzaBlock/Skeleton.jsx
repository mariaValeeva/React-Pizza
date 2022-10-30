import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader 
    className="pizza-block"
    speed={0}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="6" y="279" rx="5" ry="5" width="254" height="18" /> 
    <rect x="8" y="320" rx="6" ry="6" width="254" height="56" /> 
    <rect x="134" y="394" rx="11" ry="11" width="128" height="42" /> 
    <circle cx="133" cy="127" r="124" /> 
    <rect x="12" y="403" rx="7" ry="7" width="102" height="29" />
  </ContentLoader>
)

export default MyLoader;