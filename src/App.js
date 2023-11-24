import ListPart from './ListPart';
import { useDispatch,useSelector } from 'react-redux';
import { reset,addMovie,addSong } from './store';
const App = () =>{
    const dispatch = useDispatch();
    const handleClick = () =>{
        dispatch(reset());
    };
    const movieData = useSelector((state)=>{
        return state.movies;
    });
    const songData = useSelector((state)=>{
        return state.songs;
    });
    const blocks=[
        {
            label:'MovieList',
            data:movieData,
            actions:[addMovie]
        },
        {
            label:'SongList',
            data:songData,
            actions:[addSong]
        }
    ];
    const listPartRender = blocks.map((item)=>{
        return(
            <ListPart key={item.label} value={item.data} actions = {item.actions}>{item.label}</ListPart>
        )
    })
    return (
        <div>
            <button onClick={handleClick}>Reset Button</button>
            {listPartRender}
        </div>
    )
}

export default App;