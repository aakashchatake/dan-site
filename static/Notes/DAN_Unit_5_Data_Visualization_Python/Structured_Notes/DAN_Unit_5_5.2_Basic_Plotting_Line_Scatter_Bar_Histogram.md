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
