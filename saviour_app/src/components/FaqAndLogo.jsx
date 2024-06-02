import Talvar from '../assets/FAQ-image.png';

const FAQ = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#0A0A0A] p-8">
      <img src={Talvar} className="object-cover h-[503px] w-[503px] mx-auto lg:mx-0 lg:mr-8 lg:h-auto lg:w-auto inline-block ml-[11px] transition-transform transform-gpu hover:scale-110" alt="Illustration" />
      <div className="lg:w-2/3 w-full">
        <h1 className="text-[44px] font-herofont text-[#ED0137] text-center mb-8">FAQ</h1>
        <div className="space-y-4 p-4 lg:ml-[94px]">
          <ul className="space-y-4">
            <li className="bg-[#171717] border border-[#ED0137] rounded-lg overflow-hidden">
              <input type="checkbox" id="first" className="hidden peer" />
              <label htmlFor="first" className="flex justify-between items-center p-4 cursor-pointer text-white peer-checked:bg-[#ED0137] peer-checked:text-white transition-colors duration-300">
                <span className="font-bold text-lg font-herofont">1</span>
                <span className="flex-1 pl-4 font-herofont text-center">Why choose Savior :?</span>
                <span className="transition-transform duration-300 transform peer-checked:rotate-180">▼</span>
              </label>
              <div className="max-h-0 peer-checked:max-h-40 bg-black bg-opacity-50 transition-all duration-500 ease-in-out overflow-hidden">
                <p className="p-4 text-[15px] text-white font-saviour">After the IDO concludes, you can claim the tokens on our official website.</p>
              </div>
            </li>
            <li className="bg-[#171717] border border-[#ED0137] rounded-lg overflow-hidden">
              <input type="checkbox" id="second" className="hidden peer" />
              <label htmlFor="second" className="flex justify-between items-center p-4 cursor-pointer text-white peer-checked:bg-[#ED0137] peer-checked:text-white transition-colors duration-300">
                <span className="font-bold text-lg font-herofont">2</span>
                <span className="flex-1 pl-4 font-herofont text-center">Why is the IDO duration so long?</span>
                <span className="transition-transform duration-300 transform peer-checked:rotate-180">▼</span>
              </label>
              <div className="max-h-0 peer-checked:max-h-40 bg-black bg-opacity-50 transition-all duration-500 ease-in-out overflow-hidden">
                <p className="p-4 text-white">After the IDO concludes, you can claim the tokens on our official website.</p>
              </div>
            </li>
            <li className="bg-[#171717] border border-[#ED0137] rounded-lg overflow-hidden">
              <input type="checkbox" id="third" className="hidden peer" />
              <label htmlFor="third" className="flex justify-between items-center p-4 cursor-pointer text-white peer-checked:bg-[#ED0137] peer-checked:text-white transition-colors duration-300">
                <span className="font-bold text-lg font-herofont">3</span>
                <span className="flex-1 pl-4 font-herofont text-center">When will trading go live?</span>
                <span className="transition-transform duration-300 transform peer-checked:rotate-180">▼</span>
              </label>
              <div className="max-h-0 peer-checked:max-h-40 bg-black bg-opacity-50 transition-all duration-500 ease-in-out overflow-hidden">
                <p className="p-4 text-white">After the IDO concludes, you can claim the tokens on our official website.</p>
              </div>
            </li>
            <li className="bg-[#171717] border border-[#ED0137] rounded-lg overflow-hidden">
              <input type="checkbox" id="fourth" className="hidden peer" />
              <label htmlFor="fourth" className="flex justify-between items-center p-4 cursor-pointer text-white peer-checked:bg-[#ED0137] peer-checked:text-white transition-colors duration-300">
                <span className="font-bold text-lg font-herofont">4</span>
                <span className="flex-1 pl-4 font-herofont text-center">When can we claim the tokens?</span>
                <span className="transition-transform duration-300 transform peer-checked:rotate-180">▼</span>
              </label>
              <div className="max-h-0 peer-checked:max-h-40 bg-black bg-opacity-50 transition-all duration-500 ease-in-out overflow-hidden">
                <p className="p-4 text-white">After the IDO concludes, you can claim the tokens on our official website.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export { FAQ };
