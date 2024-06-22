import React from 'react'
import ContentLoader from 'react-content-loader'

export const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={301}
    height={524}
    viewBox="0 0 301 524"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="4" y="0" rx="6" ry="6" width="280" height="299" />
    <rect x="4" y="311" rx="10" ry="10" width="279" height="30" />
    <rect x="5" y="360" rx="11" ry="11" width="279" height="70" />
    <rect x="7" y="454" rx="11" ry="11" width="61" height="44" />
    <rect x="183" y="455" rx="18" ry="18" width="100" height="44" />
    <style>
      {`
        @media (max-width: 760px) {
          svg {
            width: 100%;
            height:100%;
          }
        }

        @media (max-width: 645px) {
          svg {
            width: 100%;
            height:100%;
          }

         
      `}
    </style>
  </ContentLoader>
)
