// todo: make the floating button

import React, { useState } from "react";
import "./Events.css";
import { Pop1 } from "./Popup";
import { Pop2 } from "./Popup";
import { Pop3 } from "./Popup";
import { Pop4 } from "./Popup";

export default function Event() {
  const [degree, setDegree] = useState(0);
  const [autoRotate, setautoRotate] = useState(true);

  // floating-button
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);


  const handleChildClick = (e) => {
    e.preventDefault();
    setActive(true);
  };

  const handleChildClick1 = (e) => {
    e.preventDefault();
    setActive1(true);
  };

  const handleChildClick2 = (e) => {
    e.preventDefault();
    setActive2(true);
  };
  const handleChildClick3 = (e) => {
    e.preventDefault();
    setActive3(true);
  };

  const handleFloat = (e) => {
    e.preventDefault();
    setClick1(true);
    setClick(true);
  };
  const handleFloat2 = (e) => {
    e.preventDefault();
    setClick2(true);
    setClick(true);
  };
  const handleFloat3 = (e) => {
    e.preventDefault();
    setClick3(true);
    setClick(true);
  };

  const handleNext = (e) => {
    // e.preventDefault();
    setDegree(degree - 60);
    setautoRotate(false);
  };
  const handlePrev = (e) => {
    e.preventDefault();
    setDegree(degree + 60);
    setautoRotate(false);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setClick3(false);
    setClick2(false);
    setClick1(false);
    setClick(false);
    setautoRotate(true);
  };

  const autoRotation = (e) => {
    // e.preventDefault();
    setDegree(degree + 60);
    // setDegree(0);
  };

  {
    autoRotate
      ? setTimeout(() => {
          autoRotation();
        }, 2000)
      : clearTimeout(autoRotation);
  }

  console.log(degree);

  return (
    <div className='events'>
      {/* popups */}
      {active ? <Pop1 /> : <></>}
      {active ? (
        <div onClick={() => setActive(false)} className='close'>
          <i className='fa fa-times fa-2x'></i>
        </div>
      ) : (
        <></>
      )}

      {/* popups 2 */}
      {active1 ? <Pop2 /> : <></>}
      {active1 ? (
        <div onClick={() => setActive1(false)} className='close'>
          <i className='fa fa-times fa-2x'></i>
        </div>
      ) : (
        <></>
      )}

      {/* popups 3 */}
      {active2 ? <Pop3 /> : <></>}
      {active2 ? (
        <div onClick={() => setActive2(false)} className='close'>
          <i className='fa fa-times fa-2x'></i>
        </div>
      ) : (
        <></>
      )}

      {/* popups 4 */}
      {active3 ? <Pop4 /> : <></>}
      {active3 ? (
        <div onClick={() => setActive3(false)} className='close'>
          <i className='fa fa-times fa-2x'></i>
        </div>
      ) : (
        <></>
      )}

      {/* back button */}
      {click ? (
        <div onClick={(e) => handleBack(e)} className='back-button'>
          <i className='fa fa-arrow-left fa-3x'></i>
        </div>
      ) : (
        <div className='back-button'></div>
      )}

      <div className='container'>
        <div
          style={{ transform: `rotateY(${degree}deg)` }}
          className='carousel'
        >
          {/* Item 1 */}
          <div onClick={(e) => handleFloat(e)} className='item a'>
            <div className='floating-button'>
              <div className='floating-button-container'>
                {click1 ? (
                  // About Us
                  <div>
                    <div
                      onClick={(e) => handleChildClick(e)}
                      className='children-button child1'
                    >
                      {/* <i className='fa fa-home fa-2x' /> */}
                    </div>
                    <div
                      onClick={(e) => handleChildClick1(e)}
                      className='children-button child2'
                    >
                      {/* <i className='fa fa-user fa-2x' /> */}
                    </div>
                    {/* <div className='children-button child3'>
                      <i className='fa fa-camera fa-2x' />
                    </div> */}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div className='stage stage3'></div>
          </div>

          {/* Item 2 */}
          <div className='item b'>
            <div className='stage stage2'></div>
          </div>

          {/* Item 3 */}
          <div onClick={(e) => handleFloat3(e)} className='item c'>
            <div className='floating-button'>
              <div className='floating-button-container'>
                {click3 ? (
                  // Event
                  <div>
                    <div
                      onClick={(e) => handleChildClick2(e)}
                      className='children-button item2child1'
                    >
                      {/* <i className='fa fa-home fa-2x' /> */}
                    </div>
                    {/* <div className='children-button child2'>
                      <i className='fa fa-user fa-2x' />
                    </div>
                    <div className='children-button child3'>
                      <i className='fa fa-camera fa-2x' />
                    </div> */}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div className='stage stage1'></div>
          </div>

          {/* Item 4 */}
          <div className='item d'>
            <div className='stage stage2'></div>
          </div>

          {/* Item 5 */}
          {/* <div  className='item e'>
              <div className="stage stage2"></div>
          </div> */}

          {/* Item 6 */}
          <div onClick={(e) => handleFloat2(e)} className='item f'>
            <div className='floating-button'>
              <div className='floating-button-container'>
                {click2 ? (
                  <div>
                    <div
                      onClick={(e) => handleChildClick3(e)}
                      className='children-button item2child1'
                    >
                      {/* <i className='fa fa-home fa-2x' /> */}
                    </div>
                    {/* <div className='children-button child2'>
                      <i className='fa fa-user fa-2x' />
                    </div>
                    <div className='children-button child3'>
                      <i className='fa fa-camera fa-2x' />
                    </div> */}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div className='stage stage1'></div>
          </div>

          {/* Item 7 */}
          <div className='item g'>
            <div className='stage stage3'></div>
          </div>
        </div>
      </div>
      <div className='next' onClick={(e) => handleNext(e)}>
        <i className='fa fa-chevron-right fa-2x'></i>
      </div>
      <div className='prev' onClick={(e) => handlePrev(e)}>
        <i className='fa fa-chevron-left fa-2x'></i>
      </div>
      {/* sponsors */}
      <div className='sponsors'>
        <div className='sponsor-heading'>
          <h1>Sponsors</h1>
        </div>
        <div className='sponsor-content'>
          <div>
            <div className='sponsor-img sponsor1'></div>
          </div>
          <div>
            <div className='sponsor-img sponsor2'></div>
          </div>
          <div>
            <div className='sponsor-img sponsor3'></div>
          </div>
          <div>
            <div className='sponsor-img sponsor4'></div>
          </div>
          <div>
            <div className='sponsor-img sponsor5'></div>
          </div>
          <div>
            <div className='sponsor-img sponsor6'></div>
          </div>
          <div>
            <div className='sponsor-img sponsor7'></div>
          </div>
          <div>
            <div className='sponsor-img sponsor8'></div>
          </div>
          <div>
            <div className='sponsor-img sponsor9'></div>
          </div>
          <div>
            <div className='sponsor-img sponsor10'></div>
          </div>
          <div>
            <div className='sponsor-img sponsor11'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
