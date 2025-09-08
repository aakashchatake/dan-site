# 2.1 Boxplot, Skewness, Kurtosis & Descriptive Statistics

## Descriptive statistics

Descriptive statistics summarise key features of a dataset using measures of central tendency and dispersion (see Unit 1). They help us understand the distribution’s shape, centre and spread.

## Boxplot

A **box‑and‑whisker plot** graphically summarises the distribution of a quantitative variable【444968039617338†L432-L446】. Its components are:

* The **median** (Q2) shown as a horizontal line inside the box.
* The **lower (Q1) and upper (Q3) quartiles**, forming the edges of the box.
* **Whiskers** extending to the smallest and largest non‑outlier values.
* **Outliers** plotted individually beyond the whiskers【444968039617338†L432-L446】.

Boxplots quickly convey skewness, spread and potential outliers【444968039617338†L448-L474】. They are ideal for comparing distributions across groups.

## Skewness

Skewness measures the asymmetry of a distribution. For a symmetric distribution, skewness equals zero【594094328782496†L15-L23】. Negative skewness indicates a long left tail; positive skewness indicates a long right tail.

## Kurtosis

Kurtosis quantifies the heaviness of the tails relative to the normal distribution. A normal distribution has kurtosis of 3【594094328782496†L67-L81】. Distributions with **high kurtosis** (heavy tails) have more extreme values than normal; those with **low kurtosis** (light tails) have fewer extremes.

## Example

Imagine plotting the exam scores of students from two classes using boxplots. One class might exhibit a longer upper whisker, indicating a few very high scores (positive skew), while the other might show a symmetric box, indicating balanced scores.

## Summary

Boxplots, skewness and kurtosis provide a succinct description of a dataset’s shape and spread. They help detect outliers and highlight asymmetry and tail behaviour【444968039617338†L432-L446】【594094328782496†L15-L23】.

## Reflection questions

1. What information can you glean from a boxplot that you might miss in a histogram?
2. How does positive skewness affect the mean relative to the median?
3. Explain the difference between kurtosis and skewness.

## References

[^1]: Investopedia discussion of boxplots and outlier detection【444968039617338†L432-L446】【444968039617338†L448-L474】.
[^2]: NIST definitions of skewness and kurtosis【594094328782496†L15-L23】【594094328782496†L67-L81】.
# 2.2 Correlation & Regression with Data Cleaning

## Correlation

Correlation measures the strength and direction of a linear relationship between two variables. The **correlation coefficient** (r) ranges from –1 to +1: +1 indicates a perfect positive linear relationship, –1 a perfect negative linear relationship and 0 no linear relationship. Correlation treats both variables symmetrically and is unaffected by changes in scale【809275587000967†L341-L378】.

## Regression

Regression models how a dependent variable changes as one or more independent variables vary. It is **asymmetric**, designating a response and predictors. Regression coefficients quantify the effect of each predictor; they depend on units and scale【809275587000967†L341-L378】. Regression can be simple (one predictor) or multiple (several predictors).

## Data cleaning

Data cleaning ensures datasets are accurate and consistent before analysis. Key tasks include:

* **Removing duplicates** to avoid over‑representation.
* **Handling missing values** (see Unit 2.3) via deletion or imputation.
* **Correcting errors** such as typos or impossible values.
* **Standardising formats** (e.g., dates, units).
* **Identifying and treating outliers** using boxplots or z‑scores【444968039617338†L448-L474】.

Proper cleaning improves the validity of correlation and regression analyses.

## Example

An analyst studies the relationship between advertising spending and sales. After cleaning the data (removing duplicate records and correcting currency units), she computes the correlation coefficient (for example, r = 0.8) and fits a regression model to estimate sales for a given advertising budget.

## Summary

Correlation quantifies the association between two variables, while regression models how one variable predicts another. Both require clean, high‑quality data for reliable results【809275587000967†L341-L378】【444968039617338†L448-L474】.

## Reflection questions

1. Why is correlation unaffected by changes in units, whereas regression coefficients are not?
2. Describe steps you would take to clean a dataset prior to regression analysis.
3. How can outliers distort correlation and regression results?

## References

[^1]: GeeksforGeeks comparison of correlation and regression【809275587000967†L341-L378】.
[^2]: Investopedia guidance on outlier detection【444968039617338†L448-L474】.
# 2.3 Imputation Techniques

## Introduction

Real‑world datasets often contain missing values due to nonresponses or recording errors. Imputation techniques replace missing values with reasonable estimates to preserve the dataset’s structure and reduce bias.

## Approaches

* **Deletion (listwise/pairwise)** – Remove rows or columns with missing values. This is simple but can discard valuable information.
* **Simple imputation** – Replace missing values with a statistic such as the mean, median or most frequent value of the column【266912096589978†L125-L151】. A constant value can also be used when appropriate.
* **Multivariate imputation** – Use regression models to predict missing values from other variables. The Iterative Imputer in scikit‑learn, for example, models each variable with missing values as a function of the others【266912096589978†L125-L151】.
* **Multiple imputation** – Generates several possible values for each missing point, analyses each completed dataset separately and then combines the results, accounting for uncertainty.

