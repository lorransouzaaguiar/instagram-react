import img from '../../../../assets/suggestions/catanacomics 1.svg'
import './index.css'

export const User = (props) => {
    return (
        <header className="side-bar-header">
            <img src={img} alt="user" />
            <div className="profile-wrapper">
                <span>{props.title}</span>
                <span>{props.subtitle}</span>
            </div>
        </header>
    )
}