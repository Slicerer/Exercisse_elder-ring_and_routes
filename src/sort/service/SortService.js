import config from '../../config';

class SortService {
    base = config.baseUrl;
    endpoint = 'incantations';

   async getAllSorts() {
        const response = await fetch(`${this.base}/${this.endpoint}`);
        if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    }
}

export default SortService;