import React from "react";

const Footer = () => {
  return (
    <div className="bg-neutral-400">
      <footer className="  dark:bg-neutral-600 lg:text-left">
        <div class="container p-2">
          <div class="grid md:grid-cols-3 lg:grid-cols-6 justify-items-center border-b border-black">
            <div class="mb-6">
              <h5 class="mb-2.5 uppercase text-neutral-800 dark:text-neutral-200">
                NEWSLETTER
              </h5>

              <ul class="mb-0 list-none">
                <li>
                  <a href="#!" class="text-neutral-800 dark:text-neutral-200">
                    Subscribe to our newsletter
                  </a>
                </li>
              </ul>
            </div>

            <div class="mb-6 border-l border-black pl-2">
              <h5 class="mb-2.5 uppercase text-neutral-800 dark:text-neutral-200">
                CLIENT SERVICES
              </h5>

              <ul class="mb-0 list-none">
                <li>
                  <a href="#!" class="text-neutral-800 dark:text-neutral-200">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-neutral-800 dark:text-neutral-200">
                    Track Order
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-neutral-800 dark:text-neutral-200">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-neutral-800 dark:text-neutral-200">
                    Delivery
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-neutral-800 dark:text-neutral-200">
                    Payment
                  </a>
                </li>
              </ul>
            </div>

            <div class="mb-6 border-l border-black pl-2">
              <h5 class="mb-2.5 uppercase text-neutral-800 dark:text-neutral-200">
                THE COMPANY
              </h5>

              <ul class="mb-0 list-none">
                <li>
                  <a href="#!" class="text-neutral-800 dark:text-neutral-200">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-neutral-800 dark:text-neutral-200">
                    Careers - Design
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-neutral-800 dark:text-neutral-200">
                    Legal
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-neutral-800 dark:text-neutral-200">
                    Privacy Policy and Cookies
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-neutral-800 dark:text-neutral-200">
                    Cookies Settings
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-neutral-800 dark:text-neutral-200">
                    World Food Programme
                  </a>
                </li>
              </ul>
            </div>

            <div class="mb-6 border-l border-black pl-2">
              <h5 class="mb-2.5 uppercase text-neutral-800 dark:text-neutral-200">
                CONNECT
              </h5>

              <ul class="mb-0 list-none">
                <li>
                  <a href="#!" class="text-neutral-800 dark:text-neutral-200">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-neutral-800 dark:text-neutral-200">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-neutral-800 dark:text-neutral-200">
                    Tiktok
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-neutral-800 dark:text-neutral-200">
                    Spotify
                  </a>
                </li>
              </ul>
            </div>
            <div class="mb-6 border-l border-black pl-2">
              <h5 class="mb-2.5 uppercase text-neutral-800 dark:text-neutral-200">
                BOUTIQUES
              </h5>

              <ul class="mb-0 list-none">
                <li>
                  <a href="#!" class="text-neutral-800 dark:text-neutral-200">
                    Find a store nearby
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-neutral-800 dark:text-neutral-200">
                    Country / Region: International Version
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-neutral-800 dark:text-neutral-200">
                    Language: English
                  </a>
                </li>
              </ul>
            </div>
            <div class="mb-6 border-l border-black pl-2">
              <h5 class="mb-2.5 uppercase text-neutral-800 dark:text-neutral-200">
                Contact US
              </h5>

              <ul class="mb-0 list-none">
                <li>
                  <a href="#!" class="text-neutral-800 dark:text-neutral-200">
                    CALL US AT <br />
                    +44 20 33 18 60 32
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-neutral-800 dark:text-neutral-200">
                    SEND US AN EMAIL
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class=" p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
          © 2023
          <a
            className="text-neutral-80 bg-neutral-400 ml-2"
            href="https://tw-elements.com/"
          >
            Balenciaga
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
