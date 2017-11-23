$(document).ready(function() {
  const colorPicker = $("#colorPicker");
  const pixels = $("#pixel_canvas");
  
  function makeGrid(height, width) {
    // Get rid of the old grid first
    pixels.empty();
    
    for (let i = 0; i < height; i++) {
      // Create rows based on height
      const row = $("<tr>").appendTo(pixels);
      
      for (let j = 0; j < width; j++) {
        // Create columns based on width and add them to the rows
        $("<td>").appendTo(row);
      }
    }
    
  }
  
  // When size is submitted by the user, call makeGrid()
  $("#sizePicker").submit(function(e) {
    e.preventDefault();
    
    const inputHeight = $("#input_height").val();
    const inputWidth = $("#input_width").val();

    makeGrid(inputHeight, inputWidth);
  });

  // Event listener for grid squares
  $(pixels).click(function(e) {
    const color = colorPicker.val();
    const clickedSquare = e.target;
    
    // Change background color of clicked square
    $(clickedSquare).css("background-color", color);
  });

});