import React, { Component } from 'react'

export default class LoginComponent extends Component {
  render() {
    return (
      <div>

<section class="page-section" id="contact">
  <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-8 col-xl-6 text-center">
              <h2 class="mt-0">LogIn to Enter Our Page!</h2>
              <hr class="divider" />
              <p class="text-muted mb-5">Welcome to come again our System!!!</p>
          </div>
      </div>
      <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
          <div class="col-lg-6">

              <form id="contactForm" data-sb-form-api-token="API_TOKEN">

                  <div class="form-floating mb-3">
                      <input class="form-control" id="name" type="text" placeholder="Enter User name..." data-sb-validations="required" />
                      <label for="name">User Name</label>
                      <div class="invalid-feedback" data-sb-feedback="name:required">User Name is required.</div>
                  </div>

                  <div class="form-floating mb-3">
                    <input class="form-control" id="name" type="password" placeholder="Enter Password.." data-sb-validations="required" />
                    <label for="name">Password</label>
                    <div class="invalid-feedback" data-sb-feedback="name:required">Password is required.</div>
                </div>

                  <div class="d-none" id="submitSuccessMessage">
                      <div class="text-center mb-3">
                          <div class="fw-bolder">Form submission successful!</div>
                          To activate this form, sign up at
                          <br />
                          <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                      </div>
                  </div>

                  <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                  <div class="d-grid"><button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">LOG IN</button></div>
              </form>
          </div>
      </div>
      <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-4 text-center mb-5 mb-lg-0">
              <i class="bi-phone fs-2 mb-3 text-muted"></i>
              <div>+94 (77) 33-92101</div>
          </div>
      </div>
  </div>
</section>
      </div>
    )
  }
}
