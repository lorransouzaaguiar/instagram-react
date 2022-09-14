export const Post = ({ post }) => (
    <article className="post">
        <header className="post-header">
            <div className="profile-info">
                <img src={post.avatarUrl} alt={post.name} />
                <h3>meowed</h3>
            </div>
            <ion-icon className="profile-options" name="ellipsis-horizontal-outline"></ion-icon>
        </header>
        {post.content.img.length ?
            <img className="post-image" src={post.content.img} alt={post.name} />
            : <video className="post-image" width="612" height="612" autoplay="autoplay" controls >
                <source src={post.content.video[0]} type="video/mp4" />
                <source src={post.content.video[1]} type="video/ogg" />
            </video>
        }
        <footer className="post-footer">
            <div className="post-about">
                <div className="icons-wrapper">
                    <ion-icon className="icon" name="heart-outline"></ion-icon>
                    <ion-icon className="icon" name="chatbubble-outline"></ion-icon>
                    <ion-icon className="icon" name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon className="icon" name="bookmark-outline"></ion-icon>
            </div>
            <div className="last-likes">
                <img src={post.like.avatar} alt={post.name} />
                <p className="info">Curtido por <strong >{post.like.last}</strong> e <strong >outras {post.like.others} pessoas</strong> </p>
            </div>
        </footer>
    </article>
)