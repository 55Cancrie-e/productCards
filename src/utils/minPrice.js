export const minPrice = (array) => {
   return array.reduce(function(prev, curr) {
        return prev.price < curr.price ? prev : curr;
    });
}