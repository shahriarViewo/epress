'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Breadcrumbs = () => {
  const paths = usePathname()
  const pathNames = paths.split('/').filter( path => path )

  return (
    <nav aria-label="breadcrumb">
      <ul className="flex items-center space-x-2 text-gray-500">
        
        {/* 1. Home Link (Always visible) */}
        <li className="hover:text-gray-800">
          <Link href={'/'}>Home</Link>
        </li>

        {/* 2. Map over path segments */}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`
          const itemLink = link[0].toUpperCase() + link.slice(1, link.length) // Capitalize
          
          // Separator
          return (
            <React.Fragment key={index}>
              <span className="mx-2">{'>'}</span>
              
              <li className={index === pathNames.length - 1 ? "font-bold text-black" : "hover:text-gray-800"}>
                <Link href={href}>{itemLink.replace(/-/g, ' ')}</Link>
              </li>
            </React.Fragment>
          )
        })}
      </ul>
    </nav>
  )
}

export default Breadcrumbs