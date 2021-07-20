class Boundary {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.intersects = function(_area) {
			return !(this.x + this.w < _area.x ||
					this.y + this.h < _area.y ||
					this.x >= _area.x + _area.w ||
					this.y >= _area.y + _area.h)
		}

    this.contains = function(position, size) {
      if(this.x > position.x + size.x) // LEFT SIDE OF AREA
        return false
      if(this.x + this.w < position.x) // RIGHT SIDE OF AREA
        return false
      if(this.y > position.y + size.y) // BOTTOM SIDE OF AREA
          return false
      if(this.y + this.h < position.y) // BOTTOM SIDE OF AREA
          return false
			/*if(position.x >= this.x) {
				if(position.x < this.x + this.w) {
					if(position.y >= this.y) {
						if(position.y < this.y + this.h) {
							return true;
						}
					}
				}
			}*/
			return true;
		}
  }
}
export default Boundary
