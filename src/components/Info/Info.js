import React from 'react';
import './Info.css'
import img from '../../image/Me.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Info = () => {

    const addBreak = (time) => {
        document.getElementById('break-time').innerText = time;
        localStorage.setItem('break', time);
    }

    const reset = () => {
        toast("Congratulations!")
        document.getElementById('break-time').innerText = 0;
        document.getElementById('exercise-time').innerText = 0;
        localStorage.removeItem('break');
        localStorage.removeItem('exercise');
    }

    const exerciseData = () => {
        let savedData = 0;
        const data = localStorage.getItem('exercise');
        if (data) {
            savedData = data;
        }
        return savedData;
    }
    const storedExerciseData = exerciseData();

    const breakData = () => {
        let savedData = 0;
        const data = localStorage.getItem('break');
        if (data) {
            savedData = data;
        }
        return savedData;
    }
    const storedBreakData = breakData();

    return (
        <div className='details'>
            <div className='profile'>
                <img src={img} alt="" />
                <div>
                    <h6>Md. Mahim Hossain</h6>
                    <p><small>Dhaka, Bangladesh</small></p>
                </div>
            </div>
            <div className='more-info'>
                <div>
                    <h5>71<small>kg</small></h5>
                    <p><small>Weight</small></p>
                </div>
                <div>
                    <h5>5.5</h5>
                    <p><small>Height</small></p>
                </div>
                <div>
                    <h5>22<small>years</small></h5>
                    <p><small>Age</small></p>
                </div>
            </div>

            <h5>Add a break</h5>
            <div className='more-info'>
                <button onClick={() => addBreak(10)}>10s</button>
                <button onClick={() => addBreak(20)}>20s</button>
                <button onClick={() => addBreak(30)}>30s</button>
                <button onClick={() => addBreak(60)}>60s</button>
            </div>

            <div className='exercise'>
                <h5>Exercise Details</h5>
                <div className='more-info'>
                    <h6>Exercise time</h6>
                    <p><span id="exercise-time">{storedExerciseData}</span> Minutes</p>
                </div>
                <div className='more-info'>
                    <h6>Break time</h6>
                    <p><span id='break-time'>{storedBreakData}</span> Seconds</p>
                </div>
                <button className='btn-activity' onClick={reset}>Activity Completed</button>
                <ToastContainer />
            </div>
        </div >
    );
};

export default Info;