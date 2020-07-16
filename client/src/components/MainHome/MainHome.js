import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import styles from './MainHome.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MainHome = () => {
  let history = useHistory();
  const location = useLocation();

  const [onetZJRc, setOnetZJRc] = useState(false);
  const [onelgibX, setOnelgibX] = useState(false);
  const [oneId, setOneId] = useState('');
  const [onePin, setOnePin] = useState('');

  useEffect(() => {
    if( typeof (location.state) !== 'undefined' && location.state != null) {
      const { id, pin, final } = location.state;
      if (pin == "tZJRc") {
        setOnetZJRc(final);
        setOneId(id);
        setOnePin(pin);
      } else if (pin == "lgibX") {
        setOnelgibX(final);
        setOneId(id);
        setOnePin(pin);
      } else {

      }
    }
  })

  const pageNext = () => {
    history.push({
      pathname: '/pin',
      state: {
        tZJRc: onetZJRc,
        lgibX: onelgibX,
        oneid: oneId,
        onepin: onePin,
      }
    })
  }

  return (
    <div className={cx('home-back')}>
      <div className={cx('home-contents')}>
        <div className={cx('main-title')}>EX-Maker</div>
        <div className={cx('main-buttons')}>
          <button className={cx('pin-button')} onClick={pageNext}>PIN</button>
        </div>
      </div>
    </div>
  );
}

export default MainHome;
