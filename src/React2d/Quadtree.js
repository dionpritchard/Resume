import Boundary from './Boundary';


const limitPerOctant = 4;
class Quadtree {
  constructor(boundary, depth, debug, limit) {
      this.boundary = boundary
      this.depth = depth
      this.debug = debug
      this.limit = limit

      this.nw = null
      this.ne = null
      this.sw = null
      this.se = null
      this.shapes = []

      this.isDivided = function() {
        return (this.nw != null)
      }
      this.insert = function(shape) {
        this.shapes.push(shape)
        //console.log(`Inserting ${shape.position.x}, ${shape.position.y}.`)

        if (this.isDivided()) {
          this.redistribute()
        }
        if(this.shapes.length >= this.limit)
        {
          this.subdivide()
        }
      }
      this.subdivide = function() {
        let half_width = this.boundary.w / 2
        let half_height = this.boundary.h / 2

        let nwBounds = new Boundary(this.boundary.x, this.boundary.y, half_width, half_height)
  			let neBounds = new Boundary(this.boundary.x+half_width, this.boundary.y, half_width, half_height)
  			let swBounds = new Boundary(this.boundary.x, this.boundary.y+half_height, half_width, half_height)
  			let seBounds = new Boundary(this.boundary.x+half_width, this.boundary.y+half_height, half_width, half_height)

        this.nw = new Quadtree(nwBounds, this.depth+1, this.debug, this.limit)
        this.ne = new Quadtree(neBounds, this.depth+1, this.debug, this.limit)
        this.sw = new Quadtree(swBounds, this.depth+1, this.debug, this.limit)
        this.se = new Quadtree(seBounds, this.depth+1, this.debug, this.limit)

        this.redistribute()

      }

      this.query = function(_area, array) {
        if(!this.boundary.intersects(_area)) {
          return array
        }
        for(let i = 0; i < this.shapes.length; i += 1) {
          if(_area.contains(this.shapes[i].position, this.shapes[i].size)) {
  					array.push(this.shapes[i])
  				}
        }
        if(this.isDivided()) {
  				array = this.nw.query(_area, array)
  				array = this.ne.query(_area, array)
  				array = this.sw.query(_area, array)
  				array = this.se.query(_area, array)

  			}

  			return array
      }

      this.update = function(context, fullQt, debugData) {
          if(this.isDivided()) {
            debugData = this.nw.update(context, fullQt, debugData)
            debugData = this.ne.update(context, fullQt, debugData)
            debugData = this.sw.update(context, fullQt, debugData)
            debugData = this.se.update(context, fullQt, debugData)
          }
          else {
            for (let index in this.shapes) {
              debugData.calculationsPerUpdate += 1
              let shape = this.shapes[index]
              let shape_boundary = new Boundary(shape.position.x - shape.size.x,
                                                shape.position.y - shape.size.y,
                                                shape.size.x*3,
                                                shape.size.y*3)
              //context.strokeStyle = 'red'
              //context.strokeRect(shape_boundary.x, shape_boundary.y, shape_boundary.w, shape_boundary.h)
              let nearby_objs = []
              nearby_objs = fullQt.query(shape_boundary, nearby_objs)
              shape.color = shape.defaultColor
              if(nearby_objs.length > 1) {
                for(let i = 0; i < nearby_objs.length; i += 1) {
                  let obj = nearby_objs[i]
                  debugData.collisionChecksBetweenShapes += 1
                  if(shape.position.x == obj.position.x && shape.position.y == obj.position.y) {
                    // do nothing (this is only if the shape is checking collisions with itself)
                  }
                  else {
                    if(shape.position.x > obj.position.x + obj.size.x ||
                      shape.position.x + shape.size.x < obj.position.x ||
                      shape.position.y > obj.position.y + obj.size.y ||
                        shape.position.y + shape.size.y < obj.position.y
                    ) { // LEFT SIDE OF AREA
                      //shape.color = shape.defaultColor
                      //context.fillText('!NOCOL!', shape.position.x, shape.position.y-16)
                    }
                    else {
                      shape.color = shape.collisionColor
                      //context.fillText('!COL!', shape.position.x, shape.position.y-16)
                      break;
                    }
                  }
                }
              }

              //context.fillStyle = 'black'
              //context.fillText(''+nearby_objs.length-1, shape.position.x, shape.position.y)
              shape.update(context)

    					//context.fillStye = 'rgba(120,120,255,0.4)'
    					//context.fillRect(shape.position.x, shape.position.y, 5, 5)

            }
          }
          return debugData
      }

      this.render = function(context) {

        if(true) {
          context.strokeStyle = 'rgba(0,0,0,0.1)'
    			context.strokeRect(this.boundary.x, this.boundary.y, this.boundary.w, this.boundary.h)
    			context.strokeStyle = 'black'
        }


  			if(this.isDivided()) {
  				this.nw.render(context)
  				this.ne.render(context)
  				this.sw.render(context)
  				this.se.render(context)

  			}
  			else {
  				for(let index in this.shapes) {
  					let shape = this.shapes[index]
            shape.render(context)
//  					context.fillStyle = shape.color
  					//context.fillRect(shape.position.x, shape.position.y, shape.size.x, shape.size.y)

  				}
  			}
  		}


      this.redistribute = function() {
  			for(let index in this.shapes) {
  				let shape = this.shapes[index]
  				if(QuadContains (this.nw.boundary, shape.position)) {
  					this.nw.insert(shape);
  				}
  				else if(QuadContains (this.ne.boundary, shape.position)) {
  					this.ne.insert(shape);
  				}
  				else if(QuadContains (this.sw.boundary, shape.position)) {
  					this.sw.insert(shape);
  				}
  				else if(QuadContains (this.se.boundary, shape.position)) {
  					this.se.insert(shape);
  				}


  				else {
  					console.log("FATAL ERROR: Couldn't delegate quadrant for interactPoint");
  					console.log(`Shape: ${shape.position.x.toFixed(4)}, ${shape.position.y.toFixed(4)}`);

  					let bnds = this.boundary

  					console.log(`Quadrant: ${bnds.x.toFixed(3)}, ${bnds.y.toFixed(3)}, ${bnds.w.toFixed(3)}, ${bnds.h.toFixed(3)}`);
  				}
  			}
  			this.shapes.length = 0;
  		}

  }

}

function QuadContains(boundary, position) {
	if(position.x >= boundary.x) {
		if(position.x <= boundary.x + boundary.w) {
			if(position.y >= boundary.y) {
				if(position.y <= boundary.y + boundary.h) {
					return true;
				}
			}
		}
	}
	return false;
}

export default Quadtree
