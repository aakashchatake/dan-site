# 3.1 Excel Dashboard: Tables, Filters & Forecasting

## Excel dashboards

An **Excel dashboard** is a visual summary of key metrics displayed on a single screen. It combines tables, charts and filters to allow users to monitor trends and make decisions.

## Tables

* Use **Excel tables** to structure data with headers and automatic formatting. Tables make it easier to sort, filter and reference data.
* Formulas entered in one row automatically fill down the table, ensuring consistency.

## Filters

* Apply **filters** to focus on relevant subsets of data. Use the filter dropdowns in table headers to include or exclude specific values.
* **Slicers** (discussed in Unit 3.5) provide button‑based filters for dashboards.

## Forecasting

Excel offers forecasting tools such as the **FORECAST** function and the **Forecast Sheet** (Data > Forecast). These tools extrapolate future values based on historical data using linear regression. They can estimate future sales or resource needs.

## Example

A sales dashboard might display a table summarising monthly revenue by region, a line chart showing trends over time and filters for region and product category. A forecast sheet projects next quarter’s revenue based on past data.

## Summary

Dashboards in Excel integrate tables, filters and forecasting tools to provide at‑a‑glance insights and interactive exploration.

## Reflection questions

1. What advantages do Excel tables offer over regular ranges?
2. How can filtering improve the usefulness of a dashboard?
3. Describe a situation where forecasting would be valuable in a dashboard.

## References

[^1]: General Excel functionality synthesised from official documentation.
# 3.2 Pivot Tables: Creation & Specification

## Creating a pivot table

To summarise large datasets efficiently, create a **pivot table**:

1. **Select the data range** including column headers.
2. Go to **Insert > PivotTable**.
3. Choose where to place the pivot table (new worksheet or existing one)【344251626652819†L270-L305】.
4. In the **PivotTable Fields** pane, drag fields to the **Rows**, **Columns** and **Values** areas【344251626652819†L341-L400】.

## Specification and configuration

* **Rows area** – Fields placed here define row labels.
* **Columns area** – Fields placed here define column labels.
* **Values area** – Numerical fields summarised using functions such as Sum, Count, Average or custom calculations.
* **Filters area** – Fields used to filter the entire pivot table.

Pivot tables can also be built from external data sources such as Excel Data Model or Power BI【344251626652819†L341-L400】.

## Example

Summarise sales data by dragging **Region** to Rows, **Quarter** to Columns and **Revenue** to Values. The pivot table will display total revenue for each region by quarter.

## Summary

Pivot tables allow users to rapidly rearrange and summarise data without writing formulas. Proper specification of fields enables flexible analysis of multidimensional data【344251626652819†L270-L305】.

## Reflection questions

1. What is the purpose of the Values area in a pivot table?
2. How can filters enhance pivot table analysis?
3. Describe the steps required to create a pivot table from a dataset.

## References

[^1]: Microsoft support instructions on creating pivot tables【344251626652819†L270-L305】【344251626652819†L341-L400】.
# 3.3 Pivot Table Operations: Filtering, Sorting & Calculations

## Filtering

Use the filter drop‑downs in pivot tables to include or exclude categories. You can filter row or column labels and use **Label Filters** or **Value Filters** to show top/bottom items. **Slicers** (see Unit 3.5) provide user‑friendly filters.

## Sorting

Right‑click a row or column field and choose **Sort A → Z** or **Sort Z → A**. Sorting helps highlight highest or lowest values and trends.

## Grouping and ungrouping

Group dates into months, quarters or years; group numbers into bins. Select the items, right‑click and choose **Group**. Ungroup to return to original detail.

## Calculations

* **Value field settings** – Change the summarisation (Sum, Count, Average, etc.) and format.
* **Show Values As** – Display values as percentages of totals, differences from previous, running totals or ranks【268199141166436†L153-L171】.
* **Calculated fields/items** – Add new fields defined by formulas referencing existing fields.

## Example

Filter a sales pivot table to display only the top 5 products by revenue, sort them descending and add a calculated field for profit margin (Profit ÷ Revenue).

## Summary

Filtering, sorting, grouping and custom calculations enhance pivot tables’ analytical power. These operations allow tailored views that answer specific questions【268199141166436†L153-L171】.

## Reflection questions

1. How would you show each region’s revenue as a percentage of the grand total?
2. What is the difference between grouping and filtering data in a pivot table?
3. Describe how to create a calculated field in a pivot table.

## References

[^1]: Microsoft support description of pivot table operations【268199141166436†L153-L171】.
# 3.4 Pivot Charts: Grouping Items

## Pivot charts

A **pivot chart** provides a graphical representation of a pivot table. It reflects the same filters and structure, allowing interactive visual analysis. Pivot charts automatically update when the underlying pivot table changes【268199141166436†L253-L295】.

## Grouping items

* **Group dates** into months, quarters or years to see trends at different granularities.
* **Group numeric bins** to summarise ranges (for example, age groups).

Group by selecting items in the pivot table, right‑clicking and choosing **Group**. The pivot chart will display grouped categories.

## Chart types

Pivot charts support column, bar, line, area and other standard chart types. Scatter and bubble charts are not supported【268199141166436†L253-L295】.

## Example

Create a pivot chart from a pivot table summarising sales by date. Group the dates into quarters and observe the seasonal trend. The chart updates as filters change.

## Summary

Pivot charts enable visual exploration of pivot table summaries. Grouping items allows different levels of aggregation, revealing patterns not apparent in raw data【268199141166436†L253-L295】.

## Reflection questions

1. How do pivot charts differ from standard charts?
2. Describe how to group dates in a pivot chart.
3. Why might scatter charts be disallowed for pivot charts?

## References

[^1]: Microsoft support notes on pivot charts and grouping【268199141166436†L253-L295】.
# 3.5 Formatting Pivot Tables with Slicers

## Formatting pivot tables

Pivot tables can be customised for readability:

* **Design formats** – Use the *Design* tab to apply banded rows, bold headings and colour themes.
* **Conditional formatting** – Highlight cells based on rules (for example, highlight revenues above a threshold).
* **Number formatting** – Format currency, percentages or dates directly in the pivot table.

## Slicers

**Slicers** are visual filters that provide buttons for selecting items. To add a slicer:

1. Click inside the pivot table.
2. Go to **PivotTable Analyze > Insert Slicer**.
3. Choose fields to filter; slicer boxes appear on the worksheet.
4. Click buttons to filter; hold **Ctrl** to select multiple items.

Slicers improve dashboards by allowing quick, intuitive filtering【268199141166436†L173-L176】.

## Timelines

For date fields, insert a **Timeline** (PivotTable Analyze > Insert Timeline). It provides a horizontal slider to filter dates by months, quarters or years.

## Example

Format a pivot table summarising expenses with banded rows, add a slicer for department and a timeline for month. Users can filter the view by department and month while maintaining the desired formatting.

## Summary

Formatting pivot tables enhances clarity and professionalism. Slicers and timelines create interactive dashboards, empowering users to filter data visually【268199141166436†L173-L176】.

## Reflection questions

1. What are the benefits of using slicers instead of standard filter dropdowns?
2. How do timelines differ from slicers?
3. Describe how to apply conditional formatting to highlight high values in a pivot table.

## References

[^1]: Microsoft article on pivot table features including slicers【268199141166436†L173-L176】.
