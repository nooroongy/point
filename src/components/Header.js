import { connect } from 'react-redux'
import '../css/header.css'
import { FB_AUTH } from './_firebase'

const Header = ({user,isLogedIn,point}) => {
    function onClickSignBtn(){
        FB_AUTH.signOut()
    }

    return (<span className='header-wrap'>
        point:{point.point}
        <button onClick={onClickSignBtn} hidden></button>
        {/* {!isLogedIn ? <></> : <button onClick={onClickSignBtn} className='header-signout font-icon'>logout</button>}
        <span className='header-nickname'>{user ? user.displayName:''} 의 수면생활</span> */}
    </span>)
}

function mapStateToProps(state, props) {
    const {user,point} = state;
    return {user,point}
}
export default connect(mapStateToProps)(Header);