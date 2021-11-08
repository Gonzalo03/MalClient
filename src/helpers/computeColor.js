export const computeColor = (score) => {
    
    if(score>7) return 'green';
    
    if(score<7 && score>4) return 'yellow';

    if(score<4) return 'red'

}
