import './index.css'

import postImg1 from '../../assets/posts/gato-telefone 1.png'
import postImg2 from '../../assets/posts/dog 1.png'
import avatarImg1 from '../../assets/stories/meowed 1.svg'
import avatarImg2 from '../../assets/stories/barked 1.svg'
import avatarImg3 from '../../assets/stories/respondeai 1.svg'
import videoMp4 from '../../assets/video.mp4'
import videoOgg from '../../assets/video.ogg'
import { Post } from './components/post'


export const Posts = () => {
    const posts = [
        {
            name: 'meowed',
            avatarUrl: avatarImg1,
            content: { img: postImg1 },
            like: {
                avatar: avatarImg3,
                last: 'respondeai',
                others: 101.523
            }
        },
        {
            name: 'barked',
            avatarUrl: avatarImg2,
            content: { img: postImg2 },
            like: {
                avatar: avatarImg3,
                last: 'adorable_animals',
                others: 99.159
            }
        },
        {
            name: 'meowed',
            avatarUrl: avatarImg1,
            content: { img: postImg1 },
            like: {
                avatar: avatarImg3,
                last: 'respondeai',
                others: 101.523
            }
        },
        {
            name: 'meowed',
            avatarUrl: avatarImg1,
            content: {
                img: '',
                video: [videoMp4, videoOgg]
            }, like: {
                avatar: avatarImg3,
                last: 'respondeai',
                others: 101.523
            }
        },
    ]

    return (
        <article className="posts">
            {posts.map((post, index) => {
                return (
                    <Post post={post} key={index + 1} />
                )
            })}
        </article >
    )
}

