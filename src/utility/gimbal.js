import Vector from '../service/vector';

export default class Gimbal {

    constructor(angleLimit, turningSpeed) {
        this.vector = new Vector(0, 0);
        this.vector.setAngle(0);
        this.vector.setLength(5);
        this.rotation = 'right';
        this._angleLimit = angleLimit;
        this.turningSpeed = turningSpeed;
    }

    get angleLimit() {
        return this._angleLimit;
    }

    update() {
        switch(true) {
            case this.rotation === 'right' &&
            this.vector.getAngle() < this._angleLimit:
                this.vector.setAngle(this.vector.getAngle() +
                    this.turningSpeed);
                break;
            case this.rotation === 'left' &&
            this.vector.getAngle() > -this._angleLimit:
                this.vector.setAngle(this.vector.getAngle() -
                    this.turningSpeed);
                break;
            case this.rotation === 'right' &&
            this.vector.getAngle() > this._angleLimit:
                this.rotation = 'left';
                break;
            case this.rotation === 'left' &&
            this.vector.getAngle() < -this._angleLimit:
                this.rotation = 'right';
                break;
        }
    }
}