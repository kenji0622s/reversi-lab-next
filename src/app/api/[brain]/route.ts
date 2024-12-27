import { NextResponse } from "next/server";
import { askBrains } from "@/brains/exportAskBrains";
import BoardValues from "@/features/board/board-values";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ brain: string }> }
) {
  const boardValues: BoardValues = await request.json();
  const brain = (await params).brain;
  let answerCell: [number, number];
  switch (brain) {
    case "brain1":
      answerCell = askBrains[brain](boardValues);
      break;
    case "brain2":
      answerCell = askBrains[brain](boardValues);
      break;
    case "brain3":
      answerCell = askBrains[brain](boardValues);
      break;
    case "brain4":
      answerCell = askBrains[brain](boardValues);
      break;
    case "brain5":
      answerCell = askBrains[brain](boardValues);
      break;
    case "brain6":
      answerCell = askBrains[brain](boardValues);
      break;
    default:
      answerCell = askBrains[brain](boardValues);
      break;
  }
  return NextResponse.json({ answerCell, brain });
}
