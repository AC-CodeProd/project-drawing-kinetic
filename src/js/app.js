$(document).ready(function() {
    var colorSelect;
    var layer = new Kinetic.Layer();
    var layerPalette = new Kinetic.Layer({
        x: 600,
        y: 50
    });
    var layerCurrentColor = new Kinetic.Layer({
        x: 655,
        y: 400
    });
    var rectCurrentColor = new Kinetic.Rect({
        width: 250,
        height: 50,
         y: 40,
        fill: "#FFF",
        stroke: 'black',
        strokeWidth: 2
    });
    var text = new Kinetic.Text({
        text: 'Couleur sélectionnée : ',
        fontSize: 30,
        fill: '#000'
    });
    layerCurrentColor.add(text,rectCurrentColor);
    var stage = new Kinetic.Stage({
        width: 1024,
        height: 512,
        container: 'canvas'
    });

    for (var i = 0, max = datas.length; i < max; i++) {
        var path = new Kinetic.Path({
            data: datas[i].path,
            fill: "#FFF",
            stroke: 'black',
            strokeWidth: 2
        });
        path.on('click', function(event) {
            console.log(event);
            this.fill(colorSelect);
            layer.draw();
        });
        layer.add(path);
    };
    var y = 50 + 5;
    var x = 50 + 5;
    for (var i = 0; i < maPalette.length; i++) {
        if (i % 5 == 0) {
            y = i * 10;
            x = 50 + 5;
        } else {
            x = x + 50;
        }
        var rect = new Kinetic.Rect({
            x: x,
            y: y,
            width: 50,
            height: 50,
            fill: maPalette[i],
            stroke: 'black',
            strokeWidth: 2
        });
        rect.on('click', function(event) {
            colorSelect = event.target.attrs.fill;
            rectCurrentColor.fill(colorSelect);
            layerCurrentColor.draw();
        });
        layerPalette.add(rect);
    };

    stage.add(layer, layerPalette, layerCurrentColor);
});