import React from 'react'
import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import './index.css'
import ClickTracker from '../components/ClickTracker'

function App (){
    return (
        <div className='bordered'>
            <ClickTracker buttonText="Click it" />
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )

createRoot(document.getElementById('root')).render(<App />);