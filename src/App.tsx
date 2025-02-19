import { useState } from "react";
import Board from "./components/Board";
import PieceTray from "./components/PieceTray";
import { clockwise, rotate } from "./shared/utilities";
import type { PlacedPiece, UnplacedPiece } from "./shared/types";
import { PIECES } from "./data/PIECES";
import { TILES } from "./data/TILES";
import { LAYOUTS } from "./data/LAYOUTS";

export default function App() {
  const [layout, setLayout] = useState(LAYOUTS[5])
  const [tileList, setTileList] = useState([TILES[1], TILES[2], TILES[5], TILES[7]])
  const [unplacedPieces, setUnplacedPieces] = useState<UnplacedPiece[]>(PIECES)
  const [placedPieces, setPlacedPieces] = useState<PlacedPiece[]>([{ ...PIECES[0], location: [4, 4] }])

  // const rotateLayout = () => {
  //   setLayout(rotate(clockwise, layout))
  //   setTileList(tileList.map(tile => rotate(clockwise, tile)))
  //   setPlacedPieces(placedPieces.map(piece => rotate(clockwise, piece)))
  // }

  const rotateTile = (tileId: number) => {
    setTileList(tileList.map(tile => tile.id === tileId ? rotate(clockwise, tile) : tile))
  }

  const rotatePiece = (pieceId: number) => {
    setUnplacedPieces(unplacedPieces.map(piece =>
      piece.id === pieceId ?
        rotate(clockwise, piece, piece.dimensions) :
        piece
    ))
    setPlacedPieces(placedPieces.map(piece =>
      piece.id === pieceId ?
        rotate(clockwise, piece, piece.dimensions) :
        piece
    ))
  }

  return (
    <div className="h-screen w-screen flex flex-col">
      <div>
        <h3 className="text-5xl text-center mb-4">Quadrillion</h3>
        <PieceTray pieceList={unplacedPieces} onRotate={rotatePiece} />
      </div>
      <div className="grow shrink flex justify-center my-5">
        <Board
          layout={layout}
          tileList={tileList}
          pieceList={placedPieces}
          onRotateTile={rotateTile}
          onRotatePiece={rotatePiece}
        />
      </div>
    </div>
  )
}