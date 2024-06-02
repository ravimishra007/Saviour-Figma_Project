import tokenImage from '../assets/Hero-image-4(1).png'
import '../styles/TokenOmics.css'

const TokenOmics = () => {
  return (
    <div className="tokenomics">
      <h1 className='text-[44px] font-herofont text-[#ED0137] text-center p-[64px]'>TOKENOMICS</h1>
      <div className='flex'>
        <div>
          <div className='w-[244px] h-[70px] bg-[#ED0137] flex justify-center items-center ml-[168px] rounded-[20px] mb-[-35px] token-details'>
            <p className='text-[18px] font-herofont text-white text-center'>TOKEN DETAILS</p>
          </div>
          <div className=' border-[3px] border-red-800 rounded-2xl w-[412px] h-[306px] ml-[90px] p-5 border-box'>
            <table className='token-table mt-[42px] ml-[25px]'>
              <tbody>
                <tr>
                  <td className='text-white font-saviour text-[20px]'>Name</td>
                  <td className='text-[#DF180A] font-saviour text-[20px]'>Saviour</td>
                </tr>
                <tr>
                  <td className='text-white font-saviour text-[20px]'>Symbol</td>
                  <td className='text-[#DF180A] font-saviour text-[20px]'>SVR</td>
                </tr>
                <tr>
                  <td className='text-white font-saviour text-[20px]'>Total Supply</td>
                  <td className='text-[#DF180A] font-saviour text-[20px]'>1000 Trillion</td>
                </tr>
                <tr>
                  <td className='text-white font-saviour text-[20px]'>Decimals</td>
                  <td className='text-[#DF180A] font-saviour text-[20px]'>18</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <img src={tokenImage} className='ml-[41px]' />
      </div>
    </div>
  );
}

export { TokenOmics };
