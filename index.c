#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>

#include "lib/include.h"

typedef unsigned long ulong; //type less, but still use for syntax highlight

extern Array boardHeader; //contain number
extern Array boardTree; //contain moves
extern Array currentBoard;

int main() {
    memCheckAll(10);
    return 0;
}