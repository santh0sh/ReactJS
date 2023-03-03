import React from "react";
import Wrapper from "./Wrapper";
/*
By default, React will always re-render the component each time there is a 
change in state or props value. A Pure Component is a component that 
performs a check on the value of React props before deciding whether 
to re-render the component or not. 

*/
class Comment extends React.PureComponent {
    render() {
        return (
            <Wrapper
                link={this.props.link}
                render={({ data, error, isLoading }) => (
                    <div>
                        <h4>Comment</h4>
                        {error && <p>{error.message}</p>}
                        {isLoading ? (
                            <h5>Loading....</h5>
                        ) : (
                            <div>
                                <p className="comment">{data.body}</p>
                                <div>
                                    <span className="by">Commented By:</span>
                                    <span className="name">{data.name}</span>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            />
        );
    }
}

export default Comment;
