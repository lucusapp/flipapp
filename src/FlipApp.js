import React from 'react'
import {Provider} from'react-redux'
import { AuthRouter } from './routers/AuthRouter'

import {store} from './store/store'




export const FlipApp = () => {
    return (
        <Provider store={store}>
            <AuthRouter/>

        </Provider>
  
    )
}
