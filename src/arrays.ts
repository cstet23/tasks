/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return numbers;
    } else {
        const edgeNums = [...numbers];
        edgeNums.splice(1, edgeNums.length - 1, numbers[edgeNums.length - 1]);
        return edgeNums;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let numStrings: number[] = numbers.map((str: string): number =>
        parseInt(str)
    );
    numStrings = numStrings.map((num: number): number =>
        isNaN(num) ? 0 : num
    );
    return numStrings;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const dollarsGone = amounts.map((amt: string): string =>
        amt[0] === "$" ? amt.substring(1) : amt
    );
    let numAmounts: number[] = dollarsGone.map((str: string): number =>
        parseInt(str)
    );
    numAmounts = numAmounts.map((num: number): number =>
        isNaN(num) ? 0 : num
    );
    return numAmounts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const isNotQuestion = (str: string): boolean =>
        !str.includes("?", str.length - 2);
    let shoutMessages: string[] = messages.filter(isNotQuestion);
    shoutMessages = shoutMessages.map((str: string): string =>
        str.includes("!", str.length - 2) ? str.toUpperCase() : str
    );
    return shoutMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const wordCheck = (str: string): boolean => str.length < 4;
    const shortWords = words.filter(wordCheck);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    } else {
        const isRGB = (str: string): boolean =>
            str === "red" || str === "green" || str === "blue";
        const colorNums = colors.map((color: string): number =>
            isRGB(color) ? 0 : 1
        );
        const final = colorNums.reduce(
            (res: number, colorNum: number) => res + colorNum,
            0
        );
        if (final > 0) {
            return false;
        } else {
            return true;
        }
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((total: number, num: number) => total + num, 0);
    const addendStrings = addends.map((num: number): string => num.toString());
    const addendSingleStr = addendStrings.join("+");
    if (addendSingleStr) {
        return sum + "=" + addendSingleStr;
    } else {
        return sum + "=0";
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let firstNegativeIndex: number = values.findIndex(
        (num: number): boolean => num < 0
    );
    if (firstNegativeIndex === -1) {
        firstNegativeIndex = values.length;
    }
    const preNegative = values.slice(0, firstNegativeIndex);
    const preNegativeSum = preNegative.reduce(
        (total: number, num: number) => total + num,
        0
    );
    const newVals: number[] = [...values];
    newVals.splice(firstNegativeIndex + 1, 0, preNegativeSum);
    return newVals;
}
