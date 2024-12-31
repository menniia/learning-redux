import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadCommentsForArticleId = createAsyncThunk(
    "comments/loadCommentsForArticleId",
    async (articleId) => {
        const data = await fetch(`api/articles/${articleId}/comments`);
        const json = await data.json();
        return json;
    }
)

export const commentSlice = createSlice({
    name: "comments",
    initialState: {
        byArticleId: {},
        isLoadingComments: false,
        failedToLoadComments: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCommentsForArticleId.pending, (state) => {
                state.isLoadingComments = true;
                state.failedToLoadComments = false;
            })
            .addCase(loadCommentsForArticleId.fulfilled, (state, action) => {
                state.isLoadingComments = false;
                state.failedToLoadComments = false;
                const { articleId, comments } = action.payload;
                state.byArticleId[articleId] = comments;
            })
            .addCase(loadCommentsForArticleId.rejected, (state) => {
                state.isLoadingComments = false;
                state.failedToLoadComments = true;
            })
    }
})

export const selectComments = state => state.comments.byArticleId;
export const isLoadingComments = state => state.comments.isLoadingComments;
export const creatingCommentIsPending = state => state.comments.creatingCommentIsPending;

export default commentSlice.reducer;