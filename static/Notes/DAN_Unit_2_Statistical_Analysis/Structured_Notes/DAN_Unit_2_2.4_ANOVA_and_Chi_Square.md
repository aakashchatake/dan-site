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
