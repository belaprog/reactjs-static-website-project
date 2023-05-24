import airbnbLogo from '../assets/airbnb-logo.png';

export default function Navbar() {
  return (
    <nav>
      <img src={airbnbLogo} alt='Logo airbnb' className='nav--logo' />
    </nav>
  );
}
