export const actionTypes = {
  INCREASE_SKILL_HTML: 'increase-skill/HTML',
  INCREASE_SKILL_CSS: 'increase-skill/CSS',
  INCREASE_SKILL_JS: 'increase-skill/JS',
}

export function increaseSkillHTML() {
  return {
    type: actionTypes.INCREASE_SKILL_HTML,
  };
}

export function increaseSkillCSS() {
  return {
    type: actionTypes.INCREASE_SKILL_CSS,
  };
}


export function increaseSkillJS() {
  return {
    type: actionTypes.INCREASE_SKILL_JS,
  };
}
