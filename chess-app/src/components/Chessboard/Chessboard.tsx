import Tile from "../Tile/Tile";
import './Chessboard.css';

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

interface Piece {
    image: string
    x: number
    y: number
}

//This is a pieces object with a Piece Interface!
const pieces: Piece[] = [];

//duplicates pawn image 8 times across the board
for(let i = 0; i <8; i++) {
    pieces.push({image: "assets/images/pawn-black.png", x: i, y: 6});
}

for(let i = 0; i <8; i++) {
    pieces.push({image: "assets/images/pawn-white.png", x: i, y: 1});
}

//assigns an image to every Piece.image. AND assigns image to every coordinate in board.
export default function Chessboard() {
    let board = [];

    for(let j=verticalAxis.length-1; j >= 0; j--) {
        for(let i = 0; i < horizontalAxis.length; i++) {
            const number = j + i + 2;
            let image = undefined;

            pieces.forEach((p) => {
                if(p.x === i && p.y ===j) {
                    image = p.image;
                }
            })

            board.push(<Tile image={image} number={number} />);
        }
    }
    return <div id="chessboard">{board}     
    </div>
}

//timestamp 16:51