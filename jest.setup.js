// Polyfill "window.fetch" used in the React component.
import 'whatwg-fetch'
import 'setimmediate'
import { getEnv } from './src/helpers/getEnv'

require('dotenv').config({
    path: ".env.test"
})

jest.mock( './src/helpers/getEnv', () => ({
    getEnv: () => ({ ...process.env })
}))