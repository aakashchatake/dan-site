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
