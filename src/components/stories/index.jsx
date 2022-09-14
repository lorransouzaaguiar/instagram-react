import './index.css'
import img1 from '../../assets/stories/9gag.svg'
import img2 from '../../assets/stories/meowed 1.svg'
import img3 from '../../assets/stories/barked 1.svg'
import img4 from '../../assets/stories/nathanwpylestrangeplanet 1.svg'
import img5 from '../../assets/stories/wawawiwacomicsa 1.svg'
import img6 from '../../assets/stories/respondeai 1.svg'
import img7 from '../../assets/stories/filomoderna 1.svg'
import img8 from '../../assets/stories/chevron-forward-circle 1.svg'
import { Story } from './components/story'

export const Stories = () => {
    const stories = [
        { name: '9gag', imgUrl: img1 },
        { name: 'meowed', imgUrl: img2 },
        { name: 'barked', imgUrl: img3 },
        { name: 'nathanwpyle', imgUrl: img4 },
        { name: 'wawawiwac...', imgUrl: img5 },
        { name: 'respondeai', imgUrl: img6 },
        { name: 'filomoderna', imgUrl: img7 }
    ]

    return (
        <section className="stories">
            {stories.map((story, index) => {
                return (
                    <Story story={story} key={index + 1} />
                )
            })}
            <img className="arrow-right" src={img8} />
        </section>
    )
}