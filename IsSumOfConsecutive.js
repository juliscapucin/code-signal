function solution(n) {
  c = 0; //counter
  l = 1; //smallest number to be added ('left')
  r = 2; //biggest number to be added ('right')
  s = 3; //sum of all numbers in range [l,r] (including l and r)

  while (1) {
    if (l == r) return c; // rangesize < 2 -> no more fitting ranges can be found -> return counter

    if (s == n) c++; // found a fitting range

    if (s <= n) s += ++r; // sum is too small: grow to right side

    if (s > n) s -= l++; // sum is too big: shrink from left side
  }
}
