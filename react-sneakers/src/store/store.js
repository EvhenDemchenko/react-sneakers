import { configureStore} from '@reduxjs/toolkit'
import  sneakersReducer  from './slice'
import thunk from 'redux-thunk'

export const store = configureStore({
    reducer: {
        sneakers: sneakersReducer 
    },
    middleware: (getDefaultMiddleware)=> [...getDefaultMiddleware(), thunk]
})