
export default {
    addNum({ commit, state }, id) {
        //点击下一题，记录答案 并判断是否是最后一题
        commit('rember_answer', id);
        if (state.itemNum < state.itemDetail.length) {
            commit('add_num');
        }
    },

    //初始化信息
    initializeData({ commit }) {
        commit("init_data");
    }
}
