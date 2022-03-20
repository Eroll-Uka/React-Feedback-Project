import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AboutPage from "./pages/AboutPage"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import AboutIconLink from "./components/AboutIconLink"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import { FeedbackProvider} from "./context/FeedbackContext"

function App() {
    
    return  (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                <Routes>
                    <Route exact path='/' element={<>

                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />

                    </>}>
                    </Route>
                    
                    <Route exact path="/about" element={<AboutPage/>}></Route>
                </Routes>
                <AboutIconLink />
                </div> 
             </Router>
        </FeedbackProvider>
    )
}
export default App 