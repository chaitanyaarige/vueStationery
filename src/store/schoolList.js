export default ({
  namespaced: true,
  state: {
    schools: [],
  },
  getters: {
    schools: state => state.schools,
  },
  actions: {
    getSchools({commit, state, dispatch}){
      // const allParams = Object.assign(params || {}, lang)
      return dispatch('performRequest', {path: 'schools', method: 'get'}, { root: true })
      .then(response => {
        commit('assignSchoolsData', response)
      })
      .catch((error) => {
        console.log(error);
      });
    }
  },
  mutations: {
    assignSchoolsData(state, data) {
      state.schools = data
    },
    editSchool(state, data) {
      let uniqueId = state.schools.findIndex(item => item.id === data.id)
      state.schools[uniqueId].name = data.name
      state.schools[uniqueId].address = data.address
      state.schools[uniqueId].city = data.city
      state.schools[uniqueId].phone = data.phone
    },
    addSchool(state, data) {
      state.schools.push(data)
    },
    deleteSchool(state, data) {
      let uniqueId = state.schools.findIndex(item => item.id === data.id)
      state.schools.splice(uniqueId,1)
    }
  }
})
