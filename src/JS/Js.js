var s = window.screen; //Переменная для выясняющая размер вашего экрана 
var width = matri.width = s.width - 25;
var height = matri.height = s.height - 25;
var letters = Array(256).join(1).split('');

var draw = function() {
    matri.getContext('2d').fillStyle = 'rgba(0,0,0,.05)'; //Тут цвет фона
    matri.getContext('2d').fillRect(0, 0, width, height);
    matri.getContext('2d').fillStyle = '#0F0'; //Тут цвет букв
    letters.map(function(y_pos, index) {
        text = String.fromCharCode(65 + Math.random() * 33);
        x_pos = index * 10;
        matri.getContext('2d').fillText(text, x_pos, y_pos);
        letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 5;
    });
};

setInterval(draw, 33);