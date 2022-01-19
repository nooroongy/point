import '../../css/UI/button.css'

const Button = ({children,icon,event}) =>{
    return (
        <button 
        onClick={event}
        className={'button ' + (icon ? 'font-icon' :'') }>{children}</button>
    )
}

export default Button;