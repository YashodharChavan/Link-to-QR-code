import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import QRCode from "react-qr-code";
import html2convas from 'html2canvas'
import './App.css'


function App() {
  const [url, setUrl] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const QRcode = useRef(null)
  const [websiteName, setWebsiteName] = useState("")
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    setIsSubmitted(true)
    setUrl(data.url)
    const hostname = new URL(data.url).hostname
    let cleanHostname = hostname.replace(/^www\./, '');
    const website = cleanHostname.split('.')[0]; 
    setWebsiteName(website)
  }


  const downloadQRCode = () => {
    console.log(websiteName)
    html2convas(QRcode.current).then((canvas) => {
      const link = document.createElement('a')
      link.download = `${websiteName}-QR.png`
      link.href = canvas.toDataURL()
      link.click()
    })
  }

  return (
    <div className='outer-container h-[600px] w-screen flex justify-center items-center'>
      <div className="container flex h-[400px] w-2/3 bg-slate-300 rounded-md p-4 md:flex-row flex-col ">
        <div className='form-part h-full md:w-1/2 w-full'>
          <form onSubmit={handleSubmit(onSubmit)} className='h-full w-full flex flex-col gap-y-5'>
            <h1 className="text-3xl font-medium">Enter your link here: </h1>
            <input type="url" {...register("url", {required: true})} className='h-9 rounded-sm text-lg p-2' />
            <div className='flex justify-between gap-x-3'>
              <input type="submit" value="Get QR" className='bg-yellow-500 rounded-md px-1 py-1 w-[122px] cursor-pointer'/>
              {isSubmitted&& <button className='bg-yellow-500 rounded-md px-1 py-1 w-[122px] cursor-pointer' onClick={downloadQRCode}>Download</button>}
            </div>
          </form>
        </div>
        <div ref={QRcode} className="qr-code-part h-full md:w-1/2 w-full flex justify-center items-center">
        {isSubmitted && <QRCode value={url} className='h-3/5'></QRCode>}
        </div>
      </div>
    </div>
  )
}

export default App
