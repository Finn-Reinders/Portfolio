import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Project from '../pages/Project';

function AnimatedRoutes() {
    const location = useLocation();
    
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects/:projectName" element={<Project />} />
            </Routes>
        </AnimatePresence>
    );
}

export default function App() {
    return (
        <Router>
            <AnimatedRoutes />
        </Router>
    )
}