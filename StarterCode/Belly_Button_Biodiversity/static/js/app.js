function buildMetadata(sample) {

  // @TODO: Complete the following function that builds the metadata panel
  // Use `d3.json` to fetch the metadata for a sample
  // var url = "/metadata/<sample>";
  d3.json(`/metadata/${sample}`).then(data => {
    // Use d3 to select the panel with id of `#sample-metadata`
    var Metadata = d3.select("#sample-metadata");
    // Use `.html("") to clear any existing metadata
    Metadata.html("");
    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new tags for each key-value in the metadata.
    Object.entries(data).forEach(([key, value]) => {
      // console.log(key, value);
      Metadata.append("p").text(`${key}: ${value}`);
    });
  });

  // BONUS: Build the Gauge Chart
  // buildGauge(data.WFREQ);
};

function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots
  d3.json(`/samples/${sample}`).then((response) => {
    // var otu_ids = response.otu_ids;
    // var otu_labels = response.otu_labels;
    // var sample_values = data.sample_values;
    // @TODO: Build a Bubble Chart using the sample data
    var trace1 = {
      x: response.otu_ids,
      y: response.sample_values,
      mode: 'markers',
      marker: {
        size: response.sample_values,
        // sizeref = 2.0 * Math.max(...size) / (40 ** 2),
        sizemode: 'area'
      },
      type: 'scatter'
    };
    var data = [trace1];
    var layout = {
      title: 'Belly Button Diversity',
      showlegend: false,
      height: 600,
      width: 1000,
      // margin: { t: 0 },
      hovermode: "closest",
      xaxis: { title: "OTU ID" },
      yaxis: { title: "Sample Volume" }
    };
    Plotly.newPlot('bubble', data, layout);
    // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).
    var data = [{
      values: response.sample_values.slice(0, 10),
      labels: response.otu_ids.slice(0, 10),
      type: 'pie'
    }];
    var layout = {
      height: 400,
      width: 500
    };
    Plotly.newPlot('pie', data, layout);
  });
};

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
