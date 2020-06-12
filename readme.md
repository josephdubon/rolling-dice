# Assessment

Rolling Dice

## URL

- GitLab Pages: https://josephdubon.gitlab.io/rolling-dice

- GitLab Repo: https://gitlab.com/josephdubon/rolling-dice

## Description

When rolling two six-sided dice, each die will show a number between 1 and 6. When the numbers on the two dice are added together, they will sum to a number between 2 and 12.

## Instructions

Use JavaScript to simulate 1000 rolls of a pair of dice. You will need to figure out how to generate random numbers in JavaScript, use your Google-Fu!

For each possible roll (2 through 12), count its frequency. You should use an array to keep track of these counts.

Initialize an array named count by filling it with zeros. Then, whenever the roll of the two dice adds up to, say, a seven, add one to the value in the 7th element of the counts array.

### For Example 

If the variable rollOfDice holds the current roll, you could increment the count with code like:

count[rollOfDice] = count[rollOfDice] + 1;
After the 1000 rolls are finished, show the final counts in an HTML page.

Here's an example of the kind of output your program might produce:

2: 32  
3: 50  
4: 76  
5: 120  
6: 151  
7: 161  
8: 125  
9: 121  
10: 89  
11: 52  
12: 23

## Output Formatting

In addition to the numeric output described above, display the final counts as a bar graph (using a DIV for each bar, and varying the dimensions in proportion with the counts).

Please make sure to update tests as appropriate.

## Submission

1. Push your code into your GitLab repository and deploy it via GitLab pages.
2. Once you have the GitLab Pages url (ex: https://username.gitlab.io/dice/), go back to your code to create a README.md file, and put the GitLab Pages url as the contents.
3. Push your code to your GitLab repo once more.
4. In Canvas, please submit your Gitlab Repo url.
5. In GitLab, add KA_Grading as a member on your project with "Reporter" permission.

## License

...

