import React from 'react'
import "./header.css"
import Tooltip from '@mui/material/Tooltip';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import SearchIcon from '@mui/icons-material/Search';
import { Link, NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

export default function Header() {
   return (
      <div className='header'>
         <div className='logo'> </div>
         <div className='options'>
            <NavLink className='header-h3' to="/">
               <Tooltip title="home " arrow>
                  <HomeIcon>arrow</HomeIcon>
               </Tooltip>
            </NavLink>
            <NavLink className='header-h3' to="/photo">
               <Tooltip title="Get from photo " arrow>
                  <FileDownloadIcon>arrow</FileDownloadIcon>
               </Tooltip>
            </NavLink>
            <NavLink className='header-h3' to="/keyword">
               <Tooltip title="Search with keyword " arrow>
                  <SearchIcon>arrow</SearchIcon>
               </Tooltip>
            </NavLink>
            <NavLink className='header-h3' to="/random">
               Random Quotes
            </NavLink>
         </div>
      </div>
   )
}
