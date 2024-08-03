import './style.css'

const NavLogo =()=>{
    return(
        <>
            <h1>Logo</h1>            
        </>
    )
}

const HeaderComponent =()=>{ 
return(
    <div className='header'>
        <NavLogo/>
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
    </div>
)
}

export default HeaderComponent