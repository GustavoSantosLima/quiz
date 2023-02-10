import data from "../data/db.json";

export const initialState = {
  score: 0,
  page: "HOME",
  category: null,
  questions: [],
  categories: [],
  indexQuestion: 0,
  selectedQuestion: false
};

export default function GameReducer(state, action) {
  switch (action.type) {
    case "GAME_START":
      return {
        ...state,
        page: "CATEGORY",
        categories: [...new Set(data.questions.map(item => item.category))]
      };
    case "GAME_END":
      return { ...state, page: "SCORE" };
    case "NEXT_QUESTION":
      return {
        ...state,
        selectedQuestion: false,
        indexQuestion: state.indexQuestion + 1
      };
    case "GAME_RESTART":
      return { ...initialState };
    case "SELECT_CATEGORY":
      const questionsRandom = data.questions
        .filter(i => i.category === action.payload)
        .sort(() => Math.random() - 0.5);

      return {
        ...state,
        page: "QUESTIONS",
        category: action.payload,
        questions: questionsRandom.map(item => ({
          ...item,
          alternatives: item.alternatives.sort(() => Math.random() - 0.5)
        }))
      };
    case "SELECT_ALTERNATIVE":
      const newState = { ...state };
      if (!newState.selectedQuestion) {
        newState.selectedQuestion = action.payload;

        if (
          newState.questions[newState.indexQuestion].answer === action.payload
        ) {
          newState.score = newState.score + 1;
        }
      }

      return { ...newState };
    default:
      return state;
  }
}
