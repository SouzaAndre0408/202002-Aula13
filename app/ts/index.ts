

let xmlhttp2 = new XMLHttpRequest();
xmlhttp2.open("GET", "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson");

xmlhttp2.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    let titulo = myObj["metadata"];
    let features = myObj["features"];


    document.write(`<h2>Count: ${titulo.count}</h2>`);
    document.write(`<h3>Title: ${titulo.title}</h3>`);

    // class="table table-striped" 
    document.write("<table border='1'>")
    document.write("<tr>");
    document.write("<th>Mag</th>");
    document.write("<th>Place</th>");
    document.write("</tr>");

    for (let j = 0; j < features.length; j++) {

      document.write("<tr><td>");
      document.write(features[j].properties.mag);
      document.write("</td><td>");
      document.write(features[j].properties.place);
      document.write("</td><tr>");
    }
    document.write("</table>");
  }

};
xmlhttp2.send();