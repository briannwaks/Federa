import './Product.css'

const Product = () => {
  return (
    <div className='producthomepage'>
      <div className='overlay2'>

        <div className="container-fluid text-center ">
          <div className='py-5'>
            <h1 className='py-5 mx-auto p-2 text-body-emphasis '><b>Our Products</b> </h1>
            <p className="fs-5 fw-bold">Choose through our Variety of Quality Products.</p>
          </div>
          <div className="row">
            <div className='col-md-3 text-light'>
              <img src="/public/perfume1.jpg" alt="" className='rounded' style={{ height: '120px', width: 'auto' }} />
              <p>Ecudorian Perfume</p>
              <p className='fw-bold ' >$35</p>
            </div>

            <div className='col-md-3 text-light '>
              <img src="/public/journal1.jpg" alt="" className='rounded' style={{ height: '120px', width: 'auto' }} />
              <p>Travellers Journal</p>
              <p className='fw-bold '>$20</p>
            </div>

            <div className='col-md-3 text-light '>
              <img src="/public/perfume2.jpg" alt="" className='rounded' style={{ height: '120px', width: 'auto' }} />
              <p>Arabian Perfume</p>
              <p className='fw-bold '>$40</p>
            </div>

            <div className='col-md-3 text-light '>
              <img src="/public/perfume3.jpg" alt="" className='rounded' style={{ height: '120px', width: 'auto' }} />
              <p>Serbian Perfume</p>
              <p className='fw-bold '>$45</p>
            </div>
          </div>

          <div className="row">
            <div className='col-md-3 text-light'>
              <img src="/public/perfume4.jpg" alt="" className='rounded' style={{ height: '120px', width: 'auto' }} />
              <p>Mexican Perfume</p>
              <p className='fw-bold ' >$35</p>
            </div>

            <div className='col-md-3 text-light '>
              <img src="/public/journal2.jpg" alt="" className='rounded' style={{ height: '120px', width: 'auto' }} />
              <p>Wonder Journal</p>
              <p className='fw-bold '>$50</p>
            </div>

            <div className='col-md-3 text-light '>
              <img src="/public/wtrbtlle2.jpg" alt="" className='rounded' style={{ height: '120px', width: 'auto' }} />
              <p>Nomad Tumbler</p>
              <p className='fw-bold '>$60</p>
            </div>

            <div className='col-md-3 text-light '>
              <img src="/public/wtrbttl1.jpg" className='rounded' style={{ height: '120px', width: 'auto' }} />
              <p>Federa Waterbottle</p>
              <p className='fw-bold '>$55</p>
            </div>
          </div>



        </div>
      </div>

    </div>
  );
};

export default Product;
