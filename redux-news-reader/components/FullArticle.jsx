const FullArticle = ({ article }) => {
    return (
        <>
            <div>
                <img src={article.image} alt="" />
            </div>
            <div>
                <h1>{article.title}</h1>
                <div>{article.fullText}</div>
            </div>
        </>
    )
};

export default FullArticle;