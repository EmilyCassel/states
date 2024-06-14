

function Home() {
    return (
        <div className="homeBody">
            <header className="header">
                <nav>
                <h1><a className='homePagePlayButton' href="/PlayGames">Cruise</a> </h1>
                </nav>
            </header>

        </div>
    );
}

export default Home;















































// import { useState } from 'react';

// function Home() {
//     const [popupVisible, setPopupVisible] = useState(false);
//     const [popupMessage, setPopupMessage] = useState('');

//     const handleAreaClick = (message) => {
//         setPopupMessage(message);
//         setPopupVisible(true);
//     };

//     const handleClosePopup = () => {
//         setPopupVisible(false);
//         setPopupMessage('');
//     };

//     return (
//         <div className="homeBody">
//             <img src="/images/five.jpg" alt="Interactive" useMap="#image-map" className="interactive-image" />
//             <map name="image-map">
//                 <area shape="rect" coords="34,44,270,350" alt="Point1" href="#" onClick={(e) => { e.preventDefault(); handleAreaClick('You clicked on point 1!'); }} />
//                 <area shape="rect" coords="290,172,333,250" alt="Point2" href="#" onClick={(e) => { e.preventDefault(); handleAreaClick('You clicked on point 2!'); }} />
//             </map>
//             {popupVisible && (
//                 <div className="popup" onClick={handleClosePopup}>
//                     <div className="popup-content">
//                         <span className="close-btn" onClick={handleClosePopup}>&times;</span>
//                         <p>{popupMessage}</p>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Home;
