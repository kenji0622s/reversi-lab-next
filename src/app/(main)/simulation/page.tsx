import BrainModel from "@/models/brain-model";
import SimulationBoardContainer from "@/features/simulation/components/SimulationBoardContainer";
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

const SimulationPage = () => {
  return (
    <div>
      <SimulationBoardContainer brains={brains}/>
    </div>
  );
};
export default SimulationPage
