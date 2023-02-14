# Introduction
This is a mortgage calculator program that calculates the monthly payment for a loan amount, interest rate, and number of years.
The program reads loan information from a text file (prospects.txt) and outputs the monthly payment for each prospect.

## Requirements
Java Development Kit (JDK) installed on your machine
A text editor to modify the source code (e.g. Visual Studio Code, IntelliJ IDEA, etc.)
A text file containing loan information in the format of "Customer,Total loan,Interest,Years"

## Getting started
Clone the repository to your local machine
Copy code: git clone https://github.com/[username]/MortgageCalculator.git

Open the project in your preferred text editor
Make sure the fileName variable in the main method of the MortgageCalculator class points to the correct location of your text file containing loan information
Save the changes to the source code
Open a terminal window and navigate to the directory containing the cloned repository

Compile the program using the following command: javac MortgageCalculator.java
Run the program using the following command: java MortgageCalculator


### Output
The program will output the monthly payment for each prospect in the following format:
Prospect [prospect number]: [customer name] wants to borrow [loan amount] € for a period of [number of years] years and pay [monthly payment] € each month


###Additional information
The program will output an error message if the first line of the text file is not "Customer,Total loan,Interest,Years".
If the text file does not contain the correct number of variables for each prospect, the program will ignore that prospect and move on to the next one.
The program assumes the interest rate is in percent and the monthly payment is rounded to two decimal places.

###Conclusion
This program is a simple mortgage calculator that helps you determine the monthly payment for a loan.