def close_far(a, b, c):
  def is_close(x, y):
    return abs(x - y) <= 1

  def is_far(x, y):
    return abs(x - y) >= 2

  case1 = is_close(a, b) and is_far(a, c) and is_far(b, c)

  case2 = is_close(a, c) and is_far(a, b) and is_far(b, c)

  return case1 or case2
