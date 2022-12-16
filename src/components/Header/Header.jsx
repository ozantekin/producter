import ProducterLogo from '../../assets/img/logo.svg'
import SearchIcon from '../../assets/icon/search.svg'
import ControlIcon from '../../assets/icon/controls.svg'
import FilterIcon from '../../assets/icon/filter.svg'
import PlusIcon from '../../assets/icon/plus.svg'

import './Header.scss'

export default function Header() {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='logo-container'>
          <div className='line-9'></div>
          <img src={ProducterLogo} alt='Prdoucter Logo' />
          <div className='line-6'></div>
        </div>
        <div className='search-container'>
          <nav className='search-navigation'>
            <ul>
              <li className='search-input'>
                <button>
                  <img src={SearchIcon} alt='Search Icon' />
                </button>
                <input type='text' placeholder='Search' />
              </li>
              <li className='control-button'>
                <button>
                  <img src={ControlIcon} alt='Control Icon' />
                </button>
              </li>
              <li className='filter-button'>
                <button>
                  <img src={FilterIcon} alt='Filter Icon' />
                </button>
              </li>
            </ul>
          </nav>
          <div className='search-plus'>
            <button>
              <img src={PlusIcon} alt='Plus Icon' />
            </button>
          </div>
          <div className='line-6'></div>
        </div>
      </div>
    </header>
  )
}
