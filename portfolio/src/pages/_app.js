import {useState, useEffect} from 'react'
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('corporate');

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

  return <Component {...pageProps} />
}
