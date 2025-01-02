import Comment from "./Comment";

const CommentList = ({ comments }) => {
    if (comments) {
        return (
            <ul>
                {comments.map((comments) => (
                    <Comment comment={comments} />
                ))}
            </ul>
        )
    }
    return null;
}

export default CommentList;