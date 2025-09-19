class Solution:
    def canPlaceFlowers(self, flowerbed: list[int], n: int) -> bool:
        count = 0
        prev = 0
        length = len(flowerbed)
        for i in range(length):
            if flowerbed[i] == 0:
                next = 0 if i == length - 1 else flowerbed[i + 1]
                if prev == 0 and next == 0:
                    count += 1
                    prev = 1  # simulate planting
                    if count >= n:
                        return True
                else:
                    prev = flowerbed[i]
            else:
                prev = 1
        return count >= n