package com.example.tidynumber;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {
    Solution solution = new Solution();

    private static Stream<Arguments> parameters() {
        return Stream.of(
                Arguments.of(123, true),
                Arguments.of(12356798, false),
                Arguments.of(243, false),
                Arguments.of(912345, false),
                Arguments.of(1, true),
                Arguments.of(33456, true)
        );
    }

    @ParameterizedTest
    @MethodSource("parameters")
    void tidyNumber(int number, boolean expectedOutcome) {
        boolean result =  solution.tidyNumber(number);
        assertEquals(expectedOutcome, result);
    }
}