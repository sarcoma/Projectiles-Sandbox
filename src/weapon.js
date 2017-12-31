import Bullet from './bullet';
import { deltaTime } from './delta-time';

export default class Weapon {

    constructor(x, y, angle, pm) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.fireRate = 5;
        this.lastFired = 0;
        this.pm = pm;
        this.rotation = 'right';
    }

    setTarget(target) {
        this.target = target;
    }

    setAngle(angle) {
        this.angle = angle;
    }

    setRotation(rotation) {
        this.rotation = rotation;
    }

    draw(ctx) {
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.beginPath();
        ctx.lineTo(10, -2);
        ctx.lineTo(10, 2);
        ctx.lineTo(0, 2);
        ctx.lineTo(0, -2);
        ctx.strokeStyle = '#000';
        ctx.stroke();
        ctx.fillStyle = '#000';
        ctx.fill();
        ctx.resetTransform();
    }

    update() {
        if((deltaTime.getElapsedTime() - this.lastFired) > this.fireRate) {
            this.fire();
            this.lastFired = deltaTime.getElapsedTime();
        }
    }

    fire() {
        const bullet = new Bullet(this.x + 10, this.y, this.angle, 0.15);
        this.pm.addParticle(bullet);
    }
}
