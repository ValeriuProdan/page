import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { firebaseConfig } from "./firebase_credentials";

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const storage = getStorage(app);
export const db = getFirestore();

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const getImageUrlsFromStorage = async () => {
  try {
    const imagesRef = ref(storage, `images/`); // Reference to the folder
    const imageList = await listAll(imagesRef); // Get list of files
    const urls = await Promise.all(
      imageList.items.map(async (item) => await getDownloadURL(item))
    );
    return urls; // Return the array of URLs
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object, index) => {
    const stringIndex = "" + index;
    const docRef = doc(collectionRef, stringIndex);
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getDocuments = async (collectionName) => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const documentsMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    acc[docSnapshot.id] = docSnapshot.data();
    return acc;
  }, {});

  return documentsMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
