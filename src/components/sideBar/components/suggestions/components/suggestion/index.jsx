import './index.css'

export const Suggestion = ({ suggestion }) => (
    <article className="profile">
        <div className="profile-info">
            <img src={suggestion.imageUrl} alt={suggestion.title} />
            <div>
                <h3>{suggestion.title}</h3>
                <h4>{suggestion.subtitle}</h4>
            </div>
        </div>
        <a href="">Seguir</a>
    </article>
)