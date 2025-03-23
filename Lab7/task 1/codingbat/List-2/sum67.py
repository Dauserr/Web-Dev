def sum67(nums):
  total = 0
  in_block = False

  for num in nums:
    if num == 6:
      in_block = True
    elif in_block:
      if num == 7:
        in_block = False
    else:
      total += num

  return total
