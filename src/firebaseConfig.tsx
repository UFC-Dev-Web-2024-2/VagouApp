import { Api } from "@mui/icons-material";
import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "",
    authDomain:"VagouAPPweb.firebaseapp.com",
    projectID: "VagouAPPweb",
    storageBucket:"VagouAPPweb.appspot.com",
    messagingSenderID:"",
    appId: "",
};

//essa seção vai iniciar o firebase na aplicação
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const GoogleAuthProvider = new GoogleAuthProvider();