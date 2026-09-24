# https://leetcode.com/problems/first-bad-version/description/
# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        l = 1
        r = n
        while(l <= r):
            m = (l + r) // 2
            if isBadVersion(m) and (m == 1 or not isBadVersion(m-1)):
                return m
            if isBadVersion(m):
                r = m - 1
            else:
                l = m + 1
        return -1


# less function call approach
# Initialize two pointers: left = 1, right = n.
# While left < right, compute mid = (left + right) // 2.
# If mid is a bad version, narrow the search to the left half by setting right = mid.
# Otherwise, search the right half by setting left = mid + 1.
# When the loop ends, left points to the first bad version.
        left, right = 1, n
        while left < right:
            mid = (left + right) // 2
            if isBadVersion(mid):
                right = mid
            else:
                left = mid + 1
            print(left,right,mid,n)
        return left
            