import { Link } from 'react-router-dom';
import '../css/footer.css'

function Footer(){
    return <div className='footer-wrap'>
        <Link to='Test2'>
            <button className='footer-btn sub-color font-color font-icon'>account_circle</button>
        </Link>
        <Link to=''>
            <button className='footer-btn sub-color font-color font-icon'>home</button>
        </Link>
        <Link to='test'>
            <button className='footer-btn sub-color font-color font-icon'>favorite</button>
        </Link>
    </div>
}

export default Footer;