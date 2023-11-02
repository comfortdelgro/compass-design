export class Position {
  constructor(public x: number = 0, public y: number = 0) {}
}

export class Pointer {
  startPoint: Position = new Position()
  lastPoint: Position = new Position()
  currentPoint: Position = new Position()

  start(position: Position) {
    this.startPoint = position
  }

  update(position: Position) {
    this.currentPoint = position
  }

  end(position: Position) {
    this.lastPoint = position
    this.currentPoint = position
  }

  get distance(): Position {
    return {
      x: this.currentPoint.x - this.startPoint.x,
      y: this.currentPoint.y - this.startPoint.y,
    }
  }
}
