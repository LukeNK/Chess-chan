#include <stdio.h>
#include <sys/types.h>

void decodeMove(short move) {
    //printf("%d", move);
    int a = (int)move/1000;
    int b = (int)move/100 - a*10;
    int x = (int)move/10 - a*100 - b*10;
    int y = (int)move - a*1000 - b*100 - x*10;
    printf("%d , %d; %d , %d\n", a, b, x, y);
};

int main() {
    decodeMove(1234);
    decodeMove(1888);
    return 0;
}