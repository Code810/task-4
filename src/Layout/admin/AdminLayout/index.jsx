import React from 'react'
import HeaderAdmin from '../adminHeader'
import {Outlet} from 'react-router-dom'
import FooterAdmin from '../AdminFooter'

const AdminLayout = () => {
  return (
    <div>
      <HeaderAdmin/>
      <Outlet/>
      <FooterAdmin/>
    </div>
  )
}

export default AdminLayout
