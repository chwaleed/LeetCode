// 5. Longest Plaindromic Substring

function longestPalindrome(s){
    let palindrome = '';

    for (let i = 0; i < s.length; i++) {

        let left = i;
        let right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if ((right - left + 1) > palindrome.length) {
                palindrome = s.slice(left, right + 1);
            }
            left--;
            right++;
        }

        left = i;
        right = i;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if ((right - left + 1) > palindrome.length) {
                palindrome = s.slice(left, right + 1);
            }
            left--;
            right++;
        }
    }

    return palindrome;
}
