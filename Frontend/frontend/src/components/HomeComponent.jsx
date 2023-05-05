import React, { Component } from 'react'
import "../App.css"


export default class HomeComponent extends Component {
  render() {
    return (

<header class="masthead">
    <div class="container px-4 px-lg-5 h-100">
        <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-8 align-self-end">
                <h1 class="text-white font-weight-bold">We Have To Selling Our Recyling Products Into This Website!!</h1>
                <hr class="divider" />
            </div>
            <div class="col-lg-8 align-self-baseline">
                <p class="text-white-75 mb-5">Start to purchase our products and you can get contact information the product's manufactures to click the image!!</p>
                <a class="btn btn-primary btn-xl" href="/viewProduct">Get Started to Buy</a>
            </div>
        </div>
    </div>
</header>


    )
  }
}
