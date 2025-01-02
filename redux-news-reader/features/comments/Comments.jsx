import { useDispatch, useSelector } from "react-redux"
import { selectCurrentArticle } from "../currentArticle/currentArticleSlice";
import { isLoadingComments, loadCommentsForArticleId, selectComments } from "./commentsSlice";
import { useEffect } from "react";
import CommentList from "../../components/CommentList";
import CommentForm from "../../components/CommentForm";

const Comments = () => {
    const dispatch = useDispatch();
    const article = useSelector(selectCurrentArticle);
    const comments = useSelector(selectComments);
    const commentsAreLoading = useSelector(isLoadingComments);
    const commentsForArticleId = article ? comments[article.id] : [];

    useEffect(() => {
        dispatch(loadCommentsForArticleId(article.id))
    }, [article, dispatch]);

    if (commentsAreLoading) return <div>Loading Comments...</div>
    if (!article) return null

    return (
        <div>
            <h3>Comments</h3>
            <CommentList comments={commentsForArticleId} />
            <CommentForm articleId={article.id} />
        </div>
    )
}

export default Comments;