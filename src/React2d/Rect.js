import Boundary from '../React2d/Boundary';
import Vector2 from '../React2d/Vector2';

class Rect {
  constructor(position, size, velocity, boundaries) {
    this.defaultColor = 'rgba(0,0,0,1)'
    this.collisionColor = 'rgba(255,0,0,1)'
    this.color = this.defaultColor
    this.position = new Vector2(position.x | 0, position.y | 0)
    this.size = new Vector2(size.x || 20, size.y || 20)
    this.velocity = new Vector2(velocity.x | 0, velocity.y | 0)
    this.boundaries = new Boundary(boundaries.x, boundaries.y, boundaries.w, boundaries.h)

    this.checkBoundaries = () => {
      if(this.position.x < this.boundaries.x) {
        let distance = (this.boundaries.x - this.position.x)
        this.position.x += distance
        this.velocity.x = Math.abs(this.velocity.x)
      }
      else if (this.position.x + this.size.x > this.boundaries.w) {
        let distance = (this.position.x+this.size.x - this.boundaries.w)
        this.position.x -= distance
        this.velocity.x = -Math.abs(this.velocity.x)
      }

      if(this.position.y < this.boundaries.y) {
        let distance = (this.boundaries.y - this.position.y)
        this.position.y += distance
        this.velocity.y = Math.abs(this.velocity.y)
      }
      else if (this.position.y + this.size.y > this.boundaries.h) {
        //console.log(`Rect was about to leave bounds ${this.position.x}, ${this.position.y} | ${this.boundaries.w}, ${this.boundaries.h}`)
        let distance = (this.position.y+this.size.y - this.boundaries.h)
        this.position.y -= distance
        this.velocity.y = -Math.abs(this.velocity.y)
      }



    }
    this.update = (context) => {

      this.position.x = this.position.x + this.velocity.x;
      this.position.y = this.position.y + this.velocity.y;

      this.checkBoundaries()
    }
    this.render = (context) => {
      context.fillStyle = this.color
      context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y)
      //context.strokeRect(this.position.x, this.position.y, this.size.x, this.size.y)
    }
  }
}

export default Rect
