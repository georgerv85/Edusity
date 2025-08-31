import React,{useState} from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'
import icon from '../../assets/images/menu-icon.png'
import { Link } from 'react-scroll' /* εδώ προσθέτω το plugin για να πατάω πάνω στο menu και να με πηγαίνει στο αντίστοιχο */

function Navbar() {

  const [x,setx] = useState (false)   /* Το useState(false) είναι ένα hook που επιστρέφει ένα array με δύο στοιχεία:
                                      x ➝ Η τρέχουσα τιμή της κατάστασης (αρχικά false).
                                      setx ➝ Μια συνάρτηση που ενημερώνει την τιμή της x.  */

  const [y,sety] = useState (false) /* Το y στην αρχή false και μετά τα 100px πρέπει να γίνει true */

  function changeMenu(){  {/* πατάω το icon και αντιστρέφει κάθε φορά την τιμή του Χ, δηλαδή από false σε true και το αντίθετο  */}
    setx(!x);

  }

  window.addEventListener("scroll",()=>{
    (window.scrollY > 100 ) ? sety(true) : sety(false);
  })


    /* εμφάνιση μπλέ χρώματος οταν κάνω scroll πάνω απο 100px! 3 τρόποι */

  // window.onscroll = function(){ /* χρησιμοποιώ το onscroll με το function για να κάνω μπλέ το nav οταν κάνω scroll */

  //   if(window.scrollY > 100){  /* αν κάνω scroll πάνω απο 100px τοτε η μεταβλητή nav παίρνει την τιμή του id "nav" και θα προσθέσι την class "blue-nav"  */
  //       let nav = document.getElementById("nav");
  //       nav.classList.add("blue-nav")
  //   }else{
  //       nav.classList.remove("blue-nav")
  //   }

  // }

    /* ή διαφορετικά χρησιμοποιώ το παρακάτω */

  // window.addEventListener("scroll",()=>{
  //   let nav = document.getElementById("nav");
  //  (window.scrollY) > 100 ? nav.classList.add("blue-nav") : nav.classList.remove("blue-nav");
  // })

    /* ή διαφορετικά χρησιμοποιώ το παρακάτω με REACT */

  return (

    <nav class={`container ${y ? 'blue-nav' : ' ' }`} id='nav'> {/* !! Βάζω άγκιστρα επειδή γράφω JavaScript και χρησιμοποιώ `...` ${} επειδή γράφω JavaScript ενωμένο με κείμενο !! διατηρώ το container και επιπλέον αν y true τοτε παίρνει το class blue-nav */}

      <img src={logo} alt="" className='logo'/>  {/* Αν το x true τότε δεν έχει class και εμφανίζεται, αν είναι false τότε εφαρμόζεται το hide-menu  */}
      
      <ul className={x ? " " : "hide-menu" }>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programm' smooth={true} offset={-50} duration={500}>Programm</Link></li>
        <li><Link to='about' smooth={true} offset={-50} duration={500}>About Us</Link></li>
        <li><Link to='' smooth={true} offset={-50} duration={500}>Testimonials</Link></li>
        <li><Link to='' smooth={true} offset={-50} duration={500}>Contact Us</Link></li>
      </ul>

      <img src={icon} alt="" className='menu-icon' onClick={changeMenu}/>

    </nav>

  )
}

export default Navbar
