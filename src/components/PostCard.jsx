import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  // return (
  //   <Link to={`/post/${$id}`}>
  //       <div className='w-full bg-gray-100 rounded-xl p-4'>
  //           <div className='w-full justify-center mb-4'>
  //               <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
  //               className='rounded-xl' />

  //           </div>
  //           <h2
  //           className='text-xl font-bold'
  //           >{title}</h2>
  //       </div>
  //   </Link>
  // )

return (
  <Link to={`/post/${$id}`}>
    <div className="bg-[#1e293b] border border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
      
      <div className="h-56 overflow-hidden relative">
        <img
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Teal Side Accent */}
        <div className="absolute left-0 top-0 w-6 h-full bg-[#99f6e4] opacity-30"></div>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold text-[#c7d2fe] hover:text-[#99f6e4] transition">
          {title}
        </h2>
      </div>

    </div>
  </Link>
)


}


export default PostCard