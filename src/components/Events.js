// todo: make the floating button

import React, { useState } from "react";
import "./Events.css";

export default function Event() {
  const [degree, setDegree] = useState(0);
  const [autoRotate, setautoRotate] = useState(true);

  // floating-button
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);

  const handleFloat = (e) => {
    e.preventDefault();
    setClick1(!click1);
  };
  const handleFloat2 = (e) => {
    e.preventDefault();
    setClick2(!click2);
  };
  const handleFloat3 = (e) => {
    e.preventDefault();
    setClick3(!click3);
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

  const autoRotation = (e) => {
    // e.preventDefault();
    setDegree(degree - 60);
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
      {/* floating button */}

      <div className='container'>
        <div
          style={{ transform: `rotateY(${degree}deg)` }}
          className='carousel'
        >
          <div onClick={(e) => handleFloat(e)} className='item a'>
            <div className='floating-button'>
              <div className='floating-button-container'>
                {/* <div onClick={(e) => handleFloat(e)} className='parent-button'>
                  {click1 ? (
                    <i className='fa fa-times fa-2x' />
                  ) : (
                    <i className='fa fa-bars fa-2x' />
                  )}
                </div> */}
                {click1 ? (
                  <div>
                    <div className='children-button child1'>
                      <i className='fa fa-home fa-2x' />
                    </div>
                    <div className='children-button child2'>
                      <i className='fa fa-user fa-2x' />
                    </div>
                    <div className='children-button child3'>
                      <i className='fa fa-camera fa-2x' />
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div className='stage stage3'></div>
          </div>
          <div className='item b'>
            <div className='stage stage2'></div>
          </div>
          <div onClick={(e) => handleFloat3(e)} className='item c'>
            <div className='floating-button'>
              <div className='floating-button-container'>
                {/* <div onClick={(e) => handleFloat2(e)} className='parent-button'>
                  {click2 ? (
                    <i className='fa fa-times fa-2x' />
                  ) : (
                    <i className='fa fa-bars fa-2x' />
                  )}
                </div> */}
                {click3 ? (
                  <div>
                    <div className='children-button child1'>
                      <i className='fa fa-home fa-2x' />
                    </div>
                    <div className='children-button child2'>
                      <i className='fa fa-user fa-2x' />
                    </div>
                    <div className='children-button child3'>
                      <i className='fa fa-camera fa-2x' />
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div className='stage stage1'></div>
          </div>
          <div className='item d'>
            <div className='stage stage2'></div>
          </div>
          {/* <div  className='item e'>
              <div className="stage stage2"></div>
          </div> */}
          <div onClick={(e) => handleFloat2(e)} className='item f'>
            <div className='floating-button'>
              <div className='floating-button-container'>
                {/* <div onClick={(e) => handleFloat2(e)} className='parent-button'>
                  {click2 ? (
                    <i className='fa fa-times fa-2x' />
                  ) : (
                    <i className='fa fa-bars fa-2x' />
                  )}
                </div> */}
                {click2 ? (
                  <div>
                    <div className='children-button child1'>
                      <i className='fa fa-home fa-2x' />
                    </div>
                    <div className='children-button child2'>
                      <i className='fa fa-user fa-2x' />
                    </div>
                    <div className='children-button child3'>
                      <i className='fa fa-camera fa-2x' />
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div className='stage stage1'></div>
          </div>
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
