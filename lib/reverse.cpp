#include "reverse.hpp"

#ifdef __cplusplus

#include <iostream>

std::string xx_reverse(std::string str) {
  std::string nstr = std::string(str.c_str());

  int len = nstr.length();
  int n=len-1;
  for(int i=0;i<(len/2);i++){

    //Using temp to store the char value at index i so
    //you can swap it in later for char value at index n
    char temp = nstr[i];
    nstr[i] = nstr[n];
    nstr[n] = temp;
    n = n-1;

  }

  return nstr;
}

#endif  // __cplusplus
