import { API_BASE_URL} from '../constants';

export function getSummary(){
    return (
        fetch(API_BASE_URL+"/summary")
    );
}

export function getCountrySummary(countryName){
    return (
        fetch(API_BASE_URL+`/live/country/${countryName}`)
    );
}