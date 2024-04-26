export const useCars = async () => {
    const data = await useFetch('https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=20');
    
    return data.data._rawValue.results;
}