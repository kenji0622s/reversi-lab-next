import BoardContainer from "@/features/board/components/BoardContainer";
import db from "@/firebase/server";
import {
  collection,
  getDocs,
} from "firebase/firestore";

interface Brain {
  id: string;
  name: string;
  endpoint: string;
}

const brains: Brain[] = await getDocs(collection(db, "brains")).then((snapshot) =>
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
      <BoardContainer mode="simulation" brains={brains}/>
    </div>
  );
};
export default SimulationPage
