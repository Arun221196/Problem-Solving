# https://leetcode.com/problems/binary-search/description/
class Solution:
    def search(self, nums: list[int], target: int) -> int:
        low = 0
        high = len(nums) - 1
        while low <= high:
            mid = (low + high) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                low = mid + 1
            else:
                high = mid - 1
        return -1

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        n = len(nums)
        minn = 0
        maxx = n-1
        while minn <= maxx:
            mid = minn + round((maxx - minn) / 2)
            print(mid)
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                minn = mid + 1
            else:
                maxx = mid - 1
        return -1