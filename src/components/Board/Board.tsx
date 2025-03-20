import BoardTile from "./BoardTile"
import type { Layout, Piece, Tile } from "../../shared/types"
import { DraggablePiece } from "../Piece"

type Props = {
  layout: Layout
  tileList: Tile[]
  pieceList: Piece[]
  onRotateTile: (tileId: number) => void
  onRotatePiece: (pieceId: number) => void
}

export default function Board({ layout, tileList, pieceList, onRotateTile, onRotatePiece }: Props) {

  const { slots, dimensions: [width, height] } = layout

  return (
    <div className="grid" style={{
      gridTemplate: `repeat(${height}, 1fr) / repeat(${width}, 1fr)`,
      aspectRatio: width / height
    }}>
      {slots.map(([x, y], index) => (
        <div key={index} style={{ gridArea: `${y + 1} / ${x + 1} / ${y + 5} / ${x + 5}` }}>
          {tileList[index] && (
            <BoardTile
              tile={tileList[index]}
              slot={[x, y]}
              onRotate={() => onRotateTile(tileList[index].id)}
            />
          )}
        </div>
      ))}
      {pieceList.map(piece => (
        <DraggablePiece key={piece.id} piece={piece} onRotate={() => onRotatePiece(piece.id)} />
      ))}
    </div>
  )
}