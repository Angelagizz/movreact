import React from 'react'
import CarouselContainer from '../layout/CarouselContainer'
import Routes from '../../routes/Routes';

function HomePage() {
    const history = useHistory();

    const handleClick = () => {
        history.push('/aboutMovie');
    } 
    return (
        <div>
            <CarouselContainer/>
            <React.StrictMode>
                <Routes />
            </React.StrictMode>
            <button onClick={handleClick}>details</button>
            
        </div>
    )
}

export default HomePage
