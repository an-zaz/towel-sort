// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    return matrix.reduce((acc, item, index) => {
        const sortedArr = item.sort((a, b) => {
            if (index % 2) {
                return b - a;
            }
            return a - b;
        });
        return [...acc, ...sortedArr];
    }, []);
};
