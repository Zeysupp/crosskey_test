import crosskey.mortgage.plan.MortgageCalculator;
import org.testng.annotations.Test;

import static org.testng.AssertJUnit.assertEquals;

public class MortgageCalculatorTest {

    @Test
    public void testMonthlyPayment() {
        double loanAmount = 10000;
        double interestRate = 5;
        int years = 2;
        double expectedPayment = 438.71;
        double monthlyPayment = MortgageCalculator.monthlyPayment(loanAmount, interestRate, years);
        assertEquals(expectedPayment, monthlyPayment, 0.01);
    }
}
