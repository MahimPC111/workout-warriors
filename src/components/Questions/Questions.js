import React from 'react';
import './Question.css'

const Questions = () => {
    return (
        <div className='accordion'>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            How does react works?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
                            A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            What are the difference between props and state?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>PROPS</th>
                                        <th>STATE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>The Data is passed from one component to another.</td>
                                        <td>The Data is passed within the component only.</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>It is Immutable (cannot be modified).</td>
                                        <td>It is Mutable ( can be modified).</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Props can be used with state and functional components.</td>
                                        <td>State can be used only with the state components/className component (Before 16.0).</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Props are read-only.</td>
                                        <td>State is both read and write.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            What else useEffect can do except  loading API data?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">There are many things useEffect can do except loading API data. <br /><br />
                            1) Running on state change: validating input field
                            Validating an input while it's receiving characters is another great application for useEffect. Whilst the input is being stored in a state using useState, the validation takes place every time the input changes, giving immediate feedback to the user.
                            We could add a setTimeout() function to check the input field after some time, to delay the checking on each user keystroke, and we would need to clear that timer by using the clearTimeout() function in the return statement of the useEffect hook. A similar example of this is implemented in the useEffect animation trigger, further ahead. <br /><br />

                            2) Running on state change: live filtering
                            We can use useEffect to filter an array "on the fly" by typing letters into an input element. To do so, we will need to use a state to save the input, and a filter implementation inside the useEffect that will be triggered when the input changes, thanks to useEffect dependencies. <br /><br />

                            3) Running on state change: trigger animation on new array value
                            We can use the useEffect hook to trigger an animation on a shopping cart as a side effect of adding a new product to it. In this case, we'll need a state to handle the cart items, and another state to handle the animation trigger.
                            As we are using a timer inside the useEffect, It is a good practice to clear it before it gets set again by using the return statement of the useEffect, which gets executed before the main body of the useEffect hook gets evaluated (except for the first render). <br /><br />

                            4) Running on props change: update paragraph list on fetched API data update
                            In this use case, we want to trigger a state update due to an updated fetch() call. We are sending the fetched data to a child component, and whenever that data is changed, the child component re-process it. <br /><br />

                            5) Running on props change: updating fetched API data to get updated BTC price
                            In this example, useEffect is used to fetch new data from an API every 3 seconds. The child component useEffect receives the time as dependency and every time that dependency changes, a new fetch() is triggered. This way, we can have an updated BTC exchange rate in our app.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;