import { actionTypes } from './actions';
import { createStore, BertaDefaultStoreState } from './store';

const skillsHiddenReducer = (skillsHiddenState = BertaDefaultStoreState.skillsHidden, action) => {
  switch (action.type) {
    case actionTypes.SHOW_SKILLS:
      return false;

    case actionTypes.HIDE_SKILLS:
      return true;

    default:
      return skillsHiddenState;
  }
}

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
    skillsHidden: skillsHiddenReducer(state.skillsHidden, action),
    skills: skillsReducer(state.skills, action),
  };
};
