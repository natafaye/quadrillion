import { useState } from "react";
import DraggingContext from "./components/DraggingContext";
import Board from "./components/Board";
import PieceTray from "./components/PieceTray";
import { PIECES } from "./data/PIECES";
import { TILES } from "./data/TILES";
import { LAYOUTS } from "./data/LAYOUTS";
import { clockwise, rotate } from "./shared/utilities";
import type { Piece } from "./shared/types";

export default function App() {
  const [layout, setLayout] = useState(LAYOUTS[5])
  const [tileList, setTileList] = useState([TILES[1], TILES[2], TILES[5], TILES[7]])
  const [pieceList, setPieceList] = useState<Piece[]>(PIECES)

  // const rotateLayout = () => {
  //   setLayout(rotate(clockwise, layout))
  //   setTileList(tileList.map(tile => rotate(clockwise, tile)))
  //   setPlacedPieces(placedPieces.map(piece => rotate(clockwise, piece)))
  // }

  const rotateTile = (tileId: number) => {
    setTileList(tileList.map(tile => tile.id === tileId ? rotate(clockwise, tile) : tile))
  }

  const rotatePiece = (pieceId: number) => {
    setPieceList(pieceList.map(piece =>
      piece.id === pieceId ?
        rotate(clockwise, piece, piece.dimensions) :
        piece
    ))
  }

  return (
    <DraggingContext pieceList={pieceList} setPieceList={setPieceList}>
      <div className="h-screen w-screen flex flex-col">
        <div>
          <h3 className="text-6xl text-center my-4 font-rationale">Quadrillion</h3>
          <PieceTray pieceList={pieceList.filter(p => !p.location)} onRotate={rotatePiece} />
        </div>
        <div className="grow shrink flex justify-center my-5">
          <Board
            layout={layout}
            tileList={tileList}
            pieceList={pieceList.filter(p => p.location)}
            onRotateTile={rotateTile}
            onRotatePiece={rotatePiece}
          />
        </div>
      </div>
    </DraggingContext>
  )
}