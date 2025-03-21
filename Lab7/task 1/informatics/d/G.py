N = int(input())
arr = list(map(int, input().split()))

for i in range(N // 2):
    arr[i], arr[N - i - 1] = arr[N - i - 1], arr[i]

print(*arr)
