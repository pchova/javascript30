//set up all the global variables
const toolboxWidth = document.querySelector('section.toolbox').offsetWidth
let canvas = null
let bgColor = '#FFF0F5'
let selectedTool = 'pen'

let brushSelector = null

function setup() {
    //create the brush selector as a <select> tag
    brushSelector = createSelect()

    //select the styles category in the toolbox
    const paintStyles = select('section.toolbox div.styles-tools')

    //put the brush selector dropdown menu inside of the Styles container
    brushSelector.parent(paintStyles)

    //make an array of all the paintbrushes function names
    const brushes = [
        'pen',
        'marker',
        'beads',
        'rainbowBeads',
        'wiggle',
        'toothpick',
        'fountainPen',
        'splatter',
        'sprayPaint'
    ]

    //add in the paintbrush function names as menu options
    brushes.forEach(function (brush) {
    brushSelector.option(brush)
    })

    //set initial value of the selected paintbrush
    selectedTool = brushSelector.value()

    brushSelector.changed(function () {
        selectedTool = brushSelector.value()
    })

    //set up the canvas
    canvas = createCanvas(windowWidth - toolboxWidth, windowHeight)
    canvas.parent(select('section.canvas'))
    background(bgColor)
}

function draw() {
    //check if mouse button is pressed and mouse is hovering
    //over canvas container
    if (mouseIsPressed && mouseX <= windowWidth - toolboxWidth) {
        //draw on the canvas 
        window[selectedTool]()
    }
}