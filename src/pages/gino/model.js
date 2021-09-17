export default {
    namespace: 'gino',
    state: {
        userMain: {
            show: 'ginoShow',
        },
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
    effects: {
        *getTopOrderDetail(action, { call, put, select }) {
            const { OrderNo } = yield select(state => state.user);
        },
    },
    subscriptions: {},
};
