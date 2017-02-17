import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Display from './display';
import TimerButtons from './timerButtons';
import TaskBreak from './task_break';
import toastr from 'toastr';
import {
  tickTimeToggle,
  taskTimeToggle,
  breakTimeToggle,
  breakNextModifier,
  startToggler,
 } from '../actions/index';

const Tomato = styled.div`
  background-color: #B70101;
  height: 300px;
  width: 350px;
  margin: auto;
  margin-top: 75px;
  border-radius: 60px 60px 130px 130px;
`;

const Name = styled.div`
  color: black;
  margin: auto;
  font-size: 48px;
  text-align: center;
  font-family: "Brush Script MT", cursive, Arial;
`;

const Vine = styled.div`
  background-color: #247307;
  height: 180px;
  width: 70px;
  margin: auto;
`;

const Ground = styled.div`
  margin: auto;
  height: 90px;
  width: 300px;
  background-color: #7F683A;
  border-radius: 120px 120px 5px 5px;
`;

export class Pomodoro extends Component {
  constructor (props) {
    super (props);

    this.Timer = this.Timer.bind(this);
    this.startTheTimer = this.startTheTimer.bind(this);
    this.pauseTheTimer = this.pauseTheTimer.bind(this);
    this.changeTaskTime = this.changeTaskTime.bind(this);
    this.changeBreakTime = this.changeBreakTime.bind(this);
  }


  startTheTimer () {
    this.props.startToggler(true);
    this.LoopOfTime = setInterval(this.Timer, 1000);
  }

  pauseTheTimer () {
    this.props.startToggler(false);
    clearInterval(this.LoopOfTime);
  }

  Timer () {
    let [minutes, seconds] = this.props.tickTime.split(':');
    if (seconds !== '00') {
      seconds = (Number(seconds) - 1).toString();
      if (seconds.length === 1) {
        seconds = `0${seconds}`;
      }
    } else if (seconds === '00' && minutes !== '0') {
      minutes = (Number(minutes) - 1).toString();
      seconds = '59';
    } else if (this.props.isBreakNext) {
      this.playSound();
      toastr.success('Break Time!');
      minutes = this.props.breakTime;
      seconds = '00';
      this.props.breakNextModifier(false);
    } else {
      this.playSound();
      toastr.success('Back to it!');
      minutes = this.props.taskTime;
      seconds = '00';
      this.props.breakNextModifier(true);
    }
    this.props.tickTimeToggle(`${minutes}:${seconds}`);
  }

  playSound () {
    let sound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
    sound.play();
  }

  changeTaskTime (value) {
    let newTaskTime = this.props.taskTime + value;
    this.props.taskTimeToggle(newTaskTime);
    if (this.props.isBreakNext) {
      this.changeTickTime(newTaskTime);
    }
  }

  changeBreakTime (value) {
    let newBreakTime = this.props.breakTime + value;
    this.props.breakTimeToggle(newBreakTime);
    if (!this.props.isBreakNext) {
      this.changeTickTime(newBreakTime);
    }
  }

  changeTickTime (newTime) {
    this.props.tickTimeToggle(`${newTime.toString()}:00`);
  }

  render () {
    return (
      <div className="Pomodoro">
        <Tomato>
          <Name>Pomodoro</Name>
          <Display
            displayOutput={this.props.tickTime}
          />
          <TimerButtons
            start={this.startTheTimer}
            pause={this.pauseTheTimer}
            ifRunning={this.props.isStartDisabled}
          />
        </Tomato>
        <Vine>
          <TaskBreak
            taskTime={this.props.taskTime}
            breakTime={this.props.breakTime}
            taskModify={this.changeTaskTime}
            breakModify={this.changeBreakTime}
            ifRunning={this.props.isStartDisabled}
          />
        </Vine>
        <Ground />
      </div>
    );
  }
}

Pomodoro.propTypes = {
  tickTimeToggle: PropTypes.func.isRequired,
  taskTimeToggle: PropTypes.func.isRequired,
  breakTimeToggle: PropTypes.func.isRequired,
  breakNextModifier: PropTypes.func.isRequired,
  startToggler: PropTypes.func.isRequired,
  tickTime: PropTypes.string.isRequired,
  taskTime: PropTypes.number.isRequired,
  breakTime: PropTypes.number.isRequired,
  isBreakNext: PropTypes.bool.isRequired,
  isStartDisabled: PropTypes.bool.isRequired,
};

/* eslint-disable func-style */

function mapStateToProps ({ tickTime, taskTime, breakTime, isBreakNext, isStartDisabled }) {
  return { tickTime, taskTime, breakTime, isBreakNext, isStartDisabled };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    tickTimeToggle,
    taskTimeToggle,
    breakTimeToggle,
    breakNextModifier,
    startToggler,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pomodoro);
