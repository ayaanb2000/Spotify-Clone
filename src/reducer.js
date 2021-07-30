

export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
        
    
    
   // token : 'BQBm8xVPGsF_4mfYInsdb2WA0fRf8wZsWbt7FFTHf9k3qfuNgk7nixIeExI-JRub2ym8UgTuZ15cPokGtz0Zawa9EJjrZuXSW6JASWRkp_L9JJklHe3Q2SLXjcq0Ej7cmYvWp7CVsuFtw_Ie-ABca82kJderlDObk2rP9icQ1JgFW8do',
}

const reducer = (state, action )=>{

    console.log(action);

    switch(action.type){

        case 'SET_USER':
            return {
                ...state,
                user :action.user,
            };
            case 'SET_TOKEN':
                return {
                    ...state,
                    token :action.token,
                };
            case 'SET_PLAYLISTS':
                return {

                     ...state,
                     playlists : action.playlists,
                };
            
            case "SET_PLAYING":
                return {
                    ...state,
                    playing: action.playing,
                };

            
            case "SET_ITEM":
                return {
                    ...state,
                    item: action.item,
                };

            case 'SET_DISCOVER_WEEKLY':
                return {
                   
                      ...state,
                      discover_weekly : action.discover_weekly,
                };
            case "SET_TOP_ARTISTS":
                return {
                    ...state,
                    top_artists: action.top_artists,
                };
            case "SET_SPOTIFY":
                return {
                    ...state,
                    spotify: action.spotify,
                };
           
         default : 
           return state;
    }
};

export default reducer;