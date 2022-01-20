
import {fetchAPI} from './fetch.services'

export class UrlServices {
    baseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?'
    api_key = '';
    manifestUrl = '';
    // Camera uses abbreviation for the type fo camera
    // FHAZ -> Front Hazard Avoidance Camera
    // RHAZ -> Rear Hazard Avoidance Camera
    // MAST -> Mast Camera
    // CHEMCAM -> Chemistry and Camera Complex
    // MAHLI -> Mars Hand Lens Imager
    // MARDI -> Mars Descent Imager
    // NAVCAM -> Navigation Camera
    // uri = `${baseUrl}${sol_string}${api_string}`;
    constructor(api_key) {
        this.api_key = api_key;
        this.manifestUrl = `https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity?api_key=${api_key}`
    }
    SearchBySolNumber = async (solNumber = 1) => 
        await fetchAPI(this.AddApiToString(`${this.baseUrl}sol=${solNumber}`))

    SearchByPageNumber = async (pageNumber = 1) => 
        await fetchAPI(this.AddApiToString(`${this.baseUrl}page=${pageNumber}`))

    SearchByCamera = async (camera = '') => {
        if(!camera.length) return;
    }

    SearchByEarthDate() {

    }

    SearchManifest = async () => 
        await fetchAPI(this.manifestUrl)

    AddApiToString = (string) => `${string}&api_key=${this.api_key}`
}