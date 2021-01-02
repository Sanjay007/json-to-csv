import Head from 'next/head'
import Navbar from '../components/navbar';
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import csvjson from 'csvjson';
import { CsvToHtmlTable } from 'react-csv-to-table';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data:'',datacsv:undefined};
  }
handleChange=(ev)=>{
this.setState({data:ev.target.value});
};

uploadFile=(event)=> {
  var that=this;

  let file = event.target.files[0];
  console.log(file);
  let filereader=new FileReader();
  filereader.onload = function(event) {
    // The file's text will be printed here
    let data=event.target.result;
    var options = {
      headers:'key'
   }
    const CSVOut=csvjson.toCSV(data, options);
    console.log(CSVOut);
    that.setState({datacsv:CSVOut});

      var dataBlob = new Blob([CSVOut], {type: 'text/csv'});

      let url = window.URL.createObjectURL(dataBlob);
      let a = document.createElement('a');
      a.href = url;
      a.download = "CSVOut.csv";
      a.click();

  };    
  filereader.readAsText(file);


  


}

handleClick=(e)=>{
  var options = {
    headers:'key'
 }
  const CSVOut=csvjson.toCSV(this.state.data, options);
  console.log(CSVOut);
this.setState({datacsv:CSVOut});

  var data = new Blob([CSVOut], {type: 'text/csv'});

  let req={"jsonInp":JSON.stringify(this.state.data)};



// //   
  
     let url = window.URL.createObjectURL(data);
     let a = document.createElement('a');
     a.href = url;
     a.download = "a.csv";
     a.click();
     


//});


}
  render() {
    return (
      <div className=" font-sans leading-normal tracking-normal">
      <Head>
        <title>Fast and free JSON to CSV Converter Online </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        {/* <div class="mb-3 pt-0">
  <input type="text" placeholder="Copy Paste JSON Here" class="px-12 py-12 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"/>
</div> */}
        <h1 className="text-grey-darkest">Convert JSON to CSV Online </h1>
        <p>
      How to Convert JSON to CSV ? Copy  your JSON and paste  below or upload as a file . Your data is never sent to our servers. Please report bugs and send feedback on < a href="https://github.com/Sanjay007">GitHub</a>. 
      </p>
      <p>    Upload or Copy paste the JSON in the text box below , this will convert your JSON to CSV and CSV will get downloaded . You will also be able to view the CSV in tabular format once converted.</p>

           <div class="w-full">



          <div class="flex w-full sm:flex-row pt-10">

            <div class="flex w-1/5">

            </div>

            <div class="flex-none">

              <div class="mx-3 relative border-dotted h-32 rounded-lg border-dashed border-2 border-black-700 bg-gray-100 flex justify-center items-center">
                <div class="absolute">
                  <div class="flex flex-col items-center"> <i class="fa fa-folder-open fa-3x text-blue-700"></i> <span class="block text-gray-400 font-normal">Upload JSON File</span> </div>
                </div> <input type="file"  name="myFile" onChange={this.uploadFile}  class="h-full w-full opacity-0" name="" />
              </div>

            </div>
            <div class="flex-1">

              <div class="mx-1">

                <div class="box border rounded flex flex-col shadow bg-white">
                  <div class="box__title bg-grey-lighter px-3 py-2 border-b"><h3 class="text-sm text-grey-darker font-medium">JSON to CSV</h3></div>
                  <textarea class="text-grey-darkest placeholder-gray-400 flex-1 p-2 m-1 bg-transparent text-gray-700 relative bg-white bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:shadow-outline py-9" cols="9" name="tt" placeholder="Copy Paste JSON Here" onChange={this.handleChange} ></textarea>



                </div>
                <button onClick={this.handleClick} class="mr-5  text-center bg-gray-200 hover:bg-gray-300 border border-gray-400 text-black font-bold py-2 px-6 rounded-md">
                  Convert
</button>
              </div>
            </div>

          </div>
        </div>

<div className="flex pt-7">
  
  {this.state.datacsv!=undefined?
 <div>
    <h2>Json to CSV Converted Results In table </h2>
<CsvToHtmlTable
  data={this.state.datacsv}
  csvDelimiter=","
  tableClassName="rtable"
/></div>:''}

</div>




      </main>

      <footer>
       copyright@2020 
       <a href="">
       json-to-csv-online
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
    );
  }
}

Home.propTypes = {};

export default Home;
