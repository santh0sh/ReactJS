import {GREET} from './types'

export const greetAction = (name) => {
    let msg=`Welcome ${name} to our world`
    return {
      //  type: "GREET",
        type:GREET,
        payload: msg 
    }
}

