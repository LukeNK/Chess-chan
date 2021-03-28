This file is temporary.
## How to move
a,b is the origin 
x,y is the destination
int 18|88 (2 parts) [piece from A1 to H1]
```c
short abxy; //structure
void decodeMove(short move) {
    int a = move % 1000;
    int b = move % 100 - a*10;
    int x = move % 10 - a*100 - b*10;
    int y = move - a*1000 - b*100 - x*10;
};
```
## How to store board
```c
Array boardHeader; //contain number
Array boardTree; //contain moves
```
Tree structure:
1     number = 1
|\
2 3   number = 2
|\|\
456 7 number = 4
offset = 7 = 1+2+4
```c
int offset;
for (int l1 = 0; l1 < depth; l1++) {
    offset += boardHeader.array[l1];
}
```