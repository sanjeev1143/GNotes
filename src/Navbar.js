import React, { useEffect, useState } from 'react'
import DescriptionIcon from '@mui/icons-material/Description';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Button from '@mui/material/Button';
import SideBar from './SideBar';
function Navbar() {
    return (
        <div className='navBar'>


            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid column justify-content-start">
                    <div class="dropdown">
                        <Button class="btn  " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <DehazeIcon htmlColor='#FFF' fontSize='large' />
                        </Button>
                        <SideBar />
                    </div>

                    <DescriptionIcon htmlColor='#FFF' fontSize='large' className='discIcon' />
                    <h1>Notes</h1>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
