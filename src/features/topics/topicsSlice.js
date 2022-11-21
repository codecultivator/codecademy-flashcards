import {createSlice} from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = {
                 ...action.payload,
                 quizIds: []
            };
        },
        addTopicQuiz: (state, action) => {
            console.log(action);
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
        }
    }
});

const { actions } = topicsSlice;
export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addTopicQuiz } = actions;
export default topicsSlice.reducer;