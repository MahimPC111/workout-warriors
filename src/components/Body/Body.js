import React from 'react';
import './Body.css'
import Header from '../Header/Header';
import Main from '../Main/Main';
import { useState } from 'react';
import { useEffect } from 'react';
import Info from '../Info/Info';
import Questions from '../Questions/Questions';

const Body = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    const timer = (timeInt) => {
        const exerciseTime = parseInt(document.getElementById('exercise-time').innerText);
        const time = timeInt + exerciseTime;
        document.getElementById('exercise-time').innerText = time;
        localStorage.setItem('exercise', time);
    }

    return (
        <div className='overview'>
            <div className='body'>
                <Header></Header>
                <h5 className='card-header'>Select your task:</h5>
                <div className='task-container'>
                    {
                        tasks.map(task => <Main task={task} key={task.id} timer={timer}></Main>)
                    }
                </div>
                <Questions></Questions>
            </div>
            <div>
                <Info></Info>
            </div>
        </div>
    );
};

export default Body;