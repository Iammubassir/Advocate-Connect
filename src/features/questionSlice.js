import { createSlice } from '@reduxjs/toolkit';

export const questionSlice = createSlice({
  name: 'question',
  initialState: {
      questionId:null,
    questionName: null,
    category:null,      //changed for specification
  },
  reducers: {
    setQuestionInfo: (state,action) =>{
        state.questionId =action.payload.questionId
        state.questionName =action.payload.questionName
        state.category =action.payload.category       //changed for specification
    }
  },
});

export const {setQuestionInfo} = questionSlice.actions;

export const selectQuestionId = state => state.question.questionId;
export const selectQuestionName = state => state.question.questionName;
export const selectCategory = state => state.question.category;           //changed for specification

export default questionSlice.reducer;
