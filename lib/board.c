#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int *array;
    size_t size;
} Array;

void initArray(Array *a, size_t initialSize) {
    a->array = malloc(initialSize * sizeof(int));
    a->size = initialSize;
}

void extendArray(Array *a, size_t eSize) {
    a->size += eSize;
    a->array = realloc(a->array, a->size * sizeof(int));
}

void freeArray(Array *a) {
    free(a->array);
    a->array = NULL;
    a->size = 0;
}

Array boardHeader; //contain number
Array boardTree; //contain moves
Array currentBoard;

unsigned long getOffset(int depth, int number) {
    unsigned long offset = number;
    for (int l1 = 1; l1 < depth; l1++) offset += boardTree.array[l1];
    return offset;
};