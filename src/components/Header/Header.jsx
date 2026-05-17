import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  // return (
  //   <header className='py-3 shadow bg-gray-500'>
  //     <Container>
  //       <nav className='flex'>
  //         <div className='mr-4'>
  //           <Link to='/'>
  //             <Logo width='70px'   />

  //             </Link>
  //         </div>
  //         <ul className='flex ml-auto'>
  //           {navItems.map((item) => 
  //           item.active ? (
  //             <li key={item.name}>
  //               <button
  //               onClick={() => navigate(item.slug)}
  //               className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
  //               >{item.name}</button>
  //             </li>
  //           ) : null
  //           )}
  //           {authStatus && (
  //             <li>
  //               <LogoutBtn />
  //             </li>
  //           )}
  //         </ul>
  //       </nav>
  //       </Container>
  //   </header>
  // )


return (
  <header className="bg-[#0f172a] border-b border-slate-800">
    <Container>
      <nav className="flex items-center justify-between py-6">

        <Link to="/" className="text-2xl font-bold text-[#c7d2fe]">
          MegaBlog
        </Link>

        <ul className="flex items-center space-x-6">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="text-slate-300 hover:text-[#99f6e4] transition duration-200"
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}

          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>

      </nav>
    </Container>
  </header>
)


}

export default Header