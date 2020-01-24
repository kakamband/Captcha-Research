function showColorBG(captcha, cb) {
    image.onload = function () {
        captcha.canvasBackground(image)
        cb();
    }
}
/**
 * 
 * @param {String} code 
 * @param {Drawer} captcha 
 * @param {String} captchastring 
 */
function drawCaptcha(code, captcha, captchastring) {
    switch (code) {
        case 'character_collapse_no_bg':
            captcha.randomRotatedTexts(captchastring);
            break;
        case 'character_collapse_with_bg':
            showColorBG(captcha, () => captcha.randomRotatedTexts(captchastring));
            break;
        case 'character_collapse_with_bg_noise':
            captcha.randomTextPositions("captcha", 60);
            captcha.randomRotatedTexts(captchastring);
            break;
        case 'text_distortion_no_bg':
            fontSpy(["Distortion Dos Analogue"], function (loadedFonts) {
                captcha.drawText(captchastring, { x: 10, y: 100, color: null }, 110, null, "Distortion Dos Analogue")
            });
            break;
        case 'text_distortion_with_bg':
            fontSpy(["Distortion Dos Analogue"], function (loadedFonts) {
                showColorBG(captcha, () => captcha.drawText(captchastring, { x: 10, y: 100, color: null }, 110, null, "Distortion Dos Analogue"));
            });
            break;
        case 'text_distortion_with_bg_noise':
            fontSpy(["Distortion Dos Analogue"], function (loadedFonts) {
                captcha.randomTextPositions("captcha", 60);
                captcha.drawText(captchastring, { x: 10, y: 100, color: null }, 110, null, "Distortion Dos Analogue")
            });
            break;
        case 'random_lines_no_bg':
            captcha.randomLines(100);
            captcha.drawText(captchastring, { x: 20, y: 100 });
            break;
        case 'random_lines_with_bg':

            showColorBG(captcha, () => {
                captcha.randomLines(100);
                captcha.drawText(captchastring, { x: 20, y: 100 })
            });
            break;
        case 'random_lines_with_bg_noise':
            captcha.randomLines(100, 'green');
            captcha.randomTextPositions("captcha", 60);
            captcha.drawText(captchastring, { x: 20, y: 100 })
            break;
        case 'character_fragmentation_no_bg':
            fontSpy(["Teleindicadores1"], function (loadedFonts) {
                //captcha.canvasBackground(image);
                captcha.drawText(captchastring, { x: 5, y: 100 }, 130, null, "Teleindicadores1")
            });
            break;
        case 'character_fragmentation_with_bg':
            showColorBG(captcha, () => {
                fontSpy(["Teleindicadores1"], function (loadedFonts) {
                    captcha.drawText(captchastring, { x: 5, y: 100, color: 'blue' }, 130, null, "Teleindicadores1")
                });
            });
            break;
        case 'character_fragmentation_with_bg_noise':
            fontSpy(["Teleindicadores1"], function (loadedFonts) {
                captcha.randomTextPositions("captcha", 60);
                captcha.drawText(captchastring, { x: 5, y: 100 }, 130, null, "Teleindicadores1")
            });
            break;
        case 'colored_texts':
            captcha.randomColorText(captchastring);
            break;
        case 'colored_texts_with_bg':
            showColorBG(captcha, () => captcha.randomColorText(captchastring));
            break;
        case 'background_noise_no_bg':
            captcha.randomTextPositions("captcha", 60);
            captcha.drawText(captchastring, { x: 20, y: 100 })
            break;
        case 'coloured_background_noise_coloured_characters':
            showColorBG(captcha, () => {
                captcha.randomTextPositions("captcha", 60);
                captcha.randomColorText(captchastring)
            });
            break;
        default:
            alert("Error")
            break;
    }
}