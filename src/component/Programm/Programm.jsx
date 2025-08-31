import React from 'react'
import './Programm.css'
import programm1 from '../../assets/images/program-1.png'
import programm2 from '../../assets/images/program-2.png'
import programm3 from '../../assets/images/program-3.png'
import programm1icon from '../../assets/images/program-1-icon.png'
import programm2icon from '../../assets/images/program-2-icon.png'
import programm3icon from '../../assets/images/program-3-icon.png'

function Programm() {
  return (
    <section className='programm-section' name='programm'> {/* αυτό το section θα είναι στο 100% και θα κάνω άλλο ένα μικρότερο */}

      <div className='programm'> {/* 2o div για να περιορίσω το περιεχόμενο */}

        <div className='row'> {/* 3o div για να καθορίσω το περιεχόμενο της κεφαλίδας */}

          <h2>Our Programms</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        </div>

        <div className='row image-container'> {/* 4o div για να καθορίσω το περιεχόμενο με τις φωτογραφίες και θα βάλω αλλα 3 div για κάθε εικόνα*/}

          <div className='programm-box'>
            <img src={programm1} alt="" className='photo' />

            <div className='description'> {/* 5o div για να εισάγω την περιγραφή πάνω στην εικόνα*/}
              <img src={programm1icon} alt="" className='icon' />
              <p>description</p>
            </div>
          </div>

          <div className='programm-box'>
            <img src={programm2} alt="" className='photo' />

            <div className='description'> {/* 5o div για να εισάγω την περιγραφή πάνω στην εικόνα*/}
              <img src={programm2icon} alt="" className='icon' />
              <p>description</p>
            </div>
          </div>
          
          <div className='programm-box'>
            <img src={programm3} alt="" className='photo' />

            <div className='description'> {/* 5o div για να εισάγω την περιγραφή πάνω στην εικόνα*/}
              <img src={programm3icon} alt="" className='icon' />
              <p>description</p>
            </div>
          </div>


        </div>     
      </div>

      
    </section>
  )
}

export default Programm
