import classNames from "classnames"
import { Coordinate } from "../../shared/types"

type Props = {
    coordinate: Coordinate
    color: "white" | "black"
    isBlocked?: boolean
}

export default function BoardSpot({ coordinate, color, isBlocked = false }: Props) {
    return (
        <div className={classNames(
            "aspect-square rounded-full bg-radial-[at_50%_75%]",
            color === "black" && !isBlocked && "from-gray-800 to-black",
            color === "white" && !isBlocked && "from-gray-100 to-gray-300",
            color === "black" && isBlocked && "bg-white",
            color === "white" && isBlocked && "bg-black",
        )}>
        </div>
    )
}