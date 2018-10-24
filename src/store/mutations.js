// const ADD_ITEMNUM = 'ADD_ITEMNUM'


export default {
    // 点击进入下一页
    add_num(state) {
        state.itemNum += 1;
    },
    //记录答案
    rember_answer(state, id) {
        state.answerid.push(id);
    },
    //初始化信息
    init_data(state) {
        state.itemNum = 1;
        state.allTime = 0;
        state.answerid = [];
    }
}