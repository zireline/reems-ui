import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>REESMS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <NavBar />

      <div
        className="container-fluid mx-auto bg-cover bg-center min-h-screen min-w-screen"
        style={{
          backgroundImage: "url('/bgg.jpg')"
        }}
      >

        <div className="container-fluid mx-auto flex flex-wrap py-28 min-h-screen min-w-screen">
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="card" style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}>
              <div className="card-body">
                <div className="flex flex-col items-center">
                  <div className="text text-3xl mb-2 italic">
                    <span style={{ fontFamily: 'font-weight:bold; font-style:italic' }}> Welcome to </span>
                  </div>
                  <div className="text text-8xl font-bold mb-5">
                    <span style={{ fontFamily: 'cursive' }}> REESMS </span>
                  </div>
                  <div className="text text-2xl mx-12 mb-5">
                    Real estate and sustainability management involves implementing environmentally conscious practices,
                    such as tracking environmental hazards, energy consumption, expenses, tenants,
                    which not only benefit the environment but also improve the overall value and marketability of a property.
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="grid grid-cols-2 gap-5">
              <Link href="/environmentalHazard" className="no-underline">
                <div className="card mx-auto rounded-xl mb-5" style={{ maxWidth: "28rem" }} >
                  <div className="relative">
                    <img
                      src="/environmentalHazard.png"
                      className="z-10 mx-auto text-center rounded-xl w-full h-48 object-cover"
                      alt="Environmental Hazard"
                    />
                    <div className="card-body bg-white z-20 rounded-b-xl">
                      <h2 className="text-2xl text-center text-black">Environmental Hazard Tracker</h2>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/energyConsumption" className="no-underline">
                <div className="card mx-auto rounded-xl mb-5" style={{ maxWidth: "28rem" }}>
                  <div className="relative">
                    <img
                      src="/energyConsumption.png"
                      className="z-10 mx-auto text-center rounded-xl w-full h-48 object-cover"
                      alt="Energy Consumption"
                    />
                    <div className="card-body bg-white z-20 rounded-b-xl">
                      <h2 className="text-2xl text-center text-black">Energy Consumption Tracker</h2>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/expense" className="no-underline">
                <div className="card mx-auto rounded-xl mb-5" style={{ maxWidth: "28rem" }}>
                  <div className="relative">
                    <img
                      src="/expense.png"
                      className="z-10 mx-auto text-center rounded-xl w-full h-48 object-cover"
                      alt="Expense"
                    />
                    <div className="card-body bg-white z-20 rounded-b-xl">
                      <h2 className="text-2xl text-center text-black">Expense Tracker</h2>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/tenantInformation" className="no-underline">
                <div className="card mx-auto rounded-xl mb-5" style={{ maxWidth: "28rem" }}>
                  <div className="relative">
                    <img
                      src="/tenantInformation.png"
                      className="z-10 mx-auto text-center rounded-xl w-full h-48 object-cover"
                      alt="Tenant Information"
                    />
                    <div className="card-body bg-white z-20 rounded-b-xl">
                      <h2 className="text-2xl text-center text-black">Tenant Information</h2>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div >
    </div>
  )
}
