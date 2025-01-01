import { useDispatch, useSelector } from "react-redux";
import { isLoadingCurrentArticle, selectCurrentArticle } from "./currentArticleSlice";

const CurrentArticle = () => {
    const dispatch = useDispatch();
    const article = useSelector(selectCurrentArticle);
    const currentArticleIsLoading = useSelector(isLoadingCurrentArticle);

    if (currentArticleIsLoading) {
        return <div>Loading...</div>
    } else if (!article) {
        return null;
    }
    return (

    )
};

export default CurrentArticle;