import ReactPlayer from 'react-player';
import {useState} from 'react';
import WalkmanHandler from '../core/app/walkmanHandler';

const walkman = new WalkmanHandler();

function Player() {
    const [url, setUrl] = useState(walkman.url);
    const [index, setIndex] = useState(walkman.currentSongIndex);
    const [name, setName] = useState(walkman.name);
    const [author, setAuthor] = useState(walkman.author);

    const previous = () => {
        walkman.previous();
        setUrl(walkman.url);
        setIndex(walkman.currentSongIndex);
        setName(walkman.name);
        setAuthor(walkman.author);
    }

    const next = () => {
        walkman.next();
        setUrl(walkman.url);
        setIndex(walkman.currentSongIndex);
        setName(walkman.name);
        setAuthor(walkman.author);
    }

    return (
        <div>
            <div className="text-center flex justify-center">
                <button onClick={() => previous()}>Previous</button>
                <ReactPlayer url={url} />
                <button onClick={() => next()}>Next</button>
            </div>
            <div>
                <p>Song N°{index+1}</p>
                <p>Title: {name}</p>
                <p>Author: {author}</p>
            </div>
        </div>
    )
}

export default Player;
