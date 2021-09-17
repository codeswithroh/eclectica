import { useState } from "react";
import "./Popup.css";
import { motion } from "framer-motion";
export function Pop1() {
  // this is used to change the content of teacher and student
  const [teacher, setTeacher] = useState(false);
  const [student, setStudent] = useState(false);

  var fadey = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  var fadex = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const handleTeachers = (e) => {
    e.preventDefault();
    setTeacher(!teacher);
    setStudent(false);
  };
  const handleStudents = (e) => {
    e.preventDefault();
    setStudent(!student);
    setTeacher(false);
  };
  return (
    <div className='blur'>
      <div className='popup'>
        <div className='about_us'>
          <div className='about_us_toggle'>
            <div className='teachers' onClick={(e) => handleTeachers(e)}>
              <motion.h2
                initial='hidden'
                transition={{ delay: 0.5 }}
                animate='visible'
                variants={fadex}
                style={{ color: `${teacher ? "orange" : "white"}` }}
              >
                Teachers
              </motion.h2>
            </div>
            <div className='students' onClick={(e) => handleStudents(e)}>
              <motion.h2
                initial='hidden'
                animate='visible'
                variants={fadex}
                transition={{ delay: 0.8 }}
                style={{ color: `${student ? "orange" : "white"}` }}
              >
                Students
              </motion.h2>
            </div>
          </div>
          <div className='about_us_content'>
            <motion.h1
              initial='hidden'
              animate='visible'
              transition={{ delay: 0.5 }}
              variants={fadex}
            >
              About Us
            </motion.h1>
            <motion.p
              initial='hidden'
              animate='visible'
              transition={{ delay: 1 }}
              variants={fadex}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              illo officia ipsam exercitationem fuga aperiam, deserunt in
              delectus mollitia ratione ex eum, voluptas, nisi magnam!
              Explicabo, quod sed? Ab voluptatibus, deleniti odit dolor
              repellendus illo nostrum quae placeat? Asperiores, optio!
            </motion.p>
            {/* imp: our teahcers or students content will go here */}
            {teacher ? (
              <div>
                <motion.h2
                  initial='hidden'
                  animate='visible'
                  exit='hidden'
                  variants={fadey}
                >
                  Teachers
                </motion.h2>
                <motion.p
                  initial='hidden'
                  animate='visible'
                  exit='hidden'
                  transition={{ delay: 0.5 }}
                  variants={fadey}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Iusto illo officia ipsam exercitationem fuga aperiam, deserunt
                  in delectus mollitia ratione ex eum, voluptas, nisi magnam!
                  Explicabo, quod sed? Ab voluptatibus, deleniti odit dolor
                  repellendus illo nostrum quae placeat? Asperiores, optio!
                </motion.p>
              </div>
            ) : (
              <></>
            )}
            {student ? (
              <div>
                <motion.h2
                  initial='hidden'
                  animate='visible'
                  exit='hidden'
                  variants={fadey}
                >
                  Students
                </motion.h2>
                <motion.p
                  initial='hidden'
                  animate='visible'
                  exit='hidden'
                  transition={{ delay: 0.5 }}
                  variants={fadey}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Iusto illo officia ipsam exercitationem fuga aperiam, deserunt
                  in delectus mollitia ratione ex eum, voluptas, nisi magnam!
                  Explicabo, quod sed? Ab voluptatibus, deleniti odit dolor
                  repellendus illo nostrum quae placeat? Asperiores, optio!
                </motion.p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Pop2() {
  return (
    <div className='blur'>
      <div className='popup'>
        <div className='popup-row'>
          <div className='popup-col'>
            <div>
              <img src='https://picsum.photos/100' alt='decoration'></img>
            </div>
            <div>
              <h2>Club1</h2>
              <button>Click Here to view</button>
            </div>
          </div>
          <div className='popup-col'>
            <div>
              <img src='https://picsum.photos/100' alt='decoration'></img>
            </div>
            <div>
              <h2>Club2</h2>
              <button>Click Here to view</button>
            </div>
          </div>
        </div>
        <div className='popup-row'>
          <div className='popup-col'>
            <div>
              <img src='https://picsum.photos/100' alt='decoration'></img>
            </div>
            <div>
              <h2>Club3</h2>
              <button>Click Here to view</button>
            </div>
          </div>
          <div className='popup-col'>
            <div>
              <img src='https://picsum.photos/100' alt='decoration'></img>
            </div>
            <div>
              <h2>Club4</h2>
              <button>Click Here to view</button>
            </div>
          </div>
        </div>
        <div className='popup-row'>
          <div className='popup-col'>
            <div>
              <img src='https://picsum.photos/100' alt='decoration'></img>
            </div>
            <div>
              <h2>Club5</h2>
              <button>Click Here to view</button>
            </div>
          </div>
          <div className='popup-col'>
            <div>
              <img src='https://picsum.photos/100' alt='decoration'></img>
            </div>
            <div>
              <h2>Club6</h2>
              <button>Click Here to view</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Pop3() {
  return (
    <div className='blur'>
      <div className='popup'>
        <div className='popup-row'>
          <div className='popup-col'>
            <div>
              <img src='https://picsum.photos/80' alt='decoration'></img>
            </div>
            <div>
              <h2>Event1</h2>
              <button>Click Here to view</button>
            </div>
          </div>
          <div className='popup-col'>
            <div>
              <img src='https://picsum.photos/80' alt='decoration'></img>
            </div>
            <div>
              <h2>Event2</h2>
              <button>Click Here to view</button>
            </div>
          </div>
          <div className='popup-col'>
            <div>
              <img src='https://picsum.photos/80' alt='decoration'></img>
            </div>
            <div>
              <h2>Event3</h2>
              <button>Click Here to view</button>
            </div>
          </div>
        </div>
        <div className='popup-row'>
          <div className='popup-col'>
            <div>
              <img src='https://picsum.photos/80' alt='decoration'></img>
            </div>
            <div>
              <h2>Event4</h2>
              <button>Click Here to view</button>
            </div>
          </div>
        </div>
        <div className='popup-row'>
          <div className='popup-col'>
            <div>
              <img src='https://picsum.photos/80' alt='decoration'></img>
            </div>
            <div>
              <h2>Event5</h2>
              <button>Click Here to view</button>
            </div>
          </div>
          <div className='popup-col'>
            <div>
              <img src='https://picsum.photos/80' alt='decoration'></img>
            </div>
            <div>
              <h2>Event6</h2>
              <button>Click Here to view</button>
            </div>
          </div>
          <div className='popup-col'>
            <div>
              <img src='https://picsum.photos/80' alt='decoration'></img>
            </div>
            <div>
              <h2>Event7</h2>
              <button>Click Here to view</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Pop4() {
  return (
    <div className='blur'>
      <div className='popup'>
        <div className='popup-row'>
          <div>
            <i className='fa fa-envelope fa-3x'></i>
          </div>
          <div className='mail'>
            <a href='mailto:yourmail@gmail.com'>
              <h1>yourmail@gmail.com</h1>
            </a>
          </div>
        </div>
        {/* <div className='popup-row'>
          <div className='social'></div>
          <div className='social'></div>
          <div className='social'></div>
        </div> */}
      </div>
    </div>
  );
}
