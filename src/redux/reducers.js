import { actionTypes } from './actions';
import { createStore, BertaDefaultStoreState } from './store';

const skillsReducer = (skillsState = BertaDefaultStoreState.skills, action) => {
  switch (action.type) {
    case actionTypes.INCREASE_SKILL_HTML:
      const htmlSkill = skillsState.html;

      return {
        ...skillsState,
        html: htmlSkill + 1,
      }

    case actionTypes.INCREASE_SKILL_CSS:
      const cssSkill = skillsState.css;

      return {
        ...skillsState,
        css: cssSkill + 1,
      }

    case actionTypes.INCREASE_SKILL_JS:
      const jsSkill = skillsState.js;

      return {
        ...skillsState,
        js: jsSkill + 1,
      }

    default:
      return skillsState;
  }
}

export const reducer = (state = BertaDefaultStoreState, action) => {
  return {
    skills: skillsReducer(state.skills, action),
  };
};
