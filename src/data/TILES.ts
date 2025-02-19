import { Tile } from "../types"

export const TILES: Tile[] = [
    {
        id: 0,
        color: "white",
        blocked: [[0, 1], [3, 3]]
    },
    {
        id: 1,
        color: "black",
        blocked: [[1, 2], [3, 3]]
    },
    {
        id: 2,
        color: "white",
        blocked: [[0, 1], [0, 2]]
    },
    {
        id: 3,
        color: "black",
        blocked: [[1, 1], [3, 0]]
    },
    {
        id: 4,
        color: "white",
        blocked: [[3, 0], [3, 3]]
    },
    {
        id: 5,
        color: "black",
        blocked: [[0, 0], [2, 0]]
    },
    {
        id: 6,
        color: "white",
        blocked: [[2, 0]]
    },
    {
        id: 7,
        color: "black",
        blocked: [[2, 3]]
    }
]