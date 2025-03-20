import classNames from "classnames"
import type { Piece } from "../../shared/types"
import styles from "./PieceTray.module.css"
import { DraggablePiece } from "../Piece"
import { useDroppable } from "@dnd-kit/core"

type Props = {
    pieceList: Piece[]
    onRotate: (placeId: number) => void
}

export default function PieceTray({ pieceList, onRotate }: Props) {
    const { setNodeRef } = useDroppable({
        id: "TRAY"
    })
    return (
        <div ref={setNodeRef}
            className={classNames(
                "flex gap-4 p-4 overflow-x-scroll bg-gray-500",
                styles.styledScrollbar
            )}
        >
            {pieceList.map(piece => (
                <DraggablePiece
                    key={piece.id}
                    piece={piece}
                    onRotate={() => onRotate(piece.id)}
                    dotHeight="30px"
                />
            ))}
        </div>
    )
}