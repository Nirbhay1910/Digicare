import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PhoneIcon from '@material-ui/icons/Phone';
import { render } from '@testing-library/react';
import React, {
  createRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useHistory } from 'react-router';
import Peer from 'simple-peer';
import io from 'socket.io-client';
import './css/videoCall.css';

const socket = io.connect('http://localhost:5000');
class VideoCall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      me: '',
      stream: {},
      receivingCall: false,
      caller: '',
      callerSignal: {},
      idToCall: '',
      callEnded: false,
      name: '',
    };
    this.myVideo = createRef();
    this.userVideo = createRef();
    this.connectionRef = createRef();
  }

  componentDidMount() {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        this.setState({
          stream: stream,
        });
        this.myVideo.current.srcObject = stream;
      });

    socket.on('me', (id) => {
      this.setState({
        me: id,
      });
    });

    socket.on('callUser', (data) => {
      this.setState({
        receivingCall: true,
        caller: data.from,
        name: data.name,
        callerSignal: data.signal,
      });
    });
  }
  render() {
    const { stream, userVideo, connectionRef } = this.state;
    const callUser = (id) => {
      const peer = new Peer({
        initiator: true,
        trickle: false,
        stream: this.state.stream,
      });
      peer.on('signal', (data) => {
        socket.emit('callUser', {
          userToCall: id,
          signalData: data,
          from: this.state.me,
          name: this.state.name,
        });
      });
      peer.on('stream', (stream) => {
        userVideo.current.srcObject = stream;
      });
      socket.on('callAccepted', (signal) => {
        this.setState({
          callAccepted: true,
        });
        peer.signal(signal);
      });

      connectionRef.current = peer;
    };

    const answerCall = () => {
      this.setState({
        callAccepted: true,
      });
      const peer = new Peer({
        initiator: false,
        trickle: false,
        stream: stream,
      });
      peer.on('signal', (data) => {
        socket.emit('answerCall', { signal: data, to: this.state.caller });
      });
      peer.on('stream', (stream) => {
        userVideo.current.srcObject = stream;
      });

      peer.signal(this.state.callerSignal);
      connectionRef.current = peer;
    };

    const leaveCall = () => {
      this.setState({
        callEnded: true,
      });
      connectionRef.current.destroy();
    };
    if (this.state.me) {
      return (
        <>
          <h1 style={{ textAlign: 'center', color: '#fff' }}>Zoomish</h1>
          <div className='container'>
            <div className='video-container'>
              <div className='video'>
                {stream && (
                  <video
                    playsInline
                    muted
                    ref={this.myVideo}
                    autoPlay
                    style={{ width: '300px' }}
                  />
                )}
              </div>
              <div className='video'>
                {this.state.callAccepted && !this.state.callEnded ? (
                  <video
                    playsInline
                    ref={userVideo}
                    autoPlay
                    style={{ width: '300px' }}
                  />
                ) : null}
              </div>
            </div>
            <div className='myId'>
              {/* <TextField
              id='filled-basic'
              label='Name'
              variant='filled'
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginBottom: '20px' }}
            /> */}
              <CopyToClipboard
                text={this.state.me}
                style={{ marginBottom: '2rem' }}
              >
                <Button
                  variant='contained'
                  color='primary'
                  startIcon={<AssignmentIcon fontSize='large' />}
                  onClick={() => navigator.clipboard.writeText(this.state.me)}
                >
                  {this.state.me}
                </Button>
              </CopyToClipboard>

              <TextField
                id='filled-basic'
                label='ID to call'
                variant='filled'
                value={this.state.idToCall}
                onChange={(e) => this.setState({ idToCall: e.target.value })}
              />
              <div className='call-button'>
                {this.state.callAccepted && !this.state.callEnded ? (
                  <Button
                    variant='contained'
                    color='secondary'
                    onClick={leaveCall}
                  >
                    End Call
                  </Button>
                ) : (
                  <IconButton
                    color='primary'
                    aria-label='call'
                    onClick={() => callUser(this.state.idToCall)}
                  >
                    <PhoneIcon fontSize='large' />
                  </IconButton>
                )}
                {this.state.idToCall}
              </div>
            </div>
            <div>
              {this.state.receivingCall && !this.state.callAccepted ? (
                <div className='caller'>
                  <h1>{this.state.name} is calling...</h1>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={answerCall}
                  >
                    Answer
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </>
      );
    } else {
      return <h1>Pls reload or wait for few seconds</h1>;
    }
  }
}

export default VideoCall;
