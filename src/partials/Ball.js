import { SVG_NS } from '../settings';

export default class Ball {
    constructor(radius, boardWidth, boardHeight) {
      this.radius = radius;
      this.boardWidth = boardWidth;
      this.boardHeight = boardHeight;
      this.direction = 1;
      this.reset();
    }// constructor

    reset() {
      this.x = this.boardWidth / 2;
      this.y = this.boardHeight / 2;
      this.vy = 0;
      while(this.vy === 0){
      this.vy = Math.round(Math.random() * 10 - 5);
      }
      this.vx = this.direction * (6 - Math.abs(this.vy));
    }// reset ()

    wallCollision() {
      const hitLeft = this.x - this.radius <= 0;
      const hitRight = this.x + this.radius >= this.boardWidth;
      const hitTop = this.y - this.radius <= 0;
      const hitBottom = this.y + this.radius >= this.boardHeight;
      if (hitLeft || hitRight) {
        this.vx = -this.vx;
      } else if (hitTop || hitBottom) {
        this.vy = -this.vy;
      }
    } // wallCollision

    render(svg, player1, player2) {
      this.x += this.vx;
      this.y += this.vy;
      this.wallCollision();
      
      let circle = document.createElementNS(SVG_NS, 'circle');
      circle.setAttributeNS(null, 'fill', 'orange');
      circle.setAttributeNS(null, 'cx', this.x);
      circle.setAttributeNS(null, 'cy', this.y);
      circle.setAttributeNS(null, 'r', this.radius);


      svg.appendChild(circle);
  }// render ()

}