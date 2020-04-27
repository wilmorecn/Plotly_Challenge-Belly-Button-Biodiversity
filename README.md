# Plot.ly Homework - Belly Button Biodiversity

![Bacteria by filterforge.com](Images/bacteria_by_filterforgedotcom.jpg)

Building an interactive dashboard to explore the [Belly Button Biodiversity DataSet](http://robdunnlab.com/projects/belly-button-biodiversity/).

## Step 1 - Plotly.js

Use Plotly.js to build interactive charts for your dashboard.

* Created a PIE chart that uses data from the Belly Button Biodiversity Dataset to display the top 10 samples.

  * Use `sample_values` as the values for the PIE chart.

  * Use `otu_ids` as the labels for the pie chart.

  * Use `otu_labels` as the hovertext for the chart.

  ![PIE Chart](Images/pie_chart.png)

* Created a Bubble Chart that uses data from the Belly Button Biodiversity Dataset to display each sample.

  * Use `otu_ids` for the x values.

  * Use `sample_values` for the y values.

  * Use `sample_values` for the marker size.

  * Use `sample_values` for the marker colors.

  * Use `otu_labels` for the text values.

  ![Bubble Chart](Images/bubble_chart.png)

* Display the sample metadata from each key/value pair from the metadata JSON object somewhere on the page.

* All of the plots update any time that a new sample is selected.

![Example Dashboard Page](Images/dashboard_part1.png)
![Example Dashboard Page](Images/dashboard_part2.png)

## Step 2 - Flask API and Heroku

* Heroku is used to deploy the flask app utilizing sqlite for the database.

* Used Flask API starter code to serve the data needed for your plots.

* Update the chart whenever a new sample is selected.

* Tested all routes by visiting each one in the browser.

* Used `console.log` inside of your JavaScript code to see what the data looks like at each step.

* Refered to the [Plotly.js Documentation](https://plot.ly/javascript/) throughout the process when building the plots.
