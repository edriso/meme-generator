import logo from '../assets/images/logo.png';

export default function Header() {
  return (
    <header className='header'>
      <img src={logo} alt='Troll Face' />
      <h1>Meme Generator</h1>
    </header>
  );
}
