# 1.1 Data Analytics – Overview and Importance

## Introduction

Data analytics refers to the systematic use of statistical and computational techniques to discover patterns, trends and relationships within data. It transforms raw observations into actionable knowledge that supports decision‑making across industries.

## Key points

* **Definition** – Data analytics encompasses the collection, processing and analysis of large datasets to draw insights and inform decisions. It goes beyond descriptive statistics by applying advanced algorithms and models.
* **Importance** – According to Investopedia, data analytics helps organisations optimise performance, reduce costs and predict future outcomes【205746635100822†L299-L369】.
* **Steps in the process** – A typical analytics workflow involves determining data requirements, collecting data, organising and cleaning it, analysing patterns and interpreting results【205746635100822†L299-L369】. Data cleaning ensures quality and reliability before analysis.
* **Types of decisions** – Analytics supports strategic (long‑term), tactical (medium‑term) and operational (day‑to‑day) decisions.

## Examples

* **Business** – A retail chain analyses purchase histories to identify which products sell well in different seasons and optimises inventory accordingly.
* **Healthcare** – Hospitals use analytics to monitor patient outcomes and predict resource needs, improving quality of care and reducing costs.
* **Education** – Universities analyse student performance data to identify at‑risk students and tailor intervention strategies.

## Summary

Data analytics transforms data into knowledge that enables organisations to act intelligently. It integrates statistical methods and computing to find patterns, improve efficiency and guide strategic planning【205746635100822†L299-L369】.

## Reflection questions

1. How does data analytics differ from simple data analysis?
2. Explain how data analytics can help a business reduce costs.
3. Provide an example of data analytics in the healthcare sector.

## References

[^1]: Investopedia article explaining importance and steps of data analytics【205746635100822†L299-L369】.
# 1.2 Types of Data Analytics

## Introduction

Data analytics can be divided into four broad categories, each answering a different question about the data. Understanding these types helps analysts choose appropriate techniques.

## Types and definitions

* **Descriptive analytics** – Summarises what has happened by computing metrics such as counts, averages and totals. It provides a historical snapshot.
* **Diagnostic analytics** – Investigates why events occurred by probing relationships and root causes. Techniques include correlation and regression analysis.
* **Predictive analytics** – Uses models to forecast future outcomes based on historical data. Machine learning algorithms often power these models.
* **Prescriptive analytics** – Recommends actions to achieve desired outcomes. It combines predictions with optimisation and decision rules to suggest what should be done.

## Examples

* **Business** – Descriptive analytics summarises last quarter’s sales; diagnostic analytics explains why sales dropped; predictive analytics forecasts next quarter; prescriptive analytics recommends optimal pricing strategies.
* **Healthcare** – Predictive models identify patients at risk for readmission; prescriptive analytics suggests intervention plans to improve outcomes.

## Summary

These four types of analytics represent a continuum from understanding past events (descriptive) and their causes (diagnostic) to forecasting future events (predictive) and determining best actions (prescriptive). Organisations often combine them to support informed decision‑making【205746635100822†L299-L369】.

## Reflection questions

1. Describe how diagnostic analytics differs from predictive analytics.
2. Provide a real‑world example of prescriptive analytics in education.
3. Why are all four types important in a comprehensive analytics strategy?

## References

[^1]: Description of analytics types drawn from the Investopedia article【205746635100822†L299-L369】.
# 1.3 Lifecycle, Quality & Quantity of Data

## Introduction

Successful analytics projects follow a structured lifecycle and depend on high‑quality, sufficient data. This section outlines the lifecycle phases and discusses data quality and quantity considerations.

## Data analytics lifecycle

* **Define the problem** – Clarify objectives and key questions.
* **Collect data** – Acquire relevant data from databases, surveys or sensors.
* **Prepare data** – Clean, merge and transform raw data into an analysable form.
* **Analyse** – Apply statistical and computational methods to extract insights.
* **Interpret and communicate** – Visualise results and draw conclusions for stakeholders.
* **Act and monitor** – Implement recommendations and monitor outcomes for continuous improvement.

## Data quality

Data must be accurate, complete, consistent, timely and reliable. Poor data quality can lead to misleading conclusions. Data cleaning (handling missing values, duplicates and errors) improves quality and should be performed before analysis.

## Data quantity

The amount of data affects the reliability of insights. Too little data results in high uncertainty, while very large datasets require scalable tools (big data platforms). Sampling methods may be used when analysing entire populations is impractical.

## Example

In healthcare analytics, continuous monitoring devices collect high‑frequency physiological data. Analysts must ensure the data is complete (no missing vital signs) and accurate (calibrated sensors) before using it to predict patient deterioration. Adequate sample size ensures the predictions are reliable.

## Summary

The data analytics lifecycle guides the process from problem definition to action. Ensuring data is of high quality and adequate quantity is essential for trustworthy results.

## Reflection questions

