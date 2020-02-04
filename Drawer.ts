declare var $: any;
class Drawer {
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        //$('<span>&nbsp;</span>').css('font-family', 'Distortion Dos Analogue').appendTo(document.body);
        //$('#captcha').css('font-family', 'Distortion Dos Analogue');
    }
    drawText(text, { x, y, color = null }, size?, angle?, font = 'Arial') {
        if (color) {
            this.ctx.fillStyle = color;
        } else {
            this.ctx.fillStyle = 'red'
        }
        size = size || 100;
        this.ctx.font = `bold ${size}px ${font}`;
        if (angle) {
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.translate(x, y);
            this.ctx.rotate(angle * Math.PI / 180)
            this.ctx.translate(-x, -y);
        }
        this.ctx.fillText(text, x, y);

    }
    drawLine(start, stop, color?) {
        this.ctx.beginPath();
        //console.log(start.x,start.y,stop.x,stop.y)
        if (color) {
            this.ctx.strokeStyle = color;
        }
        this.ctx.lineWidth = 3;
        this.ctx.moveTo(start.x, start.y);
        this.ctx.lineTo(stop.x, stop.y);
        this.ctx.stroke();
    }
    drawCircle({ x, y }, radius, color, fill) {
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
    }
    drawCollapsedText(text: string) {
        for (var i = 0; i < text.length; i++) {
            var char = text[i];
            this.drawText(char, { x: 35 + (i * 42), y: 100 + (Math.random() * 30) }, 120)
        }
    }
    randomLines(max: number,color='blue') {
        for (var i = 0; i < max; i++) {
            this.drawLine({
                x: (i * 5),
                y: 0
            }, {
                x: (i * 5),
                y: 200
            }, color)
        }
    }
    drawDistortedText(text:string){
        for (var i = 0; i < text.length; i++) {
            var char = text[i];
            this.ctx.setTransform(1, -0.2, 0, 1, 0, 0);
            this.drawText(char, { x: 35 + (i * 60), y: 100 }, 120)
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        }
    }
    randomScaledTexts(text: string) {
        for (var i = 0; i < text.length; i++) {
            var char = text[i];
            this.ctx.scale(0.5, 0.5)
            //50+(Math.random()*60)
            this.drawText(char, { x: 30 + (i * 45), y: 100 })
            this.ctx.restore()
        }
    }
    randomRotatedTexts(text: string) {
        for (var i = 0; i < text.length; i++) {
            var char = text[i];
            this.drawText(char, { x: 35 + (i * 47), y: 100 }, 110, 50 * Math.random() * (Math.random() > 0.5 ? -1 : 1))
        }
    }
    randomTextPositions(text, max: number) {
        // for (var i = 0; i < max; i++) {
        //     this.drawText(text, { x: (270 * Math.random())-40, y: 140 * Math.random() }, 20)
        // }
        for (var i = 0; i < max; i++) {
            this.drawText(text, { x: (i * 5) - 30, y: (i * 18) % 200, color: 'blue' }, 20)
        }
    }
    clear() {
        this.ctx.clearRect(-10, -10, 1000, 1000);
    }
    randomCharacterSizes(text: string) {
        for (var i = 0; i < text.length; i++) {
            var char = text[i];
            //this.ctx.scale(0.5, 0.5)
            //
            this.drawText(char, { x: 0 + (i * 57), y: 100 }, 50 + (Math.random() * 70))
            this.ctx.restore()
        }
    }
    randomColorText(text: string) {
        const colors = ['yellow', 'red', 'blue', 'green', 'orange', 'black', 'brown', 'gray']
        for (var i = 0; i < text.length; i++) {
            var char = text[i];
            //this.ctx.scale(0.5, 0.5)
            //
            var color = colors[Math.floor(Math.random() * colors.length)];
            this.drawText(char, { x: 0 + (i * 57), y: 100, color })
            this.ctx.restore()
        }
    }
    canvasBackground(img) {
        this.ctx.drawImage(img, 0, 0, 500, 200);
    }
    backgroundColor(color){
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}