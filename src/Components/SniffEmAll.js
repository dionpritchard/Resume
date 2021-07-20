import React, { Component } from 'react'
import { getCanvasRecommendedSize } from '../util/utils.js'

import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Grid, Slider, Typography, useMediaQuery } from '@material-ui/core'



class SniffEmAll extends Component {
  state = {
    seconds: 1,
    gameState: 0,
    debug: 1,
  };


  constructor(props) {
    super(props)

    console.log(`Your window width is: ${window.innerWidth}`)
    this.state = {
      canvasWidth: getCanvasRecommendedSize(window),
      canvasHeight: getCanvasRecommendedSize(window),
      debug: 1,
      gameState: 2,
    }


    this.dataPerSecond = {
      frames: 0,
      updates: 0,
    }
    this.millisecondsPerRender = 1000/this.props.renderPS; // used
    this.currentMillisecondCount = 0; // used

    this.updateCount = this.props.renderPS/this.props.updatePS; // used
    this.numOfRendersNeededToUpdate = 0 // used


    this.debugData = {
      calculationsPerUpdate: 0,
      collisionChecksBetweenShapes: 0
    }



  }


  canvasRender = function (state) {
    /* DEBUG / DATA COLLECTION */
    this.currentMillisecondCount += this.millisecondsPerRender
    this.dataPerSecond.frames += 1


    if(this.currentMillisecondCount > 1000) {
      this.currentMillisecondCount = 0


      this.dataPerSecond.frames = 0
      this.dataPerSecond.updates = 0
    }





    /* CALCULATIONS */
    const c = state.c
    const vars = {
      width: state.canvas.width,
      half_width: state.canvas.width/2,
      height: state.canvas.height,
      half_height: state.canvas.height/2,
      scale: 1,
    }
    c.clearRect(0, 0, state.canvas.width, state.canvas.height)


    c.font = `${24*vars.scale}px Arial`
    if(state.debug == 1) {
      c.fillText('Debug enabled', 10, 20)
    }


    if(state.gameState == 0) { // LOADING
      c.fillStyle = 'rgba(120,120,120,0.2)'
      c.fillRect(vars.half_width+(-80*vars.scale), vars.half_height+(-25*vars.scale), 250*vars.scale, 60*vars.scale)

      c.fillStyle = 'black'
      c.fillText('Loading ... ', state.canvas.width/2, state.canvas.height/2)

    }
    else if(state.gameState == 1) { // READY TO START

    } else if(state.gameState == 2) { // RUNNING

    }



    this.numOfRendersNeededToUpdate += 1
    if(this.numOfRendersNeededToUpdate >= this.updateCount) {


      this.numOfRendersNeededToUpdate = 0
    }

    this.setState({ seconds: state.seconds + 1 })

  }


  componentDidMount() {

    this.renderTimer = setInterval(() => {
      this.canvasRender(this.state)

    }, 1000/this.props.renderPS);

    this.setState({
      canvas: document.getElementById('mycanvas'),
      c: document.getElementById('mycanvas').getContext('2d'),
      shapesToRender: 2**4,
    })
  }



  componentWillUnmount() {
    clearInterval(this.renderTimer);
  }









  render() {
    const canvasSize = getCanvasRecommendedSize(window)

    return (
      <div>
        <canvas id="mycanvas" width={getCanvasRecommendedSize(window)} height={getCanvasRecommendedSize(window)} style={{'border': this.props.debug.border}}></canvas>

      </div>
    )
  }
}


export default SniffEmAll
