import Particle from '../abstract/particle';

export default class SevenSixTwoMM extends Particle {
    constructor(x, y, angle, velocity) {
        super(x, y, 50, 2, angle);
        this.damage = 17;
        this.velocity.addTo(velocity);
    }
}