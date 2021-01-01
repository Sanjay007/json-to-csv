import Head from 'next/head'
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div className=" font-sans leading-normal tracking-normal">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        {/* <div class="mb-3 pt-0">
  <input type="text" placeholder="Copy Paste JSON Here" class="px-12 py-12 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"/>
</div> */}
        <h1 className="text-grey-darkest">Convert JSON to CSV Online </h1>
        <p>Upload or Copy paste the JSON in the etxt box below , this will convert your JSON to CSV and CSV will get downloaded .</p>

        <div class="w-full">



          <div class="flex w-full sm:flex-row pt-10">

            <div class="flex w-1/5">

            </div>

            <div class="flex-none">

              <div class="mx-3 relative border-dotted h-32 rounded-lg border-dashed border-2 border-black-700 bg-gray-100 flex justify-center items-center">
                <div class="absolute">
                  <div class="flex flex-col items-center"> <i class="fa fa-folder-open fa-3x text-blue-700"></i> <span class="block text-gray-400 font-normal">Upload JSON File</span> </div>
                </div> <input type="file" class="h-full w-full opacity-0" name="" />
              </div>

            </div>
            <div class="flex-1">

              <div class="mx-1">

                <div class="box border rounded flex flex-col shadow bg-white">
                  <div class="box__title bg-grey-lighter px-3 py-2 border-b"><h3 class="text-sm text-grey-darker font-medium">JSON to CSV</h3></div>
                  <textarea class="text-grey-darkest placeholder-gray-400 flex-1 p-2 m-1 bg-transparent text-gray-700 relative bg-white bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:shadow-outline py-9" cols="9" name="tt" placeholder="Copy Paste JSON Here"></textarea>



                </div>
                <button class="mr-5  text-center bg-gray-200 hover:bg-gray-300 border border-gray-400 text-black font-bold py-2 px-6 rounded-md">
                  Convert
</button>
              </div>
            </div>

          </div>
        </div>






      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 1rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
