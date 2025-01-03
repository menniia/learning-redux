import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { creatingCommentIsPending, postCommentForArticleId } from "../features/comments/commentsSlice";

const CommentForm = ({ articleId }) => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState("");
    const isCreatePending = useSelector(creatingCommentIsPending);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(postCommentForArticleId({
            articleId: articleId,
            comment: comment
        }))
        setComment("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="comment">Add Comment</label>
            <div>
                <input
                    type="text"
                    value={comment}
                    id="comment"
                    onChange={(e) => setComment(e.currentTarget.value)}
                />
                <button disabled={isCreatePending}>Submit</button>
            </div>
        </form>
    )
}

export default CommentForm;