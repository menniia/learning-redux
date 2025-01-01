const Comment = ({ comment }) => {
    const { id, text } = comment;
    return (
        <li key={id}>
            <span>{text}</span>
        </li>
    )
};

export default Comment;