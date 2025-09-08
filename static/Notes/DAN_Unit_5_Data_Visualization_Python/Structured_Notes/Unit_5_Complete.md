# 5.1 Matplotlib Overview & Setup

## Introduction

Matplotlib is an open‑source Python library for creating static, interactive and animated visualisations. It offers a MATLAB‑like plotting interface through the `pyplot` module and integrates well with other libraries such as NumPy and Pandas【98554664303776†L151-L182】.

## Key features

* Supports a wide variety of plots: line, bar, scatter, histogram, pie and more.
* Highly customisable: control colours, markers, line styles, fonts and layouts.
* Enables subplots for multiple charts within one figure.
* Exports figures to formats including PNG, PDF and SVG.
* Widely used in data science, machine learning and scientific computing.

## Setup

1. **Installation** – Install via `pip install matplotlib`.
2. **Importing** – In Python, import the plotting interface using `import matplotlib.pyplot as plt`.
3. **Creating a figure and axes** – Use `plt.figure()` or `plt.subplots()` to create a figure and axes before plotting.

## Example

Create a simple line plot of sales over time:

```python
import matplotlib.pyplot as plt
months = ['Jan','Feb','Mar','Apr']
sales = [120, 150, 170, 160]
plt.plot(months, sales)
plt.xlabel('Month')
plt.ylabel('Sales (₹)')
plt.title('Monthly Sales')
plt.show()
```

## Summary

Matplotlib provides flexible and powerful tools for data visualisation in Python. Its extensive customization options and integration with the scientific Python ecosystem make it a standard library in analytics【98554664303776†L151-L182】.

## Reflection questions

1. Why is Matplotlib widely used in the data science community?
2. How do you import Matplotlib in Python?
3. What are some advantages of using subplots?

## References

[^1]: GeeksforGeeks overview of Matplotlib’s features【98554664303776†L151-L182】.
# 5.2 Basic Plotting: Line, Scatter, Bar & Histogram

## Line plot

A line plot connects data points with straight lines. Use `plt.plot(x, y)` to visualise trends over continuous variables.

## Scatter plot

A scatter plot displays individual data points without connecting lines. Use `plt.scatter(x, y)` to examine relationships between two variables.

## Bar plot

Bar charts represent categorical data. Use `plt.bar(categories, values)` for vertical bars or `plt.barh` for horizontal bars.

## Histogram

A histogram displays the frequency distribution of a continuous variable. Use `plt.hist(data, bins=number_of_bins)` to reveal the distribution’s shape. Increasing or decreasing the number of bins changes the granularity.

## Example

Suppose we have a dataset of students’ scores in math and science. We can plot:

* A **line chart** of average math scores across semesters.
* A **scatter plot** of individual math versus science scores to see if they are correlated.
* A **bar chart** of the number of students per grade category.
* A **histogram** of math scores to see the distribution.

## Summary

Matplotlib’s basic plotting functions enable quick visualisation of various data types. Selecting the appropriate plot aids interpretation and communication【98554664303776†L151-L182】.

## Reflection questions

1. When would you choose a scatter plot over a line plot?
2. How does adjusting the number of bins affect a histogram?
3. Describe differences between vertical and horizontal bar charts.

## References

[^1]: GeeksforGeeks summary of Matplotlib capabilities【98554664303776†L151-L182】.
# 5.3 Customizing Axes, Figure Size & Aspect Ratio

## Axis labels and title

Use `plt.xlabel()` and `plt.ylabel()` to add axis labels, and `plt.title()` for a chart title. You can specify font size, colour and rotation.

## Axis limits

Set axis ranges using `plt.xlim(min, max)` and `plt.ylim(min, max)`. Adjusting limits focuses on relevant regions and can improve interpretability.

## Figure size

Control the overall size of the figure using `plt.figure(figsize=(width, height))`, where width and height are measured in inches. Larger figures prevent clutter when plotting multiple subplots.

## Aspect ratio

The aspect ratio (width‑to‑height ratio) influences how your plot looks. You can create square plots or elongate them for better readability. Use the `aspect` parameter in axes or adjust the figure size accordingly.

## Example

Create a scatter plot of height versus weight with:

* x‑axis labelled “Height (cm)” and y‑axis labelled “Weight (kg)”,
* Title “Height vs Weight”,
* Axis limits set to focus on the range 150–200 cm and 50–100 kg, and
* Figure size of 8×6 inches.

## Summary

Customising axes and figure layout improves the readability and aesthetics of plots. Properly labelled axes and appropriately sized figures help viewers interpret results【98554664303776†L151-L182】.

## Reflection questions

1. Why is it important to label axes and title your charts?
2. How can adjusting axis limits change the perception of the data?
3. Describe how to create a square plot in Matplotlib.

## References

[^1]: General guidance on Matplotlib customisation【98554664303776†L151-L182】.
# 5.4 Exporting & Saving Visualisations

## Saving plots

Matplotlib can save plots to various formats using `plt.savefig(filename, dpi=resolution)` before `plt.show()`. Supported formats include PNG, PDF, SVG and JPEG.

* **PNG** – Lossless image format suitable for presentations.
* **PDF** – High‑quality vector format for reports and printing.
* **SVG** – Vector graphics ideal for web and publications.

Set `dpi` (dots per inch) to control image resolution (for example, 300 dpi for print).

## Workflow

1. Create and customise the plot as usual.
2. Call `plt.savefig('figure.png', dpi=300, bbox_inches='tight')` to save the figure. The `bbox_inches` parameter trims extra whitespace.
3. Optionally call `plt.show()` to display the plot in an interactive window.

## Example

Generate a histogram of exam scores and save it as a PDF:

```python
import matplotlib.pyplot as plt
plt.hist(scores, bins=10)
plt.xlabel('Score')
plt.ylabel('Frequency')
plt.title('Distribution of Exam Scores')
plt.savefig('exam_scores.pdf', dpi=300, bbox_inches='tight')
```

## Summary

Saving visualisations ensures that analyses are reproducible and shareable. Choosing appropriate file formats and resolutions is essential for professional reporting【98554664303776†L151-L182】.

## Reflection questions

1. When might you prefer saving a figure as SVG rather than PNG?
2. Why should `plt.savefig()` be called before `plt.show()` in scripts?
3. What does the `dpi` parameter control?

## References

[^1]: General information on exporting figures from Matplotlib【98554664303776†L151-L182】.
