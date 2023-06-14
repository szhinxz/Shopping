import { useState,useEffect } from 'react'

function Home() {

    const buttons = document.querySelectorAll('a');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e){

            let x = e.clientX - e.target.offsetLeft
            let y = e.clientY - e.target.offsetTop 

            let ripples = document.createElement('span')
            ripples.style.left = x + 'px'
            ripples.style.top = y + 'px'
            this.appendChild(ripples)

            setTimeout(() => {
                ripples.remove()
            },1000)
        })
    })
  return (
    <>
     <div className="container">
        <div className="row">
           <div className="card-01">
                <div className="imgs-card">
                    <img src="/public/imgs/phonee.png" alt="phone" />
                </div>
                <div className="text-card">
                    <h3>HeadPhone 4k</h3>
                    <p>SK-pd840</p>
                    <a href="#">Shop</a>
                </div>
                </div>
        </div>
        <div className="row">
            <div className="card-02">

            </div>
            <div className="card-02">

            </div>
            <div className="card-02">

            </div>
        </div>
        <div className="row">
            <div className="card-03">

            </div>
            <div className="card-03">

            </div>
            <div className="card-03">

            </div>
            <div className="card-03">

            </div>
        </div>
        <div className="row">
            <div className="card-04">

            </div>
            <div className="card-04">

            </div>
            <div className="card-04">

            </div>
            <div className="card-04">

            </div>
        </div>
        <div className="row">
            <div className="card-05">

            </div>
        </div>
     </div>
    </>
  )
}

export default Home
