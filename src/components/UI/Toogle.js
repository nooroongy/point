import { useState } from 'react';
import '../../css/UI/toogle.css'

const Toogle = ({value,event}) =>{
    const [on,setOn] = useState(value);

    function onClickToogle(){
        setOn(res=>!res);
        if(typeof event === 'function')
            event();
    }
    return (
        <span className={'toogle__wrap '+( on ? 'toogle__on' : '')} onClick={onClickToogle}>
            <span className='toogle__ball'></span>
        </span>
    )
}

export default Toogle;