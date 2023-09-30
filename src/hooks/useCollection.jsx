import React from "react";
import {
  getDocs,
  collection,
  getFirestore,
  where,
  query,
} from "firebase/firestore";

export const useCollection = (collectionName, categoryId) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const db = getFirestore();

    const dataCollection = !categoryId
      ? collection(db, collectionName)
      : query(
          collection(db, collectionName),
          where("category", "==", categoryId)
        );

    getDocs(dataCollection)
      .then((snapshot) => {
        setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => setError(true))
      .finally(() => setLoading(false));
  }, [categoryId]);
  return { data, loading, error };
};
