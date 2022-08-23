import { COLORS } from './constants';

class Random {
    // Inclusive
    static integer (min, max) {
        min = Math.ceil(min); max = Math.floor(max);

        const randomInteger = Math.floor(Math.random() * (max - min + 1) + min);

        return randomInteger;
    }
    
    static element (array) {
        const randomInteger = Random.integer(0, array.length - 1);
        const randomElement = array[randomInteger];

        return randomElement;              
    }

    static colorFromGrayscale (grayscaleValue) {
        const [r, g, b] = Random.element(Object.values(COLORS[grayscaleValue]));

        return `rgb(${r}, ${g}, ${b})`;
    };

    static themeColors () {
        let candidateColors = [
            'seafoam',
            'cyan',
            'sky',
            'blue',
            'purple',
            'magenta',
            'pink'
        ];

        let themeColors = {
            sidebar: [],
            content: []
        };
    
        for (let i = 1; i <= 5; i++) {
            const randomColor = Random.element(candidateColors);
            
            candidateColors = candidateColors.filter((color) => {
                return color !== randomColor;
            });

            i <= 4 
                ? themeColors.sidebar.push(randomColor) 
                : themeColors.content.push(randomColor);
        }

        return themeColors;
    }

    static pick (n, generator, params) {
        const set = new Set();

        while (set.size < n) {
            set.add(generator([...params]))
        }

        return Array.from(set);
    }
}   

export default Random;