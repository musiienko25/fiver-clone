import Navbar from "@/components/Navbar";
import { StateProvider } from "@/context/StateContext";
import reducer, { initialState } from "@/context/StateReducers";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Navbar />
      <Component {...pageProps} />
    </StateProvider>
  );
}
