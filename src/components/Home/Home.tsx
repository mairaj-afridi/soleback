import React,{useState} from 'react'
import ActivateCashback from './ActivateCashback';
import Error from './Error';

const Home = () => {

    const [isCashBack,setIsCashBack] = useState(true);
    const [isError,setIsError] = useState(false);


    return <>
    {isCashBack && <ActivateCashback  setState={()=>{setIsCashBack(false);setIsError(true);
    }}/>
    
    }

       {isError &&  <Error />}
    </>
    
}

export default Home