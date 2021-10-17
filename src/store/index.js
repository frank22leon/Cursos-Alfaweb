import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    grades: []
  },
  mutations: {
    SET_CURRENT_USER(state, newUser) {
      state.currentUser = newUser
    },
    UNLOG_CURRENT_USER(state) {
      state.currentUser = null
    },
    SET_GRADES(state, newGrades) {
      state.grades = newGrades
    }
  },
  actions: {
    defineCurrentUser(context, user) {
      context.commit('SET_CURRENT_USER', user)
    },
    unlogCurrentUser(context, user) {
      context.commit('UNLOG_CURRENT_USER', user)
    },
    getGrades(context) {
      Firebase.firestore()
        .collection('cursos')
        .get()
        .then((collection) => {
          const grades = []
          collection.forEach((document) => {
            grades.push({ id: document.id, ...document.data() })
          })

          context.commit('SET_GRADES', grades)
        })
    }
  },

  modules: {}
})
