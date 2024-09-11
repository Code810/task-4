import React from 'react'
import HeaderSite from '../SiteHeader'
import {Outlet} from 'react-router-dom'
import FooterSite from '../SiteFooter'

const SiteLayout = () => {
  return (
    <div>
      <HeaderSite/>
      <Outlet/>
      <FooterSite/>
    </div>
  )
}

export default SiteLayout
