//fonction qui renvoie le nombre d'heure de repos d'une nuit donné
const getSleephours = (day)=>{
   
    day = day.toLowerCase();

    switch(day){
        case 'lundi':
            return 8;
            break;
        case 'mardi':
            return 8;
            break;
        case 'mercredi':
            return 8;
            break;
        case 'jeudi':
            return 8;
            break;
        case 'vendredi':
            return 8;
            break;
        case 'samedi':
            return 8;
            break;
        case 'dimanche':
            return 8;
            break;
        default:
            return 'Erreur de saisie de jour'
    }
}

console.log(getSleephours('ruihfweif'));