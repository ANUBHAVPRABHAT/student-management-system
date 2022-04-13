import React from 'react';
import contact from '../../img/contact.jpg';
export const Contact = () => {

    
    return (
        <div >
            <h1>Contact Us</h1>
            <div className='img' align="center">

                <img src={contact} alt="contact" width={800} height={400} ></img>

            </div>

            <br></br>
            <br></br>
             <h3 color='red'>Address:</h3> <p> Railway Station, Dr. D.Y. Patil Educational Complex, behind Akurdi,<br></br>
                Sector 29, Nigdi, Akurdi, Maharashtra 411044</p>
            <h3>phone no: </h3><p>9834983401</p>
            <h3>Email id: </h3><p>abcd@gmail.com</p>

        </ div>
    )
}