1. Why is data cleaning necessary before analysis?
2. What risks arise when data quantity is insufficient?
3. Describe a situation where data quality affected an analytics outcome.

## References

[^1]: General knowledge synthesised from standard analytics texts.
# 1.4 Data Types, Central Tendency & Dispersion

## Data types

* **Qualitative (categorical)** – Non‑numerical categories such as gender or product name.
* **Quantitative** – Numeric values that can be discrete (counts) or continuous (measurements).

## Measures of central tendency

* **Mean (average)** – Sum of all values divided by the number of observations【65710891574784†L24-L36】. The mean is sensitive to extreme values【65710891574784†L47-L64】.
* **Median** – The middle value when data are ordered from smallest to largest. When there is an even number of observations, it is the average of the two middle values.
* **Mode** – The most frequently occurring value.

## Measures of dispersion

* **Range** – Difference between the maximum and minimum values【972379405084779†L182-L201】.
* **Variance** – Average of the squared deviations from the mean; quantifies variability【972379405084779†L203-L236】.
* **Standard deviation** – Square root of the variance; expresses spread in the same units as the data【972379405084779†L203-L236】.

## Example

Suppose the ages of five students are 19, 20, 21, 21 and 22.

* The **mean** age is (19 + 20 + 21 + 21 + 22)/5 = 20.6 years.
* The **median** age (middle value) is 21 years.
* The **mode** is 21, since it appears most frequently.
* The **range** is 22 − 19 = 3 years.
* The **variance** is the average of squared deviations from the mean (≈1.04), and the standard deviation is the square root (≈1.02).

## Summary

Measures of central tendency describe a “typical” value in a dataset, while measures of dispersion describe how spread out the data are. Together they characterise the distribution and aid comparisons across datasets.

## Reflection questions

1. When might the median be more appropriate than the mean?
2. Explain how variance and standard deviation differ.
3. Give an example of a discrete and a continuous quantitative variable.

## References

[^1]: Definitions and properties of mean and measures of spread【65710891574784†L24-L36】【65710891574784†L47-L64】【972379405084779†L182-L201】【972379405084779†L203-L236】.
# 1.5 Sampling Funnel, CLT & Confidence Interval

## Sampling funnel

When analysing a large population, it is often impractical to measure every member. A **sampling funnel** narrows the population down to a manageable sample:

1. **Population** – All individuals satisfying the study’s criteria.
2. **Sampling frame** – A list or source containing the accessible members of the population. Bias can be introduced if the frame excludes certain groups【440273445372831†L292-L321】.
3. **Simple random sampling** – Each member has an equal probability of selection, producing an unbiased sample【440273445372831†L292-L321】.
4. **Sample** – The subset of individuals selected for analysis.

## Central Limit Theorem (CLT)

The CLT states that, for a large sample size (for example, n ≥ 30), the sampling distribution of the sample mean is approximately normal, regardless of the population’s distribution【353193119138672†L306-L349】. Its key implications are:

* The mean of the sampling distribution equals the population mean【353193119138672†L364-L390】.
* The standard deviation of the sampling distribution (standard error) equals the population standard deviation divided by the square root of the sample size【353193119138672†L398-L427】.
* As sample size increases, the sampling distribution becomes more concentrated around the mean, reducing variability【353193119138672†L398-L427】.

## Sampling variability and confidence intervals

* **Sampling variability** – Different random samples yield different sample means. The variability decreases with larger sample sizes【973746162079337†L58-L110】.
* **Confidence interval** – Provides a range of plausible values for a population parameter. It is computed as “estimate ± critical value × standard error.” For a 95 % confidence level, the critical value is approximately 1.96【441469260235965†L331-L349】【441469260235965†L350-L373】.

## Example

Suppose we wish to estimate the average daily time people spend on a social media platform. We randomly sample 100 users and compute a sample mean of 90 minutes with a standard deviation of 30 minutes. The standard error is 30 divided by the square root of 100, which equals 3. A 95 % confidence interval is 90 ± 1.96 × 3 = [84.1, 95.9] minutes.

## Summary

Sampling allows us to learn about a population without measuring every member. The CLT justifies using the normal distribution when analysing sample means, and confidence intervals quantify the uncertainty in our estimates【353193119138672†L306-L349】【353193119138672†L364-L390】【441469260235965†L331-L349】【441469260235965†L350-L373】.

## Reflection questions

1. Why is random sampling important when selecting a sample?
2. How does increasing the sample size affect the width of a confidence interval?
3. Explain the meaning of a 95 % confidence level.

## References

[^1]: Discussion of sampling funnel【440273445372831†L292-L321】.
[^2]: Properties of the Central Limit Theorem【353193119138672†L306-L349】【353193119138672†L364-L390】【353193119138672†L398-L427】.
[^3]: Explanation of sampling variability【973746162079337†L58-L110】.
[^4]: Formula for confidence intervals and critical values【441469260235965†L331-L349】【441469260235965†L350-L373】.
