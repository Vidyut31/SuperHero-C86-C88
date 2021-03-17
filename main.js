var canvas = new fabric.Canvas("myCanvas");

superhero_x = 10;
superhero_y = 10;

superhero_height = 30;
superhero_width = 30;

superhero_image = ""
superhero_raw_image = ""

function superhero_update() {
    fabric.Image.fromURL("Avenger Background Image.jpg", function (Img) {
        superhero_image = Img;
        superhero_image.scaleToWidth(150),
            suuperhero_image.scaleToHeight(140),
            superhero_image.set({
                top: superhero_y,
                left: superhero_x
            });
        canvas.add(superhero_image)
    });
}

function block_update() {
    fabric.Image.fromURL("Player.png", function (Img) {
        superhero_raw_image = Img;
        superhero_raw_image.scaleToWidth(140),
            superhero_raw_image.scaleToHeight(150),
            superhero_raw_image.set({
                top: superhero_y,
                left: superhero_x
            });
        canvas.add(superhero_raw_image)
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        superhero_image = Img;

        superhero_image.scaleToWidth(superhero_width);
        superhero_image.scaleToHeight(superhero_height);
        superhero_image.set({
            top: superhero_y,
            left: superhero_x
        });
        canvas.add(superhero_image);

    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPress = e.keyCode;

    console.log("When any key is pressed = " + keyPress);

    if (e.shiftKey == true && keyPress == "80") {
        console.log("When shift and p is pressed Increase size")
        superhero_height = superhero_height + 10;
        superhero_width = superhero_width + 10;
        document.getElementById("current-width").innerHTML = superhero_width;
        document.getElementById("current-height").innerHTML = superhero_height;
    }

    if (e.shiftKey == true && keyPress == "77") {
        console.log("When shift and m is pressed Decrease size")
        superhero_width = superhero_width - 10;
        superhero_height = superhero_height - 10;
        document.getElementById("current-width").innerHTML = superhero_width;
        document.getElementById("current-height").innerHTML = superhero_height;
    }

    if (keyPress == '38') {
        up()
        console.log("up")
    }

    if (keyPress == '40') {
        down()
        console.log("down")
    }

    if (keyPress == '37') {
        left()
        console.log("left")
    }

    if (keyPress == '39') {
        right()
        console.log("right")
    }

    if (keyPress == '70') {
        new_image("ironman_face.png");
        console.log("f")
    }


    if (keyPress == '66') {
        new_image("spiderman_body.png");
        console.log("b")
    }

    if (keyPress == '76') {
        new_image("hulk_legs.png");
        console.log("l")
    }

    if (keyPress == '82') {
        new_image("thor_right_hand.png");
        console.log("r")
    }

    if (keyPress == '72') {
        new_image("captain_america_left_hand.png");
        console.log("h")
    }
}

function up() {
    if (superhero_y >= 0) {
        superhero_y = superhero_y - superhero_height;
        console.log("Superhero height = " + superhero_height);
        console.log("When up arrow key is pressed, X = " + superhero_x + " | Y = " + superhero_y);
        canvas.remove(superhero_raw_image);
        block_update();
    }
}

function down() {
    if (superhero_y <= 700) {
        superhero_y = superhero_y + superhero_height;
        console.log("Superhero height = " + superhero_height);
        console.log("When down arrow key is pressed, X = " + superhero_x + " | Y = " + superhero_y);
        canvas.remove(superhero_raw_image);
        block_update();
    }
}

function left() {
    if (superhero_x >= 0) {
        superhero_x = superhero_x - superhero_width;
        console.log("Superhero width = " + superhero_width);
        console.log("When left arrow key is pressed, X = " + superhero_x + " | Y = " + superhero_y);
        canvas.remove(superhero_raw_image);
        block_update();
    }
}

function right() {
    if (superhero_x <= 900) {
        superhero_x = superhero_y + superhero_width;
        console.log("Superhero width = " + superhero_width);
        console.log("When right arrow key is pressed, X = " + superhero_x + " | Y = " + superhero_y);
        canvas.remove(superhero_raw_image);
        block_update();
    }
}