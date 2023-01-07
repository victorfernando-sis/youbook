import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link href='/'><h2 className='logo'>Youbook</h2></Link>
        </nav>
    )
}

export default Navbar