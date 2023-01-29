import React from 'react';
import './Main.css'

const Main = (props) => {
    const { img, title, age, time } = props.task;
    const { timer } = props;
    const timeInt = parseInt(time);

    return (
        <div className='card-container'>
            <div className="card" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="" />
                <h5 className="card-title my-3">{title}</h5>
                <p className='my-1 text-black-50'>For age: {age}</p>
                <p className='my-1 text-black-50'>Time required: {time} minutes</p>
                <button onClick={() => timer(timeInt)} className="btn btn-outline-info w-100">Add to list</button>
            </div>
        </div>
    );
};

export default Main;