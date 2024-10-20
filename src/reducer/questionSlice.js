import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../utils/questions";

const questionSlice = createSlice({
  name: "question",
  initialState: {
    question: "",
    questionId: "",
    questionResult: "",
  },
  reducers: {
    setQuestion: (state, action) => {
      state.question = action.payload.question; // Assurez-vous que `text` est la bonne clé
      state.questionId = action.payload.questionId; // Assurez-vous que `country` est la bonne clé (si vous utilisez un pays)
      state.result = action.payload.questionResult;
    },
  },
});

export const { setQuestion } = questionSlice.actions;
export default questionSlice.reducer;
