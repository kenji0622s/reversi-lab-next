import { NextResponse } from "next/server";
import askBrain1 from "@/brains/brain1";
import askBrain2 from "@/brains/brain2";
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
      answerCell = askBrain1(boardValues);
      break;
    case "brain2":
      answerCell = askBrain2(boardValues);
      break;
    default:
      answerCell = askBrain1(boardValues);
      break;
  }
  return NextResponse.json({ answerCell, brain });
}
