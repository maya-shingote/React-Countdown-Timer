import React, { useState, useEffect } from 'react';

const CustomTimer = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [inputMinutes, setInputMinutes] = useState('');
  const [countdownDuration, setCountdownDuration] = useState(null);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        if (milliseconds > 0) {
          setMilliseconds(milliseconds - 10);
        } else {
          clearInterval(timer);
          setIsRunning(false);
          alert('Time\'s up!');
        }
      }, 10);
    }

    return () => clearInterval(timer);
  }, [isRunning, milliseconds]);

  const startTimer = () => {
    if (!inputMinutes || isNaN(inputMinutes)) {
      alert('Invalid input. Please enter a valid number.');
      return;
    }

    const minutesToMilliseconds = parseInt(inputMinutes, 10) * 60 * 1000;
    setMilliseconds(minutesToMilliseconds);
    setCountdownDuration(minutesToMilliseconds);
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMilliseconds(0);
    setInputMinutes('');
  };

  const handleInputChange = (e) => {
    setInputMinutes(e.target.value);
  };

  const formatTime = (time) => {
    const dateTimer = new Date(time);
    return (
      ('0' + dateTimer.getUTCHours()).slice(-2) + ':' +
      ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' +
      ('0' + dateTimer.getUTCSeconds()).slice(-2) + ':' +
      ('0' + dateTimer.getUTCMilliseconds()).slice(-3, -1)
    );
  };

  const styles = {
    container: {
      textAlign: 'center',
      maxWidth: '400px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    },
    watch: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#fff',
      borderRadius: '20px',
      padding: '20px',
      marginBottom: '20px',
    },
    h2: {
      fontSize: '3em',
      fontWeight: '400',
      color: '#333',
    },
    paused: {
      color: 'red',
    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    inputStyle: {
      padding: '10px',
      margin: '10px',
      fontSize: '16px',
    },
    buttonStyle: {
      margin: '10px',
      padding: '15px 30px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '4px',
      borderRadius: '5px',
      cursor: 'pointer',
      backgroundColor: '#4caf50',
      color: '#fff',
      border: 'none',
    },
    buttons: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.watch}>
        <h2 style={isRunning ? {} : styles.paused}>{formatTime(milliseconds)}</h2>
      </div>
      <div style={styles.inputContainer}>
        <input
          type="number"
          placeholder="Enter minutes"
          value={inputMinutes}
          onChange={handleInputChange}
          style={styles.inputStyle}
        />
        <button onClick={startTimer} style={styles.buttonStyle}>
          Start
        </button>
      </div>
      <div style={styles.buttons}>
        <button onClick={pauseTimer} style={styles.buttonStyle}>
          Pause
        </button>
        <button onClick={resetTimer} style={styles.buttonStyle}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CustomTimer;





