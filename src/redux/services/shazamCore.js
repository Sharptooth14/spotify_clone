import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '99c02c1af6msh016246e430497f9p1e8902jsn996a37113a69');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/track' }),
        getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
    }),
});


export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
} = shazamCoreApi;