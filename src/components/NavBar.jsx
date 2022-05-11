import React from 'react'
import CartWidget from './CartWidget';
import imgLogo from '../assets/img/logo.png';
function NavBar() {
  return (
    <header class="text-gray-600 body-font">
  <div class=" bg-gray-300 container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img width="100" src={imgLogo} alt="Logo" />
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">Coronas</a>
      <a class="mr-5 hover:text-gray-900">Provisionales</a>
      <a class="mr-5 hover:text-gray-900">Protesis dentales</a>
     
    </nav>
    <div>
    <CartWidget/>
    </div>
    </div>
    </header>

  )
}

export default NavBar