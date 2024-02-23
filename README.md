[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1uurLsu5)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## My Analysis

My implementation has nested for loops, where the innermost for loop also calls a function with nested while loops. First off let's find the runtime of the outermost for loop:

This loop runs while $size \leq n/2$ and since $size$ is doubled after each iteration then this loop only runs $log_{2}(n)$ times. 

Now let's consider the inner for loop:

This loop runs while $j \leq (n-1)$ and since $j$ is incremented by the step size for the current iteration then in the worst-case scenario this loop runs $n/2$ times, and even fewer on subsequent iterations as our step size increases. 

Lastly we should consider how the merge function itself runs, this function has two while loops sequentially nested in an outer while loop:

The outer while only runs if the given "subarrays" are not in sorted order, so in a best-case scenario the merge function never runs. However in every other case it will run $(n-k)$ where k is the length of the given "subarray" subtracted from the length of the entire array. Thus for each iteration $k$ can be considered a constant that is always smaller than $n$. 

Since the rest of the code only contains constant operations such as variable assignments and comparisons we're left with:

$ T(n) = \log_{2}(n) \cdot (\dfrac{n}{2}) \cdot (n-k) + \log_{2}(n) \cdot (n-k)$

$T(n) = \log_{2}(n) \cdot (\dfrac{n}{2} - \dfrac{nk}{2}) + n \cdot\log_{2} - k \cdot \log_{2}(n)$

$T(n) = \dfrac{(n^2 \cdot \log_{2}(n) - nk)}{2} + n \cdot \log_{2}(n) - k \cdot \log_{2}(n)$

$\dfrac{1}{2}$ and $k$ are constants so we'll disregard them

$T(n) = n^2 \cdot \log_{2}(n) - n + n \cdot \log_{2}(n) - \log_{2}(n)$

Now disregarding lower order terms leaves us with

$T(n) = n^2 \cdot \log_{2}(n)$

Thus our final runtime for this implementation of mergesort in a worst-case scenario is:

$\Theta(n^2 \cdot log(n))$
