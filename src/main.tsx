import { render } from 'preact'
import { App } from './App'
import './index.css'
import { ipidCreateElement } from './jsx-core'

render(<App />, document.getElementById('app') as HTMLElement)
