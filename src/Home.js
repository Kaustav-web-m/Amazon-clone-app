import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/81UwfObBWFL.jpg"
          alt="amazon_prime_img"
        />

        <div className="home__row">
          <Product
            id="1"
            title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not! Mass Market Paperback – 11 April"
            price={3.5}
            rating={5}
            image="https://static-01.daraz.lk/p/2d272a8a2d3e404c9f9a4eea7a7e6ff4.png"
          />
          <Product
            id="2"
            title="The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life Paperback – 19 January 2017"
            price={3.12}
            rating={4}
            image="https://sergiocaredda.eu/wp-content/uploads/2018/10/bookcover_thesubtleart.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Apple iPhone 13 Pro Max (128GB) - Sierra Blue"
            price={1699.99}
            rating={4}
            image="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_09142021_inline.jpg.large.jpg"
          />
          <Product
            id="4"
            title="Samsung Galaxy S22 Ultra 5G (Phantom White, 12GB, 256GB Storage) + Samsung Galaxy Watch4"
            price={1490.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71CeH-hg+6L._SX679_.jpg"
          />
          <Product
            id="5"
            title="Xiaomi 12 Pro | 5G (Couture Blue, 8GB RAM, 256GB Storage) | Snapdragon 8 Gen 1 | 50MP+50MP+50MP Flagship Cameras(OIS) | 10 bit 2K+ AMOLED Display"
            price={826.2}
            rating={3}
            image="https://fscl01.fonpit.de/devices/49/2149-w320h320.png"
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="LG Ultragear 86.6 cm (34-inch) G-Sync Compatible Curved Ultrawide, 1ms, 144Hz, HDR 10, IPS Gaming Monitor with Height Adjust Stand, HDMI x 2, Display Port - 34GL750-B (Black)"
            price={650.6}
            rating={4}
            image="https://m.media-amazon.com/images/I/71AkwI4wnsL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Apple iPhone 13 Pro Max (128GB) - Sierra Blue"
            price={1699.99}
            rating={4}
            image="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_09142021_inline.jpg.large.jpg"
          />
          <Product
            id="4"
            title="Samsung Galaxy S22 Ultra 5G (Phantom White, 12GB, 256GB Storage) + Samsung Galaxy Watch4"
            price={1490.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71CeH-hg+6L._SX679_.jpg"
          />
          <Product
            id="5"
            title="Xiaomi 12 Pro | 5G (Couture Blue, 8GB RAM, 256GB Storage) | Snapdragon 8 Gen 1 | 50MP+50MP+50MP Flagship Cameras(OIS) | 10 bit 2K+ AMOLED Display"
            price={826.2}
            rating={3}
            image="https://fscl01.fonpit.de/devices/49/2149-w320h320.png"
          />
        </div>
        <div className="home__row">
          <img
            src="https://m.media-amazon.com/images/S/pv-target-images/7d0d637d8e7eb2bc662509a59bd4f8ecdbd15fddb0dc8516ad6cace199c856dc._QL75_.jpg"
            alt="banner"
            className="add"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;



