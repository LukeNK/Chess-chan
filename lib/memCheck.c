#include <stdio.h>
#include <limits.h>

//#include "array.c"

void memCheckAll(int timeout) {
    int result = 0;
    printf("MemCheck [all] ----------------->\n");
    if (INT_MIN > -2*1000000 &&INT_MAX < 2*1000000) {
        printf("[FAIL] ");
        result += 1;
    }
    printf("(int) limit : %d -> %d\n",INT_MIN, INT_MAX);
    
    printf("MemCheck completed! %d failed test(s) -----------------<!\n", result);
};