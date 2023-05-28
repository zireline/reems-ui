import Head from 'next/head';
import SideBar from '../components/SideBar';
import Profile from '../components/Profile';
import SignOut from '../components/SignOut';
import { useEffect } from 'react';

export default function Settings() {
  return (
    <div className="flex">
      <Head>
        <title>REEMS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="w-1/6 h-screen bg-gray-200">
        <SideBar />
      </div>

      <div
        className="w-3/4 h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/main-bg.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
        }}
      >
        <div className="d-flex align-items-center justify-content-center h-100">
          <div className="card">
            <div className="card-body bg-white">
              <Profile />
              <SignOut />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}