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

//fonction qui récupère le nombre d'heure réellement dormis
const getActualSleepHours = () => getSleephours('lundi') + getSleephours('mardi') + getSleephours('mercredi') + getSleephours('jeudi') + getSleephours('vendredi') + getSleephours('samedi') + getSleephours('dimanche');

//Fonction qui récupère le nombre d'heure de sommeil idéal

const getIdealSleepHours = (idealHours) => idealHours * 7;


//fonction qui calcule la dette de sommeil
const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(10);
    let diffHeure = 0;
    if(actualSleepHours === idealSleepHours){
        return 'Tu as dormis suffisamment';
    }else if(actualSleepHours > idealSleepHours){
        diffHeure = actualSleepHours - idealSleepHours
        return `Tu as trop dormis de ${diffHeure} heures`;
    }else if(actualSleepHours < idealSleepHours){
        diffHeure = idealSleepHours - actualSleepHours;
        return `Tu as pas assez dormis de ${diffHeure} heures`;
    }else {
        return "Erreur";
    };
};

console.log(calculateSleepDebt());