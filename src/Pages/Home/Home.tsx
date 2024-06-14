import { useRecordWebcam } from 'react-record-webcam'
import { Button } from '../../Components/Button'
import { useEffect, useState } from 'react'
import './Home.scss'
import { useNavigate } from 'react-router'

const Home = () => {
  const { activeRecordings, createRecording, download, openCamera, startRecording, stopRecording } = useRecordWebcam()

  const [videoDeviceId, setVideoDeviceId] = useState<string>('')
  const [audioDeviceId, setAudioDeviceId] = useState<string>('')
  const [posQues, setPosQes] = useState(0)

  const start = async () => {
    const recording = await createRecording(videoDeviceId, audioDeviceId)
    if (recording) await openCamera(recording.id)
  }

  const nagivate = useNavigate()

  useEffect(() => {
    start()
  }, [])

  useEffect(() => {
    voice()
  }, [posQues])

  const ques = [
    {
      id: 1,
      title: 'Hãy giới thiệu một chút về bản thân bạn !'
    },
    {
      id: 2,
      title: 'Hãy giới thiệu về kinh nghiệm làm việc của bạn !'
    },
    {
      id: 3,
      title: 'Tại sao bạn lại chọn công ty chúng tôi !'
    },
    {
      id: 4,
      title: 'Bạn có câu hỏi gì cho chúng tôi không !'
    }
  ]
  if (posQues > 3) {
    nagivate('/end')
  }

  const handleStopAndDownload = async (recordingId: any) => {
    await stopRecording(recordingId)
    download(recordingId)
    setPosQes(posQues + 1)
  }

  const voice = () => {
    console.log(posQues)
    const voiceQues = new SpeechSynthesisUtterance(ques[posQues].title)
    voiceQues.lang = 'vi-VN'
    window.speechSynthesis.speak(voiceQues)
  }

  return (
    <>
      <div className='title'>PHỎNG VẤN TỰ ĐỘNG</div>

      <div className='home-container'>
        <div className='home-left'>
          <div className='camera-container'>
            {activeRecordings?.map((recording) => (
              <div className='  ' key={recording.id}>
                <video className='video' ref={recording.webcamRef} loop autoPlay playsInline />
                <div className='btn-container'>
                  <Button
                    inverted
                    disabled={recording.status === 'RECORDING' || recording.status === 'PAUSED'}
                    onClick={() => startRecording(recording.id)}
                  >
                    Bắt Đầu Quay
                  </Button>
                  <Button
                    inverted
                    onClick={() => {
                      handleStopAndDownload(recording.id)
                    }}
                  >
                    Ngừng Quay
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='home-right'>
          <div className='title-ques'>Vui lòng trả lời lần lượt các câu hỏi !</div>
          <div className='ques-detail'>{ques[posQues].title}</div>
        </div>
      </div>
    </>
  )
}
export default Home
