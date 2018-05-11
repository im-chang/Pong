import { SVG_NS } from '../settings';

export default class Ball {
    constructor(radius, boardWidth, boardHeight) {
      this.radius = radius;
      this.boardWidth = boardWidth;
      this.boardHeight = boardHeight;
      this.direction = 1;
      this.reset();
    }

    reset() {
      this.x = this.boardWidth / 2;
      this.y = this.boardHeight / 2;
      this.vy = Math.round(Math.random() * 10 - 5);
      this.vx = this.direction * (6 - Math.abs(this.vy));
    }

    render(svg, player1, player2) {
      this.x += this.vx;
      this.y += this.vy;
      
      let circle = document.createElementNS(SVG_NS, 'circle');
      circle.setAttributeNS(null, 'fill', 'orange');
      circle.setAttributeNS(null, 'cx', this.x);
      circle.setAttributeNS(null, 'cy', this.y);
      circle.setAttributeNS(null, 'r', this.radius);


      svg.appendChild(circle);
  }

}