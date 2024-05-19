# CHALLENGE #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 

\[ \text{BMI} = \frac{\text{mass}}{\text{height} \times \text{height}} \]

(mass in kg and height in meters).

Your task is to write some code to help them:

1. Store Mark's and John's mass and height in variables called `massMark`, `heightMark`, `massJohn`, and `heightJohn`.
2. Calculate both their BMIs using the formula, and store the results in two variables called `BMIMark` and `BMIJohn`.
3. Log the value of `BMIMark` and `BMIJohn` to the console.

**BONUS:** Create a boolean variable `markHigherBMI` containing information about whether Mark has a higher BMI than John. Log it to the console too.

### TEST DATA 1:
- Mark weighs 78 kg and is 1.69 m tall.
- John weighs 92 kg and is 1.95 m tall.

### TEST DATA 2:
- Mark weighs 95 kg and is 1.88 m tall.
- John weighs 85 kg and is 1.76 m tall.

👋 **OPTIONAL:** You can watch my solution in video format in the next lecture.

**IMPORTANT:** The `**` operator is not supported in this editor. Please make sure to use exactly this formula `mass / (height * height)`, and not this one `mass / (height ** 2)`.


# CHALLENGE #2

Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:
   - "Mark's BMI is higher than John's!" 
   - "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

   Example:
   - "Mark's BMI (28.3) is higher than John's (23.9)!"
   - "John's BMI (29.1) is higher than Mark's (27)!"

**Note:** Don't round the BMI values. Leave them as they are.


# CHALLENGE #3

There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

## Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the `scoreDolphins` variable, and the average score of Koalas should be assigned to the `scoreKoalas` variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:
   - "Dolphins win the trophy" if Dolphins win, or
   - "Koalas win the trophy" if Koalas win, or
   - "Both win the trophy" if their average scores are equal.

### TEST DATA:
- Dolphins scored 96, 108, and 89.
- Koalas scored 88, 91, and 110.

