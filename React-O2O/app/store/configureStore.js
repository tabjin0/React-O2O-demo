import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
	//创建store，需要rootReducer规则
    const store = createStore(rootReducer, initialState,
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store
}