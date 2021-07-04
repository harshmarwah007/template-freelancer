import React from 'react'
import image1 from './assets/circle-cropped.png'
const MastHead = () => {
    return (
        <div>
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
               
                <img className="masthead-avatar mb-5" src={image1} alt="..." />
                
                <h1 className="masthead-heading text-uppercase mb-0">Harsh Marwah</h1>
              
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - FullStack Developer - Entreprenur</p>
            </div>
        </header>
            
        </div>
    )
}
export default MastHead;