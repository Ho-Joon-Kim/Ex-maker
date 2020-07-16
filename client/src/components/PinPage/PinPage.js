import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import styles from './PinPage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const axios = require('axios');

const PinPage = () => {
  let history = useHistory();
  const location = useLocation();

  const [pinnum, setPinnum] = useState('');
  const [nickname, setNickname] = useState('');
  const [isWhat, setIsWhat] = useState(true);

  const [onetZJRc, setOnetZJRc] = useState(false);
  const [onelgibX, setOnelgibX] = useState(false);
  const [oneId, setOneId] = useState('');
  const [onePin, setOnePin] = useState('');

  useEffect(() => {
    if( typeof (location.state) !== 'undefined' && location.state != null) {
      const { tZJRc, lgibX, oneid, onepin } = location.state;
      setOnetZJRc(tZJRc);
      setOnelgibX(lgibX);
      setOneId(oneid);
      setOnePin(onepin);
    }
  })

  const handlePinSubmit = (e) => {
    e.preventDefault();
    setIsWhat(false);
  }

  const handleNickSubmit = (e) => {
    e.preventDefault();

    var passRule = /^.*(?=.*[!@#$%^&+=]).*$/;
    if(passRule.test(nickname)) {
      alert("닉네임에는 특수문자가 들어갈 수 없습니다.");
      setPinnum('');
      setNickname('');
      setIsWhat(true);
    }

    if(!passRule.test(nickname) && pinnum == "tZJRc" && nickname != '' ){
        axios.post(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_PORT}/api/use/loadpage`, {
          id:nickname,
          pin:pinnum
        })
        .then(function (response) {
          console.log(response.data.check);
          if(response.data.check == true) {
            history.push({
               pathname: '/view',
               state: {
                 pin: pinnum,
                 id: nickname
               }
             })
             setPinnum('');
             setNickname('');
          } else {
            alert("설문이 완료된 페이지입니다.");
            setPinnum('');
            setNickname('');
            setIsWhat(true);
          }
        })
        .catch(function (error){
          console.log(error);
        });
    } else if(!passRule.test(nickname) && pinnum == "lgibX" && nickname != '' ){
      axios.post(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_PORT}/api/use/loadpage`, {
        id:nickname,
        pin:pinnum
      })
      .then(function (response) {
        console.log(response.data.check);
        if(response.data.check == true) {
          history.push({
             pathname: '/view',
             state: {
               pin: pinnum,
               id: nickname
             }
           })
        } else {
          alert("설문이 완료된 페이지입니다.");
          setPinnum('');
          setNickname('');
          setIsWhat(true);
        }
      })
      .catch(function (error){
        console.log(error);
      });

    }else {
      alert("다시입력해주세요");
      setPinnum('');
      setNickname('');
      setIsWhat(true);
    }

    // if(!passRule.test(nickname) && pinnum == "tZJRc" && nickname !== '') {
    //   e.preventDefault();
    //
    //   if(onetZJRc == true) {
    //     if(nickname == oneId) {
    //       alert("설문이 완료된 페이지입니다.");
    //       setPinnum('');
    //       setNickname('');
    //       setIsWhat(true);
    //     } else {
    //       axios.post(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_PORT}/api/use/loadpage`, {
    //         id:nickname,
    //         pin:pinnum
    //       })
    //       .then(function (response) {
    //         console.log(response.check);
    //       })
    //       .catch(function (error){
    //         console.log(error);
    //       })
    //
    //       history.push({
    //         pathname: '/view',
    //         state: {
    //           pin: pinnum,
    //           id: nickname
    //         }
    //       })
    //     }
    //   } else {
    //     axios.post(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_PORT}/api/use/loadpage`, {
    //       id:nickname,
    //       pin:pinnum
    //     })
    //     .then(function (response) {
    //       console.log(response.body.check);
    //     })
    //     .catch(function (error){
    //       console.log(error);
    //     })
    //
    //     history.push({
    //       pathname: '/view',
    //       state: {
    //         pin: pinnum,
    //         id: nickname
    //       }
    //     })
    //   }
    // }
    // else if(!passRule.test(nickname) && pinnum == "lgibX" && nickname !== '') { // L은 소문자임
    //   if(onelgibX == true) {
    //     if(nickname == oneId) {
    //       alert("설문이 완료된 페이지입니다.");
    //       setPinnum('');
    //       setNickname('');
    //       setIsWhat(true);
    //     } else {
    //       axios.post(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_PORT}/api/use/loadpage`, {
    //         id:nickname,
    //         pin:pinnum
    //       })
    //       .then(function (response) {
    //         console.log(response.body.check);
    //       })
    //       .catch(function (error){
    //         console.log(error);
    //       })
    //
    //       history.push({
    //         pathname: '/view',
    //         state: {
    //           pin: pinnum,
    //           id: nickname
    //         }
    //       })
    //     }
    //   } else {
    //     axios.post(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_PORT}/api/use/loadpage`, {
    //       id:nickname,
    //       pin:pinnum
    //     })
    //     .then(function (response) {
    //       console.log(response.body.check);
    //     })
    //     .catch(function (error){
    //       console.log(error);
    //     })
    //
    //     history.push({
    //       pathname: '/view',
    //       state: {
    //         pin: pinnum,
    //         id: nickname
    //       }
    //     })
    //   }
    // }
    // else {
    //   alert("다시입력해주세요");
    //   setPinnum('');
    //   setNickname('');
    //   setIsWhat(true);
    // }

    // axios.post('api/use/loadpage', {
    //   pin: pinnum,
    //   id: nickname
    // })
    // .then(function (response) {
    //   console.log(response.body.check);
    //   setCheck(response.body.check);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

  }

  const handlePrev = () => {
    setPinnum('');
    setNickname('');
    setIsWhat(true);
  }

  return(
    <div>
      { isWhat == true ?
      <div className={cx('pin-back')}>
        <Link to="/"><span className={cx('pin-before')}>{[<span>&lt;</span>]}</span></Link>
        <form className={cx('pin-contents')} onSubmit={handlePinSubmit}>
          <div>PIN 번호를 입력하여 <br/> 참여하세요!</div>
          <input className={cx('pin-input')} type="text" name="pinnum" placeHolder="PIN 번호를 입력하세요" value={pinnum} onChange={e => setPinnum(e.target.value)}/>
          <input className={cx('pin-submit')} type="submit" value="확인"/>
        </form>
      </div>
      :
      <div className={cx('nick-back')}>
        <span className={cx('nick-before')} onClick={handlePrev}>{[<span>&lt;</span>]}</span>
        <form className={cx('nick-contents')} onSubmit={handleNickSubmit}>
          <div>닉네임을 입력하세요!</div>
          <input className={cx('nick-input')} type="text" name="nick" placeHolder="닉네임을 입력하세요" value={nickname} onChange={e => setNickname(e.target.value)}/>
          <input className={cx('nick-submit')} type="submit" value="확인"/>
        </form>
      </div>
      }
    </div>
  );
}

export default PinPage;
