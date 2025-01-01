const ArticleListItem = ({ article }) => {
    return (
        <button key={article.id}>
            <img src={article.image} />
            <div>
                <h3>{article.title}</h3>
                <p>{article.preview}</p>
            </div>
        </button>
    )
}

export default ArticleListItem;