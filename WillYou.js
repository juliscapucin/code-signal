function solution(young, beautiful, loved) {
  if (young && beautiful && loved) return false;
  else if (!young && !beautiful && !loved) return false;
  else if (!young && beautiful && !loved) return false;
  else if (young && !beautiful && !loved) return false;
  else return true;
}
