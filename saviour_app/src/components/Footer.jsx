import logo from '../assets/savior-logo.png';
import twitter from '../assets/twitter-icon.png';
import telegram from '../assets/telegram-icon.png';
import mail from '../assets/mail-icon.png';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className='h-[428px] bg-gradient-to-b from-[#030405] to-[#120101] flex flex-col items-center'>
      <div className='flex flex-col items-center w-[80%] lg:w-[200px] h-[221px] mt-[50px] lg:mt-[0]'>
        <img src={logo} className='w-[150px] h-[150px]' />
        <h1 className='font-selectwallet text-center font-bold text-[24px] mt-[-15px] gradient-text'>
          SITE MAP
        </h1>
      </div>

      <div className='mt-[20px] lg:mt-[30px]'>
        <ul className='flex flex-wrap justify-center lg:justify-start space-x-4 lg:space-x-8 text-white text-[13px] font-semibold font-selectwallet'>
          <li>Home</li>
          <li>IDO</li>
          <li>Tokenomics</li>
          <li>Road Map</li>
          <li>Whitepaper</li>
          <li>Pledge</li>
          <li>NFT</li>
          <li>Games</li>
        </ul>
      </div>

      <div className='flex justify-center items-center gap-6 mt-[30px] lg:mt-[50px]'>
        <img src={twitter} alt='Twitter' className='w-[23px] h-[19px]' />
        <img src={telegram} alt='Telegram' className='w-[23px] h-[19px]' />
        <img src={mail} alt='Mail' className='w-[23px] h-[19px]' />
      </div>
    </div>
  );
}

export { Footer };
