export const exerciseOptions = {
    method: 'GET',
    headers: {
        // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Key': 'd1c251b42bmshce6f185852fc3b6p17dcedjsn86b3e1f7e76a',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Key': 'd1c251b42bmshce6f185852fc3b6p17dcedjsn86b3e1f7e76a',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}