package com.example.tidynumber;

public class Solution {
    public boolean tidyNumber(int number) {
        String numberToString = String.valueOf(number);
        char[] digits = numberToString.toCharArray();

        for (int i = 0; i < digits.length - 1; i++) {
            if (digits[i] > digits[i + 1]) {
                return false;
            }
        }

        return true;
    }
}
