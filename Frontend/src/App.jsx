import {RouterProvider} from 'react-router'
import {router} from './app.routes'
import './features/shared/styles/global.scss'
import { AuthProvider } from './features/auth/auth.context'
import { useState } from 'react'
import { SongProvider } from './features/home/song.context'


function App() {

  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);

  return (
    <AuthProvider>
      <SongProvider>
        <RouterProvider router={router} />
      </SongProvider>
    </AuthProvider>
  )
}

export default App
