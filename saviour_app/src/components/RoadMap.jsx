import { useEffect } from 'react';
import '../styles/Roadmap.css';

const RoadMap = () => {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.card');

      cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight * 0.75) {
          card.classList.add('animate');
        } else {
          card.classList.remove('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="roadmap">
      <h1 className='text-[44px] font-herofont text-[#ED0137] text-center p-[64px]'>ROAD MAP</h1>
      <div className='flex flex-wrap justify-center items-center gap-[70px]'>
        <div className="card">
          <div className="bg-[url('./assets/savior_card_1.png')] h-[349px] w-[237px] bg-cover border-2 border-red-800 rounded-2xl">
            <h1 className='text-white mt-[200px] ml-[23px] font-semibold font-connectwallet'>Phase 1</h1>
            <p className='text-gray-400 ml-[23px] mt-[13px] font-connectwallet'>Technical Readiness <br /> and Smart Contract <br /> Audit</p>
          </div>
        </div>
        <div className="card">
          <div className="bg-[url('./assets/savior_card_2.png')] h-[349px] w-[237px] bg-cover border-2 border-red-800 rounded-2xl">
            <h1 className='text-white mt-[227px] ml-[23px] font-semibold font-connectwallet'>Phase 2</h1>
            <p className='text-gray-400 ml-[23px] mt-[13px] font-connectwallet'>Increase Liquidity and Trading Volume</p>
          </div>
        </div>
        <div className="card">
          <div className="bg-[url('./assets/savior_card_3.png')] h-[349px] w-[237px] bg-cover border-2 border-red-800 rounded-2xl">
            <h1 className='text-white mt-[227px] ml-[23px] font-semibold font-connectwallet'>Phase 3</h1>
            <p className='text-gray-400 ml-[23px] mt-[13px] font-connectwallet'>Community Building and Marketing</p>
          </div>
        </div>
        <div className="card">
          <div className="bg-[url('./assets/savior_card_4.png')] h-[349px] w-[237px] bg-cover border-2 border-red-800 rounded-2xl">
            <h1 className='text-white mt-[227px] ml-[23px] font-semibold font-connectwallet'>Phase 4</h1>
            <p className='text-gray-400 ml-[23px] mt-[13px] font-connectwallet'>Ecosystem Expansion and Partnerships</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { RoadMap };
