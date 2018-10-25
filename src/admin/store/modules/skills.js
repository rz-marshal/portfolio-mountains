import axios from "axios";

const skills = {
    namespaced: true,
    state: {
        data: []
    },
    mutations: {
        loadSkills: (state, skills) => state.data = skills,
        addNewSkill:(state, newSkill) => state.data.push(newSkill),
        removeSkill:(state, skillID) => 
            (state.data = state.data.filter(skill => skill.id !== skillID))
    },
    actions: {
        fetch({commit}) {
            this.$axios.get('/skills/34').then(responce => {
                
                commit('loadSkills', responce.data)
            }, error => {
                console.error(error)
            })
        },
        add({commit}, skill) {
            this.$axios.post('/skills', skill).then(response =>{
                commit('addNewSkill', response.data);
                
            }, error => {
                console.error(newSkill.category);
            })
        },
        remove({commit}, skillId) {
            this.$axios.delete(`/skills/${skillId}`).then(response => {
                commit("removeSkill", skillId)
            }, error => {
                console.error(error)
            })
        }
    }
}

export default skills;