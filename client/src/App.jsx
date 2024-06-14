import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Header } from './components';
import { Home, PlayGames } from './pages';

export default function App() {
    return (

            <>
                
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/PlayGames" element={<PlayGames />} />
                    </Routes>
                </main>
            </>
     
    );
}
