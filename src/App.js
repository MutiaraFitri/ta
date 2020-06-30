import React from 'react';
import './App.css';
import './assets/style.css';
import io from 'socket.io-client'
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import routes from './routes';
import { ToastContainer, toast, Slide } from 'react-toastify';
import Loading from './loading';
import 'react-toastify/dist/ReactToastify.css';
import { dev } from "./redux/url/server";

const socketUrl = dev
const socket = io(socketUrl)
const publicVapidKey =
  "BKh1biqQNSmXP62RjznwyzSGCm_FXcvtVMm8XPGophGFRxD2oycxY1LgTDRAv0gA2D7_00epR9SOwF9NGToCZcM";

const loading = () => <Loading />;

class App extends React.Component {

  componentDidMount() {
    this.initSocket()
    // toast.info(<div style={{ color: "white", textAlign: "center" }}> 🎟️ AHALALA</div>, {
    //   position: toast.POSITION.TOP_CENTER,
    //   transition: Slide,
    //   autoClose: 3000
    // })
  }

  initSocket = () => {

    this.setState({ socket })
    socket.on('OPEN_TICKET', (data) => {
      console.log(data);
      //alert("ADA TIKCETTTTT !")
      //toast(data.title)
      toast.info(<div style={{ color: "white", textAlign: "center" }}> 	🛈 {data.title}</div>, {
        position: toast.POSITION.TOP_CENTER,
        transition: Slide,
        autoClose: 3000
      })
      this.createNotificationSubscription(data)
    })
  }
  async createNotificationSubscription(data) {
    //wait for service worker installation to be ready
    const serviceWorker = await navigator.serviceWorker.ready;
    // subscribe and return the subscription
    const subscription = await serviceWorker.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: this.urlBase64ToUint8Array(publicVapidKey),
    });

    fetch(dev+"subscribe", {
      method: "POST",
      body: JSON.stringify(subscription),
      headers: {
        "key": "8dfcb234a322aeeb6b530f20c8e9988e",
        "content-type": "application/json",
        "title": data.title,
        "description": data.description
      }
    });
    console.log("Push Sent...");
  }
  urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading()}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />
          {renderRoutes(routes)}
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
