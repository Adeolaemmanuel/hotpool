// ** Dropdowns Imports
import IntlDropdown from './IntlDropdown'
import CartDropdown from './CartDropdown'
import UserDropdown from './UserDropdown'
import NavbarSearch from './NavbarSearch'
import NotificationDropdown from './NotificationDropdown'

// ** Third Party Components
import { Sun, Moon } from 'react-feather'

// ** Reactstrap Imports
import { Input, Label, NavItem, NavLink } from 'reactstrap'

const NavbarUser = props => {
  // ** Props
  const { skin, setSkin } = props

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === 'dark') {
      return <Sun className='ficon' onClick={() => setSkin('light')} />
    } else {
      return <Moon className='ficon' onClick={() => setSkin('dark')} />
    }
  }

  return (
    <ul className='nav navbar-nav align-items-center ms-auto'>
      {/* <IntlDropdown /> */}
      <div className='d-flex flex-row-reverse align-items-center mx-2'>
        <Label for='switch-success' className='form-check-label mb-0'>
          Live Mode
        </Label>
        <div className='form-switch form-check-success'>
          <Input type='switch' id='switch-success' name='success' defaultChecked />
        </div>
      </div>
      <NavItem className='d-none d-lg-block'>
        <NavLink className='nav-link-style'>
          <ThemeToggler />
        </NavLink>
      </NavItem>
      {/* <NavbarSearch /> */}
      {/* <CartDropdown /> */}
      {/* <NotificationDropdown /> */}
      <UserDropdown />
    </ul>
  )
}
export default NavbarUser
