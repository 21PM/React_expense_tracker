import React from 'react';
import "./dashboard.css"
const Dashboard = () => {
    const calculateTax = () => {
        // Add your tax calculation logic here
    };

    return (
        <div id="top">
            {/* Left side Section of webpage */}
            <div id="profile">
                <div id="Profile-name">
                    <img src="image1.png" alt="profile_Image" id="profile_Image" width="50px" height="50px" style={{ borderRadius: '50px' }} />
                    <span>Paras More</span>
                </div>
                <ul id="listitems">
                    <button id="cal-pay-btn">CALCULATE & PAY TAX</button>
                </ul>
                <div id="tax_out_contianer">
                    <span id="tax_close_btn">X</span>
                    <table>
                        <thead>
                            <tr>
                                <th>Total Income (p.a.)</th>
                                <th>Old Regime</th>
                                <th>New Regime</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Upto Rs. 2,50,000</td>
                                <td>NIL</td>
                                <td>NIL</td>
                            </tr>
                            <tr>
                                <td>From Rs. 2,50,001 to Rs. 5,00,000</td>
                                <td>5%</td>
                                <td>5%</td>
                            </tr>
                            <tr>
                                <td>From Rs. 5,00,001 to Rs. 7,50,000</td>
                                <td>20%</td>
                                <td>10%</td>
                            </tr>
                            <tr>
                                <td>From Rs. 7,50,001 to Rs. 10,00,000</td>
                                <td>20%</td>
                                <td>15%</td>
                            </tr>
                            <tr>
                                <td>From Rs. 10,00,001 to Rs. 12,50,000</td>
                                <td>30%</td>
                                <td>20%</td>
                            </tr>
                            <tr>
                                <td>From Rs. 12,50,001 to Rs. 15,00,000</td>
                                <td>30%</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td>Above Rs. 15,00,000</td>
                                <td>30%</td>
                                <td>30%</td>
                            </tr>
                        </tbody>
                    </table>
                    <div id="income-section">
                        <label htmlFor="income">Enter your annual income:</label>
                        <input type="number" id="income" placeholder="0" />
                        <button onClick={calculateTax} id="CalBtn">Calculate Tax</button>
                        <p id="tax-output"></p>
                        <button id="rzp-button1">Pay</button>
                    </div>
                </div>
            </div>

            {/* This is right side section of webpage */}
            <div id="dashboard">
                <div id="dashborad_head_div">
                    <span>
                        <h1 style={{ marginLeft: '50px', marginTop: '20px' }}>Dashboard</h1>
                    </span>
                    <input type="text" defaultValue="Search" id="search_field" />
                </div>

                <div id="Top_Outer_Div">
                    <div id="Top_Outer_Div_child1">
                        <div id="overview_div">
                            <h4>OverView</h4>
                            <div id="valuesDiv">
                                <div id="Total_Sal_div">
                                    <span className="Total_salary">
                                        <p id="Total_salary">00</p>
                                    </span>
                                    <h5>Total Income</h5>
                                </div>
                                <div id="Total_Exp_div">
                                    <span className="You_Owe">
                                        <p id="You_Owe">00</p>
                                    </span>
                                    <h5>Total Expenses</h5>
                                </div>
                                <div id="Total_Bal_div">
                                    <span className="You_get_back">
                                        <p id="You_get_back">00</p>
                                    </span>
                                    <h5>Balance Amount</h5>
                                </div>
                            </div>
                        </div>

                        {/* *************************** Chart Container ************************* */}
                        <div id="expenses_chart_div">
                            <h2>Chart</h2>
                            <div id="chart_div">
                                <canvas id="myChart"></canvas>
                            </div>
                        </div>
                    </div>

                    <div id="Top_Outer_Div_child2">
                        <div id="activites_div">
                            <h2>Recent Transaction</h2>
                            <div className="Transaction_history">
                                {/* Transaction items go here */}
                            </div>
                        </div>
                    </div>
                </div>

                <div id="Bottom_Outer_Div">
                    <div id="Add_Transaction_Div">
                        <h2>Add Transaction</h2>
                        <label htmlFor="category">Select Transaction Category:</label>
                        <select name="category" id="category">
                            <option value="" selected id="default">Please select an option</option>
                            <option value="income" className="income" id="income">Income</option>
                            <option value="expenses" className="expenses" id="expenses">Expenses</option>
                        </select>
                        <br />
                        <br />
                        <div id="inputdiv">
                            <div>
                                <label htmlFor="name">Title :</label>
                                <input type="text" id="name" placeholder="Enter Transaction Title" />
                            </div>
                            <div>
                                <label htmlFor="amount">Amount :</label>
                                <input type="number" id="amount" pattern="[0-9]*" placeholder="Enter Amount" />
                            </div>
                        </div>
                        <div id="btn_div">
                            <button id="Add_Button" value="submit">ADD</button>
                        </div>
                    </div>

                    <div id="bottom-outer-div2-Chatbot">
                        <div id="Chat-UI-DIV">
                            <span className="material-symbols-outlined">close</span>
                            <main id="main-Inside-bot">
                                <div className="msg-container">
                                    <div className="bot-msg">
                                        <span className="span-bot-sms">Bot : Hello How I can assist you</span>
                                    </div>
                                    <div className="user-quesion">
                                        <span className="span-user-quesion"></span>
                                    </div>
                                    <div className="bot-answer">
                                        <span className="span-bot-answer"></span>
                                    </div>
                                </div>
                                <div className="user-input-div-gemini">
                                    <input type="text" placeholder="Chat with our bot" className="user-input-gemini" />
                                    <button className="Search-gemini-btn">
                                        <span className="material-symbols-outlined">send</span>
                                    </button>
                                </div>
                            </main>
                        </div>

                        <div id="Ai-article">
                            <h1>You may take some finanical adviced from our chat bot</h1>
                        </div>
                        <div id="Chat-circle">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1QHu6nLP5m6Dsra7PzxQ5rYjRx4U2axIIjCUyaHy7Q&s?" alt="Chat_bot_image" id="Bot-image" style={{ width: '100px', height: '100px', borderRadius: '50%', marginTop: '70%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
