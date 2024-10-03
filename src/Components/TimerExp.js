import React, { useEffect, useState } from 'react';

function TimerExp() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timeLeft, setTimeLeft] = useState(null);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval = null;

        if (running && timeLeft !== null) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime <= 0) {
                        setRunning(false);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [running, timeLeft]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const totalTime = (hours * 3600) + (minutes * 60) + seconds;
        setTimeLeft(totalTime);
        setRunning(true);
    };

    const displayHours = Math.floor(timeLeft / 3600);
    const displayMinutes = Math.floor((timeLeft % 3600) / 60);
    const displaySeconds = timeLeft % 60;

    return (
        <div>
            Hours:
            <input
                type='number'
                name='hours'
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
            /><br/>
            Minutes:
            <input
                type='number'
                name='minutes'
                value={minutes}
                onChange={(e) => setMinutes(Number(e.target.value))}
            /><br/>
            Seconds:
            <input
                type='number'
                name='seconds'
                value={seconds}
                onChange={(e) => setSeconds(Number(e.target.value))}
            /><br/>
            <button type='submit' onClick={handleSubmit}>Start Timer</button>

            {timeLeft !== null && (
                <p>
                    {displayHours}:
                    {displayMinutes}:
                    {displaySeconds}
                </p>
            )}
        </div>
    );
}

export default TimerExp;


