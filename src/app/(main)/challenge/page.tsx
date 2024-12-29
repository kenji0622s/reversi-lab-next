import BrainModel from "@/models/brain-model";
import ChallengeBoardContainer from "@/features/challenge/components/ChallengeBoardContainer";
import db from "@/firebase/server";
import {
  collection,
  getDocs,
} from "firebase/firestore";



const brains: BrainModel[] = await getDocs(collection(db, "brains")).then((snapshot) =>
  snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      name: doc.data().name,
      endpoint: doc.data().endpoint,
    };
  })
);

const ChallengePage = () => {
  return (
    <div>
      <ChallengeBoardContainer brains={brains}/>
    </div>
  );
};
export default ChallengePage
