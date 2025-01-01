import { useDispatch, useSelector } from "react-redux"
import { isLoading, loadAllPreviews, selectAllPreviews } from "./articlePreviewsSlice";
import { useEffect } from "react";
import { loadCurrentArticle } from "../currentArticle/currentArticleSlice";
import ArticleListItem from "../../components/ArticleListItem";

const ArticlePreviews = () => {
    const dispatch = useDispatch();
    const articlePreviews = useSelector(selectAllPreviews);
    const isLoadingPreviews = useSelector(isLoading);

    useEffect(() => {
        dispatch(loadAllPreviews())
    }, [dispatch]);

    if (isLoadingPreviews) {
        return <div>loading state</div>
    }
    return (
        <>
            <section>
                <h2>All Articles</h2>
                {articlePreviews.map((article) => (
                    <div key={article.id} onClick={(e) => dispatch(loadCurrentArticle(article.id))}>
                        <ArticleListItem article={article} />
                    </div>
                ))}
            </section>
        </>
    )
}

export default ArticlePreviews;