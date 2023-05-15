import React from "react";

export default function Header() {
  return (
      <nav class="navbar navbar-expand-lg navbar-light py-3 " id="mainNav">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#">
            <img
              src={require("../assets/images/logo2New.png")}
              height="90"
              alt="RECYLOW"
            />
          </a>

          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto my-2 my-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/informer">
                  Informer
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/CompaignHome">
                  Supplier
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/collector">
                  Collector
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Recyler">
                  Recyler
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/register">
                  SignIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}