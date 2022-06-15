import React from "react";
import "./styles.scss";

export const TopSellers = () => {
  return (
    <section class="sellers">
      <div class="content-title-container flex-container">
        <h6 class="title">Top Sellers</h6>
        <button class="sort">
          <span>Report</span>
          <i class="mdi mdi-chevron-down ms-1"></i>
        </button>
      </div>

      <ul class="sellers-content">
        <li class="sellers-item">
          <div class="sellers-name">
            <div class="sellers-img-container">
              <img
                src="./assets/images/seller.png"
                alt="Selers"
                class="sellers-img"
              />
            </div>
            <div class="sellers-info-container">
              <a href="/" class="sellers-info-link">
                iTest Factory
              </a>
              <p class="sellers-info-name">Oliver Tyler</p>
            </div>
          </div>
          <div class="sellers-info-container">
            <p class="sellers-info-name">Bags and Wallets</p>
          </div>
          <div class="sellers-info-container">
            <p class="sellers-info-value">8547</p>
            <p class="sellers-info-name">Stock</p>
          </div>
          <div class="sellers-info-container">
            <p class="sellers-info-name">$541200</p>
          </div>
          <div class="sellers-info-container">
            <h5 class="sellers-info-percent">32%</h5>
          </div>
          <div class="sellers-info-container">
            <i class="ri-bar-chart-fill text-success fs-16 align-middle ms-2 sellers-info-icon"></i>
          </div>
        </li>
        <li class="sellers-item">
          <div class="sellers-name">
            <div class="sellers-img-container">
              <img
                src="./assets/images/seller.png"
                alt="Selers"
                class="sellers-img"
              />
            </div>
            <div class="sellers-info-container">
              <a href="/" class="sellers-info-link">
                iTest Factory
              </a>
              <p class="sellers-info-name">Oliver Tyler</p>
            </div>
          </div>
          <div class="sellers-info-container">
            <p class="sellers-info-name">Bags and Wallets</p>
          </div>
          <div class="sellers-info-container">
            <p class="sellers-info-value">8547</p>
            <p class="sellers-info-name">Stock</p>
          </div>
          <div class="sellers-info-container">
            <p class="sellers-info-name">$541200</p>
          </div>
          <div class="sellers-info-container">
            <h5 class="sellers-info-percent">32%</h5>
          </div>
          <div class="sellers-info-container">
            <i class="ri-bar-chart-fill text-success fs-16 align-middle ms-2 sellers-info-icon"></i>
          </div>
        </li>
        <li class="sellers-item">
          <div class="sellers-name">
            <div class="sellers-img-container">
              <img
                src="./assets/images/seller.png"
                alt="Selers"
                class="sellers-img"
              />
            </div>
            <div class="sellers-info-container">
              <a href="/" class="sellers-info-link">
                iTest Factory
              </a>
              <p class="sellers-info-name">Oliver Tyler</p>
            </div>
          </div>
          <div class="sellers-info-container">
            <p class="sellers-info-name">Bags and Wallets</p>
          </div>
          <div class="sellers-info-container">
            <p class="sellers-info-value">8547</p>
            <p class="sellers-info-name">Stock</p>
          </div>
          <div class="sellers-info-container">
            <p class="sellers-info-name">$541200</p>
          </div>
          <div class="sellers-info-container">
            <h5 class="sellers-info-percent">32%</h5>
          </div>
          <div class="sellers-info-container">
            <i class="ri-bar-chart-fill text-success fs-16 align-middle ms-2 sellers-info-icon"></i>
          </div>
        </li>
        <li class="sellers-item">
          <div class="sellers-name">
            <div class="sellers-img-container">
              <img
                src="./assets/images/seller.png"
                alt="Selers"
                class="sellers-img"
              />
            </div>
            <div class="sellers-info-container">
              <a href="/" class="sellers-info-link">
                iTest Factory
              </a>
              <p class="sellers-info-name">Oliver Tyler</p>
            </div>
          </div>
          <div class="sellers-info-container">
            <p class="sellers-info-name">Bags and Wallets</p>
          </div>
          <div class="sellers-info-container">
            <p class="sellers-info-value">8547</p>
            <p class="sellers-info-name">Stock</p>
          </div>
          <div class="sellers-info-container">
            <p class="sellers-info-name">$541200</p>
          </div>
          <div class="sellers-info-container">
            <h5 class="sellers-info-percent">32%</h5>
          </div>
          <div class="sellers-info-container">
            <i class="ri-bar-chart-fill text-success fs-16 align-middle ms-2 sellers-info-icon"></i>
          </div>
        </li>
        <li class="sellers-item">
          <div class="sellers-name">
            <div class="sellers-img-container">
              <img
                src="./assets/images/seller.png"
                alt="Selers"
                class="sellers-img"
              />
            </div>
            <div class="sellers-info-container">
              <a href="/" class="sellers-info-link">
                iTest Factory
              </a>
              <p class="sellers-info-name">Oliver Tyler</p>
            </div>
          </div>
          <div class="sellers-info-container">
            <p class="sellers-info-name">Bags and Wallets</p>
          </div>
          <div class="sellers-info-container">
            <p class="sellers-info-value">8547</p>
            <p class="sellers-info-name">Stock</p>
          </div>
          <div class="sellers-info-container">
            <p class="sellers-info-name">$541200</p>
          </div>
          <div class="sellers-info-container">
            <h5 class="sellers-info-percent">32%</h5>
          </div>
          <div class="sellers-info-container">
            <i class="ri-bar-chart-fill text-success fs-16 align-middle ms-2 sellers-info-icon"></i>
          </div>
        </li>
      </ul>
      <div class="pagination">
        <span class="pagination-text">
          Showing <b>5</b> of <b>25</b> Results
        </span>
        <div class="pagination-items">
          <button class="pagination-item">←</button>
          <button class="pagination-item">1</button>
          <button class="pagination-item active">2</button>
          <button class="pagination-item">3</button>
          <button class="pagination-item">→</button>
        </div>
      </div>
    </section>
  );
};
