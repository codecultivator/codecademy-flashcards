import {createSlice} from '@reduxjs/toolkit';
import { addTopicQuiz } from '../topics/topicsSlice';


export const createQuiz = (payload) => {
    return (dispatch) => {
      const topicQuiz = {
        quizId: payload.id,
        topicId: payload.topicId
      }
      
      const quiz = {...payload};
      dispatch(addTopicQuiz(topicQuiz));
      dispatch(addQuiz(quiz));
    };
};

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = {
                 ...action.payload
            };
        }
    }
});

const { actions } = quizzesSlice;
export const { addQuiz } = actions;
export default quizzesSlice.reducer;
export const selectQuizzes = (state) => state.quizzes.quizzes;