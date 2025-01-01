import { useState } from "react";
import { useDispatch } from "react-redux";

const CommentForm = ({ articleId }) => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState("");
    return (

    )
}

export default CommentForm;