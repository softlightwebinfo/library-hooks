export class Bind {
    constructor(
        private target: any,
        private name: string,
        private handler: Function
    ) {
    }

    bind() {
        if (this.target.addEventListener) {
            this.target.addEventListener(this.name, this.handler, false);
        } else if (this.target.attachEvent) {
            this.target.attachEvent("on" + this.name, this.handler);
        } else {
            this.target["on" + this.name] = this.handler;
        }
    };

    unbind() {
        if (this.target.removeEventListener) {
            this.target.removeEventListener(this.name, this.handler, false);
        } else if (this.target.detachEvent) {
            this.target.detachEvent("on" + this.name, this.handler);
        } else {
            this.target["on" + this.name] = null;
        }
    };
}
