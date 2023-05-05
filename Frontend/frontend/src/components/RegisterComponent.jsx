import React, { Component } from "react";

export default class RegisterComponent extends Component {
  render() {
    return (
      <section class="page-section" id="register">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-8 col-xl-6 text-center">
              <h2 class="mt-0">Let's Do It The Register!</h2>
              <hr class="divider" />
              <p class="text-muted mb-5">
                Join With Us!! For Save The Nature!!
              </p>
            </div>
          </div>
          <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
            <div class="col-lg-6">
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    data-sb-validations="required"
                  />
                  <label for="name">User Name</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>

                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    data-sb-validations="required,email"
                  />
                  <label for="email">Email address</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div class="invalid-feedback" data-sb-feedback="email:email">
                    Email is not valid.
                  </div>
                </div>

                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    data-sb-validations="required"
                  />
                  <label for="phone">Contact number</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    A phone number is required.
                  </div>
                </div>

                <div class="form-floating mb-3">
                  <textarea
                    class="form-control"
                    id="password"
                    type="text"
                    placeholder="Enter your password here..."
                    data-sb-validations="required"
                  ></textarea>
                  <label for="password">Password</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="password:required"
                  >
                    A Password is required.
                  </div>
                </div>

                <div class="d-none" id="submitSuccessMessage">
                  <div class="text-center mb-3">
                    <div class="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">
                      https://startbootstrap.com/solution/contact-forms
                    </a>
                  </div>
                </div>

                <div class="d-none" id="submitErrorMessage">
                  <div class="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>
                <div class="d-grid">
                  <a href="/login" class="btn btn-secondary btn-xl">
                    Login
                  </a>
                  <button
                    class="btn btn-primary btn-xl"
                    id="submitButton"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-4 text-center mb-5 mb-lg-0">
              <i class="bi-phone fs-2 mb-3 text-muted"></i>
              <div>+94 (77) 339 2101</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
