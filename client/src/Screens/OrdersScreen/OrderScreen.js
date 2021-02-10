import React from 'react';
import './styles.css';

function OrderScreen() {
    return (
        <div className="orders-screen">
            {/* <div>
                <div className="head">
                    <div>Order ID</div>
                    <div>Name</div>
                    <div>Email</div>
                    <div>Resume</div>
                    <div>Price</div>
                    <div>Date</div>
                    <div>Time</div>
                </div>
                <div className="body">
                    <div className="row">
                        <div>Order ID</div>
                        <div>Name</div>
                        <div>Email</div>
                        <div>Resume</div>
                        <div>Price</div>
                        <div>Date</div>
                        <div>Time</div>
                    </div>
                </div>
            </div> */}
            <table>
                <tr className="head">
                    <td>Order ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Contact</td>
                    <td>Resume</td>
                    <td>Price</td>
                    <td>Date</td>
                    <td>Time</td>
                </tr>
                <tr>
                    <td>35256842320012</td>
                    <td>Shayan Ali</td>
                    <td>shayan@gmail.com</td>
                    <td>+926663545221</td>
                    <td>Resume One</td>
                    <td>10$</td>
                    <td>01/Jan/2021</td>
                    <td>09:00 am</td>
                </tr>
                <tr>
                    <td>35256842320012</td>
                    <td>Shayan Ali</td>
                    <td>shayan@gmail.com</td>
                    <td>+926663545221</td>
                    <td>Resume One</td>
                    <td>10$</td>
                    <td>01/Jan/2021</td>
                    <td>09:00 am</td>
                </tr>
                <tr>
                    <td>35256842320012</td>
                    <td>Shayan Ali</td>
                    <td>shayan@gmail.com</td>
                    <td>+926663545221</td>
                    <td>Resume One</td>
                    <td>10$</td>
                    <td>01/Jan/2021</td>
                    <td>09:00 am</td>
                </tr>
                <tr>
                    <td>35256842320012</td>
                    <td>Shayan Ali</td>
                    <td>shayan@gmail.com</td>
                    <td>+926663545221</td>
                    <td>Resume One</td>
                    <td>10$</td>
                    <td>01/Jan/2021</td>
                    <td>09:00 am</td>
                </tr>
                <tr>
                    <td>35256842320012</td>
                    <td>Shayan Ali</td>
                    <td>shayan@gmail.com</td>
                    <td>+926663545221</td>
                    <td>Resume One</td>
                    <td>10$</td>
                    <td>01/Jan/2021</td>
                    <td>09:00 am</td>
                </tr>
            </table>
        </div>
    )
}

export default OrderScreen
