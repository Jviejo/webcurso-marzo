import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Header } from './componentes/Header'
import { Footer } from './componentes/Footer'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Home from './componentes/Home'


function App() {

  return (
    <>
     <Home />
    </>
  )
}

export default App
