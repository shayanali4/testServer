import React from 'react';
import './styles.css';

function PaymentScreen() {
    return (
        <div className="payment-screen">
            <div>
                <div className="payment">
                    <div className="payment-method">
                        <h3>SELECT PAYMENT METHOD</h3>
                        <div>
                            <button>Credit Card</button>
                            <button>PayPal</button>
                        </div>
                    </div>
                    <div className="payment-details">
                        <div>
                            <label>Name ON CARD</label>
                            <input type="text" placeholder="Card Holder Name" />
                        </div>
                        <div>
                            <label>CARD NUMBER</label>
                            <input type="number" placeholder="Card Number" />
                        </div>
                        <div>
                            <div>
                                <label>MONTH/YEAR</label>
                                <input type="month" placeholder="" />
                            </div>
                            <div>
                                <label>CVV</label>
                                <input type="number" placeholder="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-details">
                    <div>
                        <h3>SUMMARY</h3>
                        <div>
                            <div>
                                <p>Name :</p>
                                <p>Shayan Ali</p>
                            </div>
                            <div>
                                <p>Email :</p>
                                <p>shayan@gmail.com</p>
                            </div>
                            <div>
                                <p>Price :</p>
                                <p> $15</p>
                            </div>
                        </div>
                        <div>
                            <h3>WEDNESDAY</h3>
                            <h5>January 18, 2021 | 11:00 AM</h5>
                        </div>
                    </div>
                    <button>PAY NOW</button>
                </div>
            </div>
        </div>
    )
}

export default PaymentScreen