## Example

Consider a dataset of patient records with missing blood pressure values. A simple approach fills in missing values with the median blood pressure. A more sophisticated approach builds a regression model using age, weight and diagnosis to predict blood pressure for missing cases.

## Summary

Imputation techniques help maintain data integrity when missingness occurs. Simple methods are easy to implement but may ignore relationships between variables, whereas multivariate and multiple imputation leverage more information to produce more accurate estimates【266912096589978†L125-L151】.

## Reflection questions

1. Why is deleting observations with missing values often undesirable?
2. Compare mean imputation with multivariate regression imputation.
3. What is the purpose of multiple imputation?

## References

[^1]: scikit‑learn documentation on handling missing values【266912096589978†L125-L151】.
# 2.4 ANOVA & Chi‑Square

## ANOVA (Analysis of variance)

ANOVA tests whether the means of multiple groups are equal. It partitions total variability into between‑group and within‑group components and computes an **F‑statistic**【323179072546544†L280-L301】. A high F‑value relative to its critical value suggests at least one group mean differs significantly.

### Types of ANOVA

* **One‑way ANOVA** – Tests the effect of a single factor with two or more levels on a continuous outcome.
* **Two‑way ANOVA** – Examines the effect of two factors and their interaction.

ANOVA assumes normally distributed errors and equal variances across groups. Post‑hoc tests (e.g., Tukey’s) identify which means differ.

## Chi‑square test

The chi‑square (χ²) test assesses whether observed frequencies differ from expected frequencies under the null hypothesis. It is used for categorical data and comes in two main forms:

* **Goodness‑of‑fit** – Tests whether observed frequencies fit a specified distribution. The statistic is the sum over categories of (O − E)²/E, where O and E are observed and expected counts【322652850962020†L452-L610】.
* **Test of independence** – Determines whether two categorical variables are independent in a contingency table.

To evaluate significance, compare the χ² statistic to a critical value from the chi‑square distribution with appropriate degrees of freedom or compute a p‑value.

## Example

* **ANOVA** – Comparing the mean exam scores across three teaching methods.
* **Chi‑square** – Testing whether preference for a product is independent of gender.

## Summary

ANOVA and chi‑square tests are inferential techniques for comparing groups. ANOVA deals with numerical outcomes and compares means, whereas chi‑square deals with categorical data and compares observed counts to expected counts【323179072546544†L280-L301】【322652850962020†L452-L610】.

## Reflection questions

1. When would you choose ANOVA instead of multiple t‑tests?
2. Describe the assumptions required for ANOVA to be valid.
3. How do you interpret a significant chi‑square statistic in a test of independence?

## References

[^1]: Investopedia description of ANOVA and its uses【323179072546544†L280-L301】【323179072546544†L304-L311】.
[^2]: Scribbr explanation of the chi‑square test formula and procedure【322652850962020†L452-L610】.
# 2.5 Scatter Diagram

## Definition

A **scatter diagram** plots pairs of quantitative observations on a coordinate plane to visualise the relationship between two variables. Each point represents one observation【940426810236033†L114-L190】.

## Interpretation

* **Perfect positive correlation (r = 1)** – Points lie exactly on an upward‑sloping line.
* **Perfect negative correlation (r = –1)** – Points lie on a downward‑sloping line.
* **Positive correlation** – Points cluster around an upward trend line.
* **Negative correlation** – Points cluster around a downward trend line.
* **No correlation** – Points are scattered randomly with no discernible pattern【940426810236033†L114-L190】.

The density of points around a line indicates the strength of the relationship; haphazard scatter suggests little or no correlation【940426810236033†L193-L202】.

## Uses

Scatter diagrams help detect outliers, assess linearity and decide whether correlation or regression analysis is appropriate.

## Example

Plotting hours studied versus exam score shows whether greater study time is associated with higher scores. A cluster trending upward suggests a positive relationship.

## Summary

Scatter diagrams are simple yet powerful tools for visually assessing relationships between two quantitative variables【940426810236033†L114-L190】【940426810236033†L193-L202】.

## Reflection questions

1. How would you interpret a scatter plot where points fall along a downward line?
2. Why might a scatter diagram be preferred before computing correlation coefficients?
3. Can scatter diagrams detect non‑linear relationships? Explain.

## References

[^1]: GeeksforGeeks description of scatter diagrams and interpretation【940426810236033†L114-L190】【940426810236033†L193-L202】.
# 2.6 Estimation & Hypothesis Testing

## Estimation

Estimation involves using sample data to approximate population parameters.

* **Point estimate** – A single best guess (e.g., sample mean) for an unknown parameter【333199965929234†L169-L177】.
* **Interval estimate (confidence interval)** – A range of values likely to contain the parameter with a specified confidence level (see Unit 1.5)【333199965929234†L169-L177】.

## Hypothesis testing

Hypothesis testing is a systematic method for evaluating claims about population parameters【722030731437478†L302-L331】. The steps are:

