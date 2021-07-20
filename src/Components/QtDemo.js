import React, { Component } from 'react'
import { getCanvasRecommendedSize } from '../util/utils.js'

import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Grid, Slider, Typography, useMediaQuery } from '@material-ui/core'

import Moment from 'react-moment';
import { Link } from 'react-router-dom'


import Construction from '../Components/Construction';

import Boundary from '../React2d/Boundary';
import Vector2 from '../React2d/Vector2';
import Quadtree from '../React2d/Quadtree';
import Rect from '../React2d/Rect';
import ReactCanvas from '../React2d/ReactCanvas'


const marks = [
  {
    value: 10,
    label: '10',
  },
  {
    value: 50,
    label: null,
  },
  {
    value: 100,
    label: null,
  },
  {
    value: 150,
    label: '',
  },
  {
    value: 200,
    label: '200',
  },
  {
    value: 300,
    label: '300',
  },
  {
    value: 400,
    label: '400',
  },
  {
    value: 500,
    label: '500',
  },
  {
    value: 750,
    label: '750',
  },
  {
    value: 1000,
    label: '1000',
  },
]

class QtDemo extends Component {
  state = {
    seconds: 1,
    shapesToRender: 2**4,
    limitPerQuadrant: 4,
  };


  constructor(props) {
    super(props)

    console.log(`Your window width is: ${window.innerWidth}`)
    this.state = {
      canvasWidth: getCanvasRecommendedSize(window),
      canvasHeight: getCanvasRecommendedSize(window),
      limitPerQuadrant: 4
    }


    this.dataPerSecond = {
      frames: 0,
      updates: 0,
    }
    this.millisecondsPerRender = 1000/this.props.renderPS; // used
    this.currentMillisecondCount = 0; // used

    this.updateCount = this.props.renderPS/this.props.updatePS; // used
    this.numOfRendersNeededToUpdate = 0 // used

    this.total_shapes = [] // used
    this.debugData = {
      calculationsPerUpdate: 0,
      collisionChecksBetweenShapes: 0
    }

    this.boundary = new Boundary(0, 0, this.state.canvasWidth, this.state.canvasHeight)

    this.quadtree = new Quadtree(this.boundary, 0, this.props.qtDebug, this.state.limitPerQuadrant)
    for (let i = 0; i < 2048; i += 1) {
      let position = new Vector2(Math.random()*this.boundary.w, Math.random()*this.boundary.h)
      let randS = Math.floor(Math.random()*4+4)
      let size = new Vector2(randS, randS)

      let vecX = (Math.random()*3+1)
      vecX = (Math.random() < 0.5 ? -vecX : vecX)
      let vecY = (Math.random()*3+1)
      vecY = (Math.random() < 0.5 ? -vecY : vecY)


      let velocity = new Vector2(vecX, vecY)

      this.total_shapes.push(new Rect(position, size, velocity, this.boundary))

      this.quadtree.insert( new Rect(position, size, velocity, this.boundary))
    }


  }


  canvasRender = function (state) {
    /* DEBUG / DATA COLLECTION */
    this.currentMillisecondCount += this.millisecondsPerRender
    this.dataPerSecond.frames += 1


    if(this.currentMillisecondCount > 1000) {
      this.currentMillisecondCount = 0


      /*console.log(`====[ 1 second passed ]====`)
      console.log(`Frames per second: ${this.dataPerSecond.frames}`)
      console.log(`Updates per second: ${this.dataPerSecond.updates}`)*/

      this.dataPerSecond.frames = 0
      this.dataPerSecond.updates = 0
    }





    /* CALCULATIONS */
    state.c.clearRect(0, 0, state.canvas.width, state.canvas.height)


    this.debugData.calculationsPerUpdate = 0
    this.debugData.collisionChecksBetweenShapes = 0




    this.numOfRendersNeededToUpdate += 1
    if(this.numOfRendersNeededToUpdate >= this.updateCount) {

      this.dataPerSecond.updates += 1
      // destroy the quadtree

      this.quadtree = new Quadtree(this.boundary, 0, this.props.qtDebug, this.state.limitPerQuadrant)

      let shapes_to_display = this.state.shapesToRender
      // for all shapes...
      //for(let i = 0; i < this.total_shapes.length; i += 1) {
      for(let i = 0; i < this.state.shapesToRender; i += 1) {
        // update every shape position
        this.total_shapes[i].update(state.c)

        // insert every shape to the quadtree
        this.quadtree.insert(this.total_shapes[i])

      }

      this.debugData = this.quadtree.update(state.c, this.quadtree, this.debugData)

      this.numOfRendersNeededToUpdate = 0

    }

    this.setState({ seconds: state.seconds + 1 })


    if(this.quadtree.shapes.length != 0 || this.quadtree.isDivided()) {
      this.quadtree.render(state.c)
    }
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
        <Grid container justify='center'>
          <Grid item xs={12} sm={8} style={{fontSize:'32px',fontFamily:'Roboto Condensed',padding:'16px',backgroundColor:
          '#eee',borderRadius:'4px',boxShadow:'1px 3px 6px #aaa'}}>
            # of updates per second: {this.props.updatePS}
          </Grid>
        </Grid>

        <Grid container justify='center'>
          <Grid item sm={10}>
            <Slider defaultValue={3} aria-labelledby="discrete-slider" valueLabelDisplay="auto" min={1} max={11} onChange={(event, value) => {this.setState({shapesToRender: 2**value})}} scale={(x) => 2**x} />
          </Grid>
          <Grid item xs={4}>
            <Slider defaultValue={4} aria-labelledby="discrete-slider" valueLabelDisplay="auto" min={4} max={8} onChange={(event, value) => {this.setState({limitPerQuadrant: value})}} />
          </Grid>
          <Grid item xs={12} sm={4}>
          slider value: {this.state.shapesToRender}
          </Grid>
          <Grid item xs={12} sm={4}>
          Shape Updates per update: {this.debugData.calculationsPerUpdate}
          </Grid>
          <Grid item xs={12} sm={4}>
          Collision checks per update: {this.debugData.collisionChecksBetweenShapes}
          </Grid>
        </Grid>

        <canvas id="mycanvas" width={getCanvasRecommendedSize(window)} height={getCanvasRecommendedSize(window)} style={{'border': this.props.debug.border}}></canvas>

      </div>
    )
  }
}



export default QtDemo;
