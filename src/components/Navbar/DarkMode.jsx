import React from 'react'
import lightb from '../../assets/websites/lightbtn.png';
import darkb from '../../assets/websites/darkbtn.png';

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  const element = document.documentElement; // html element 

  React.useEffect(()=> {
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme])

    return (
    <div className='relative'>
       <img src={lightb} alt=""  
       onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')} 
       className={`w-12 cursor-pointer drop-shadow [1px_1px_1px_rgb(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`} 
       
       />
       <img src={darkb} alt="DarkBtn" 
       onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')} 
       className={`w-12 cursor-pointer drop-shadow [1px_1px_1px_rgb(0,0,0,0.1)] transition-all duration-300 `}
       
       />
    </div>
  )
}

export default DarkMode
