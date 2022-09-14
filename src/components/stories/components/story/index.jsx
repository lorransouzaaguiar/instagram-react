export const Story = ({ story }) => (
    <article className="story-item">
        <figure className="avatar">
            <img src={story.imgUrl} alt={story.name} />
        </figure>
        <span>{story.name}</span>
    </article>
)