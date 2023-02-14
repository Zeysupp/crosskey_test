package crosskey.mortgage.plan;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class MortgageCalculator {
    public static double power(double base, int exponent) {
        double result = 1.000;
        for (int i = 0; i < exponent; i++) {
            result *= base;
        }
        return result;
    }
    private static final int MONTHS_PER_YEAR = 12;
    public static double monthlyPayment(double loanAmount, double interestRate, int years) {
        double monthlyInterestRate = interestRate / 100 / MONTHS_PER_YEAR;
        int payments = years * MONTHS_PER_YEAR;
        double numerator = loanAmount * (monthlyInterestRate * (power(1 + monthlyInterestRate, payments)));
        double denominator = power(1 + monthlyInterestRate, payments) - 1;
        return  numerator / denominator;

    }
    public static void main(String[] args) {
        String fileName = "src/main/resources/prospects.txt";
        File file = new File(fileName);
        try {
            Scanner sc = new Scanner(file);
            int prospectCount = 1;

            // check there is no junk before the first line that specifies the order of the variables in the txt file
                String line = sc.nextLine();
                if (!line.equals("Customer,Total loan,Interest,Years")) {
                    System.out.println("Error: First line must be 'Customer,Total loan,Interest,Years'");
                    return;
                }

            while(sc.hasNextLine()) {
                line = sc.nextLine();

                String[] values = line.split(",");

                int startIndex = 0;

                int endIndex = values.length - 1;
                StringBuilder customerName = new StringBuilder();
                for (int i = 0; i < values.length; i++) {
                    if (values[i].matches("\\d+(\\.\\d+)?")) {
                        endIndex = i - 1;
                        break;
                    }
                }

                for (int i = startIndex; i <= endIndex; i++) {
                    customerName.append(values[i]);
                    if (i < endIndex) {
                        customerName.append(",");
                    }
                }

                if(values.length > 3) {
                    double loanAmount = Double.parseDouble(values[endIndex + 1]);
                    double interestRate = Double.parseDouble(values[endIndex + 2]);
                    int years = Integer.parseInt(values[endIndex + 3]);
                    double monthlyPayment = monthlyPayment(loanAmount, interestRate, years);
                    System.out.println("Prospect " + prospectCount + ": "
                            + customerName + " wants to borrow "
                            + loanAmount + "€ for a period of "
                            + years + " years and pay "
                            + String.format("%.2f", monthlyPayment) + "€ each month");
                    prospectCount++;
                }
            }
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
    }
}