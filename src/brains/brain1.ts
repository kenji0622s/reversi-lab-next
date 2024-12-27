import BoardValues from "@/features/board/board-values";

import putRandam from "@/brains/logics/put-randam";

function askBrain1(boardValuesState: BoardValues) {
    const { blackAvailableCells, whiteAvailableCells, turn } = boardValuesState;
    console.log(turn + ": Brain1");
    if (turn === "black") {
        return putRandam(blackAvailableCells);
    } else {
        return putRandam(whiteAvailableCells);
    }
}

export default askBrain1;