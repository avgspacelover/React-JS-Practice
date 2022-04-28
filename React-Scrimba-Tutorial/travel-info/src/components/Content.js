import React from "react"

const Content = ({
    
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl
    
    
}) => {
    
    return (
        <div className="content">
        
            <div className="img-container">
                
                <img src={imageUrl} className="card-img" />
            
            </div>
            
            <div className="text-flap">
            
                <div className="location-info">
                    <img src="../images/blip-logo.svg" className="blip-logo" />
                    <span className="location">
                        {location}
                    </span>
                    
                    <span className="gmap">
                        <a href={googleMapsUrl} target="_blank">View on Google Maps</a>
                    </span>
                
                </div>
                
                <div className="card-title">
                
                    <h2 className="wonder">
                        {title}
                    </h2>
                    
                    <p className="dates"> 
                        {startDate} - {endDate}
                    </p>
                    
                </div>
                
                <div className="card-descrp">
                
                    <p className="descrp">
                        {description}
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default Content;



/*
title: "Mount Fuji",
        location: "Japan",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
        
        */