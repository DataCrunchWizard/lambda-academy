import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'

const Navbar = class extends React.Component {

  componentDidMount() {
   
 }
 
 render() {
   return (
  
    <div className="container"  style={{color:'teal'}}>
      <div className="columns">
      <div className="column is-10 is-offset-1">

    <hr/>
      <p >
        <b>LambdaDemy</b> |  Học thực tiễn - Làm thực tế  </p> 
        <p>  Lầu 2, Tòa nhà F Central, 16A Lê Hồng Phong, Phường 12, Quận 10, TP.HCM</p>
      <p>
     <a href="https://fb.me/LambdaDemy">FB @ LambdaDemy</a></p>
     <p>Phone: 0898 698 288</p>
     <p>Email: bonjour@LambdaDemy.com </p>
     </div>
      </div>
    </div>
  
  )}
}

export default Navbar
