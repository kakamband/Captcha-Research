var Drawer = /** @class */ (function () {
    function Drawer(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        //$('<span>&nbsp;</span>').css('font-family', 'Distortion Dos Analogue').appendTo(document.body);
        //$('#captcha').css('font-family', 'Distortion Dos Analogue');
    }
    Drawer.prototype.drawText = function (text, _a, size, angle, font) {
        var x = _a.x, y = _a.y, _b = _a.color, color = _b === void 0 ? null : _b;
        if (font === void 0) { font = 'Arial'; }
        if (color) {
            this.ctx.fillStyle = color;
        }
        else {
            this.ctx.fillStyle = 'red';
        }
        size = size || 100;
        this.ctx.font = "bold " + size + "px " + font;
        if (angle) {
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
                x: (i * 5),
                y: 0
            }, {
                x: (i * 5),
                y: 200
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
        // for (var i = 0; i < max; i++) {
        //     this.drawText(text, { x: (270 * Math.random())-40, y: 140 * Math.random() }, 20)
        // }
        for (var i = 0; i < max; i++) {
            this.drawText(text, { x: (i * 5) - 30, y: (i * 18) % 200 }, 20);
        }
    };
    Drawer.prototype.clear = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    Drawer.prototype.randomCharacterSizes = function (text) {
        for (var i = 0; i < text.length; i++) {
            var char = text[i];
            //this.ctx.scale(0.5, 0.5)
            //
            this.drawText(char, { x: 0 + (i * 57), y: 100 }, 50 + (Math.random() * 70));
            this.ctx.restore();
        }
    };
    Drawer.prototype.randomColorText = function (text) {
        var colors = ['yellow', 'red', 'blue', 'green', 'orange', 'black', 'brown', 'gray'];
        for (var i = 0; i < text.length; i++) {
            var char = text[i];
            //this.ctx.scale(0.5, 0.5)
            //
            var color = colors[Math.floor(Math.random() * colors.length)];
            this.drawText(char, { x: 0 + (i * 57), y: 100, color: color });
            this.ctx.restore();
        }
    };
    Drawer.prototype.canvasBackground = function (img) {
        this.ctx.drawImage(img, 0, 0, 500, 200);
    };
    return Drawer;
}());
