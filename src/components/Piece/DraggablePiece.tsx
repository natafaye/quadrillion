import { useDraggable } from "@dnd-kit/core"
import GridPiece, { GridPieceProps } from "./GridPiece"

export default function DraggablePiece({ piece, ...props}: GridPieceProps) {
    const { setNodeRef, attributes, listeners } = useDraggable({
        id: piece.id
    })

    return (
        <GridPiece
            piece={piece}
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            {...props}
        />
    )
}