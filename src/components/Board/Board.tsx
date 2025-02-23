import BoardTile from "./BoardTile"
import GridPiece from "../Piece/GridPiece"
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
    <div className="grid" style={{
      gridTemplate: `repeat(${height}, 1fr) / repeat(${width}, 1fr)`,
      aspectRatio: width / height
    }}>
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
      {pieceList.map(piece => (
        <GridPiece key={piece.id} piece={piece} />
      ))}
      {/* <div className="bg-amber-600" style={{ gridArea: "3 / 3 / 3 / 3" }}>hi</div> */}
    </div>
  )
}