import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    grades: []
  },

  getters: {
    totalNumberOfStudentsAllowed(state) {
      return state.grades.reduce((accumulator, grade) => {
        accumulator += grade.cupos
        return accumulator
      }, 0)
    },
    totalNumberOfStudentsEnrolled(state) {
      return state.grades.reduce((accumulator, grade) => {
        accumulator += grade.inscritos
        return accumulator
      }, 0)
    },
    totalNumberOfSeatsRemaining(state) {
      return state.grades.reduce((accumulator, grade) => {
        accumulator += grade.cupos - grade.inscritos
        return accumulator
      }, 0)
    },
    cantidadTotalCursosTerminados(state) {
      return state.grades.filter((grade) => grade.estado).length
    },
    cantidadTotalCursosActivos(state) {
      return state.grades.filter((grade) => !grade.estado).length
    }
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
