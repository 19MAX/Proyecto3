import React from 'react'
import Card from 'react-bootstrap/Card';

export const CustomCard = ({ children, className, style }) => {


    return (
        <Card style={style} className={`d-flex flex-column flex-md-row bg-dark text-light p-4 rounded shadow-lg ${className}`}>
            {children}
        </Card>
    )


}
