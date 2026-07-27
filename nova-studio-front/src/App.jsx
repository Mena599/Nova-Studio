import AuthRouter from "./router/AuthRouter";
import PublicRouter from "./router/PublicRouter";

const session = false;

export default function App() {



    return session ?
        <AuthRouter />
        :
        <PublicRouter />



}