/* setup() sets up our painting canvas. 
        It runs only once at the start of the program.
        */
        function setup() {
            createCanvas(windowWidth, windowHeight)
            background('#FFF0F5')
        }

        /* draw() is like the hand that moves the paintbrush around the canvas.
        It runs repeatedly.
        */
        function draw() {
            if (mouseIsPressed) {
            beads()
            }
        }