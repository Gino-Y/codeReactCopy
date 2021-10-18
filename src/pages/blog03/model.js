export default {
    namespace: 'blog02',
    state: {
        userMain: {
            show: 'blog02Show',
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
