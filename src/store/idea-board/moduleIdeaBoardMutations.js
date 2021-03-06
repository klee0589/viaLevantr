/*=========================================================================================
  File Name: moduleTodoMutations.js
  Description: Todo Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
  SET_TODO_SEARCH_QUERY (state, query) {
    state.todoSearchQuery = query
  },
  UPDATE_TODO_FILTER (state, filter) {
    state.todoFilter = filter
  },
  
  SET_IDEAS (state, ideas) {
    if (state.ideas.find(idea => idea.title === ideas.title)) {
      return
    }
    state.ideas.unshift(ideas)
  },
  // API
  SET_TAGS (state, tags) {
    state.taskTags = tags
  },
  ADD_IDEA (state, idea) {
    state.ideas.unshift(idea)
  },
  UPDATE_TASK (state, task) {
    const taskIndex = state.tasks.findIndex((t) => t.id === task.id)
    Object.assign(state.tasks[taskIndex], task)
  },
  REMOVE_IDEA (state, ideaId) {
    const IdeaIndex = state.ideas.findIndex((p) => p.id === ideaId)
    state.ideas.splice(IdeaIndex, 1)
  }
}
