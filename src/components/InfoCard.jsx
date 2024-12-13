import React from "react";
import "./InfoCard.css";

export const InfoCard = ({ title, subtitle, children }) => {
    return (
        <div className="info-card">
            <h4>{title}</h4>
            <h5>{subtitle}</h5>
            {children}
        </div>
    );
};

export const InfoCardContainer = ({ children }) => {
    return (
        <div className="info-card-container">
            {children}
        </div>
    );
};