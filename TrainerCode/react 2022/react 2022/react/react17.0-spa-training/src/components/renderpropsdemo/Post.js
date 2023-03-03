import React from "react";
import Wrapper from "./Wrapper";
import Comment from "./Comment";

class Post extends React.Component {
    state = {
        current: null,
        link: null
    };
    getComments(id) {
        this.setState({
            current: id,
            link: `https://jsonplaceholder.typicode.com/comments/${id}`
        });
    }
    render() {
        return (
            <Wrapper
                link="https://jsonplaceholder.typicode.com/posts"
                render={({ data, error, isLoading }) => (
                    <div>
                        <h2>User's Post</h2>
                        {error && <p>{error.message}</p>}
                        {isLoading ? (
                            <h5>Loading....</h5>
                        ) : (
                            <ul>
                                {data.map(post => (
                                    <li key={post.id}>
                                        <div className="title">{post.title}</div>
                                        <div className="post">{post.body}</div>
                                        <div
                                            className="link"
                                            onClick={() => this.getComments(post.id)}
                                        >
                                            View Comment
                                        </div>
                                        {this.state.current === post.id && (
                                            <Comment link={this.state.link} />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            />
        );
    }
}

export default Post;
