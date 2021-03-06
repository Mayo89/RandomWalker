function Walker() {
    this.x = width / 2;
    this.y = height / 2;

    this.render = function () {
        stroke(0);
        point(this.x, this.y);
    }

    this.step = function() {
        var choice = Math.floor(random(4));

        if (choice == 0)
            this.x++;
        else if (choice == 1)
            this.x--;
        else if (choice == 2) 
            this.y++;
        else if (choice == 3)
            this.y--;

        this.x = constrain(this.x, 0, width - 1);
        this.y = constrain(this.y, 0, height - 1);

    }
}


