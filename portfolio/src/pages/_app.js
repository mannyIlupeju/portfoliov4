import {useState, useEffect} from 'react'
import Cursor from '@/components/Cursor';
import ContextProvider from '@/context/Context';
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [])

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save theme preference
  }

  return(
    <>
    <ContextProvider>
    <Cursor/>
    <Component {...pageProps} />
    </ContextProvider>
    </>
  )
}
