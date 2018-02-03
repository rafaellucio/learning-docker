import dotenv from 'dotenv'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Routes from './routes'

dotenv.config()

ReactDOM.render(<Routes />, document.getElementById('app'))
registerServiceWorker()
