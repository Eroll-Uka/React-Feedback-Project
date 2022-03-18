import {v4 as uuidv4} from "uuid"
import { useState } from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AboutPage from "./pages/AboutPage"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import AboutIconLink from "./components/AboutIconLink"
import FeedbackData from "./components/data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

function App() {
    const [feedback, setFeedback] = useState(FeedbackData) 

    const addFeedback = (newFeedback) => {
        newFeedback.id= uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you wanna delete?")){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    
    return  (
        <Router>
           <Header />
            <div className='container'>
            <Routes>
                <Route exact path='/' element={<>

                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete = {deleteFeedback}/>

                </>}>
                </Route>
                
                <Route exact path="/about" element={<AboutPage/>}></Route>
            </Routes>
            <AboutIconLink />
            </div> 
            </Router>
    )
}
export default App 