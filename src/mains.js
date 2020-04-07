import sketch from 'sketch'
var document = sketch.getSelectedDocument()
var selectedLayers = document.selectedLayers;
var sg = sketch.getSelectedDocument().selectedLayers.layers[0].sketchObject;
var sg_s=sketch.getSelectedDocument().selectedLayers.layers[0]


// documentation: https://developer.sketchapp.com/reference/api/

// export default function() {
//   sketch.UI.message("It's alive 🙌")
// }



function roundoff(h){
      
  if ((h% 1) > 0.5) {var h = Math.ceil(h);} 
  else {h = Math.floor(h);}
  return h
}


function iter(layer) {

  if (layer.layers) {
    layer.layers.forEach(iter);
  }


  if (layer.type == "Text") { 
    var fs=layer.style.fontSize
      
    layer.style.fontSize=roundoff(fs)}
  
  if (layer.type == "ShapePath") { 
    var w=layer.frame.width
    var h=layer.frame.height  
    layer.frame.width=roundoff(w)
    layer.frame.height=roundoff(h)

    var points=layer.points
    if(points){
    points.forEach(function(point){
        var cr=point.cornerRadius

        point.cornerRadius=roundoff(cr)
    })}
    }
}


export default function onRun(context){
iter(selectedLayers.layers[0] )
log("done")
}

