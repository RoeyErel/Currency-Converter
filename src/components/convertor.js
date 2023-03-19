import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Convertor = () => {

    const usdGate = 3.67
    const eurGate = 3.88
    const NIStoEUR = (1/eurGate)
    const NIStoUSD = (1/usdGate)

    const [message, setMessage] = useState(0);
    const [convertCoin, setConvertCoin] = useState(0);
    const [isSelected, setIsSelected] = useState(0);
    const [coin1, setCoin1] = useState('USD');
    const [coin2, setCoin2] = useState('NIS');
    const [gate, setGate] = useState(usdGate);
    
    const chooseCoin = (num) =>{    
        setIsSelected(num)
        switch(num){
            case 0:
                setMessage(0)
                setConvertCoin(0)
                setCoin1('USD')
                setCoin2('NIS')
                setGate(usdGate)
                return;
            case 1:
                setMessage(0)
                setConvertCoin(0)
                setCoin1('NIS')
                setCoin2('USD')
                setGate(NIStoUSD)
                return;
            case 2:
                setMessage(0)
                setConvertCoin(0)
                setCoin1('EUR')
                setCoin2('NIS')
                setGate(eurGate)
                return;
            case 3:
                setMessage(0)
                setConvertCoin(0)
                setCoin1('NIS')
                setCoin2('EUR')
                setGate(NIStoEUR)
                return;
            default:
                setConvertCoin(0)
                setCoin1('USD')
                setCoin2('NIS')
                setGate(usdGate)
                return;
        }
    }

    const ConvertorCoin = (usd) =>{
        setMessage(usd)
        if(isNaN((usd*gate))){
            return 0
        }
        setConvertCoin((usd*gate))
    }
    const handleClick = () => {
        setMessage('');
    }

    return (
        <div>
            <div id="coins-selector-container" className="flex items-start justify-center my-4">
                <button className={isSelected === 0 ? "text-white mx-2 bg-gray-500/50 px-4 py-1 rounded-md" : "text-white mx-2 bg-gray-900 px-4 py-1 rounded-md"} onClick={() => chooseCoin(0)}>USD to NIS</button>
                <button className={isSelected === 1 ? "text-white mx-2 bg-gray-500/50 px-4 py-1 rounded-md" : "text-white mx-2 bg-gray-900 px-4 py-1 rounded-md"} onClick={() => chooseCoin(1)}>NIS to USD</button>
                <button className={isSelected === 2 ? "text-white mx-2 bg-gray-500/50 px-4 py-1 rounded-md" : "text-white mx-2 bg-gray-900 px-4 py-1 rounded-md"} onClick={() => chooseCoin(2)}>EUR to NIS</button>
                <button className={isSelected === 3 ? "text-white mx-2 bg-gray-500/50 px-4 py-1 rounded-md" : "text-white mx-2 bg-gray-900 px-4 py-1 rounded-md"} onClick={() => chooseCoin(3)}>NIS to EUR</button>
            </div>
            <div id='' className='flex flex-col justify-center items-center my-8'>
                <div className='flex flex-row justify-center my-2 w-full'>
                    <p className='text-white px-4 mx-8 font-thin text-[35px] w-[70px]'>{coin1}</p>
                    <input className='px-2 w-[200px] bg-transparent border-b-2 border-sky-400 text-white outline-0 text-[30px] text-center' value={message} 
                            onChange={(e) => {ConvertorCoin(e.target.value,e)}} onClick={e => handleClick()}/>
                </div>
                <div id='' className='flex flex-row justify-center items-end my-2 w-full'>
                    <p className='text-white px-4 mx-8 font-thin w-[70px] text-[35px]'>{coin2}</p>
                    <input className='text-white px-2 w-[200px] bg-transparent border-b-2 border-sky-400 outline-0 text-[30px] text-center' value={convertCoin} disabled/>
                </div>
            </div>
            <div>
            </div>
        </div>
  )
}

export default Convertor