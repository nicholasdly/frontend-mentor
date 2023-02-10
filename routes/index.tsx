import { Head } from "$fresh/runtime.ts";
import { setup } from 'twind';
import QRCode from "../components/QRCode.tsx";

export default function Home() {
  return (
    <body class="font-outfit bg-background">

      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <title>Frontend Mentor | QR code component</title>
      </Head>

      <div class="grid place-items-center w-screen h-screen">
        <QRCode />
      </div>

    </body> 
  );
}
