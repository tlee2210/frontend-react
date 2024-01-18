import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  SelectOption: [],
  ArticleData: [],
  item:{},
};

const ArticleSlice = createSlice({
  name: "ArticleSlice",
  initialState,
  reducers: {
    setArticleData(state, action){
      state.ArticleData = action.payload;
    },
    setSelectOption(state, action) {
      state.SelectOption = action.payload;
    },
    removeArticle(state, action) {
      state.ArticleData = state.ArticleData.filter(Article => Article.id !== action.payload);
    },
    setEdit(state, action){
      state.item = action.payload;
    }
  },
});

export const {
  setArticleData,
  setSelectOption,
  removeArticle,
  setEdit,
} = ArticleSlice.actions;

export default ArticleSlice.reducer;
