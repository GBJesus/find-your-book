import { createGlobalStyle } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
body{
    background:#e4e4e6;
}
body,input,button{
    font-family: 'Roboto', sans-serif;
}

button{
    cursor: pointer;
}
`
