import './index.css'

import img1 from '../../../../assets/suggestions/badvibesmemes 1.svg'
import img2 from '../../../../assets/suggestions/chibirdart 1.svg'
import img3 from '../../../../assets/suggestions/razoesparaacreditar 1.svg'
import img4 from '../../../../assets/suggestions/adorableanimals 1.svg'
import img5 from '../../../../assets/suggestions/smallcutecats 1.svg'
import { Suggestion } from './components/suggestion'

export const Suggestions = () => {
    const suggestions = [
        { title: 'bad.vibes.memes', subtitle: 'Segue voçê', imageUrl: img1 },
        { title: 'chibirdart', subtitle: 'Segue voçê', imageUrl: img2 },
        { title: 'razoesparaacreditar', subtitle: 'Novo no Instagram', imageUrl: img3 },
        { title: 'adorable_animals', subtitle: 'Segue voçê', imageUrl: img4 },
        { title: 'smallcutecats', subtitle: 'Segue voçê', imageUrl: img5 },
    ]


    return (
        <section className="suggestions">
            <header>
                <span>Sugestões para voçê</span>
                <a href="">Ver tudo</a>
            </header>
            <article className="profiles">
                {suggestions.map((suggestion, index) => (
                    <Suggestion suggestion={suggestion} key={index + 1} />
                ))}
            </article>
        </section>
    )
}