import BoardTile from "./BoardTile"
import Piece from "../Piece"
import type { Layout, PlacedPiece, Tile } from "../../shared/types"

type Props = {
  layout: Layout
  tileList: Tile[]
  pieceList: PlacedPiece[]
  onRotateTile: (tileId: number) => void
  onRotatePiece: (pieceId: number) => void
}

export default function Board({ layout, tileList, pieceList, onRotateTile, onRotatePiece }: Props) {

  const { slots, dimensions: [width, height] } = layout

  return (
    <div className="grid" style={{ gridColumn: width, aspectRatio: width / height }}>
      {slots.map(([x, y], index) => (
        <div key={index} style={{ gridArea: `${y + 1} / ${x + 1} / ${y + 5} / ${x + 5}` }}>
          {tileList[index] && (
            <BoardTile
              tile={tileList[index]}
              onRotate={() => onRotateTile(tileList[index].id)}
            />
          )}
        </div>
      ))}
      {/* {pieceList.map(piece => (
        <Piece key={piece.id} piece={piece}/>
      ))} */}
    </div>
  )
}