var Drawer = /** @class */ (function () {
    function Drawer(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
    }
    Drawer.prototype.drawText = function (text, _a, size, angle) {
        var x = _a.x, y = _a.y;
        this.ctx.fillStyle = 'red';
        size = size || 100;
        this.ctx.font = "normal " + size + "px Arial";
        if (angle) {
            //this.ctx.textAlign='center'
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.translate(x, y);
            this.ctx.rotate(angle * Math.PI / 180);
            this.ctx.translate(-x, -y);
        }
        this.ctx.fillText(text, x, y);
    };
    Drawer.prototype.drawLine = function (start, stop, color) {
        this.ctx.beginPath();
        //console.log(start.x,start.y,stop.x,stop.y)
        if (color) {
            this.ctx.strokeStyle = color;
        }
        this.ctx.lineWidth = 3;
        this.ctx.moveTo(start.x, start.y);
        this.ctx.lineTo(stop.x, stop.y);
        this.ctx.stroke();
    };
    Drawer.prototype.drawCircle = function (_a, radius, color, fill) {
        var x = _a.x, y = _a.y;
        this.ctx.beginPath();
        if (color) {
            this.ctx.fillStyle = color;
        }
        this.ctx.arc(x, y, radius, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
        if (fill) {
            this.ctx.fill();
        }
        else
            this.ctx.stroke();
    };
    Drawer.prototype.drawCollapsedText = function (text) {
        for (var i = 0; i < text.length; i++) {
            var char = text[i];
            this.drawText(char, { x: 35 + (i * 42), y: 100 + (Math.random() * 30) }, 120);
        }
    };
    Drawer.prototype.randomLines = function (max) {
        for (var i = 0; i < max; i++) {
            this.drawLine({
                x: 70 * Math.random(),
                y: 100 * Math.random()
            }, {
                x: 450 * Math.random(),
                y: 200 * Math.random()
            }, 'red');
        }
    };
    Drawer.prototype.randomScaledTexts = function (text) {
        for (var i = 0; i < text.length; i++) {
            var char = text[i];
            this.ctx.scale(0.5, 0.5);
            //50+(Math.random()*60)
            this.drawText(char, { x: 30 + (i * 45), y: 100 });
            this.ctx.restore();
        }
    };
    Drawer.prototype.randomRotatedTexts = function (text) {
        for (var i = 0; i < text.length; i++) {
            var char = text[i];
            this.drawText(char, { x: 35 + (i * 47), y: 100 }, 110, 50 * Math.random() * (Math.random() > 0.5 ? -1 : 1));
        }
    };
    Drawer.prototype.randomTextPositions = function (text, max) {
        for (var i = 0; i < max; i++) {
            this.drawText(text, { x: 270 * Math.random(), y: 140 * Math.random() }, 20);
        }
    };
    Drawer.prototype.clear = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    return Drawer;
}());
