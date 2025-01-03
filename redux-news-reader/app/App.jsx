import ArticlePreviews from '../features/articlePreviews/ArticlePreviews'
import Comments from '../features/comments/Comments'
import CurrentArticle from '../features/currentArticle/CurrentArticle'
import './App.css'

function App() {

  return (
    <div>
      <CurrentArticle />
      <Comments />
      <ArticlePreviews />
    </div>
  )
}

export default App
