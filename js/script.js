'use strict';

/**
 * Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
 * @param  {string} value
 * @return {string}
 доп. задачи из слака
 автор - Сахаров Андрей
 */
function rle(value) {
    let repetition = 0;
    let result = '';
    
    for (let i = 0; i < value.length; i++) {
        
        if (value[i] === value[i + 1]) {
            ++repetition;
        } else {
            result = result + value[i];
            if (repetition > 0) {
                repetition++;
                result = result + repetition;
            }
            repetition = 0;
        }
    }
    
    return result;
}


console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));