1. **State hypotheses** – Formulate a null hypothesis (H₀) and an alternative hypothesis (H₁).
2. **Collect data** and choose a significance level (α, e.g., 0.05).
3. **Compute test statistic** and corresponding p‑value.
4. **Decision rule** – If p ≤ α, reject H₀; otherwise, fail to reject H₀【722030731437478†L302-L331】.
5. **Interpretation** – Explain the result in the context of the problem【722030731437478†L375-L417】.

Common tests include z‑tests, t‑tests, chi‑square tests and ANOVA. The choice depends on sample size, distribution and parameter of interest.

## Example

A manufacturer claims that light bulbs last an average of 1 000 hours. To test this, we sample 50 bulbs, calculate the sample mean and use a one‑sample t‑test to assess whether the mean lifetime differs from 1 000 hours.

## Summary

Estimation provides approximate values for population parameters, while hypothesis testing evaluates specific claims. Both rely on sampling theory and require careful interpretation of p‑values and confidence levels【333199965929234†L169-L177】【722030731437478†L302-L331】.

## Reflection questions

1. Describe the difference between the null and alternative hypotheses.
2. Why is a low p‑value evidence against the null hypothesis?
3. When would you use a t‑test instead of a z‑test?

## References

[^1]: Scribbr explanation of point vs interval estimates【333199965929234†L169-L177】.
[^2]: Scribbr guide to hypothesis testing【722030731437478†L302-L331】【722030731437478†L375-L417】.
# 2.7 Sampling Distributions & Counting

## Sampling distributions

The **sampling distribution** of a statistic is the probability distribution of that statistic across many random samples from the same population. For example, the sampling distribution of the sample mean approaches normality as sample size increases (Central Limit Theorem). Sampling distributions allow us to compute standard errors and conduct inference.

## Counting techniques

Counting principles are fundamental to probability calculations when enumerating sample spaces.

* **Fundamental counting principle** – If there are m ways to perform one task and n ways to perform another, there are m × n ways to perform both.
* **Permutation** – An ordered arrangement of items. The number of ways to arrange k items chosen from n is P(n,k) = n!/(n-k)!.
* **Combination** – An unordered selection of items. The number of ways to choose k items from n without regard to order is C(n,k) = n!/[k!(n-k)!].

## Example

* **Sampling distribution** – Consider repeatedly sampling 30 students’ heights and computing the mean each time. The distribution of these sample means will be approximately normal.
* **Counting** – The number of ways to choose 3 committee members from 10 candidates is C(10,3) = 120; the number of ways to arrange 3 of the 10 candidates in order is P(10,3) = 720.

## Summary

Sampling distributions underpin inferential statistics by describing how sample statistics vary across samples. Counting techniques provide tools to enumerate possible outcomes and compute probabilities.

## Reflection questions

1. Why is the sampling distribution of the mean important in statistics?
2. Differentiate between permutations and combinations with examples.
3. How does the fundamental counting principle simplify probability calculations?

## References

[^1]: Concepts of sampling distributions and counting principles are standard probability results.
# 2.8 Probability & Probability Distributions

## Basics of probability

Probability measures the likelihood of events and takes values between 0 and 1. The sum of the probabilities of all mutually exclusive outcomes equals 1. Events are independent if the occurrence of one does not affect the other.

## Discrete distributions

* **Binomial distribution** – Models the number of successes in n independent Bernoulli trials with success probability p. The mean is np and the variance is np(1-p)【685817958353626†L362-L423】.
* **Poisson distribution** – Models the number of events occurring in a fixed interval when events occur independently at a constant rate lambda. The mean and variance are both lambda【685817958353626†L362-L423】.

## Continuous distributions

* **Normal distribution** – A symmetric, bell‑shaped distribution characterised by mean mu and standard deviation sigma. Approximately 68 %, 95 % and 99.7 % of values lie within 1, 2 and 3 standard deviations of the mean, respectively【685817958353626†L362-L423】.

## Central Limit Theorem connection

The CLT implies that sums or averages of independent random variables tend toward a normal distribution as sample size increases【685817958353626†L448-L460】.

## Example

* **Binomial** – The number of defective items in a batch of 20 if each item has a 5 % chance of being defective follows a binomial distribution.
* **Poisson** – The number of customers arriving at a service desk per hour when the average arrival rate is 10 per hour follows a Poisson distribution.
* **Normal** – Adult human heights are approximately normally distributed with a certain mean and standard deviation.

## Summary

Probability distributions describe how probabilities are distributed over possible values of a random variable. Understanding common distributions (binomial, Poisson, normal) is essential for modelling uncertainty in real‑world contexts【685817958353626†L362-L423】【685817958353626†L448-L460】.

## Reflection questions

1. What conditions make the binomial distribution appropriate?
2. Why is the normal distribution ubiquitous in statistics?
3. Describe a situation modelled by the Poisson distribution.

## References

[^1]: Investopedia explanation of probability distributions and examples【685817958353626†L362-L423】【685817958353626†L448-L460】.
