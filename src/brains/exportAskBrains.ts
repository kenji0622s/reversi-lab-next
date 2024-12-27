import askBrain1 from "./brain1";
import askBrain2 from "./brain2";
import askBrain3 from "./brain3";
import askBrain4 from "./brain4";
import askBrain5 from "./brain5";
import askBrain6 from "./brain6";
import BoardValues from "@/features/board/board-values";

interface AskBrainFunction {
    (boardValues: BoardValues): [number, number];
}

export const askBrains: { [key: string]: AskBrainFunction } = {
    'brain1': askBrain1,
    'brain2': askBrain2,
    'brain3': askBrain3,
    'brain4': askBrain4,
    'brain5': askBrain5,
    'brain6': askBrain6
};
